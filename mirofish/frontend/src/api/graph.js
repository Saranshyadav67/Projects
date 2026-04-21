// Import the core axios/service instance and the retry wrapper function from the index file
import service, { requestWithRetry } from './index'

/**
 * Generate ontology (upload documents and simulation requirements)
 * This function handles the initial step of uploading user files and requirements to the backend.
 * @param {Object} formData - The form data object containing:
 *        - files: The documents to upload
 *        - simulation_requirement: The user's prediction requirements
 *        - project_name: The name of the project
 * @returns {Promise} - Returns a Promise that resolves with the server response
 */
export function generateOntology(formData) {
  // Wrap the API call in 'requestWithRetry' to automatically retry the request if it fails
  return requestWithRetry(() => 
    service({
      url: '/api/graph/ontology/generate', // The backend API endpoint for generating ontology
      method: 'post',                      // HTTP POST method used for sending data
      data: formData,                      // The payload containing the form data (files and text)
      headers: {
        // Set the Content-Type to multipart/form-data, which is required for uploading files
        'Content-Type': 'multipart/form-data'
      }
    })
  )
}

/**
 * Build graph
 * Triggers the backend process to construct the knowledge graph based on the ontology.
 * @param {Object} data - The configuration object containing:
 *        - project_id: The ID of the current project
 *        - graph_name: The name for the new graph
 * @returns {Promise} - Returns a Promise that resolves with the build task details
 */
export function buildGraph(data) {
  // Wrap the API call in 'requestWithRetry' for resilience against network errors
  return requestWithRetry(() =>
    service({
      url: '/api/graph/build', // The backend API endpoint for building the graph
      method: 'post',          // HTTP POST method
      data                     // The payload containing project_id and graph_name
    })
  )
}

/**
 * Query task status
 * Checks the current status of a long-running background task (like graph building).
 * Note: This uses 'service' directly, not 'requestWithRetry', typically because status checks are frequent and shouldn't retry automatically on failure.
 * @param {String} taskId - The unique identifier of the task to query
 * @returns {Promise} - Returns a Promise that resolves with the task status object
 */
export function getTaskStatus(taskId) {
  // Make a direct GET request using the service instance
  return service({
    url: `/api/graph/task/${taskId}`, // Dynamic URL with the specific taskId injected
    method: 'get'                     // HTTP GET method used for retrieving data
  })
}

/**
 * Get graph data
 * Retrieves the structural data of a specific knowledge graph for visualization.
 * @param {String} graphId - The unique identifier of the graph to retrieve
 * @returns {Promise} - Returns a Promise that resolves with the graph data (nodes and edges)
 */
export function getGraphData(graphId) {
  // Make a direct GET request without retry wrapper
  return service({
    url: `/api/graph/data/${graphId}`, // Dynamic URL with the specific graphId injected
    method: 'get'                      // HTTP GET method
  })
}

/**
 * Get project information
 * Retrieves metadata and details about a specific project.
 * @param {String} projectId - The unique identifier of the project
 * @returns {Promise} - Returns a Promise that resolves with the project details
 */
export function getProject(projectId) {
  // Make a direct GET request to fetch project details
  return service({
    url: `/api/graph/project/${projectId}`, // Dynamic URL with the specific projectId injected
    method: 'get'                           // HTTP GET method
  })
}