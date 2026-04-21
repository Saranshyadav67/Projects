// Import the core functions needed to create the router instance and handle history mode
import { createRouter, createWebHistory } from 'vue-router'

// Import the Vue components that correspond to different views/pages of the application
import Home from '../views/Home.vue'
import Process from '../views/MainView.vue'
import SimulationView from '../views/SimulationView.vue'
import ReportView from '../views/ReportView.vue'
import InteractionView from '../views/InteractionView.vue'

// Define the array of route definitions
// Each object represents a single route in the application
const routes = [
  {
    // The URL path for the home page (root)
    path: '/',
    // The name of the route, used for programmatic navigation (e.g., router.push({ name: 'Home' }))
    name: 'Home',
    // The Vue component to render when this path is visited
    component: Home
  },
  {
    // Dynamic route for the main process view
    // ':projectId' is a dynamic segment that can change based on the specific project being viewed
    path: '/process/:projectId',
    name: 'Process',
    component: Process,
    // Passing 'true' allows the dynamic parameter 'projectId' to be passed as a prop to the Process component
    // This makes the component easier to test and reuse
    props: true
  },
  {
    // Dynamic route for viewing simulation details
    // ':simulationId' identifies which simulation to display
    path: '/simulation/:simulationId',
    name: 'Simulation',
    component: SimulationView,
    // Passes 'simulationId' as a prop to SimulationView
    props: true
  },
  {
    // Dynamic route for the report generation view
    // ':reportId' identifies the specific report
    path: '/report/:reportId',
    name: 'Report',
    component: ReportView,
    // Passes 'reportId' as a prop to ReportView
    props: true
  },
  {
    // Dynamic route for the deep interaction interface
    // ':reportId' links the interaction session to a specific report
    path: '/interaction/:reportId',
    name: 'Interaction',
    component: InteractionView,
    // Passes 'reportId' as a prop to InteractionView
    props: true
  }
]

// Create the router instance
const router = createRouter({
  // Use 'createWebHistory' for clean URLs (HTML5 History Mode)
  // This removes the '#' hash from URLs, making them look standard (e.g., /report/123 instead of /#/report/123)
  history: createWebHistory(),
  // Register the routes array defined above to the router instance
  routes
})

// Export the configured router instance so it can be imported and used in the main application entry point (main.js/main.ts)
export default routert router
