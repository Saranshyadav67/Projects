// Import the axios library for making HTTP requests
import axios from 'axios'

// Create a configured axios instance
// This allows us to define default settings that apply to all requests made with 'service'
const service = axios.create({
  // Set the base URL for all API calls.
  // It checks for an environment variable first (VITE_API_BASE_URL), 
  // and falls back to localhost:5001 if the variable is not defined.
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:5001',
  
  // Set the request timeout to 300,000 milliseconds (5 minutes).
  // This is set high because complex backend tasks like 'ontology generation' 
  // can take a long time to process before returning a response.
  timeout: 300000, 
  
  // Define default headers to be sent with every request.
  headers: {
    'Content-Type': 'application/json' // Tells the server the request body is JSON format.
  }
})

// Request Interceptor
// This function intercepts every request BEFORE it is sent to the server.
service.interceptors.request.use(
  config => {
    // 'config' contains details like URL, method, headers, and data.
    // You can modify the config here (e.g., adding authentication tokens to headers).
    
    return config // Return the config to proceed with the request.
  },
  error => {
    // Handle errors that occur during the request setup (rare).
    console.error('Request error:', error) // Log the error to the console.
    return Promise.reject(error) // Reject the promise so the caller can catch the error.
  }
)

// Response Interceptor
// This function intercepts every response BEFORE it is passed to the calling code.
service.interceptors.response.use(
  response => {
    // 'response' is the full HTTP response object. We usually only care about 'response.data'.
    const res = response.data
    
    // Custom logic: Check if the backend explicitly returned a failure status in the JSON body.
    // Even if the HTTP status is 200 OK, the application logic might define an error.
    if (!res.success && res.success !== undefined) {
      console.error('API Error:', res.error || res.message || 'Unknown error') // Log the specific API error.
      return Promise.reject(new Error(res.error || res.message || 'Error')) // Reject the promise to trigger the catch block.
    }
    
    // If successful, return the data payload.
    return res
  },
  error => {
    // Handle HTTP errors (status codes 4xx, 5xx) or network failures.
    console.error('Response error:', error)
    
    // Specific error handling: Request Timeout
    // Checks if the error code matches 'ECONNABORTED' (standard Axios timeout code).
    if (error.code === 'ECONNABORTED' && error.message.includes('timeout')) {
      console.error('Request timeout')
    }
    
    // Specific error handling: Network Error
    // Occurs if the server is unreachable or the user has no internet connection.
    if (error.message === 'Network Error') {
      console.error('Network error - please check your connection')
    }
    
    // Reject the promise so the calling function can handle the failure.
    return Promise.reject(error)
  }
)

// Request function with Retry mechanism
// This utility function wraps an API call and automatically retries it if it fails.
export const requestWithRetry = async (requestFn, maxRetries = 3, delay = 1000) => {
  // Loop through attempts up to 'maxRetries'
  for (let i = 0; i < maxRetries; i++) {
    try {
      // Try to execute the API request function passed as an argument.
      return await requestFn()
    } catch (error) {
      // If we have reached the maximum number of retries, throw the error immediately.
      if (i === maxRetries - 1) throw error
      
      // Log a warning that the request failed and a retry is happening.
      console.warn(`Request failed, retrying (${i + 1}/${maxRetries})...`)
      
      // Wait before the next retry.
      // 'Math.pow(2, i)' implements "Exponential Backoff" (delay increases each time: 1s, 2s, 4s...).
      await new Promise(resolve => setTimeout(resolve, delay * Math.pow(2, i)))
    }
  }
}

// Export the configured axios instance as the default export.
// Other files can import this to make API calls directly.
export default service
