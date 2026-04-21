<template>
  <!-- Root wrapper div for the entire process/simulation view -->
  <div class="main-view">

    <!-- ===================== APP HEADER ===================== -->
    <!-- Sticky top bar containing the brand logo, view mode switcher, and status info -->
    <header class="app-header">

      <!-- LEFT: Brand logo — clicking it navigates back to the home page -->
      <div class="header-left">
        <!-- @click calls router.push('/') to navigate programmatically to the root route -->
        <div class="brand" @click="router.push('/')">MIROFISH</div>
      </div>

      <!-- CENTER: View mode toggle buttons (Graph / Split / Workbench) -->
      <div class="header-center">
        <div class="view-switcher">
          <!--
            v-for iterates over the three view mode strings.
            :key="mode" is required by Vue to track each button uniquely for efficient DOM updates.
            :class adds the 'active' CSS class only when viewMode matches this button's mode.
            @click sets viewMode to the clicked mode, which triggers the computed panel styles.
          -->
          <button
            v-for="mode in ['graph', 'split', 'workbench']"
            :key="mode"
            class="switch-btn"
            :class="{ active: viewMode === mode }"
            @click="viewMode = mode"
          >
            <!--
              Inline object literal maps each mode key to its display label.
              Bracket notation [mode] looks up the label for the current iteration's mode.
              e.g. when mode === 'graph', this renders "Graph"
            -->
            {{ { graph: 'Graph', split: 'Split', workbench: 'Workbench' }[mode] }}
          </button>
        </div>
      </div>

      <!-- RIGHT: Workflow step counter and live status indicator -->
      <div class="header-right">

        <!-- Shows "Step X/5" and the name of the current step -->
        <div class="workflow-step">
          <!-- currentStep is a reactive ref; interpolated directly in the template -->
          <span class="step-num">Step {{ currentStep }}/5</span>
          <!--
            stepNames is a plain array of 5 step name strings.
            currentStep - 1 converts the 1-based step number to a 0-based array index.
          -->
          <span class="step-name">{{ stepNames[currentStep - 1] }}</span>
        </div>

        <!-- Thin vertical divider line between step info and status -->
        <div class="step-divider"></div>

        <!--
          Status pill — its CSS class changes dynamically based on computed statusClass.
          Possible classes: 'processing', 'completed', 'error'
          Each class changes the dot color and may add a pulse animation.
        -->
        <span class="status-indicator" :class="statusClass">
          <!-- Colored dot; its appearance is controlled by the parent's dynamic class -->
          <span class="dot"></span>
          <!-- statusText is a computed string e.g. "Initializing", "Building Graph", "Ready" -->
          {{ statusText }}
        </span>

      </div>
    </header>
    <!-- ============================================================== -->


    <!-- ===================== MAIN CONTENT AREA ===================== -->
    <!-- Flex row containing the left graph panel and right step panel side by side -->
    <main class="content-area">

      <!-- -------- LEFT PANEL: Knowledge Graph Visualization -------- -->
      <!--
        :style binds the computed leftPanelStyle object, which sets width/opacity/transform
        dynamically based on the current viewMode (graph/split/workbench).
        This creates smooth CSS transitions when switching between modes.
      -->
      <div class="panel-wrapper left" :style="leftPanelStyle">
        <!--
          GraphPanel is a child component responsible for rendering the knowledge graph.
          Props passed down:
            :graphData    — the node/edge data object fetched from the API
            :loading      — boolean; shows a loading spinner inside the component
            :currentPhase — integer (-1 to 2) indicating which pipeline phase is active
          Events listened to (emitted by GraphPanel):
            @refresh          — user triggered a manual graph reload; calls refreshGraph()
            @toggle-maximize  — user clicked maximize; calls toggleMaximize('graph')
        -->
        <GraphPanel
          :graphData="graphData"
          :loading="graphLoading"
          :currentPhase="currentPhase"
          @refresh="refreshGraph"
          @toggle-maximize="toggleMaximize('graph')"
        />
      </div>

      <!-- -------- RIGHT PANEL: Step-specific UI Components -------- -->
      <!--
        :style binds rightPanelStyle for the same animated width/opacity/transform transitions.
      -->
      <div class="panel-wrapper right" :style="rightPanelStyle">

        <!--
          Step 1 Component: Graph Construction UI.
          v-if renders this component ONLY when currentStep === 1.
          When v-if is false the component is completely unmounted from the DOM.

          Props:
            :currentPhase      — which sub-phase of graph building is active
            :projectData       — the full project metadata object from the API
            :ontologyProgress  — object with a 'message' string for the ontology upload step
            :buildProgress     — object with { progress: Number, message: String } for the build bar
            :graphData         — current graph node/edge data
            :systemLogs        — array of { time, msg } log entries displayed in the log panel
          Events:
            @next-step         — user confirmed step 1 is done; calls handleNextStep()
        -->
        <Step1GraphBuild
          v-if="currentStep === 1"
          :currentPhase="currentPhase"
          :projectData="projectData"
          :ontologyProgress="ontologyProgress"
          :buildProgress="buildProgress"
          :graphData="graphData"
          :systemLogs="systemLogs"
          @next-step="handleNextStep"
        />

        <!--
          Step 2 Component: Environment Setup UI.
          v-else-if renders ONLY when currentStep === 2 (and step 1's v-if is false).

          Props:
            :projectData  — full project metadata
            :graphData    — current graph node/edge data
            :systemLogs   — shared log array
          Events:
            @go-back      — user clicked back; calls handleGoBack()
            @next-step    — user confirmed step 2; calls handleNextStep(params)
            @add-log      — child wants to write a log entry; calls addLog(msg)
        -->
        <Step2EnvSetup
          v-else-if="currentStep === 2"
          :projectData="projectData"
          :graphData="graphData"
          :systemLogs="systemLogs"
          @go-back="handleGoBack"
          @next-step="handleNextStep"
          @add-log="addLog"
        />

      </div>
      <!-- END right panel-wrapper -->

    </main>
    <!-- ============================================================== -->

  </div>
  <!-- END main-view -->
</template>


<!-- ================================================================
  SCRIPT SECTION
  Vue 3 Composition API with <script setup>.
  All imports, reactive state, computed properties, and functions
  defined here are automatically available in the template.
================================================================ -->
<script setup>
// ref()         — wraps a primitive value in a reactive container; read/write via .value
// computed()    — creates a derived reactive value that auto-updates when dependencies change
// onMounted()   — lifecycle hook: runs after the component's DOM is fully rendered
// onUnmounted() — lifecycle hook: runs just before the component is destroyed (used for cleanup)
// nextTick()    — returns a Promise that resolves after Vue has finished updating the DOM
import { ref, computed, onMounted, onUnmounted, nextTick } from 'vue'

// useRoute()  — returns the current route object (gives access to params, query, etc.)
// useRouter() — returns the router instance for programmatic navigation
import { useRoute, useRouter } from 'vue-router'

// Child component imports — each is a self-contained Vue Single File Component
import GraphPanel from '../components/GraphPanel.vue'
import Step1GraphBuild from '../components/Step1GraphBuild.vue'
import Step2EnvSetup from '../components/Step2EnvSetup.vue'

// API function imports — thin wrappers around fetch/axios calls to the backend
// generateOntology — POST files + prompt → creates a project and runs ontology extraction
// getProject       — GET project metadata by project ID
// buildGraph       — POST project ID → kicks off background graph construction task
// getTaskStatus    — GET polling endpoint for a background task's progress/status
// getGraphData     — GET the full node/edge graph data for a completed graph
import { generateOntology, getProject, buildGraph, getTaskStatus, getGraphData } from '../api/graph'

// Store helpers for managing temporary upload state across navigation
// getPendingUpload  — returns { isPending, files, simulationRequirement } from in-memory store
// clearPendingUpload — resets the pending upload store after files have been submitted
import { getPendingUpload, clearPendingUpload } from '../store/pendingUpload'

// Get the current route object — used to read the projectId URL param
const route = useRoute()

// Get the router instance — used to navigate programmatically (push/replace)
const router = useRouter()


// ----------------------------------------------------------------
// LAYOUT STATE
// ----------------------------------------------------------------

// viewMode controls which panels are visible and their widths.
// Possible values: 'graph' (only left), 'split' (both 50/50), 'workbench' (only right).
// Defaults to 'split' so both panels are shown on initial load.
const viewMode = ref('split')


// ----------------------------------------------------------------
// STEP STATE
// ----------------------------------------------------------------

// currentStep tracks which of the 5 pipeline steps the user is on (1-indexed).
// Step 1 = Graph Build, Step 2 = Environment Setup, etc.
const currentStep = ref(1)

// Plain array of step display names (0-indexed).
// Used to look up the name for the current step: stepNames[currentStep - 1]
const stepNames = ['Graph Build', 'Environment Setup', 'Start Simulation', 'Report Generation', 'Deep Interaction']


// ----------------------------------------------------------------
// DATA STATE
// ----------------------------------------------------------------

// currentProjectId holds the project identifier from the URL param.
// Initialized from route.params.projectId which could be 'new' or an existing ID string.
const currentProjectId = ref(route.params.projectId)

// loading is true during any major async operation (project init, new project creation).
// Used to show loading states in child components.
const loading = ref(false)

// graphLoading is specifically true while the graph data JSON is being fetched.
// Separate from loading so the graph panel can show its own spinner independently.
const graphLoading = ref(false)

// error stores a human-readable error message string.
// An empty string means no error; any non-empty string triggers error UI/logs.
const error = ref('')

// projectData holds the full project metadata object returned by the API
// (e.g. project_id, status, graph_id, ontology, etc.).
const projectData = ref(null)

// graphData holds the graph visualization data returned by getGraphData()
// (e.g. { nodes: [...], edges: [...], node_count, edge_count }).
const graphData = ref(null)

// currentPhase tracks which sub-phase of the graph pipeline is active:
//   -1 = Upload/pre-init, 0 = Ontology generation, 1 = Graph building, 2 = Complete
const currentPhase = ref(-1)

// ontologyProgress holds status info during the ontology step, e.g. { message: '...' }
// Passed as a prop to Step1GraphBuild for display. Set to null when step completes.
const ontologyProgress = ref(null)

// buildProgress holds progress info during the graph build task, e.g. { progress: 60, message: '...' }
// Passed as a prop to Step1GraphBuild to update a progress bar.
const buildProgress = ref(null)

// systemLogs is an array of log entry objects: { time: String, msg: String }
// Acts as a shared append-only log buffer passed to both step components.
const systemLogs = ref([])


// ----------------------------------------------------------------
// POLLING TIMERS
// ----------------------------------------------------------------

// pollTimer stores the interval ID for the task-status polling loop.
// Kept in module scope (not reactive) because it's only used for cleanup — not UI.
let pollTimer = null

// graphPollTimer stores the interval ID for the periodic graph data refresh loop.
let graphPollTimer = null


// ----------------------------------------------------------------
// COMPUTED: PANEL LAYOUT STYLES
// ----------------------------------------------------------------

// leftPanelStyle returns an inline style object for the left (graph) panel.
// The computed values change based on viewMode, which drives the CSS transition animations.
const leftPanelStyle = computed(() => {
  // 'graph' mode: left panel is full width, fully visible, in its default position
  if (viewMode.value === 'graph') return { width: '100%', opacity: 1, transform: 'translateX(0)' }
  // 'workbench' mode: left panel collapses to 0 width, fades out, slides left offscreen
  if (viewMode.value === 'workbench') return { width: '0%', opacity: 0, transform: 'translateX(-20px)' }
  // 'split' mode (default): each panel takes exactly half the available width
  return { width: '50%', opacity: 1, transform: 'translateX(0)' }
})

// rightPanelStyle returns an inline style object for the right (step UI) panel.
// Mirror logic to leftPanelStyle but inverted — when graph is full, right hides.
const rightPanelStyle = computed(() => {
  // 'workbench' mode: right panel is full width
  if (viewMode.value === 'workbench') return { width: '100%', opacity: 1, transform: 'translateX(0)' }
  // 'graph' mode: right panel collapses, fades out, slides right offscreen
  if (viewMode.value === 'graph') return { width: '0%', opacity: 0, transform: 'translateX(20px)' }
  // 'split' mode: half width, fully visible
  return { width: '50%', opacity: 1, transform: 'translateX(0)' }
})


// ----------------------------------------------------------------
// COMPUTED: STATUS DISPLAY
// ----------------------------------------------------------------

// statusClass returns a CSS class string used to color the status dot in the header.
const statusClass = computed(() => {
  if (error.value) return 'error'          // Red dot if there is any error message
  if (currentPhase.value >= 2) return 'completed'  // Green dot when graph is complete
  return 'processing'                      // Orange pulsing dot while work is ongoing
})

// statusText returns a human-readable status label displayed next to the dot.
const statusText = computed(() => {
  if (error.value) return 'Error'
  if (currentPhase.value >= 2) return 'Ready'
  if (currentPhase.value === 1) return 'Building Graph'
  if (currentPhase.value === 0) return 'Generating Ontology'
  return 'Initializing'  // Default for phase -1 (before anything has started)
})


// ----------------------------------------------------------------
// HELPERS
// ----------------------------------------------------------------

// addLog — appends a new entry to the systemLogs array with a timestamp.
// The timestamp format is HH:MM:SS.mmm (24-hour with milliseconds).
const addLog = (msg) => {
  // Build hours:minutes:seconds portion using the Intl locale formatting API
  const time =
    new Date().toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' })
    + '.'
    // getMilliseconds() returns 0-999; padStart ensures it's always 3 digits (e.g. 007)
    + new Date().getMilliseconds().toString().padStart(3, '0')

  // Push a new log entry object to the reactive array
  systemLogs.value.push({ time, msg })

  // Enforce a maximum of 100 log entries to prevent unbounded memory growth.
  // shift() removes the oldest (first) entry when the limit is exceeded.
  if (systemLogs.value.length > 100) {
    systemLogs.value.shift()
  }
}


// ----------------------------------------------------------------
// LAYOUT METHODS
// ----------------------------------------------------------------

// toggleMaximize — toggles the specified panel between maximized and split view.
// If the current viewMode already matches the target, revert to 'split'.
// Otherwise, switch to the target mode (e.g. 'graph' or 'workbench').
const toggleMaximize = (target) => {
  if (viewMode.value === target) {
    viewMode.value = 'split'   // Already maximized → collapse back to split
  } else {
    viewMode.value = target    // Maximize the requested panel
  }
}

// handleNextStep — advances the workflow by incrementing currentStep.
// Accepts an optional params object from child components.
const handleNextStep = (params = {}) => {
  if (currentStep.value < 5) {  // Guard: can't go past the last step
    currentStep.value++
    addLog(`Entering Step ${currentStep.value}: ${stepNames[currentStep.value - 1]}`)

    // Special case: when entering Step 3, log the custom round count if provided.
    // This allows Step 2 to pass simulation configuration data through the event.
    if (currentStep.value === 3 && params.maxRounds) {
      addLog(`Custom simulation rounds: ${params.maxRounds} rounds`)
    }
  }
}

// handleGoBack — moves back one step by decrementing currentStep.
const handleGoBack = () => {
  if (currentStep.value > 1) {  // Guard: can't go below step 1
    currentStep.value--
    addLog(`Going back to Step ${currentStep.value}: ${stepNames[currentStep.value - 1]}`)
  }
}


// ----------------------------------------------------------------
// DATA LOGIC — Project Initialization
// ----------------------------------------------------------------

// initProject — entry point called on component mount.
// Decides whether to create a new project or load an existing one based on the URL param.
const initProject = async () => {
  addLog('Project view initialized.')
  if (currentProjectId.value === 'new') {
    // 'new' is a sentinel value set by the home page before navigating here
    await handleNewProject()
  } else {
    // Any other value is assumed to be a real project ID from the database
    await loadProject()
  }
}

// handleNewProject — handles the "new project" flow:
//   1. Reads the pending files/prompt from the in-memory store
//   2. Calls the generateOntology API to upload files and create the project
//   3. Updates the URL to the real project ID (replaces 'new')
//   4. Kicks off the graph build step
const handleNewProject = async () => {
  // Retrieve the pending upload data that was saved before navigation
  const pending = getPendingUpload()

  // Validate that there is something to upload; bail out if not
  if (!pending.isPending || pending.files.length === 0) {
    error.value = 'No pending files found.'
    addLog('Error: No pending files found for new project.')
    return
  }

  try {
    loading.value = true
    currentPhase.value = 0  // Phase 0 = Ontology generation
    ontologyProgress.value = { message: 'Uploading and analyzing docs...' }
    addLog('Starting ontology generation: Uploading files...')

    // Build a multipart FormData object to send files and the simulation requirement text
    const formData = new FormData()
    // forEach appends each File object under the key 'files' (backend expects an array)
    pending.files.forEach(f => formData.append('files', f))
    // Append the text prompt as a plain string field
    formData.append('simulation_requirement', pending.simulationRequirement)

    // Call the API — this is an async HTTP POST that may take several seconds
    const res = await generateOntology(formData)

    if (res.success) {
      // Clear the pending upload store now that the files have been submitted
      clearPendingUpload()

      // Update the in-memory project ID from 'new' to the real server-assigned ID
      currentProjectId.value = res.data.project_id
      projectData.value = res.data

      // Replace the browser URL so that refreshing the page loads the actual project
      // router.replace does NOT add a new entry to the browser history stack
      router.replace({ name: 'Process', params: { projectId: res.data.project_id } })

      // Clear the ontology progress message since that step is now done
      ontologyProgress.value = null
      addLog(`Ontology generated successfully for project ${res.data.project_id}`)

      // Immediately start the next phase: building the knowledge graph
      await startBuildGraph()
    } else {
      error.value = res.error || 'Ontology generation failed'
      addLog(`Error generating ontology: ${error.value}`)
    }
  } catch (err) {
    // Catch any unexpected JS exceptions (network failure, JSON parse error, etc.)
    error.value = err.message
    addLog(`Exception in handleNewProject: ${err.message}`)
  } finally {
    // Always reset the loading flag whether the request succeeded or failed
    loading.value = false
  }
}

// loadProject — handles loading an existing project by ID.
// Reads the project's current status from the API and resumes from the right state.
const loadProject = async () => {
  try {
    loading.value = true
    addLog(`Loading project ${currentProjectId.value}...`)

    const res = await getProject(currentProjectId.value)

    if (res.success) {
      projectData.value = res.data
      // Set currentPhase based on the project's stored status string
      updatePhaseByStatus(res.data.status)
      addLog(`Project loaded. Status: ${res.data.status}`)

      // Resume the correct async flow based on where the project left off
      if (res.data.status === 'ontology_generated' && !res.data.graph_id) {
        // Ontology done but graph not yet built → start the build
        await startBuildGraph()
      } else if (res.data.status === 'graph_building' && res.data.graph_build_task_id) {
        // Graph build is currently in progress → reattach to the running task
        currentPhase.value = 1
        startPollingTask(res.data.graph_build_task_id)  // Poll task status every 2s
        startGraphPolling()                              // Poll graph data every 10s
      } else if (res.data.status === 'graph_completed' && res.data.graph_id) {
        // Graph already finished → just load the graph data for display
        currentPhase.value = 2
        await loadGraph(res.data.graph_id)
      }
    } else {
      error.value = res.error
      addLog(`Error loading project: ${res.error}`)
    }
  } catch (err) {
    error.value = err.message
    addLog(`Exception in loadProject: ${err.message}`)
  } finally {
    loading.value = false
  }
}

// updatePhaseByStatus — maps the backend project status string to the local currentPhase integer.
// switch/case is used here for clarity since there are multiple discrete string values.
const updatePhaseByStatus = (status) => {
  switch (status) {
    case 'created':
    case 'ontology_generated':
      currentPhase.value = 0  // Both map to the ontology phase
      break
    case 'graph_building':
      currentPhase.value = 1  // Active build in progress
      break
    case 'graph_completed':
      currentPhase.value = 2  // Everything done
      break
    case 'failed':
      error.value = 'Project failed'  // Sets error state which affects statusClass/Text
      break
  }
}


// ----------------------------------------------------------------
// DATA LOGIC — Graph Building
// ----------------------------------------------------------------

// startBuildGraph — calls the buildGraph API to kick off the background graph build task,
// then starts both polling loops to track its progress and refresh the visualization.
const startBuildGraph = async () => {
  try {
    currentPhase.value = 1  // Enter the "building" phase
    buildProgress.value = { progress: 0, message: 'Starting build...' }
    addLog('Initiating graph build...')

    // POST request to start the long-running graph build task on the server
    const res = await buildGraph({ project_id: currentProjectId.value })

    if (res.success) {
      addLog(`Graph build task started. Task ID: ${res.data.task_id}`)
      // Start periodic graph data refresh (every 10s) so the visualization updates live
      startGraphPolling()
      // Start polling the task status endpoint (every 2s) to track progress
      startPollingTask(res.data.task_id)
    } else {
      error.value = res.error
      addLog(`Error starting build: ${res.error}`)
    }
  } catch (err) {
    error.value = err.message
    addLog(`Exception in startBuildGraph: ${err.message}`)
  }
}

// startGraphPolling — begins a setInterval loop that fetches fresh graph data every 10 seconds.
// Also does an immediate fetch before the interval starts (so there's no initial 10s delay).
const startGraphPolling = () => {
  addLog('Started polling for graph data...')
  fetchGraphData()                                    // Immediate first fetch
  graphPollTimer = setInterval(fetchGraphData, 10000) // Then every 10 seconds
}

// fetchGraphData — fetches the latest graph data from the API and updates graphData.
// First re-fetches the project to get the current graph_id, then fetches the graph itself.
const fetchGraphData = async () => {
  try {
    // Re-fetch the project to check if a graph_id has been assigned yet
    const projRes = await getProject(currentProjectId.value)

    if (projRes.success && projRes.data.graph_id) {
      // Only fetch graph data if a graph_id exists (graph may not be ready yet)
      const gRes = await getGraphData(projRes.data.graph_id)

      if (gRes.success) {
        graphData.value = gRes.data  // Update the reactive graphData for the GraphPanel

        // Calculate node/edge counts using whichever fields the API response provides
        const nodeCount = gRes.data.node_count || gRes.data.nodes?.length || 0
        const edgeCount = gRes.data.edge_count || gRes.data.edges?.length || 0
        addLog(`Graph data refreshed. Nodes: ${nodeCount}, Edges: ${edgeCount}`)
      }
    }
  } catch (err) {
    // Use console.warn (not error) here — graph fetch failures are non-critical
    // since the graph will be retried on the next interval tick
    console.warn('Graph fetch error:', err)
  }
}

// startPollingTask — begins polling the task status endpoint every 2 seconds.
// Also calls pollTaskStatus immediately to get the first result without waiting.
const startPollingTask = (taskId) => {
  pollTaskStatus(taskId)                              // Immediate first poll
  pollTimer = setInterval(() => pollTaskStatus(taskId), 2000) // Then every 2 seconds
}

// pollTaskStatus — fetches the current status/progress of the background build task.
// Handles three outcomes: ongoing progress update, task completed, task failed.
const pollTaskStatus = async (taskId) => {
  try {
    const res = await getTaskStatus(taskId)

    if (res.success) {
      const task = res.data

      // Log a new progress message only if it has changed since the last poll
      // This prevents duplicate log entries for the same message
      if (task.message && task.message !== buildProgress.value?.message) {
        addLog(task.message)
      }

      // Update the build progress bar data regardless of whether message changed
      buildProgress.value = { progress: task.progress || 0, message: task.message }

      if (task.status === 'completed') {
        addLog('Graph build task completed.')
        stopPolling()      // Stop the 2s task-status polling loop
        stopGraphPolling() // Stop the 10s graph-data polling loop

        currentPhase.value = 2  // Mark graph phase as complete

        // Do a final authoritative fetch of the project and graph data
        const projRes = await getProject(currentProjectId.value)
        if (projRes.success && projRes.data.graph_id) {
          projectData.value = projRes.data          // Update project metadata
          await loadGraph(projRes.data.graph_id)    // Load the final complete graph
        }
      } else if (task.status === 'failed') {
        stopPolling()
        error.value = task.error   // Set error message for status display
        addLog(`Graph build task failed: ${task.error}`)
      }
      // If status is still 'running' or 'pending', do nothing — wait for the next poll tick
    }
  } catch (e) {
    // Log unexpected errors to the console without crashing the polling loop
    console.error(e)
  }
}

// loadGraph — fetches the full graph data for a known graphId and stores it in graphData.
// Used both after a build completes and when loading an already-completed project.
const loadGraph = async (graphId) => {
  graphLoading.value = true  // Show loading spinner in the GraphPanel
  addLog(`Loading full graph data: ${graphId}`)

  try {
    const res = await getGraphData(graphId)

    if (res.success) {
      graphData.value = res.data  // Reactive update triggers GraphPanel re-render
      addLog('Graph data loaded successfully.')
    } else {
      addLog(`Failed to load graph data: ${res.error}`)
    }
  } catch (e) {
    addLog(`Exception loading graph: ${e.message}`)
  } finally {
    graphLoading.value = false  // Always clear the loading spinner
  }
}

// refreshGraph — manually reloads the graph data; called when the user clicks the
// refresh button inside GraphPanel (emitted via @refresh event).
const refreshGraph = () => {
  // Only attempt to load if the project has a graph_id (guard against premature calls)
  if (projectData.value?.graph_id) {
    addLog('Manual graph refresh triggered.')
    loadGraph(projectData.value.graph_id)
  }
}


// ----------------------------------------------------------------
// POLLING CLEANUP
// ----------------------------------------------------------------

// stopPolling — clears the task-status polling interval.
// Sets pollTimer to null after clearing so repeated calls are safe (no double-clear).
const stopPolling = () => {
  if (pollTimer) {
    clearInterval(pollTimer)
    pollTimer = null
  }
}

// stopGraphPolling — clears the graph-data polling interval.
const stopGraphPolling = () => {
  if (graphPollTimer) {
    clearInterval(graphPollTimer)
    graphPollTimer = null
    addLog('Graph polling stopped.')
  }
}


// ----------------------------------------------------------------
// LIFECYCLE HOOKS
// ----------------------------------------------------------------

// onMounted — Vue lifecycle hook that runs once after the component is inserted into the DOM.
// This is the correct place to start async data fetching (not in setup() directly).
onMounted(() => {
  initProject()  // Begin the new-or-load project initialization flow
})

// onUnmounted — Vue lifecycle hook that runs just before the component is destroyed.
// Critical for cleanup: both polling intervals MUST be cleared here,
// otherwise they will keep running and firing API calls even after navigation away.
onUnmounted(() => {
  stopPolling()       // Clear the 2s task-status polling interval
  stopGraphPolling()  // Clear the 10s graph-data polling interval
})
</script>


<!-- ================================================================
  STYLE SECTION
  scoped — all class selectors here only match elements in THIS component.
================================================================ -->
<style scoped>

/* ----------------------------------------------------------------
   ROOT CONTAINER
   Full-viewport-height column layout; clips overflow so panels don't
   cause unwanted page scrollbars.
---------------------------------------------------------------- */
.main-view {
  height: 100vh;              /* Fills the entire browser viewport height */
  display: flex;
  flex-direction: column;     /* Stacks header on top, content below */
  background: #FFF;
  overflow: hidden;           /* Prevents scrollbars on the outer container */
  font-family: 'Space Grotesk', system-ui, sans-serif; /* Primary font with system fallback */
}


/* ----------------------------------------------------------------
   APP HEADER
   Fixed-height bar at the top; uses z-index to stay above panel content.
---------------------------------------------------------------- */
.app-header {
  height: 60px;                         /* Fixed height matching the home page navbar */
  border-bottom: 1px solid #EAEAEA;     /* Subtle separator line between header and content */
  display: flex;
  align-items: center;                  /* Vertically centers all header children */
  justify-content: space-between;       /* Spreads left / center / right groups apart */
  padding: 0 24px;                      /* Horizontal breathing room */
  background: #FFF;
  z-index: 100;                         /* Ensures the header renders above panel overlays */
  position: relative;                   /* Establishes a stacking context for z-index */
}

/* The center group uses absolute positioning to be truly centered regardless of
   the variable widths of the left and right groups */
.header-center {
  position: absolute;          /* Taken out of normal flow */
  left: 50%;                   /* Move the left edge to the horizontal midpoint */
  transform: translateX(-50%); /* Shift left by half its own width to perfectly center it */
}

/* Brand/logo text in the header; cursor:pointer indicates it's clickable */
.brand {
  font-family: 'JetBrains Mono', monospace; /* Monospace for a tech/terminal brand feel */
  font-weight: 800;
  font-size: 18px;
  letter-spacing: 1px;
  cursor: pointer;       /* Shows a hand cursor to indicate navigation on click */
}

/* Container for the three view-mode toggle buttons */
.view-switcher {
  display: flex;
  background: #F5F5F5;   /* Light gray pill background for the entire button group */
  padding: 4px;          /* Inset padding so active button has a visible background */
  border-radius: 6px;    /* Rounded corners for the pill group */
  gap: 4px;              /* Small gap between individual buttons */
}

/* Each view mode button in the switcher */
.switch-btn {
  border: none;
  background: transparent;  /* Invisible by default; only the active state has a background */
  padding: 6px 16px;
  font-size: 12px;
  font-weight: 600;
  color: #666;              /* Gray text for inactive buttons */
  border-radius: 4px;       /* Slightly rounded to match the pill group container */
  cursor: pointer;
  transition: all 0.2s;     /* Smooth transition for background/color changes */
}

/* Active state: white "card" lifts out of the gray background with a subtle shadow */
.switch-btn.active {
  background: #FFF;
  color: #000;                                 /* Black text for the selected button */
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);     /* Very subtle elevation shadow */
}


/* ----------------------------------------------------------------
   STATUS INDICATOR (header right)
---------------------------------------------------------------- */

/* Flex row containing the colored dot + status text label */
.status-indicator {
  display: flex;
  align-items: center;
  gap: 8px;          /* Space between the dot and the text */
  font-size: 12px;
  color: #666;
  font-weight: 500;
}

/* Right section of the header: contains step info + divider + status */
.header-right {
  display: flex;
  align-items: center;
  gap: 16px;         /* Horizontal spacing between each element */
}

/* Container for the "Step X/5 — Step Name" display */
.workflow-step {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
}

/* Step number text (e.g. "Step 2/5") — monospace for fixed-width digit alignment */
.step-num {
  font-family: 'JetBrains Mono', monospace;
  font-weight: 700;
  color: #999;       /* Muted gray so the step name stands out */
}

/* Step name text (e.g. "Environment Setup") — bold black for emphasis */
.step-name {
  font-weight: 700;
  color: #000;
}

/* Thin vertical line visually separating the step info from the status indicator */
.step-divider {
  width: 1px;
  height: 14px;
  background-color: #E0E0E0;  /* Light gray to be subtle but visible */
}

/* The circular status dot — default color is gray (unknown/pre-init state) */
.dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;  /* Makes a perfect circle from a square div */
  background: #CCC;    /* Default: gray (before any phase is determined) */
}

/* PROCESSING state: orange dot with a repeating pulse animation */
.status-indicator.processing .dot {
  background: #FF5722;               /* Deep orange brand color */
  animation: pulse 1s infinite;      /* Draws attention to ongoing activity */
}

/* COMPLETED state: green dot — static, no animation */
.status-indicator.completed .dot {
  background: #4CAF50;  /* Material Design green */
}

/* ERROR state: red dot — static, high-contrast warning color */
.status-indicator.error .dot {
  background: #F44336;  /* Material Design red */
}

/* Pulse keyframe: fades the dot to 50% opacity at the midpoint, then back to full.
   Combined with the 1s infinite timing, this creates a smooth breathing effect. */
@keyframes pulse {
  50% { opacity: 0.5; }  /* Only the midpoint is defined; 0% and 100% default to opacity: 1 */
}


/* ----------------------------------------------------------------
   CONTENT AREA
   The main flex row below the header that holds both panel wrappers.
---------------------------------------------------------------- */
.content-area {
  flex: 1;            /* Takes all remaining vertical space after the 60px header */
  display: flex;      /* Horizontal layout for left and right panels */
  position: relative; /* Establishes positioning context for any absolute children */
  overflow: hidden;   /* Clips panel content during width transition animations */
}

/* ----------------------------------------------------------------
   PANEL WRAPPERS
   Both the left (graph) and right (step UI) panels share this base class.
   The width, opacity, and transform are controlled by the computed style bindings
   in the template, enabling smooth animated transitions between view modes.
---------------------------------------------------------------- */
.panel-wrapper {
  height: 100%;          /* Fill the full height of the content area */
  overflow: hidden;      /* Clip panel content so it doesn't overflow during animations */

  /*
    Transition for all three animated properties simultaneously.
    - width:    cubic-bezier easing gives a snappy, slightly elastic feel
    - opacity:  linear ease for a clean fade
    - transform: linear ease for the slide movement
    will-change hints to the browser to promote this element to its own GPU layer,
    enabling hardware-accelerated animations for smoother performance.
  */
  transition: width 0.4s cubic-bezier(0.25, 0.8, 0.25, 1), opacity 0.3s ease, transform 0.3s ease;
  will-change: width, opacity, transform;
}

/* Left panel has a right border to visually separate it from the right panel */
.panel-wrapper.left {
  border-right: 1px solid #EAEAEA;
}
</style>