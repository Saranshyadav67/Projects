<!--
  ============================================================
  FILE: HomeView.vue
  PURPOSE: The main landing/home page of the MiroFish application.
  MiroFish is a swarm-intelligence simulation engine that lets users
  upload documents (PDFs, Markdown, TXT) and run multi-agent simulations.

  This file is a Single-File Component (SFC) in Vue 3, containing:
    - <template> : the HTML structure of the page
    - <script setup> : the JavaScript/logic using Vue 3 Composition API
    - <style scoped> : CSS styles scoped only to this component
  ============================================================
-->

<template>
  <!--
    Root wrapper div for the entire home page.
    The CSS class "home-container" sets the background, font, and full viewport height.
  -->
  <div class="home-container">

    <!-- =====================================================
         TOP NAVIGATION BAR
         A fixed-height black bar at the top of the page
         containing the brand name and a GitHub link.
    ====================================================== -->
    <nav class="navbar">
      <!-- Brand name on the left, styled in monospace font -->
      <div class="nav-brand">MIROFISH</div>

      <!-- Right-side navigation links container -->
      <div class="nav-links">
        <!--
          External link to GitHub.
          target="_blank" opens in a new tab.
          class="github-link" applies monospace styling and hover opacity.
        -->
        <a href="https://github.com/666ghj/MiroFish" target="_blank" class="github-link">
          Visit our Github Homepage
          <!-- Small arrow icon indicating external link -->
          <span class="arrow">↗</span>
        </a>
      </div>
    </nav>
    <!-- END: Top Navigation Bar -->

    <!--
      Main content wrapper.
      "max-width: 1400px" and "margin: 0 auto" center the content on wide screens.
      "padding: 60px 40px" gives breathing room around the edges.
    -->
    <div class="main-content">

      <!-- =====================================================
           HERO SECTION (Upper half)
           Split into a left text block and a right logo/button block.
           Uses flexbox (display: flex) to sit side by side.
      ====================================================== -->
      <section class="hero-section">

        <!-- LEFT SIDE: tagline, title, description text -->
        <div class="hero-left">

          <!--
            Tag row: shows a colored badge and a version string.
            Uses flexbox with gap:15px to space them horizontally.
          -->
          <div class="tag-row">
            <!-- Orange pill/badge label -->
            <span class="orange-tag">Concise Universal Swarm Intelligence Engine</span>
            <!-- Version text in grey, monospace font -->
            <span class="version-text">/ v0.1-Preview</span>
          </div>

          <!--
            Main hero heading.
            font-size: 4.5rem makes it very large.
            letter-spacing: -2px tightens the characters for a modern look.
          -->
          <h1 class="main-title">
            Upload Any Report<br> <!-- <br> forces a line break -->
            <!--
              .gradient-text uses CSS -webkit-background-clip trick
              to apply a gradient color to the text characters.
            -->
            <span class="gradient-text">Instantly Deduce the Future</span>
          </h1>

          <!--
            Hero description block.
            Contains two paragraphs with inline highlight spans.
            "text-align: justify" aligns text to both margins.
          -->
          <div class="hero-desc">
            <p>
              Even with just a paragraph of text,
              <!-- Bold black text for brand name emphasis -->
              <span class="highlight-bold">MiroFish</span>
              can automatically generate a parallel world composed of up to
              <!-- Orange monospace text for a key number/metric -->
              <span class="highlight-orange">Million-level Agents</span>
              based on the reality seeds within it. By injecting variables from a God's-eye view, discover the
              <!-- Code-style highlighted text with light grey background -->
              <span class="highlight-code">"Local Optimal Solution"</span>
              within complex group interactions under dynamic environments.
            </p>
            <!--
              Second paragraph acting as a slogan.
              Has an orange left border and slightly larger font.
              .blinking-cursor animates the trailing underscore.
            -->
            <p class="slogan-text">
              Let the future be previewed in the Agent swarm, let decisions win after a hundred battles
              <!-- Blinking underscore cursor, animated via CSS @keyframes blink -->
              <span class="blinking-cursor">_</span>
            </p>
          </div>

          <!--
            Small 16x16px orange square, purely decorative.
            Adds a visual accent below the description text.
          -->
          <div class="decoration-square"></div>
        </div>
        <!-- END: hero-left -->

        <!-- RIGHT SIDE: logo image + scroll-down button -->
        <div class="hero-right">

          <!-- Container that right-aligns the logo image -->
          <div class="logo-container">
            <!--
              The MiroFish logo image.
              src points to a local asset (relative path from the component file).
              alt text is shown if the image fails to load (accessibility).
              max-width: 500px keeps it from getting too large.
            -->
            <img src="../assets/logo/MiroFish_logo_left.jpeg" alt="MiroFish Logo" class="hero-logo" />
          </div>

          <!--
            A small square button with a down arrow.
            @click="scrollToBottom" calls the scrollToBottom() function defined in <script>.
            When clicked, it smoothly scrolls the page to the bottom.
          -->
          <button class="scroll-down-btn" @click="scrollToBottom">
            ↓
          </button>
        </div>
        <!-- END: hero-right -->

      </section>
      <!-- END: Hero Section -->


      <!-- =====================================================
           DASHBOARD SECTION (Lower two-column layout)
           Left column: system status + workflow steps
           Right column: interactive upload + simulation console
           Separated from the hero by a top border line.
      ====================================================== -->
      <section class="dashboard-section">

        <!-- ===============================
             LEFT PANEL: Status + Workflow
        ================================ -->
        <div class="left-panel">

          <!-- Small header label with a colored square icon -->
          <div class="panel-header">
            <!-- Orange "■" square icon used as a status indicator dot -->
            <span class="status-dot">■</span> System Status
          </div>

          <!-- Large "Ready" heading indicating the engine is on standby -->
          <h2 class="section-title">Ready</h2>

          <!-- Brief status description paragraph -->
          <p class="section-desc">
            Prediction engine on standby. You can upload multiple unstructured data files to initialize the simulation sequence.
          </p>

          <!--
            Two metric cards displayed side-by-side using flexbox.
            Each card shows a key value and a supporting label.
          -->
          <div class="metrics-row">
            <!-- Card 1: Cost metric -->
            <div class="metric-card">
              <!-- Large bold value text -->
              <div class="metric-value">Low Cost</div>
              <!-- Smaller supporting label below the value -->
              <div class="metric-label">Avg. $5/conventional simulation</div>
            </div>
            <!-- Card 2: Scale metric -->
            <div class="metric-card">
              <div class="metric-value">High Availability</div>
              <div class="metric-label">Max Million-level Agent Sim</div>
            </div>
          </div>
          <!-- END: metrics-row -->

          <!--
            Workflow steps list.
            A bordered box containing 5 numbered simulation phases.
          -->
          <div class="steps-container">

            <!-- Header row for the workflow list with a diamond icon -->
            <div class="steps-header">
              <!-- Diamond "◇" is a decorative icon -->
              <span class="diamond-icon">◇</span> Workflow Sequence
            </div>

            <!-- Vertical list of all workflow steps -->
            <div class="workflow-list">

              <!-- STEP 01 -->
              <div class="workflow-item">
                <!-- Step number, low opacity for subtle styling -->
                <span class="step-num">01</span>
                <div class="step-info">
                  <!-- Step title in slightly bold font -->
                  <div class="step-title">Graph Construction</div>
                  <!-- Step description in grey, smaller font -->
                  <div class="step-desc">Reality seed extraction & Individual/Group memory injection & GraphRAG construction</div>
                </div>
              </div>

              <!-- STEP 02 -->
              <div class="workflow-item">
                <span class="step-num">02</span>
                <div class="step-info">
                  <div class="step-title">Environment Setup</div>
                  <div class="step-desc">Entity relation extraction & Persona generation & Environment config agent injection</div>
                </div>
              </div>

              <!-- STEP 03 -->
              <div class="workflow-item">
                <span class="step-num">03</span>
                <div class="step-info">
                  <div class="step-title">Start Simulation</div>
                  <div class="step-desc">Dual-platform parallel simulation & Auto parsing prediction needs & Dynamic time-series memory update</div>
                </div>
              </div>

              <!-- STEP 04 -->
              <div class="workflow-item">
                <span class="step-num">04</span>
                <div class="step-info">
                  <div class="step-title">Report Generation</div>
                  <div class="step-desc">ReportAgent interacts deeply with the post-simulation environment using a rich toolset</div>
                </div>
              </div>

              <!-- STEP 05 -->
              <div class="workflow-item">
                <span class="step-num">05</span>
                <div class="step-info">
                  <div class="step-title">Deep Interaction</div>
                  <div class="step-desc">Talk to anyone in the simulated world & Converse with ReportAgent</div>
                </div>
              </div>

            </div>
            <!-- END: workflow-list -->

          </div>
          <!-- END: steps-container -->

        </div>
        <!-- END: left-panel -->


        <!-- ===============================
             RIGHT PANEL: Interaction Console
             File upload + prompt input + launch button
        ================================ -->
        <div class="right-panel">

          <!--
            The main console box with a visible border.
            Inner padding (8px) creates a "double border" visual effect.
          -->
          <div class="console-box">

            <!-- ---- UPLOAD SECTION ---- -->
            <div class="console-section">

              <!-- Header row: step label on left, accepted formats on right -->
              <div class="console-header">
                <span class="console-label">01 / Reality Seeds</span>
                <span class="console-meta">Supported Formats: PDF, MD, TXT</span>
              </div>

              <!--
                The drag-and-drop upload zone.

                :class binds CSS classes dynamically based on reactive state:
                  - 'drag-over'  → added when a file is being dragged over the zone
                  - 'has-files'  → added when at least one file has been selected

                Event listeners:
                  @dragover.prevent  → prevents browser default (which would open the file)
                                       and calls handleDragOver to show hover styling
                  @dragleave.prevent → removes drag-over styling when cursor leaves the zone
                  @drop.prevent      → prevents browser default file-open behavior,
                                       calls handleDrop to read the dropped files
                  @click             → opens the native OS file picker via triggerFileInput()
              -->
              <div
                class="upload-zone"
                :class="{ 'drag-over': isDragOver, 'has-files': files.length > 0 }"
                @dragover.prevent="handleDragOver"
                @dragleave.prevent="handleDragLeave"
                @drop.prevent="handleDrop"
                @click="triggerFileInput"
              >

                <!--
                  Hidden native file input element.
                  ref="fileInput" lets us call fileInput.value.click() programmatically.
                  multiple → allows selecting more than one file at once.
                  accept → restricts the file picker to .pdf, .md, .txt extensions.
                  @change → fires handleFileSelect() when the user picks files.
                  :disabled="loading" → prevents new uploads while a simulation is running.
                -->
                <input
                  ref="fileInput"
                  type="file"
                  multiple
                  accept=".pdf,.md,.txt"
                  @change="handleFileSelect"
                  style="display: none"
                  :disabled="loading"
                />

                <!--
                  Placeholder UI shown only when NO files have been selected yet.
                  v-if="files.length === 0" hides this block once a file is added.
                -->
                <div v-if="files.length === 0" class="upload-placeholder">
                  <!-- Upward arrow icon inside a small bordered square -->
                  <div class="upload-icon">↑</div>
                  <div class="upload-title">Drag &amp; Drop to Upload</div>
                  <div class="upload-hint">Or click to browse file system</div>
                </div>

                <!--
                  File list shown only when files HAVE been selected.
                  v-else appears when files.length > 0.
                  v-for iterates over the files[] reactive array.
                  :key="index" helps Vue efficiently update the DOM list.
                -->
                <div v-else class="file-list">
                  <div v-for="(file, index) in files" :key="index" class="file-item">
                    <!-- Document emoji icon for each file -->
                    <span class="file-icon">📄</span>
                    <!-- Display the file's name property (from the File API object) -->
                    <span class="file-name">{{ file.name }}</span>
                    <!--
                      Remove button for each file.
                      @click.stop → .stop modifier prevents the click from bubbling up
                                    to the parent upload-zone (which would re-open the picker).
                      removeFile(index) → splices this file out of the files[] array.
                    -->
                    <button @click.stop="removeFile(index)" class="remove-btn">×</button>
                  </div>
                </div>

              </div>
              <!-- END: upload-zone -->

            </div>
            <!-- END: Upload Section -->

            <!--
              Horizontal divider line between the upload and input sections.
              CSS ::before and ::after pseudo-elements draw lines on each side of the text.
            -->
            <div class="console-divider">
              <span>Input Parameters</span>
            </div>

            <!-- ---- SIMULATION PROMPT SECTION ---- -->
            <div class="console-section">

              <!-- Step label header -->
              <div class="console-header">
                <span class="console-label">&gt;_ 02 / Simulation Prompt</span>
              </div>

              <!--
                Wrapper div for the textarea + badge overlay.
                position: relative allows the badge to be absolutely positioned inside.
              -->
              <div class="input-wrapper">
                <!--
                  Multi-line text input for the simulation requirement.

                  v-model="formData.simulationRequirement" → two-way binding:
                    any typing updates formData.simulationRequirement, and any
                    programmatic change to that ref updates the textarea display.

                  placeholder → shown in grey when the field is empty.
                  rows="6"    → sets the initial visible height to 6 lines.
                  :disabled="loading" → locks the field while a simulation runs.
                -->
                <textarea
                  v-model="formData.simulationRequirement"
                  class="code-input"
                  placeholder="// Enter simulation or prediction requirements in natural language (e.g., What public opinion trends would arise if WHU announces revoking Student Xiao's punishment)"
                  rows="6"
                  :disabled="loading"
                ></textarea>

                <!--
                  Small label overlaid in the bottom-right corner of the textarea.
                  Positioned absolutely relative to .input-wrapper.
                -->
                <div class="model-badge">Engine: MiroFish-V1.0</div>
              </div>

            </div>
            <!-- END: Simulation Prompt Section -->

            <!-- ---- START BUTTON SECTION ---- -->
            <div class="console-section btn-section">

              <!--
                The primary action button to launch the simulation.

                @click="startSimulation" → calls startSimulation() when clicked.

                :disabled="!canSubmit || loading" → disables the button if:
                  - canSubmit is false (prompt is empty OR no files uploaded), OR
                  - loading is true (a simulation is already initializing).

                When disabled, CSS changes the button to grey and blocks hover effects.
                When enabled, it pulses with a border animation to draw attention.
              -->
              <button
                class="start-engine-btn"
                @click="startSimulation"
                :disabled="!canSubmit || loading"
              >
                <!--
                  v-if / v-else toggles the button label text:
                  - "Start Engine" shown normally
                  - "Initializing..." shown while loading === true
                -->
                <span v-if="!loading">Start Engine</span>
                <span v-else>Initializing...</span>

                <!-- Right-pointing arrow decorating the button's right side -->
                <span class="btn-arrow">→</span>
              </button>

            </div>
            <!-- END: Start Button Section -->

          </div>
          <!-- END: console-box -->

        </div>
        <!-- END: right-panel -->

      </section>
      <!-- END: Dashboard Section -->


      <!--
        History Database component.
        This is a child component imported from '../components/HistoryDatabase.vue'.
        It renders below the main dashboard and shows past simulation projects.
        No props are passed to it here — it manages its own data internally.
      -->
      <HistoryDatabase />

    </div>
    <!-- END: main-content -->

  </div>
  <!-- END: home-container -->
</template>


<!-- ============================================================
     SCRIPT SECTION — Vue 3 Composition API with <script setup>
     <script setup> is syntactic sugar: everything declared here
     is automatically available in the template without explicit return.
============================================================ -->
<script setup>

// --- IMPORTS ---

// ref        → creates a reactive "reference" variable. Changing .value re-renders the UI.
// computed   → creates a derived value that auto-updates when its dependencies change.
import { ref, computed } from 'vue'

// useRouter  → gives access to Vue Router so we can programmatically navigate between pages.
import { useRouter } from 'vue-router'

// HistoryDatabase → child component rendered at the bottom of this page.
// The import registers it so the <HistoryDatabase /> tag in the template works.
import HistoryDatabase from '../components/HistoryDatabase.vue'

// Initialise the router instance. We call router.push() later to navigate.
const router = useRouter()


// --- REACTIVE STATE ---

/*
  formData holds all the form field values as a single reactive object.
  Using ref({ ... }) makes the entire object reactive.
  Currently only one field: simulationRequirement (the text prompt).
*/
const formData = ref({
  simulationRequirement: ''
})

/*
  files is a reactive array that holds File objects selected by the user.
  File objects come from the browser's File API (e.g., event.target.files).
  Each File object has properties like: name, size, type, lastModified.
*/
const files = ref([])

/*
  loading is a boolean flag.
  true  → a simulation is in progress (disables inputs and changes button text).
  false → idle state (inputs are editable, button shows "Start Engine").
  
  NOTE: In the current implementation, loading is never set to true in this component
  because navigation happens immediately. It's kept for future use / safety.
*/
const loading = ref(false)

/*
  error holds an error message string.
  Currently declared but not actively displayed in the template.
  Kept for future error-handling UI.
*/
const error = ref('')

/*
  isDragOver is a boolean that tracks whether a file is being dragged over the upload zone.
  true  → adds the 'drag-over' CSS class (e.g., changes border to solid + different background).
  false → normal state.
*/
const isDragOver = ref(false)

/*
  fileInput is a template ref — it holds a reference to the hidden <input type="file"> element.
  We use this to programmatically trigger the OS file picker by calling fileInput.value.click().
  The ref="fileInput" attribute in the template connects the DOM element to this variable.
*/
const fileInput = ref(null)


// --- COMPUTED PROPERTIES ---

/*
  canSubmit is a derived boolean.
  It returns true ONLY when BOTH of these conditions are met:
    1. The simulation prompt field is not empty (after trimming whitespace).
    2. At least one file has been added to the files array.
  
  This is bound to the :disabled attribute of the Start Engine button,
  so the button stays grey/disabled until both inputs are provided.
*/
const canSubmit = computed(() => {
  return formData.value.simulationRequirement.trim() !== '' && files.value.length > 0
})


// --- METHODS ---

/*
  triggerFileInput()
  Opens the native OS file picker dialog.
  Only works when loading is false (i.e., not in the middle of a simulation).
  Calls .click() on the hidden <input type="file"> via its template ref.
*/
const triggerFileInput = () => {
  if (!loading.value) {         // Guard: do nothing if already loading
    fileInput.value?.click()    // Optional chaining (?.) safely handles null ref
  }
}

/*
  handleFileSelect(event)
  Called by @change on the hidden file input when the user picks files via the OS dialog.
  
  event.target.files → a FileList object (array-like, not a real array).
  Array.from(...) converts it to a real JS array so we can use array methods.
  Passes the array to addFiles() for validation and storage.
*/
const handleFileSelect = (event) => {
  const selectedFiles = Array.from(event.target.files)
  addFiles(selectedFiles)
}

/*
  handleDragOver(e)
  Called continuously while a file is being dragged over the upload zone.
  Sets isDragOver to true → applies the 'drag-over' CSS class for visual feedback.
  The .prevent modifier on @dragover (in the template) already calls e.preventDefault(),
  which is required to allow dropping. The loading check prevents interference.
*/
const handleDragOver = (e) => {
  if (!loading.value) {
    isDragOver.value = true
  }
}

/*
  handleDragLeave(e)
  Called when the drag cursor leaves the upload zone boundary.
  Resets isDragOver to false → removes the 'drag-over' CSS class.
*/
const handleDragLeave = (e) => {
  isDragOver.value = false
}

/*
  handleDrop(e)
  Called when the user releases (drops) files onto the upload zone.
  
  isDragOver.value = false → immediately remove the drag-highlight styling.
  Guard: if currently loading, ignore the drop entirely.
  
  e.dataTransfer.files → a FileList of the dropped files.
  Array.from() converts it to a regular array.
  Passes to addFiles() for validation.
*/
const handleDrop = (e) => {
  isDragOver.value = false
  if (loading.value) return   // Ignore drops while simulation is running
  
  const droppedFiles = Array.from(e.dataTransfer.files)
  addFiles(droppedFiles)
}

/*
  addFiles(newFiles)
  Validates and adds an array of File objects to the files[] reactive array.
  
  Validation: only accepts files with extensions .pdf, .md, or .txt.
  
  file.name.split('.').pop() → extracts the extension:
    e.g. "report.pdf" → ["report", "pdf"] → "pdf"
  .toLowerCase() → normalises case (e.g. ".PDF" → "pdf").
  
  .filter() returns only the valid files.
  files.value.push(...validFiles) → spread operator adds each valid file to the array.
  Vue's reactivity system detects the push and re-renders the file list.
*/
const addFiles = (newFiles) => {
  const validFiles = newFiles.filter(file => {
    const ext = file.name.split('.').pop().toLowerCase()
    return ['pdf', 'md', 'txt'].includes(ext)
  })
  files.value.push(...validFiles)
}

/*
  removeFile(index)
  Removes a specific file from the files[] array by its position (index).
  
  Array.splice(index, 1) removes exactly 1 element at the given index.
  Vue's reactivity detects the mutation and removes that item from the rendered list.
*/
const removeFile = (index) => {
  files.value.splice(index, 1)
}

/*
  scrollToBottom()
  Smoothly scrolls the browser window to the very bottom of the page.
  Called when the user clicks the "↓" scroll button in the hero section.
  
  window.scrollTo() → native browser scroll API.
  top: document.body.scrollHeight → the total height of the page content.
  behavior: 'smooth' → animates the scroll instead of jumping instantly.
*/
const scrollToBottom = () => {
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: 'smooth'
  })
}

/*
  startSimulation()
  The main action triggered by the "Start Engine" button.
  
  Guard: returns early if canSubmit is false or loading is already true.
  
  Uses dynamic import() to lazily load the pendingUpload store module.
  This avoids loading the store at startup — it's only needed at this moment.
  
  setPendingUpload(files, prompt):
    Stores the selected files and prompt text in a shared module-level variable
    (not Vuex/Pinia — it's a simple JS module store) so the Process page can
    read them after navigation.
  
  router.push({ name: 'Process', params: { projectId: 'new' } }):
    Navigates to the Process page immediately.
    projectId: 'new' is a special sentinel value telling the Process page
    that this is a fresh simulation (not loading an existing one from history).
    The actual API calls and simulation logic happen on that Process page.
*/
const startSimulation = () => {
  if (!canSubmit.value || loading.value) return  // Safety guard
  
  // Dynamically import the pending upload store to avoid circular imports
  import('../store/pendingUpload.js').then(({ setPendingUpload }) => {
    // Save files and prompt so the Process page can access them after navigation
    setPendingUpload(files.value, formData.value.simulationRequirement)
    
    // Navigate to the Process page, signalling a new (not resumed) project
    router.push({
      name: 'Process',
      params: { projectId: 'new' }
    })
  })
}
</script>


<!-- ============================================================
     STYLE SECTION — Scoped CSS
     "scoped" means these styles only apply to elements in THIS
     component. Vue adds a unique data attribute (e.g. data-v-xxxxxx)
     to both the elements and the CSS selectors at build time.
============================================================ -->
<style scoped>

/*
  CSS Custom Properties (Variables) defined on :root.
  These let us reuse colours and fonts throughout the stylesheet
  by referencing var(--variable-name) instead of hard-coding values.

  NOTE: In a scoped style block, :root variables are technically scoped
  to the component's shadow — but since Vue SFC scoping uses attribute
  selectors (not Shadow DOM), these variables still bleed to child elements.
*/
:root {
  --black: #000000;         /* Pure black — primary text and backgrounds */
  --white: #FFFFFF;         /* Pure white — page background */
  --orange: #FF4500;        /* Brand accent colour (OrangeRed) */
  --gray-light: #F5F5F5;    /* Very light grey — subtle backgrounds */
  --gray-text: #666666;     /* Medium grey — body text, descriptions */
  --border: #E5E5E5;        /* Light grey — border lines */

  /*
    Font families:
    --font-mono  → used for labels, code, step numbers (technical feel)
    --font-sans  → used for headings and body (modern, clean)
    --font-cn    → fallback for Chinese characters if present
    The comma-separated list provides fallbacks if the primary font isn't available.
  */
  --font-mono: 'JetBrains Mono', monospace;
  --font-sans: 'Space Grotesk', 'Noto Sans SC', system-ui, sans-serif;
  --font-cn: 'Noto Sans SC', system-ui, sans-serif;
}

/*
  .home-container — Root wrapper for the whole page.
  min-height: 100vh → always at least the full viewport height (no short pages).
  background: var(--white) → white background.
  font-family: var(--font-sans) → apply the sans font as the default throughout.
  color: var(--black) → default text colour is black.
*/
.home-container {
  min-height: 100vh;
  background: var(--white);
  font-family: var(--font-sans);
  color: var(--black);
}

/* ---- NAVIGATION BAR ---- */

/*
  .navbar — the black top navigation strip.
  height: 60px → fixed height.
  background: var(--black) → black background, white text.
  display: flex → puts brand and links side by side.
  justify-content: space-between → pushes brand left, links right.
  align-items: center → vertically centres content.
  padding: 0 40px → 40px horizontal breathing room on each side.
*/
.navbar {
  height: 60px;
  background: var(--black);
  color: var(--white);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 40px;
}

/*
  .nav-brand — "MIROFISH" brand text.
  font-family: var(--font-mono) → monospace for a technical look.
  font-weight: 800 → extra bold.
  letter-spacing: 1px → slightly spaced letters for presence.
*/
.nav-brand {
  font-family: var(--font-mono);
  font-weight: 800;
  letter-spacing: 1px;
  font-size: 1.2rem;
}

/* .nav-links — flex container for the right side link(s) */
.nav-links {
  display: flex;
  align-items: center;
}

/*
  .github-link — styles the GitHub anchor tag.
  color: var(--white) → white text on black background.
  text-decoration: none → removes default underline.
  display: flex; gap: 8px → puts text and arrow icon side by side.
  transition: opacity 0.2s → smooth fade on hover.
*/
.github-link {
  color: var(--white);
  text-decoration: none;
  font-family: var(--font-mono);
  font-size: 0.9rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: opacity 0.2s;
}

/* Reduce opacity when hovering the GitHub link */
.github-link:hover {
  opacity: 0.8;
}

/* .arrow — just removes any special font override for the arrow character */
.arrow {
  font-family: sans-serif;
}

/* ---- MAIN CONTENT WRAPPER ---- */

/*
  .main-content — centres and constrains the page content.
  max-width: 1400px → won't stretch wider than 1400px on large monitors.
  margin: 0 auto → horizontally centres the block.
  padding: 60px 40px → top/bottom 60px, left/right 40px spacing.
*/
.main-content {
  max-width: 1400px;
  margin: 0 auto;
  padding: 60px 40px;
}

/* ---- HERO SECTION ---- */

/*
  .hero-section — flex row layout for the upper hero area.
  display: flex → side-by-side layout.
  justify-content: space-between → left and right halves spread apart.
  margin-bottom: 80px → space before the dashboard section below.
  position: relative → enables absolute positioning of children if needed.
*/
.hero-section {
  display: flex;
  justify-content: space-between;
  margin-bottom: 80px;
  position: relative;
}

/*
  .hero-left — takes up proportionally more width (flex: 1 = 1 share).
  padding-right: 60px → prevents text from touching the logo on the right.
*/
.hero-left {
  flex: 1;
  padding-right: 60px;
}

/*
  .tag-row — horizontal row of the badge and version text.
  display: flex; gap: 15px → side by side with 15px space.
  margin-bottom: 25px → space before the main heading.
  font-family: var(--font-mono) → monospace for the technical tag look.
*/
.tag-row {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 25px;
  font-family: var(--font-mono);
  font-size: 0.8rem;
}

/*
  .orange-tag — the coloured badge pill.
  background: var(--orange) → orange fill.
  color: var(--white) → white text.
  padding: 4px 10px → small padding inside the pill.
  font-weight: 700 → bold text.
  letter-spacing: 1px → slightly spaced for badge feel.
*/
.orange-tag {
  background: var(--orange);
  color: var(--white);
  padding: 4px 10px;
  font-weight: 700;
  letter-spacing: 1px;
  font-size: 0.75rem;
}

/* .version-text — grey, medium weight version label */
.version-text {
  color: #999;
  font-weight: 500;
  letter-spacing: 0.5px;
}

/*
  .main-title — the large hero heading.
  font-size: 4.5rem → very large (4.5x the base font size, usually 72px).
  line-height: 1.2 → slightly tighter than normal for headlines.
  font-weight: 500 → medium weight (not too heavy for large text).
  letter-spacing: -2px → negative tracking pulls letters together for a modern editorial look.
  margin: 0 0 40px 0 → 40px space below the heading.
*/
.main-title {
  font-size: 4.5rem;
  line-height: 1.2;
  font-weight: 500;
  margin: 0 0 40px 0;
  letter-spacing: -2px;
  color: var(--black);
}

/*
  .gradient-text — applies a black-to-dark-grey gradient to text characters.
  background: linear-gradient(...) → defines the gradient.
  -webkit-background-clip: text → clips the gradient to the text shape only.
  -webkit-text-fill-color: transparent → makes the default fill transparent
    so the background gradient shows through the text shape.
  display: inline-block → required for background-clip: text to work.
*/
.gradient-text {
  background: linear-gradient(90deg, #000000 0%, #444444 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: inline-block;
}

/*
  .hero-desc — the descriptive paragraph block.
  font-size: 1.05rem → slightly larger than base for readability.
  line-height: 1.8 → generous line spacing for long paragraphs.
  color: var(--gray-text) → #666, softer than black for body text.
  max-width: 640px → line length kept comfortable for reading.
  margin-bottom: 50px → space before the decoration square.
  text-align: justify → both edges of text align (newspaper style).
*/
.hero-desc {
  font-size: 1.05rem;
  line-height: 1.8;
  color: var(--gray-text);
  max-width: 640px;
  margin-bottom: 50px;
  font-weight: 400;
  text-align: justify;
}

/* Space between paragraphs inside .hero-desc */
.hero-desc p {
  margin-bottom: 1.5rem;
}

/* .highlight-bold — black, bold inline text for brand name */
.highlight-bold {
  color: var(--black);
  font-weight: 700;
}

/* .highlight-orange — orange, bold, monospace inline text for metrics */
.highlight-orange {
  color: var(--orange);
  font-weight: 700;
  font-family: var(--font-mono);
}

/*
  .highlight-code — inline code-style highlight.
  background: rgba(0,0,0,0.05) → very subtle grey tint background.
  padding: 2px 6px → small padding.
  border-radius: 2px → very slight rounding.
  font-family: var(--font-mono) → monospace for code feel.
  font-size: 0.9em → slightly smaller than surrounding text (em = relative to parent).
*/
.highlight-code {
  background: rgba(0, 0, 0, 0.05);
  padding: 2px 6px;
  border-radius: 2px;
  font-family: var(--font-mono);
  font-size: 0.9em;
  color: var(--black);
  font-weight: 600;
}

/*
  .slogan-text — the final slogan paragraph with left orange border.
  font-size: 1.2rem → slightly larger for emphasis.
  font-weight: 520 → between regular (400) and medium (500) — non-standard but supported in variable fonts.
  letter-spacing: 1px → slight spacing.
  border-left: 3px solid var(--orange) → orange vertical accent bar on the left.
  padding-left: 15px → indents text away from the border.
  margin-top: 20px → space above.
*/
.slogan-text {
  font-size: 1.2rem;
  font-weight: 520;
  color: var(--black);
  letter-spacing: 1px;
  border-left: 3px solid var(--orange);
  padding-left: 15px;
  margin-top: 20px;
}

/*
  .blinking-cursor — the animated "_" character at the end of the slogan.
  color: var(--orange) → matches the accent colour.
  animation: blink 1s step-end infinite
    → runs the "blink" keyframe animation:
      - 1s per cycle
      - step-end → jumps instantly (no fade) between visible/hidden
      - infinite → repeats forever
*/
.blinking-cursor {
  color: var(--orange);
  animation: blink 1s step-end infinite;
  font-weight: 700;
}

/*
  @keyframes blink — defines the blinking animation.
  0% and 100% → opacity 1 (fully visible).
  50%          → opacity 0 (fully hidden).
  Combined with step-end timing, this creates a hard on/off blink.
*/
@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

/*
  .decoration-square — a small 16x16 orange square, purely decorative.
  Acts as a visual period/accent below the hero description.
*/
.decoration-square {
  width: 16px;
  height: 16px;
  background: var(--orange);
}

/*
  .hero-right — right column of the hero section.
  flex: 0.8 → takes slightly less space than hero-left (which has flex: 1).
  display: flex; flex-direction: column → stacks logo and button vertically.
  justify-content: space-between → pushes logo to top, button to bottom.
  align-items: flex-end → right-aligns both children.
*/
.hero-right {
  flex: 0.8;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
}

/*
  .logo-container — wrapper for the logo image.
  width: 100% → takes full width of hero-right.
  display: flex; justify-content: flex-end → right-aligns the image.
  padding-right: 40px → keeps logo from the edge.
*/
.logo-container {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding-right: 40px;
}

/*
  .hero-logo — the logo <img> sizing.
  max-width: 500px → caps width at 500px on large screens.
  width: 100% → shrinks below 500px if the container is smaller (responsive).
*/
.hero-logo {
  max-width: 500px;
  width: 100%;
}

/*
  .scroll-down-btn — the small square "↓" button.
  width/height: 40px → square shape.
  border: 1px solid var(--border) → light grey border.
  background: transparent → no fill by default.
  display: flex; align-items/justify-content: center → centres the arrow inside.
  cursor: pointer → shows a hand cursor on hover.
  color: var(--orange) → orange arrow.
  transition: all 0.2s → smooth border colour change on hover.
*/
.scroll-down-btn {
  width: 40px;
  height: 40px;
  border: 1px solid var(--border);
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: var(--orange);
  font-size: 1.2rem;
  transition: all 0.2s;
}

/* On hover, the border changes to orange to match the arrow */
.scroll-down-btn:hover {
  border-color: var(--orange);
}

/* ---- DASHBOARD TWO-COLUMN SECTION ---- */

/*
  .dashboard-section — the lower two-column area.
  display: flex → side-by-side columns.
  gap: 60px → space between left and right panels.
  border-top: 1px solid var(--border) → dividing line from the hero above.
  padding-top: 60px → space inside the border.
  align-items: flex-start → columns align to the top (don't stretch to equal height).
*/
.dashboard-section {
  display: flex;
  gap: 60px;
  border-top: 1px solid var(--border);
  padding-top: 60px;
  align-items: flex-start;
}

/* Both panels use column flex layout internally */
.dashboard-section .left-panel,
.dashboard-section .right-panel {
  display: flex;
  flex-direction: column;
}

/* ---- LEFT PANEL ---- */

/*
  .left-panel — the status/workflow column.
  flex: 0.8 → slightly narrower than the right panel (which has flex: 1.2).
*/
.left-panel {
  flex: 0.8;
}

/*
  .panel-header — the small "■ System Status" label row.
  font-family: var(--font-mono) → monospace.
  font-size: 0.8rem → small label size.
  color: #999 → grey.
  display: flex; gap: 8px; align-items: center → inline icon + text.
  margin-bottom: 20px → space before the "Ready" heading.
*/
.panel-header {
  font-family: var(--font-mono);
  font-size: 0.8rem;
  color: #999;
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 20px;
}

/* .status-dot — the orange "■" square acting as a status indicator */
.status-dot {
  color: var(--orange);
  font-size: 0.8rem;
}

/*
  .section-title — "Ready" heading.
  font-size: 2rem → medium-large heading.
  font-weight: 520 → slightly above medium.
  margin: 0 0 15px 0 → 15px below.
*/
.section-title {
  font-size: 2rem;
  font-weight: 520;
  margin: 0 0 15px 0;
}

/* .section-desc — grey paragraph under the "Ready" heading */
.section-desc {
  color: var(--gray-text);
  margin-bottom: 25px;
  line-height: 1.6;
}

/*
  .metrics-row — horizontal row of metric cards.
  display: flex; gap: 20px → side-by-side with spacing.
  margin-bottom: 15px → space before the steps container.
*/
.metrics-row {
  display: flex;
  gap: 20px;
  margin-bottom: 15px;
}

/*
  .metric-card — individual metric display box.
  border: 1px solid var(--border) → light grey outline box.
  padding: 20px 30px → comfortable inner spacing.
  min-width: 150px → prevents cards from becoming too narrow.
*/
.metric-card {
  border: 1px solid var(--border);
  padding: 20px 30px;
  min-width: 150px;
}

/*
  .metric-value — the primary metric text (e.g., "Low Cost").
  font-family: var(--font-mono) → monospace.
  font-size: 1.8rem → large value text.
  font-weight: 520 → slightly above medium.
  margin-bottom: 5px → small gap before the label.
*/
.metric-value {
  font-family: var(--font-mono);
  font-size: 1.8rem;
  font-weight: 520;
  margin-bottom: 5px;
}

/* .metric-label — small grey supporting text below the metric value */
.metric-label {
  font-size: 0.85rem;
  color: #999;
}

/*
  .steps-container — the workflow steps bordered box.
  border: 1px solid var(--border) → outlined box.
  padding: 30px → inner spacing.
  position: relative → allows pseudo-elements or absolutely positioned children.
*/
.steps-container {
  border: 1px solid var(--border);
  padding: 30px;
  position: relative;
}

/*
  .steps-header — "◇ Workflow Sequence" label.
  font-family: var(--font-mono) → monospace.
  font-size: 0.8rem; color: #999 → small grey label.
  margin-bottom: 25px → space before the step list.
  display: flex; gap: 8px → icon + text side by side.
*/
.steps-header {
  font-family: var(--font-mono);
  font-size: 0.8rem;
  color: #999;
  margin-bottom: 25px;
  display: flex;
  align-items: center;
  gap: 8px;
}

/* .diamond-icon — sizes the ◇ character */
.diamond-icon {
  font-size: 1.2rem;
  line-height: 1;
}

/*
  .workflow-list — vertical stack of step items.
  display: flex; flex-direction: column → stacked.
  gap: 20px → 20px vertical space between each step.
*/
.workflow-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

/*
  .workflow-item — a single step row (number + info block).
  display: flex; align-items: flex-start → number and text side by side, top-aligned.
  gap: 20px → space between number and text block.
*/
.workflow-item {
  display: flex;
  align-items: flex-start;
  gap: 20px;
}

/*
  .step-num — the "01", "02", etc. numbers.
  font-family: var(--font-mono) → monospace.
  font-weight: 700 → bold.
  color: var(--black) → black.
  opacity: 0.3 → 30% visible, creating a ghost/muted effect.
*/
.step-num {
  font-family: var(--font-mono);
  font-weight: 700;
  color: var(--black);
  opacity: 0.3;
}

/* .step-info — the text content block; flex: 1 fills remaining width */
.step-info {
  flex: 1;
}

/*
  .step-title — the name of each step.
  font-weight: 520 → slightly bold.
  font-size: 1rem → base font size.
  margin-bottom: 4px → small gap before the description.
*/
.step-title {
  font-weight: 520;
  font-size: 1rem;
  margin-bottom: 4px;
}

/* .step-desc — the smaller grey description line for each step */
.step-desc {
  font-size: 0.85rem;
  color: var(--gray-text);
}

/* ---- RIGHT PANEL: INTERACTION CONSOLE ---- */

/*
  .right-panel — the interactive console column.
  flex: 1.2 → takes more proportional width than the left panel.
*/
.right-panel {
  flex: 1.2;
}

/*
  .console-box — outer bordered container for the console.
  border: 1px solid #CCC → medium grey border.
  padding: 8px → inner padding creates a "double border" visual:
    the box border + the inner section borders together look like a double frame.
*/
.console-box {
  border: 1px solid #CCC;
  padding: 8px;
}

/* .console-section — each logical section inside the console box with standard padding */
.console-section {
  padding: 20px;
}

/* .btn-section removes top padding so the button sits flush with the divider */
.console-section.btn-section {
  padding-top: 0;
}

/*
  .console-header — the small label row at the top of each section.
  display: flex; justify-content: space-between → label left, meta right.
  margin-bottom: 15px → space before the content below.
  font-family: var(--font-mono); font-size: 0.75rem → small technical label.
  color: #666 → medium grey.
*/
.console-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
  font-family: var(--font-mono);
  font-size: 0.75rem;
  color: #666;
}

/*
  .upload-zone — the drag-and-drop area.
  border: 1px dashed #CCC → dashed border signals a drop target.
  height: 200px → fixed height.
  overflow-y: auto → allows scrolling if many files are listed.
  display: flex; align-items: center; justify-content: center → centres placeholder.
  cursor: pointer → hand cursor invites clicking.
  transition: all 0.3s → smooth colour transitions on hover/drag states.
  background: #FAFAFA → very light grey background.
*/
.upload-zone {
  border: 1px dashed #CCC;
  height: 200px;
  overflow-y: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s;
  background: #FAFAFA;
}

/* When files exist, align content to the start (top) so the list is visible */
.upload-zone.has-files {
  align-items: flex-start;
}

/* Darker background when hovering over the upload zone */
.upload-zone:hover {
  background: #F0F0F0;
  border-color: #999;
}

/* .upload-placeholder — centred empty-state content */
.upload-placeholder {
  text-align: center;
}

/*
  .upload-icon — the "↑" arrow in a small bordered box.
  width/height: 40px → square container.
  border: 1px solid #DDD → light border.
  display: flex; align-items/justify-content: center → centres the arrow.
  margin: 0 auto 15px → horizontally centred, 15px below.
  color: #999 → grey arrow.
*/
.upload-icon {
  width: 40px;
  height: 40px;
  border: 1px solid #DDD;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 15px;
  color: #999;
}

/* .upload-title — "Drag & Drop to Upload" text */
.upload-title {
  font-weight: 500;
  font-size: 0.9rem;
  margin-bottom: 5px;
}

/* .upload-hint — "Or click to browse..." small hint text */
.upload-hint {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  color: #999;
}

/*
  .file-list — container for the listed files once uploaded.
  width: 100% → fills the upload zone.
  padding: 15px → inner spacing.
  display: flex; flex-direction: column; gap: 10px → stacked file rows.
*/
.file-list {
  width: 100%;
  padding: 15px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

/*
  .file-item — a single file row.
  display: flex; align-items: center → emoji, name, and button all in a line.
  background: var(--white) → white background on the light grey zone.
  padding: 8px 12px → comfortable inner padding.
  border: 1px solid #EEE → very subtle border.
  font-family: var(--font-mono); font-size: 0.85rem → monospace file names.
*/
.file-item {
  display: flex;
  align-items: center;
  background: var(--white);
  padding: 8px 12px;
  border: 1px solid #EEE;
  font-family: var(--font-mono);
  font-size: 0.85rem;
}

/* .file-name — flex: 1 stretches to fill space between icon and remove button */
.file-name {
  flex: 1;
  margin: 0 10px;
}

/*
  .remove-btn — the "×" button to remove a file.
  background: none; border: none → invisible button.
  cursor: pointer → hand cursor.
  font-size: 1.2rem → bigger "×" for easier clicking.
  color: #999 → grey.
*/
.remove-btn {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.2rem;
  color: #999;
}

/*
  .console-divider — the horizontal line with "Input Parameters" text.
  display: flex; align-items: center → vertically centres text and lines.
  margin: 10px 0 → vertical space above and below.
*/
.console-divider {
  display: flex;
  align-items: center;
  margin: 10px 0;
}

/*
  The ::before and ::after pseudo-elements draw the horizontal lines.
  content: '' → needed for pseudo-elements to render.
  flex: 1 → each line expands to fill available space equally.
  height: 1px → thin line.
  background: #EEE → light grey.
*/
.console-divider::before,
.console-divider::after {
  content: '';
  flex: 1;
  height: 1px;
  background: #EEE;
}

/*
  .console-divider span — the centred text between the lines.
  padding: 0 15px → keeps text from touching the lines.
  font-family: var(--font-mono); font-size: 0.7rem → small monospace label.
  color: #BBB → light grey.
  letter-spacing: 1px → spaced out characters.
*/
.console-divider span {
  padding: 0 15px;
  font-family: var(--font-mono);
  font-size: 0.7rem;
  color: #BBB;
  letter-spacing: 1px;
}

/*
  .input-wrapper — relative container for textarea + floating badge.
  border: 1px solid #DDD → outer border around the textarea area.
  background: #FAFAFA → light grey background.
  position: relative → allows the .model-badge to be absolute inside it.
*/
.input-wrapper {
  position: relative;
  border: 1px solid #DDD;
  background: #FAFAFA;
}

/*
  .code-input — the textarea element.
  width: 100% → fills the full wrapper width.
  border: none → removes default textarea border (the wrapper provides the border).
  background: transparent → inherits wrapper's #FAFAFA background.
  padding: 20px → comfortable inner spacing.
  font-family: var(--font-mono); font-size: 0.9rem → monospace, slightly smaller.
  line-height: 1.6 → comfortable reading for multi-line input.
  resize: vertical → user can drag to make it taller/shorter, but not wider.
  outline: none → removes the browser's default focus ring (we handle focus visually via border).
  min-height: 150px → minimum height even when content is sparse.
*/
.code-input {
  width: 100%;
  border: none;
  background: transparent;
  padding: 20px;
  font-family: var(--font-mono);
  font-size: 0.9rem;
  line-height: 1.6;
  resize: vertical;
  outline: none;
  min-height: 150px;
}

/*
  .model-badge — the "Engine: MiroFish-V1.0" overlay label.
  position: absolute → positioned relative to .input-wrapper.
  bottom: 10px; right: 15px → anchored to the bottom-right corner.
  font-family: var(--font-mono); font-size: 0.7rem → very small monospace text.
  color: #AAA → light grey so it doesn't distract.
*/
.model-badge {
  position: absolute;
  bottom: 10px;
  right: 15px;
  font-family: var(--font-mono);
  font-size: 0.7rem;
  color: #AAA;
}

/*
  .start-engine-btn — the full-width "Start Engine →" button.
  width: 100% → spans the entire console width.
  background: var(--black) → black background.
  color: var(--white) → white text.
  border: none → no default border (we override per state below).
  padding: 20px → generous height.
  font-family: var(--font-mono); font-weight: 700 → bold monospace text.
  font-size: 1.1rem → slightly larger than body.
  display: flex; justify-content: space-between; align-items: center
    → text on left, arrow on right.
  cursor: pointer → hand cursor.
  transition: all 0.3s ease → smooth hover/active transitions.
  letter-spacing: 1px → slightly spaced characters.
  position: relative; overflow: hidden → needed for potential future pseudo-element effects.
*/
.start-engine-btn {
  width: 100%;
  background: var(--black);
  color: var(--white);
  border: none;
  padding: 20px;
  font-family: var(--font-mono);
  font-weight: 700;
  font-size: 1.1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease;
  letter-spacing: 1px;
  position: relative;
  overflow: hidden;
}

/*
  When the button is NOT disabled (i.e., both inputs are provided):
  - Adds a 1px black border
  - Applies the pulse-border animation to draw user attention
*/
.start-engine-btn:not(:disabled) {
  background: var(--black);
  border: 1px solid var(--black);
  animation: pulse-border 2s infinite;
}

/*
  On hover (when not disabled):
  - Background changes from black to orange.
  - Border also turns orange.
  - Translates 2px upward for a subtle "lift" effect.
*/
.start-engine-btn:hover:not(:disabled) {
  background: var(--orange);
  border-color: var(--orange);
  transform: translateY(-2px);
}

/* On click (active state), button snaps back to original position */
.start-engine-btn:active:not(:disabled) {
  transform: translateY(0);
}

/*
  When the button IS disabled (inputs incomplete):
  - Light grey background and text → clearly inactive.
  - cursor: not-allowed → shows a "no" cursor.
  - transform: none → removes any hover transform.
  - Light grey border matches background.
*/
.start-engine-btn:disabled {
  background: #E5E5E5;
  color: #999;
  cursor: not-allowed;
  transform: none;
  border: 1px solid #E5E5E5;
}

/*
  @keyframes pulse-border — the pulsing shadow animation on the active button.
  Creates an expanding shadow ring that fades out:
  0%   → shadow at 0 size, 20% opaque black.
  70%  → shadow grown to 6px, fully transparent (faded out).
  100% → back to 0 (loops smoothly).
  Combined with 2s infinite, creates a slow, repeated pulse.
*/
@keyframes pulse-border {
  0% { box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.2); }
  70% { box-shadow: 0 0 0 6px rgba(0, 0, 0, 0); }
  100% { box-shadow: 0 0 0 0 rgba(0, 0, 0, 0); }
}

/* ---- RESPONSIVE BREAKPOINTS ---- */

/*
  @media (max-width: 1024px) — applies when the screen is ≤ 1024px wide (tablets, smaller laptops).

  .dashboard-section → switches from side-by-side to stacked columns.
  .hero-section → same: hero-left and hero-right stack vertically.
  .hero-left → removes right padding (no longer needed when stacked).
  .hero-logo → reduced to 200px max width for smaller screens.
*/
@media (max-width: 1024px) {
  /* Stack the two dashboard columns vertically on smaller screens */
  .dashboard-section {
    flex-direction: column;
  }
  
  /* Stack the hero left/right columns vertically on smaller screens */
  .hero-section {
    flex-direction: column;
  }
  
  /* Remove right padding when stacked */
  .hero-left {
    padding-right: 0;
    margin-bottom: 40px;
  }
  
  /* Shrink logo on smaller screens */
  .hero-logo {
    max-width: 200px;
    margin-bottom: 20px;
  }
}
</style>