<template>
  <!-- Root wrapper div for the entire home page layout -->
  <div class="home-container">

    <!-- ===================== TOP NAVIGATION BAR ===================== -->
    <!-- <nav> is a semantic HTML element indicating a navigation section -->
    <nav class="navbar">

      <!-- Brand/logo text shown on the left side of the navbar -->
      <div class="nav-brand">MIROFISH</div>

      <!-- Container for navigation links on the right side -->
      <div class="nav-links">
        <!-- External link to the GitHub repo; target="_blank" opens it in a new tab -->
        <a href="https://github.com/666ghj/MiroFish" target="_blank" class="github-link">
          Visit our Github Homepage
          <!-- Unicode arrow character used as a decorative "external link" indicator -->
          <span class="arrow">↗</span>
        </a>
      </div>
    </nav>
    <!-- ============================================================== -->

    <!-- Wrapper for all page content below the navbar -->
    <div class="main-content">

      <!-- ===================== HERO SECTION ===================== -->
      <!-- Full-width introductory section shown at the top of the page body -->
      <section class="hero-section">

        <!-- LEFT side of the hero: tagline, title, description, decoration -->
        <div class="hero-left">

          <!-- Row containing the orange badge tag and version label -->
          <div class="tag-row">
            <!-- Highlighted orange badge describing the product category -->
            <span class="orange-tag">Concise Universal Swarm Intelligence Engine</span>
            <!-- Muted version string displayed next to the badge -->
            <span class="version-text">/ v0.1-Preview</span>
          </div>

          <!-- Main headline of the hero section; uses <br> for line break -->
          <h1 class="main-title">
            Upload Any Report<br>
            <!-- Span with gradient styling applied via CSS to this specific phrase -->
            <span class="gradient-text">Instantly Deduce the Future</span>
          </h1>

          <!-- Descriptive paragraph block explaining the product -->
          <div class="hero-desc">
            <p>
              Even with just a paragraph of text,
              <!-- Bold product name highlighted in black -->
              <span class="highlight-bold">MiroFish</span>
              can automatically generate a parallel world composed of up to
              <!-- Orange monospace highlight for the key feature callout -->
              <span class="highlight-orange">Million-level Agents</span>
              based on the reality seeds within it. By injecting variables from a God's-eye view, discover the
              <!-- Code-style inline highlight for the quoted technical term -->
              <span class="highlight-code">"Local Optimal Solution"</span>
              within complex group interactions under dynamic environments.
            </p>
            <!-- Secondary slogan paragraph with blinking cursor animation -->
            <p class="slogan-text">
              Let the future be previewed in the Agent swarm, let decisions win after a hundred battles
              <!-- Animated blinking underscore cursor; purely decorative -->
              <span class="blinking-cursor">_</span>
            </p>
          </div>

          <!-- Small decorative orange square, purely visual -->
          <div class="decoration-square"></div>
        </div>
        <!-- END hero-left -->

        <!-- RIGHT side of the hero: product logo + scroll-down button -->
        <div class="hero-right">

          <!-- Wrapper that centers/aligns the logo image -->
          <div class="logo-container">
            <!-- Product logo image; alt text for accessibility -->
            <img src="../assets/logo/MiroFish_logo_left.jpeg" alt="MiroFish Logo" class="hero-logo" />
          </div>

          <!-- Button that smoothly scrolls the page to the bottom when clicked -->
          <!-- @click is Vue's shorthand for v-on:click; calls scrollToBottom method -->
          <button class="scroll-down-btn" @click="scrollToBottom">
            ↓
          </button>
        </div>
        <!-- END hero-right -->

      </section>
      <!-- ============================================================== -->


      <!-- ===================== DASHBOARD SECTION ===================== -->
      <!-- Two-column layout: status/steps on the left, upload console on the right -->
      <section class="dashboard-section">

        <!-- -------- LEFT PANEL: System status, metrics, workflow steps -------- -->
        <div class="left-panel">

          <!-- Small header label with a colored status indicator square -->
          <div class="panel-header">
            <!-- Unicode black square character styled orange to act as a status dot -->
            <span class="status-dot">■</span> System Status
          </div>

          <!-- Current system readiness heading -->
          <h2 class="section-title">Ready</h2>

          <!-- Short description of what the user can do in this state -->
          <p class="section-desc">
            Prediction engine on standby. You can upload multiple unstructured data files to initialize the simulation sequence.
          </p>

          <!-- Row of two metric/stat cards -->
          <div class="metrics-row">

            <!-- First metric card: cost information -->
            <div class="metric-card">
              <div class="metric-value">Low Cost</div>
              <div class="metric-label">Avg. $5/conventional simulation</div>
            </div>

            <!-- Second metric card: scale information -->
            <div class="metric-card">
              <div class="metric-value">High Availability</div>
              <div class="metric-label">Max Million-level Agent Sim</div>
            </div>

          </div>
          <!-- END metrics-row -->

          <!-- Workflow steps list showing the 5-stage simulation pipeline -->
          <div class="steps-container">

            <!-- Header for the workflow steps block -->
            <div class="steps-header">
              <!-- Unicode diamond outline used as a decorative icon -->
              <span class="diamond-icon">◇</span> Workflow Sequence
            </div>

            <!-- Vertical list of numbered workflow steps -->
            <div class="workflow-list">

              <!-- Step 01 -->
              <div class="workflow-item">
                <!-- Step number label; low opacity gives a subtle/muted look -->
                <span class="step-num">01</span>
                <div class="step-info">
                  <div class="step-title">Graph Construction</div>
                  <div class="step-desc">Reality seed extraction & Individual/Group memory injection & GraphRAG construction</div>
                </div>
              </div>

              <!-- Step 02 -->
              <div class="workflow-item">
                <span class="step-num">02</span>
                <div class="step-info">
                  <div class="step-title">Environment Setup</div>
                  <div class="step-desc">Entity relation extraction & Persona generation & Environment config agent injection</div>
                </div>
              </div>

              <!-- Step 03 -->
              <div class="workflow-item">
                <span class="step-num">03</span>
                <div class="step-info">
                  <div class="step-title">Start Simulation</div>
                  <div class="step-desc">Dual-platform parallel simulation & Auto parsing prediction needs & Dynamic time-series memory update</div>
                </div>
              </div>

              <!-- Step 04 -->
              <div class="workflow-item">
                <span class="step-num">04</span>
                <div class="step-info">
                  <div class="step-title">Report Generation</div>
                  <div class="step-desc">ReportAgent interacts deeply with the post-simulation environment using a rich toolset</div>
                </div>
              </div>

              <!-- Step 05 -->
              <div class="workflow-item">
                <span class="step-num">05</span>
                <div class="step-info">
                  <div class="step-title">Deep Interaction</div>
                  <div class="step-desc">Talk to anyone in the simulated world & Converse with ReportAgent</div>
                </div>
              </div>

            </div>
            <!-- END workflow-list -->

          </div>
          <!-- END steps-container -->

        </div>
        <!-- END left-panel -->


        <!-- -------- RIGHT PANEL: File upload + prompt input console -------- -->
        <div class="right-panel">

          <!-- The styled "console" box that contains all input controls -->
          <div class="console-box">

            <!-- ---- Section 1: File Upload Area ---- -->
            <div class="console-section">

              <!-- Header row showing the section label and accepted file formats -->
              <div class="console-header">
                <span class="console-label">01 / Reality Seeds</span>
                <span class="console-meta">Supported Formats: PDF, MD, TXT</span>
              </div>

              <!--
                Drag-and-drop upload zone.
                :class dynamically adds 'drag-over' or 'has-files' CSS classes based on reactive state.
                @dragover.prevent — listens for dragover event and calls preventDefault() to allow drop.
                @dragleave.prevent — listens for dragleave and calls preventDefault().
                @drop.prevent    — listens for the drop event, prevents default browser behavior (opening file), calls handleDrop.
                @click           — clicking anywhere on the zone triggers the hidden file input.
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
                  ref="fileInput" — gives the <script> section a direct DOM reference.
                  multiple         — allows selecting more than one file at once.
                  accept           — restricts the file browser to .pdf, .md, .txt files.
                  @change          — fires when the user selects files, calls handleFileSelect.
                  :disabled        — disables the input while a simulation is loading.
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

                <!-- Placeholder shown when NO files have been selected yet -->
                <!-- v-if renders this block only when the files array is empty -->
                <div v-if="files.length === 0" class="upload-placeholder">
                  <!-- Decorative upward arrow icon inside a bordered box -->
                  <div class="upload-icon">↑</div>
                  <div class="upload-title">Drag & Drop to Upload</div>
                  <div class="upload-hint">Or click to browse file system</div>
                </div>

                <!-- File list shown when at least one file has been selected -->
                <!-- v-else renders this block when files array is NOT empty -->
                <div v-else class="file-list">
                  <!--
                    v-for loops over the files array.
                    Each iteration provides the file object and its index.
                    :key is required by Vue for efficient list re-rendering — uses the array index here.
                  -->
                  <div v-for="(file, index) in files" :key="index" class="file-item">
                    <!-- Static emoji icon representing a document -->
                    <span class="file-icon">📄</span>
                    <!-- Display the file's name from the File object -->
                    <span class="file-name">{{ file.name }}</span>
                    <!--
                      Remove button for each file.
                      @click.stop — handles click AND stops it from bubbling up to the parent
                      upload-zone click handler (which would re-open the file dialog).
                      Calls removeFile with the current index to splice it from the array.
                    -->
                    <button @click.stop="removeFile(index)" class="remove-btn">×</button>
                  </div>
                </div>

              </div>
              <!-- END upload-zone -->

            </div>
            <!-- END console-section (file upload) -->


            <!-- Visual horizontal divider line between the two input sections -->
            <div class="console-divider">
              <span>Input Parameters</span>
            </div>


            <!-- ---- Section 2: Simulation Prompt Textarea ---- -->
            <div class="console-section">

              <!-- Header label for this input section -->
              <div class="console-header">
                <span class="console-label">>_ 02 / Simulation Prompt</span>
              </div>

              <!-- Wrapper provides relative positioning context for the model badge overlay -->
              <div class="input-wrapper">
                <!--
                  Multi-line text input (textarea) for the simulation prompt.
                  v-model creates two-way data binding with formData.simulationRequirement.
                  placeholder — hint text displayed when the field is empty.
                  rows="6"    — sets the default visible height of the textarea.
                  :disabled   — disables typing while a simulation is running.
                -->
                <textarea
                  v-model="formData.simulationRequirement"
                  class="code-input"
                  placeholder="// Enter simulation or prediction requirements in natural language (e.g., What public opinion trends would arise if WHU announces revoking Student Xiao's punishment)"
                  rows="6"
                  :disabled="loading"
                ></textarea>

                <!-- Static label overlaid on the bottom-right of the textarea showing the engine version -->
                <div class="model-badge">Engine: MiroFish-V1.0</div>
              </div>

            </div>
            <!-- END console-section (prompt textarea) -->


            <!-- ---- Section 3: Submit / Start Engine Button ---- -->
            <div class="console-section btn-section">
              <!--
                Primary CTA button.
                @click    — calls startSimulation when clicked.
                :disabled — button is non-interactive if canSubmit is false OR loading is true.
                            This prevents double-submission and enforces validation.
              -->
              <button
                class="start-engine-btn"
                @click="startSimulation"
                :disabled="!canSubmit || loading"
              >
                <!-- v-if / v-else toggle the button label based on loading state -->
                <span v-if="!loading">Start Engine</span>
                <span v-else>Initializing...</span>

                <!-- Decorative right-arrow shown on the right side of the button -->
                <span class="btn-arrow">→</span>
              </button>
            </div>
            <!-- END console-section (button) -->

          </div>
          <!-- END console-box -->

        </div>
        <!-- END right-panel -->

      </section>
      <!-- ============================================================== -->


      <!-- ===================== HISTORY DATABASE SECTION ===================== -->
      <!--
        HistoryDatabase is a child Vue component imported from ../components/HistoryDatabase.vue.
        It is registered via the import statement in <script setup> and used here as a custom element.
        Renders a table/list of past simulation projects below the main dashboard section.
      -->
      <HistoryDatabase />
      <!-- ============================================================== -->

    </div>
    <!-- END main-content -->

  </div>
  <!-- END home-container -->
</template>


<!-- ================================================================
  SCRIPT SECTION
  Uses Vue 3 Composition API with <script setup> syntax.
  All variables and functions declared here are automatically available
  in the template above without needing to return them explicitly.
================================================================ -->
<script setup>
// ref()       — creates a reactive primitive or object reference; accessing `.value` gives the current value
// computed()  — creates a derived reactive value that automatically re-evaluates when its dependencies change
import { ref, computed } from 'vue'

// useRouter() — returns the Vue Router instance so we can programmatically navigate between pages
import { useRouter } from 'vue-router'

// Import the HistoryDatabase child component used in the template
import HistoryDatabase from '../components/HistoryDatabase.vue'

// Get the router instance for navigation calls later
const router = useRouter()


// ----------------------------------------------------------------
// REACTIVE STATE
// ----------------------------------------------------------------

// formData holds all user-provided form field values.
// Using a nested ref object keeps related fields grouped together.
const formData = ref({
  simulationRequirement: '' // Bound to the textarea via v-model; starts empty
})

// files is a reactive array that stores File objects selected by the user.
// Starts as an empty array — no files uploaded yet.
const files = ref([])

// loading tracks whether an async operation (simulation start) is in progress.
// Used to disable inputs and change button label during submission.
const loading = ref(false)

// error stores any error message string to display to the user (currently unused in the template).
const error = ref('')

// isDragOver tracks whether the user is currently dragging a file over the upload zone.
// Controls the 'drag-over' CSS class for visual feedback.
const isDragOver = ref(false)

// fileInput holds a reference to the hidden <input type="file"> DOM element.
// The ref="fileInput" attribute in the template links that element to this variable.
const fileInput = ref(null)


// ----------------------------------------------------------------
// COMPUTED PROPERTY
// ----------------------------------------------------------------

// canSubmit returns true only when BOTH conditions are met:
//   1. The simulation requirement textarea is not blank (after trimming whitespace)
//   2. At least one file has been added to the files array
// This value is used to enable/disable the Start Engine button in the template.
const canSubmit = computed(() => {
  return formData.value.simulationRequirement.trim() !== '' && files.value.length > 0
})


// ----------------------------------------------------------------
// METHODS
// ----------------------------------------------------------------

// triggerFileInput — programmatically clicks the hidden file <input> element.
// This lets the styled upload zone act as a clickable file selector
// without showing the browser's default file input UI.
const triggerFileInput = () => {
  // Only open the file dialog if a simulation is not currently running
  if (!loading.value) {
    // ?. is optional chaining — safely calls .click() only if fileInput.value is not null
    fileInput.value?.click()
  }
}

// handleFileSelect — called when the user selects files via the native file dialog.
// The event.target.files is a FileList object; Array.from() converts it to a plain array.
const handleFileSelect = (event) => {
  const selectedFiles = Array.from(event.target.files)
  // Delegate to addFiles() to validate and append to the files array
  addFiles(selectedFiles)
}

// handleDragOver — called continuously while a dragged item is over the upload zone.
// Sets isDragOver to true so the CSS class applies the visual "drag active" styling.
const handleDragOver = (e) => {
  // Only show drag feedback if not currently loading
  if (!loading.value) {
    isDragOver.value = true
  }
}

// handleDragLeave — called when a dragged item leaves the upload zone boundary.
// Resets isDragOver to false to remove the drag-over visual styling.
const handleDragLeave = (e) => {
  isDragOver.value = false
}

// handleDrop — called when the user drops files onto the upload zone.
// e.dataTransfer.files contains the dropped FileList; converted to an array for processing.
const handleDrop = (e) => {
  // Reset the drag-over visual state regardless of what was dropped
  isDragOver.value = false

  // Do nothing if a simulation is already running
  if (loading.value) return

  const droppedFiles = Array.from(e.dataTransfer.files)
  // Delegate to addFiles() to validate and append to the files array
  addFiles(droppedFiles)
}

// addFiles — filters a list of File objects to only include allowed extensions,
// then appends the valid ones to the reactive files array.
const addFiles = (newFiles) => {
  const validFiles = newFiles.filter(file => {
    // Split the filename on '.' and take the last segment as the extension
    const ext = file.name.split('.').pop().toLowerCase()
    // Only accept PDF, Markdown, and plain-text files
    return ['pdf', 'md', 'txt'].includes(ext)
  })
  // Spread valid files into the existing array using push (mutates reactively)
  files.value.push(...validFiles)
}

// removeFile — removes a single file from the files array by its index.
// splice(index, 1) removes exactly 1 element at the given position.
const removeFile = (index) => {
  files.value.splice(index, 1)
}

// scrollToBottom — smoothly scrolls the browser window to the very bottom of the page.
// Triggered by the ↓ button in the hero section.
const scrollToBottom = () => {
  window.scrollTo({
    top: document.body.scrollHeight, // Total scrollable height of the page
    behavior: 'smooth'               // Animates the scroll instead of jumping instantly
  })
}

// startSimulation — triggered by the Start Engine button click.
// Stores the pending upload data in a shared store module, then
// navigates immediately to the Process page (actual API calls happen there).
const startSimulation = () => {
  // Guard: do nothing if validation fails or a request is already in flight
  if (!canSubmit.value || loading.value) return

  // Dynamically import the pendingUpload store module (code-splitting / lazy load).
  // This avoids a circular import and loads the module only when needed.
  import('../store/pendingUpload.js').then(({ setPendingUpload }) => {

    // Persist the selected files and simulation prompt in the store
    // so the Process page can read them after navigation.
    setPendingUpload(files.value, formData.value.simulationRequirement)

    // Navigate programmatically to the 'Process' named route.
    // params.projectId is set to 'new' as a sentinel value meaning "this is a new simulation".
    router.push({
      name: 'Process',
      params: { projectId: 'new' }
    })
  })
}
</script>


<!-- ================================================================
  STYLE SECTION
  scoped — means these CSS rules only apply to elements in THIS component.
  Any class defined here will NOT bleed into child components or global styles.
================================================================ -->
<style scoped>

/* ----------------------------------------------------------------
   CSS CUSTOM PROPERTIES (DESIGN TOKENS)
   Defined on :root so they are accessible throughout this component.
   Using variables makes global color/font changes a single-line edit.
---------------------------------------------------------------- */
:root {
  --black: #000000;        /* Primary text and background color */
  --white: #FFFFFF;        /* Page background and inverted text */
  --orange: #FF4500;       /* Brand accent color (badges, highlights, CTA hover) */
  --gray-light: #F5F5F5;   /* Subtle background tint for cards/zones */
  --gray-text: #666666;    /* Secondary/body text color */
  --border: #E5E5E5;       /* Default border color for cards and dividers */

  /* Monospace font for code-like labels, step numbers, console elements */
  --font-mono: 'JetBrains Mono', monospace;

  /* Primary sans-serif for headings and body text; falls back gracefully */
  --font-sans: 'Space Grotesk', 'Noto Sans SC', system-ui, sans-serif;

  /* Chinese/CJK character support fallback font */
  --font-cn: 'Noto Sans SC', system-ui, sans-serif;
}

/* ----------------------------------------------------------------
   ROOT CONTAINER
   Full-height white page with the sans-serif font family applied globally.
---------------------------------------------------------------- */
.home-container {
  min-height: 100vh;             /* At least as tall as the viewport */
  background: var(--white);      /* White page background */
  font-family: var(--font-sans); /* Default font for all child elements */
  color: var(--black);           /* Default text color */
}

/* ----------------------------------------------------------------
   TOP NAVIGATION BAR
---------------------------------------------------------------- */
.navbar {
  height: 60px;                         /* Fixed height for the nav bar */
  background: var(--black);             /* Black background contrasts with white page */
  color: var(--white);                  /* White text on dark background */
  display: flex;                        /* Flexbox to space brand and links apart */
  justify-content: space-between;       /* Push brand left, links right */
  align-items: center;                  /* Vertically center both elements */
  padding: 0 40px;                      /* Horizontal padding matches main-content */
}

/* Brand name in the nav bar — uses monospace for a tech/terminal aesthetic */
.nav-brand {
  font-family: var(--font-mono);
  font-weight: 800;        /* Extra bold */
  letter-spacing: 1px;     /* Slight spacing for logo feel */
  font-size: 1.2rem;
}

/* Flex row that holds all navigation link items */
.nav-links {
  display: flex;
  align-items: center;
}

/* GitHub external link styling */
.github-link {
  color: var(--white);               /* White text to match navbar */
  text-decoration: none;             /* Remove underline */
  font-family: var(--font-mono);     /* Code-style font */
  font-size: 0.9rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 8px;                          /* Space between text and arrow */
  transition: opacity 0.2s;          /* Smooth fade on hover */
}

/* Dim the link slightly on hover for visual feedback */
.github-link:hover {
  opacity: 0.8;
}

/* The ↗ arrow character next to the link text */
.arrow {
  font-family: sans-serif; /* Override mono font so arrow renders correctly */
}


/* ----------------------------------------------------------------
   MAIN CONTENT WRAPPER
   Centers content and provides consistent horizontal padding.
---------------------------------------------------------------- */
.main-content {
  max-width: 1400px;     /* Prevents content from stretching too wide on large screens */
  margin: 0 auto;        /* Centers the block horizontally */
  padding: 60px 40px;    /* Top/bottom breathing room, horizontal gutter */
}


/* ----------------------------------------------------------------
   HERO SECTION — Side-by-side layout (text left, logo right)
---------------------------------------------------------------- */
.hero-section {
  display: flex;                    /* Horizontal side-by-side layout */
  justify-content: space-between;   /* Push left and right halves to opposite ends */
  margin-bottom: 80px;              /* Space before the dashboard section */
  position: relative;               /* Allows absolutely-positioned children if needed */
}

/* Left half of the hero: text content */
.hero-left {
  flex: 1;              /* Take up all available space not claimed by hero-right */
  padding-right: 60px;  /* Gap between left text and right logo */
}

/* Row containing the orange badge and version text */
.tag-row {
  display: flex;
  align-items: center;
  gap: 15px;                     /* Space between badge and version text */
  margin-bottom: 25px;           /* Space before the main headline */
  font-family: var(--font-mono); /* Monospace for the version label */
  font-size: 0.8rem;
}

/* Filled orange badge pill */
.orange-tag {
  background: var(--orange);   /* Solid orange fill */
  color: var(--white);
  padding: 4px 10px;
  font-weight: 700;
  letter-spacing: 1px;
  font-size: 0.75rem;
}

/* Muted gray version string next to the badge */
.version-text {
  color: #999;
  font-weight: 500;
  letter-spacing: 0.5px;
}

/* Large hero headline */
.main-title {
  font-size: 4.5rem;         /* Very large display text */
  line-height: 1.2;          /* Tight line height for display headings */
  font-weight: 500;          /* Medium weight — not too heavy for large sizes */
  margin: 0 0 40px 0;        /* Space below the heading */
  letter-spacing: -2px;      /* Negative tracking gives a modern, condensed look */
  color: var(--black);
}

/* Second line of the headline has a CSS gradient applied as text fill */
.gradient-text {
  /* The gradient goes from pure black to a dark gray, giving a subtle shaded effect */
  background: linear-gradient(90deg, #000000 0%, #444444 100%);
  /* Clip the background to the text shape only */
  -webkit-background-clip: text;
  /* Make the actual text color transparent so the background shows through */
  -webkit-text-fill-color: transparent;
  /* inline-block is required for background-clip: text to work on some browsers */
  display: inline-block;
}

/* Descriptive paragraph text block */
.hero-desc {
  font-size: 1.05rem;
  line-height: 1.8;          /* Generous line height for readability */
  color: var(--gray-text);   /* Secondary gray text */
  max-width: 640px;          /* Optimal line length for reading */
  margin-bottom: 50px;
  font-weight: 400;
  text-align: justify;       /* Aligns both left and right edges */
}

/* Space between paragraph elements inside hero-desc */
.hero-desc p {
  margin-bottom: 1.5rem;
}

/* Inline highlight: bold black text for the product name */
.highlight-bold {
  color: var(--black);
  font-weight: 700;
}

/* Inline highlight: orange monospace text for key feature names */
.highlight-orange {
  color: var(--orange);
  font-weight: 700;
  font-family: var(--font-mono);
}

/* Inline highlight: code-style chip with a faint background */
.highlight-code {
  background: rgba(0, 0, 0, 0.05); /* Very subtle dark tint */
  padding: 2px 6px;
  border-radius: 2px;               /* Slight rounding */
  font-family: var(--font-mono);
  font-size: 0.9em;                 /* Slightly smaller than surrounding text */
  color: var(--black);
  font-weight: 600;
}

/* Slogan/tagline text with an orange left border accent */
.slogan-text {
  font-size: 1.2rem;
  font-weight: 520;
  color: var(--black);
  letter-spacing: 1px;
  border-left: 3px solid var(--orange);  /* Orange vertical accent bar */
  padding-left: 15px;                    /* Text indented from the accent bar */
  margin-top: 20px;
}

/* Blinking cursor animation for the underscore at the end of the slogan */
.blinking-cursor {
  color: var(--orange);
  /* step-end makes the animation jump instantly (on/off) rather than fade */
  animation: blink 1s step-end infinite;
  font-weight: 700;
}

/* Keyframe: alternates between fully visible (1) and fully invisible (0) */
@keyframes blink {
  0%, 100% { opacity: 1; } /* Visible at start and end of each cycle */
  50% { opacity: 0; }       /* Invisible at midpoint */
}

/* Small decorative square in the brand accent color */
.decoration-square {
  width: 16px;
  height: 16px;
  background: var(--orange);
}

/* Right half of the hero: logo and scroll button */
.hero-right {
  flex: 0.8;                      /* Slightly smaller than the left side */
  display: flex;
  flex-direction: column;         /* Stack logo on top, button below */
  justify-content: space-between; /* Push button to the bottom */
  align-items: flex-end;          /* Right-align both children */
}

/* Wrapper that controls logo alignment within hero-right */
.logo-container {
  width: 100%;
  display: flex;
  justify-content: flex-end; /* Push the logo to the right edge */
  padding-right: 40px;       /* Inset slightly from the container edge */
}

/* The actual logo image — constrained to a max width */
.hero-logo {
  max-width: 500px; /* Prevents logo from being too large on wide screens */
  width: 100%;      /* Scales down on smaller screens */
}

/* Square scroll-down button with an orange arrow */
.scroll-down-btn {
  width: 40px;
  height: 40px;
  border: 1px solid var(--border);   /* Subtle gray border */
  background: transparent;           /* See-through background */
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: var(--orange);              /* Orange down-arrow character */
  font-size: 1.2rem;
  transition: all 0.2s;             /* Smooth border color transition on hover */
}

/* Highlight the border orange on hover to match the arrow color */
.scroll-down-btn:hover {
  border-color: var(--orange);
}


/* ----------------------------------------------------------------
   DASHBOARD SECTION — Two-column layout below the hero
---------------------------------------------------------------- */
.dashboard-section {
  display: flex;                  /* Side-by-side columns */
  gap: 60px;                      /* Space between left and right panels */
  border-top: 1px solid var(--border); /* Horizontal rule separating hero from dashboard */
  padding-top: 60px;              /* Space between the rule and the content */
  align-items: flex-start;        /* Columns start at the top (don't stretch to equal height) */
}

/* Both panels use column flex internally to stack their children vertically */
.dashboard-section .left-panel,
.dashboard-section .right-panel {
  display: flex;
  flex-direction: column;
}


/* ---- LEFT PANEL ---- */

.left-panel {
  flex: 0.8; /* Left panel takes slightly less width than the right panel */
}

/* Small header label with status indicator */
.panel-header {
  font-family: var(--font-mono);
  font-size: 0.8rem;
  color: #999;                   /* Muted color for a secondary label */
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 20px;
}

/* Orange square acting as an "active/online" status dot */
.status-dot {
  color: var(--orange);
  font-size: 0.8rem;
}

/* "Ready" heading below the status label */
.section-title {
  font-size: 2rem;
  font-weight: 520;
  margin: 0 0 15px 0;
}

/* Gray body text describing the current state */
.section-desc {
  color: var(--gray-text);
  margin-bottom: 25px;
  line-height: 1.6;
}

/* Flex row containing the two metric cards */
.metrics-row {
  display: flex;
  gap: 20px;
  margin-bottom: 15px;
}

/* Individual metric/stat card with a bordered box style */
.metric-card {
  border: 1px solid var(--border);
  padding: 20px 30px;
  min-width: 150px;  /* Ensures both cards have a consistent minimum size */
}

/* Large value text inside a metric card */
.metric-value {
  font-family: var(--font-mono);
  font-size: 1.8rem;
  font-weight: 520;
  margin-bottom: 5px;
}

/* Small label below the metric value */
.metric-label {
  font-size: 0.85rem;
  color: #999;
}


/* ---- WORKFLOW STEPS ---- */

/* Outer bordered container for the 5-step workflow list */
.steps-container {
  border: 1px solid var(--border);
  padding: 30px;
  position: relative; /* Could anchor decorative pseudo-elements if added later */
}

/* Header row of the workflow steps section */
.steps-header {
  font-family: var(--font-mono);
  font-size: 0.8rem;
  color: #999;
  margin-bottom: 25px;
  display: flex;
  align-items: center;
  gap: 8px;
}

/* The ◇ diamond outline icon */
.diamond-icon {
  font-size: 1.2rem;
  line-height: 1; /* Align icon baseline with label text */
}

/* Vertical stack of workflow items */
.workflow-list {
  display: flex;
  flex-direction: column;
  gap: 20px; /* Vertical spacing between each step */
}

/* A single workflow step row: number + title/description */
.workflow-item {
  display: flex;
  align-items: flex-start; /* Aligns number with the top of the text block */
  gap: 20px;
}

/* Step number (01–05) in monospace; opacity makes it visually subdued */
.step-num {
  font-family: var(--font-mono);
  font-weight: 700;
  color: var(--black);
  opacity: 0.3; /* Faded number acts as a decorative counter */
}

/* Flex container for the step's title and description */
.step-info {
  flex: 1; /* Takes remaining width after the step number */
}

/* Bold step title */
.step-title {
  font-weight: 520;
  font-size: 1rem;
  margin-bottom: 4px;
}

/* Smaller gray description text below the step title */
.step-desc {
  font-size: 0.85rem;
  color: var(--gray-text);
}


/* ---- RIGHT PANEL (Interaction Console) ---- */

.right-panel {
  flex: 1.2; /* Right panel is wider than left panel */
}

/* The styled "console" outer box — uses thick border for a terminal/panel look */
.console-box {
  border: 1px solid #CCC; /* Main border around the console */
  padding: 8px;            /* Inner padding creates a double-border visual effect */
}

/* Generic section block inside the console */
.console-section {
  padding: 20px;
}

/* The button section needs no top padding since it directly follows the textarea section */
.console-section.btn-section {
  padding-top: 0;
}

/* Header row within a console section: label on left, meta info on right */
.console-header {
  display: flex;
  justify-content: space-between; /* Label left, meta right */
  margin-bottom: 15px;
  font-family: var(--font-mono);
  font-size: 0.75rem;
  color: #666;
}

/* The drag-and-drop upload zone box */
.upload-zone {
  border: 1px dashed #CCC;   /* Dashed border signals a drop target */
  height: 200px;             /* Fixed height for visual consistency */
  overflow-y: auto;          /* Scrollable if many files are listed */
  display: flex;
  align-items: center;       /* Center placeholder vertically */
  justify-content: center;   /* Center placeholder horizontally */
  cursor: pointer;           /* Pointer cursor hints it's clickable */
  transition: all 0.3s;      /* Smooth background/border transition */
  background: #FAFAFA;       /* Very light gray background */
}

/* When files are present, align content to the top-left instead of centering */
.upload-zone.has-files {
  align-items: flex-start;
}

/* Hover state: slightly darker background and darker border for feedback */
.upload-zone:hover {
  background: #F0F0F0;
  border-color: #999;
}

/* The centered placeholder content shown before any files are selected */
.upload-placeholder {
  text-align: center;
}

/* Small bordered square containing the ↑ arrow icon */
.upload-icon {
  width: 40px;
  height: 40px;
  border: 1px solid #DDD;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 15px; /* Centers horizontally and adds space below */
  color: #999;
}

/* "Drag & Drop to Upload" text */
.upload-title {
  font-weight: 500;
  font-size: 0.9rem;
  margin-bottom: 5px;
}

/* Subtext hint below the title */
.upload-hint {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  color: #999;
}

/* Scrollable list container for uploaded files */
.file-list {
  width: 100%;
  padding: 15px;
  display: flex;
  flex-direction: column;
  gap: 10px; /* Vertical spacing between file rows */
}

/* A single file row: icon + name + remove button */
.file-item {
  display: flex;
  align-items: center;
  background: var(--white);
  padding: 8px 12px;
  border: 1px solid #EEE; /* Subtle border to separate file items */
  font-family: var(--font-mono);
  font-size: 0.85rem;
}

/* File name takes all available width between icon and remove button */
.file-name {
  flex: 1;
  margin: 0 10px; /* Horizontal gap from icon and button */
}

/* The × remove button is minimal / icon-only */
.remove-btn {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.2rem;
  color: #999; /* Muted so it doesn't draw attention from the file name */
}


/* ---- CONSOLE DIVIDER ---- */

/* Horizontal rule with centered label text; uses flexbox pseudo-element trick */
.console-divider {
  display: flex;
  align-items: center;
  margin: 10px 0;
}

/* ::before and ::after create the horizontal lines on each side of the label */
.console-divider::before,
.console-divider::after {
  content: '';      /* Required for pseudo-elements to render */
  flex: 1;          /* Each line grows to fill available space equally */
  height: 1px;
  background: #EEE; /* Very light gray line */
}

/* The centered label text between the two lines */
.console-divider span {
  padding: 0 15px;               /* Space between label text and the lines */
  font-family: var(--font-mono);
  font-size: 0.7rem;
  color: #BBB;
  letter-spacing: 1px;
}


/* ---- TEXTAREA INPUT ---- */

/* Wrapper provides positioning context for the overlaid model badge */
.input-wrapper {
  position: relative;
  border: 1px solid #DDD;
  background: #FAFAFA;
}

/* The actual <textarea> element for simulation prompt input */
.code-input {
  width: 100%;
  border: none;             /* Border is on the wrapper, not the textarea itself */
  background: transparent;  /* Let the wrapper's background show through */
  padding: 20px;
  font-family: var(--font-mono); /* Monospace reinforces the "code input" metaphor */
  font-size: 0.9rem;
  line-height: 1.6;
  resize: vertical;         /* User can drag to resize height, but not width */
  outline: none;            /* Remove default browser focus ring */
  min-height: 150px;        /* Prevents collapsing too small */
}

/* Small label overlaid in the bottom-right corner of the textarea */
.model-badge {
  position: absolute;     /* Positioned relative to .input-wrapper */
  bottom: 10px;
  right: 15px;
  font-family: var(--font-mono);
  font-size: 0.7rem;
  color: #AAA; /* Very muted — informational but non-intrusive */
}


/* ---- START ENGINE BUTTON ---- */

/* Full-width CTA button in black */
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
  justify-content: space-between; /* Text on the left, arrow → on the right */
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease; /* Smooth background and transform changes */
  letter-spacing: 1px;
  position: relative;
  overflow: hidden; /* Clips any overflow from potential pseudo-element effects */
}

/* Active (not disabled) state: black button with pulsing border animation */
.start-engine-btn:not(:disabled) {
  background: var(--black);
  border: 1px solid var(--black);
  animation: pulse-border 2s infinite; /* Subtle attention-drawing animation */
}

/* Hover state for active button: changes to orange, lifts slightly */
.start-engine-btn:hover:not(:disabled) {
  background: var(--orange);
  border-color: var(--orange);
  transform: translateY(-2px); /* Slight upward lift on hover */
}

/* Active/pressed state: removes the lift to simulate being pressed down */
.start-engine-btn:active:not(:disabled) {
  transform: translateY(0);
}

/* Disabled state: grayed out, not interactive, no hover effects */
.start-engine-btn:disabled {
  background: #E5E5E5;
  color: #999;
  cursor: not-allowed;
  transform: none;
  border: 1px solid #E5E5E5;
}

/*
  Pulse border animation:
  Creates a soft glowing shadow that expands and fades out,
  drawing the user's eye to the button when it becomes active.
*/
@keyframes pulse-border {
  0%   { box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.2); }  /* Shadow starts small and visible */
  70%  { box-shadow: 0 0 0 6px rgba(0, 0, 0, 0); }  /* Shadow expands and becomes transparent */
  100% { box-shadow: 0 0 0 0 rgba(0, 0, 0, 0); }    /* Resets to nothing before repeating */
}


/* ----------------------------------------------------------------
   RESPONSIVE BREAKPOINT — Stacks columns vertically on tablets/mobile
---------------------------------------------------------------- */
@media (max-width: 1024px) {

  /* Stack the dashboard columns vertically on smaller screens */
  .dashboard-section {
    flex-direction: column;
  }

  /* Stack the hero left/right content vertically on smaller screens */
  .hero-section {
    flex-direction: column;
  }

  /* Remove the right padding that created space for the logo column */
  .hero-left {
    padding-right: 0;
    margin-bottom: 40px; /* Add bottom spacing before the logo */
  }

  /* Shrink the logo for smaller viewports */
  .hero-logo {
    max-width: 200px;
    margin-bottom: 20px;
  }
}
</style>