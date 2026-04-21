import service, { requestWithRetry } from './index'

/**
 * Create simulation
 * @param {Object} data - { project_id, graph_id?, enable_twitter?, enable_reddit? }
 */
export const createSimulation = (data) => {
  // Uses the retry wrapper to ensure the simulation creation request succeeds even if the network flickers.
  // Retries up to 3 times with a 1-second initial delay.
  return requestWithRetry(() => service.post('/api/simulation/create', data), 3, 1000)
}

/**
 * Prepare simulation environment (async task)
 * @param {Object} data - { simulation_id, entity_types?, use_llm_for_profiles?, parallel_profile_count?, force_regenerate? }
 */
export const prepareSimulation = (data) => {
  // Wraps the preparation request in retry logic; this is a critical initialization step.
  return requestWithRetry(() => service.post('/api/simulation/prepare', data), 3, 1000)
}

/**
 * Query preparation task progress
 * @param {Object} data - { task_id?, simulation_id? }
 */
export const getPrepareStatus = (data) => {
  // Sends a POST request to check the status of the asynchronous preparation task.
  // Does not use retry, as this is likely polled frequently by the UI.
  return service.post('/api/simulation/prepare/status', data)
}

/**
 * Get simulation status
 * @param {string} simulationId
 */
export const getSimulation = (simulationId) => {
  // Retrieves the main status object for a specific simulation via HTTP GET.
  return service.get(`/api/simulation/${simulationId}`)
}

/**
 * Get agent profiles for a simulation
 * @param {string} simulationId
 * @param {string} platform - 'reddit' | 'twitter'
 */
export const getSimulationProfiles = (simulationId, platform = 'reddit') => {
  // Fetches static agent profiles. 
  // The platform parameter defaults to 'reddit' if not provided by the caller.
  return service.get(`/api/simulation/${simulationId}/profiles`, { params: { platform } })
}

/**
 * Get agent profiles being generated in real time
 * @param {string} simulationId
 * @param {string} platform - 'reddit' | 'twitter'
 */
export const getSimulationProfilesRealtime = (simulationId, platform = 'reddit') => {
  // Fetches agent data while it is still being generated, useful for live UI updates.
  return service.get(`/api/simulation/${simulationId}/profiles/realtime`, { params: { platform } })
}

/**
 * Get simulation configuration
 * @param {string} simulationId
 */
export const getSimulationConfig = (simulationId) => {
  // Retrieves the static configuration settings for the simulation.
  return service.get(`/api/simulation/${simulationId}/config`)
}

/**
 * Get simulation configuration being generated in real time
 * @param {string} simulationId
 * @returns {Promise} Returns configuration info including metadata and config content
 */
export const getSimulationConfigRealtime = (simulationId) => {
  // Retrieves configuration data dynamically as it is constructed.
  return service.get(`/api/simulation/${simulationId}/config/realtime`)
}

/**
 * List all simulations
 * @param {string} projectId - Optional, filter by project ID
 */
export const listSimulations = (projectId) => {
  // Constructs query parameters conditionally.
  // Only adds 'project_id' to the params object if a projectId is provided.
  const params = projectId ? { project_id: projectId } : {}
  return service.get('/api/simulation/list', { params })
}

/**
 * Start simulation
 * @param {Object} data - { simulation_id, platform?, max_rounds?, enable_graph_memory_update? }
 */
export const startSimulation = (data) => {
  // Initiates the simulation run.
  // Uses retry logic because starting the engine is a critical operation.
  return requestWithRetry(() => service.post('/api/simulation/start', data), 3, 1000)
}

/**
 * Stop simulation
 * @param {Object} data - { simulation_id }
 */
export const stopSimulation = (data) => {
  // Sends a stop signal to the backend to halt the running simulation.
  return service.post('/api/simulation/stop', data)
}

/**
 * Get real-time simulation run status
 * @param {string} simulationId
 */
export const getRunStatus = (simulationId) => {
  // Simple GET request to poll the current operational status (e.g., running, stopped).
  return service.get(`/api/simulation/${simulationId}/run-status`)
}

/**
 * Get detailed simulation run status (including recent actions)
 * @param {string} simulationId
 */
export const getRunStatusDetail = (simulationId) => {
  // Fetches a granular status report, likely including recent agent actions for debugging.
  return service.get(`/api/simulation/${simulationId}/run-status/detail`)
}

/**
 * Get posts from a simulation
 * @param {string} simulationId
 * @param {string} platform - 'reddit' | 'twitter'
 * @param {number} limit - Number of results to return
 * @param {number} offset - Offset
 */
export const getSimulationPosts = (simulationId, platform = 'reddit', limit = 50, offset = 0) => {
  // Implements pagination using 'limit' and 'offset' to handle large volumes of posts.
  return service.get(`/api/simulation/${simulationId}/posts`, {
    params: { platform, limit, offset }
  })
}

/**
 * Get simulation timeline (summarized by round)
 * @param {string} simulationId
 * @param {number} startRound - Starting round
 * @param {number} endRound - Ending round
 */
export const getSimulationTimeline = (simulationId, startRound = 0, endRound = null) => {
  // Builds params object for the timeline query.
  const params = { start_round: startRound }
  // Conditionally adds 'end_round' only if a non-null value is passed.
  if (endRound !== null) {
    params.end_round = endRound
  }
  return service.get(`/api/simulation/${simulationId}/timeline`, { params })
}

/**
 * Get agent statistics
 * @param {string} simulationId
 */
export const getAgentStats = (simulationId) => {
  // Retrieves aggregate statistical data about the agents in the simulation.
  return service.get(`/api/simulation/${simulationId}/agent-stats`)
}

/**
 * Get simulation action history
 * @param {string} simulationId
 * @param {Object} params - { limit, offset, platform, agent_id, round_num }
 */
export const getSimulationActions = (simulationId, params = {}) => {
  // Fetches the action log. Accepts flexible filtering parameters (agent_id, round_num, etc.).
  return service.get(`/api/simulation/${simulationId}/actions`, { params })
}

/**
 * Close simulation environment (graceful shutdown)
 * @param {Object} data - { simulation_id, timeout? }
 */
export const closeSimulationEnv = (data) => {
  // Requests a graceful shutdown of the backend environment, with an optional timeout.
  return service.post('/api/simulation/close-env', data)
}

/**
 * Get simulation environment status
 * @param {Object} data - { simulation_id }
 */
export const getEnvStatus = (data) => {
  // Checks the health or availability of the simulation environment resources.
  return service.post('/api/simulation/env-status', data)
}

/**
 * Batch interview agents
 * @param {Object} data - { simulation_id, interviews: [{ agent_id, prompt }] }
 */
export const interviewAgents = (data) => {
  // Sends multiple interview prompts to agents in a single batch request.
  // Uses retry logic to ensure these critical user interactions are processed.
  return requestWithRetry(() => service.post('/api/simulation/interview/batch', data), 3, 1000)
}

/**
 * Get historical simulation list (with project details)
 * Used for displaying history on the home page
 * @param {number} limit - Result count limit
 */
export const getSimulationHistory = (limit = 20) => {
  // Fetches a limited list of past simulations for the history view dashboard.
  return service.get('/api/simulation/history', { params: { limit } })
}