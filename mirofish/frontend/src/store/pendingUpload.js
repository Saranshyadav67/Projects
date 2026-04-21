/**
 * Temporarily store files and requirements pending upload.
 * Used for immediate redirect after clicking "Start Engine" on the home page,
 * with API calls made on the Process page.
 */

// Import the 'reactive' function from Vue.js
// This creates a reactive proxy object that allows components to track changes to the state automatically.
import { reactive } from 'vue'

// Create a reactive state object to act as a centralized temporary store
// This holds the data in memory between the Home page redirect and the Process page initialization
const state = reactive({
  // Array to hold the File objects selected by the user; initially empty
  files: [],
  // String to hold the user's simulation requirement text; initially empty
  simulationRequirement: '',
  // Boolean flag to indicate if there is data currently waiting to be uploaded/processed
  isPending: false
})

/**
 * Updates the state with new files and requirement text.
 * This is typically called on the Home page just before navigating away.
 * 
 * @param {Array} files - The list of files selected by the user.
 * @param {string} requirement - The text description of the simulation requirements.
 */
export function setPendingUpload(files, requirement) {
  // Store the selected files in the state
  state.files = files
  // Store the requirement text in the state
  state.simulationRequirement = requirement
  // Set the flag to true to indicate there is a pending upload operation
  state.isPending = true
}

/**
 * Retrieves the current state of the pending upload.
 * This is typically called on the Process page to check if data was passed from the Home page.
 * 
 * @returns {Object} An object containing the current files, simulationRequirement, and isPending status.
 */
export function getPendingUpload() {
  return {
    // Return the current files array
    files: state.files,
    // Return the current requirement string
    simulationRequirement: state.simulationRequirement,
    // Return the current pending status flag
    isPending: state.isPending
  }
}

/**
 * Resets the store to its initial empty state.
 * This should be called after the data has been successfully sent to the API
 * or if the user cancels the operation, to prevent data from persisting incorrectly.
 */
export function clearPendingUpload() {
  // Clear the files array
  state.files = []
  // Clear the requirement text
  state.simulationRequirement = ''
  // Reset the pending flag to false
  state.isPending = false
}

// Export the reactive state object as the default export
// This allows components to import 'state' directly to watch or bind to its properties
export default state