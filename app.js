/**
 * MY AI WORKSPACE — INTERACTIVE CLIENT APPLICATION
 * Features:
 *  - Interactive Neural Particle Canvas in Hero
 *  - Real 10-Prompt Catalog with Live Real-time Search & Category Filters
 *  - Working "Copy Prompt" with Clipboard API & Toast Feedback
 *  - Interactive Project Detail Modals for Builds 01–06
 *  - Interactive Workspace Folder Explorer Modals
 *  - Mobile Navigation & Smooth Scroll Observers
 */

// ==========================================
// 1. DATA REPOSITORIES (FROM VERIFIED FILES)
// ==========================================

const PROMPTS_DATA = [
  {
    id: 1,
    name: "Simple Topic Explainer",
    category: "Education",
    tool: "ChatGPT",
    template: "Explain [TOPIC] in simple English with examples.",
    whenToUse: "When I need to understand a difficult or confusing concept.",
    notes: "Keep the explanation beginner-friendly and highlight key definitions."
  },
  {
    id: 2,
    name: "Exam Answer Writer",
    category: "Education",
    tool: "ChatGPT",
    template: "Write an exam answer on [TOPIC] for [MARKS] marks using simple language, headings, examples, and a conclusion.",
    whenToUse: "When preparing structured answers for college semester exams.",
    notes: "Verify important factual points with university class notes."
  },
  {
    id: 3,
    name: "Study Timetable Maker",
    category: "Productivity",
    tool: "ChatGPT",
    template: "Create a weekly study timetable for [SUBJECTS] based on my available time [TIME].",
    whenToUse: "When planning balanced study hours and revision sessions for the week.",
    notes: "Include adequate rest breaks and realistic daily study blocks."
  },
  {
    id: 4,
    name: "Notes Summarizer",
    category: "Education",
    tool: "ChatGPT",
    template: "Summarize the following material into key points and simple explanations: [TEXT].",
    whenToUse: "When revising lengthy syllabus chapters or textbook sections.",
    notes: "Preserve core formulas, definitions, and technical terms."
  },
  {
    id: 5,
    name: "Coding Tutor",
    category: "Programming",
    tool: "ChatGPT",
    template: "Explain [CODE OR CONCEPT] to a beginner, step by step, with a simple example.",
    whenToUse: "When learning Python, web development, or debugging code logic.",
    notes: "Explain runtime/syntax errors and step-by-step remediation."
  },
  {
    id: 6,
    name: "Presentation Planner",
    category: "Productivity",
    tool: "ChatGPT",
    template: "Create a presentation outline on [TOPIC] with a title, key points, examples, and conclusion.",
    whenToUse: "When preparing college slide decks and seminar speeches.",
    notes: "Keep slide text clear, concise, and structured for visual impact."
  },
  {
    id: 7,
    name: "English Grammar Helper",
    category: "Language",
    tool: "ChatGPT",
    template: "Explain [GRAMMAR TOPIC] in simple English with rules and five examples.",
    whenToUse: "When practicing professional English grammar and technical writing.",
    notes: "Identify grammatical errors and provide corrected sentences politely."
  },
  {
    id: 8,
    name: "Project Idea Generator",
    category: "Projects",
    tool: "ChatGPT",
    template: "Suggest five beginner-friendly project ideas related to [FIELD], including purpose, features, and tools.",
    whenToUse: "When brainstorming ideas for BCA practical assignments or capstones.",
    notes: "Prioritize achievable ideas with clear technical learning curves."
  },
  {
    id: 9,
    name: "Writing Improver",
    category: "Writing",
    tool: "ChatGPT",
    template: "Improve the grammar and clarity of this text without changing its meaning: [TEXT].",
    whenToUse: "When writing professional emails, reports, or messages to faculty.",
    notes: "Ensure a polite, respectful, and natural professional tone."
  },
  {
    id: 10,
    name: "Practice Quiz Creator",
    category: "Assessment",
    tool: "ChatGPT",
    template: "Create 10 practice questions on [TOPIC], from easy to difficult, with answers and explanations.",
    whenToUse: "When evaluating subject retention and self-testing prior to exams.",
    notes: "Attempt solving the questions before inspecting the answer key."
  }
];

const BUILDS_DETAIL_DATA = {
  1: {
    badge: "BUILD 01",
    title: "AI Comparison Report",
    subtitle: "Empirical Model Benchmarking: ChatGPT vs Google Gemini vs MS Copilot",
    reportFile: "Projects/Build_1_AI_Comparison_Report.docx",
    objective: "Conduct a rigorous, objective comparison of ChatGPT, Gemini, and Copilot across identical technical tasks to evaluate coding accuracy, conceptual clarity, and execution speed.",
    workCompleted: "Executed 3 standardized prompt benchmarks: (1) Python calculator program, (2) Difference between AI and Machine Learning, and (3) HTML student registration form markup. Graded models on a 5-point scale.",
    toolsUsed: "OpenAI ChatGPT, Google Gemini, Microsoft Copilot, Python, HTML5.",
    outcome: "ChatGPT achieved 5/5 in coding logic and error handling; Gemini provided outstanding conceptual explanations; Copilot offered fast generation with direct web citations.",
    evidenceNote: "Report verified and finalized on disk: Projects/Build_1_AI_Comparison_Report.docx"
  },
  2: {
    badge: "BUILD 02",
    title: "Personal Prompt Playbook",
    subtitle: "10 Parameterized Prompts with Practical Expectations & Output Verification",
    reportFile: "Projects/Build_2_Personal_Prompt_Playbook.docx",
    objective: "Eliminate generic AI outputs by designing a curated playbook of 10 structured prompts (5 for academic study, 5 for technical work).",
    workCompleted: "Constructed parameterized prompt templates with [BRACKETED_PLACEHOLDERS], defined situational use triggers, and validated each prompt with sample outputs.",
    toolsUsed: "ChatGPT, Notepad, Microsoft Word.",
    outcome: "Created a reliable, reusable prompt playbook that reduces setup time and guarantees consistent model responses.",
    evidenceNote: "Report verified and finalized on disk: Projects/Build_2_Personal_Prompt_Playbook.docx"
  },
  3: {
    badge: "BUILD 03",
    title: "Personal AI Study Kit",
    subtitle: "Python Operators Syllabus Mastery & Interactive Quiz System",
    reportFile: "Projects/Build_3_Personal_AI_Study_Kit.docx",
    objective: "Develop a domain-specific study kit for BCA second-year Python programming focusing on Python Operators.",
    workCompleted: "Generated comprehensive reference notes covering 7 operator types (Arithmetic, Relational, Logical, Bitwise, Assignment, Identity, Membership), syntax tables, and a 5-question test.",
    toolsUsed: "ChatGPT, Google NotebookLM, Python 3.14.",
    outcome: "Delivered a student-friendly revision guide that condenses complex programming concepts into quick-reference tables.",
    evidenceNote: "Report verified and finalized on disk: Projects/Build_3_Personal_AI_Study_Kit.docx"
  },
  4: {
    badge: "BUILD 04",
    title: "Career Starter Pack",
    subtitle: "Targeted Role Alignment: Front-End Developer Intern (Arivihan Technologies)",
    reportFile: "Projects/Build_4_Career_Starter_Pack.docx",
    objective: "Bridge academic coursework with industry requirements by preparing tailored application assets for a live front-end internship posting.",
    workCompleted: "Analyzed an internship posting at Arivihan Technologies (Indore), extracted core skills (HTML, CSS, JS, React, Git), tailored a BCA resume summary, and prepared 10 technical interview Q&As.",
    toolsUsed: "ChatGPT, Wellfound, LinkedIn, Word.",
    outcome: "Built an actionable career preparation package that highlights student strengths and directly addresses software employer expectations.",
    evidenceNote: "Report verified and finalized on disk: Projects/Build_4_Career_Starter_Pack.docx"
  },
  5: {
    badge: "BUILD 05",
    title: "10-Step Prompt Chain Report",
    subtitle: "Sequential Multi-Stage Pipeline for Exam Revision Notes",
    reportFile: "Projects/Build_5_10_Step_Prompt_Chain_Report.docx",
    objective: "Implement advanced prompt chaining where each stage feeds its output directly into the next prompt to build comprehensive Python exam notes.",
    workCompleted: "Executed 10 chained steps: Goal -> Scope -> Concept -> Classification -> Code Examples -> Common Pitfalls -> Cheat Sheet -> Quiz Formulation -> Answer Explanations -> Final Review.",
    toolsUsed: "ChatGPT, Google NotebookLM, Microsoft Word.",
    outcome: "Proven methodology demonstrating that chained reasoning produces exponentially richer and more accurate technical documentation than single-shot prompts.",
    evidenceNote: "Report verified and finalized on disk: Projects/Build_5_10_Step_Prompt_Chain_Report.docx"
  },
  6: {
    badge: "BUILD 06",
    title: "My AI Workspace (Personal AI OS)",
    subtitle: "Four-Tier Local Digital Environment & Capstone Integration",
    reportFile: "Projects/Build_6_Report.docx",
    objective: "Architect, verify, and document a sustainable, permanent Personal AI Operating System on the local workstation.",
    workCompleted: "Created the four functional folders (Tools, Prompt Library, Knowledge Base, Projects), verified all 15 local assets, generated the architecture diagram, and authored the final capstone report.",
    toolsUsed: "Antigravity (AI Workspace Agent), Python 3.14, Microsoft Word, File Explorer.",
    outcome: "A fully operational personal AI infrastructure supporting BCA coursework, software engineering, and future technical growth.",
    evidenceNote: "Report verified and finalized on disk: Projects/Build_6_Report.docx"
  }
};

const FOLDER_DETAIL_DATA = {
  tools: {
    name: "Tools Folder",
    layer: "The Execution Layer",
    desc: "Contains reference directories and operational guides for all software and artificial intelligence models integrated into the workspace.",
    files: [
      { name: "AI tools.txt", size: "150 B", desc: "Core tool capabilities (ChatGPT, Gemini, NotebookLM, Antigravity)" },
      { name: "AI_Playbook.docx", size: "38.1 KB", desc: "Detailed operating manual for tool selection and prompting" }
    ],
    role: "Directs technical queries to the appropriate engine (e.g. ChatGPT for coding, Gemini for research, NotebookLM for grounded documents)."
  },
  prompts: {
    name: "Prompt Library Folder",
    layer: "The Procedural Memory",
    desc: "Houses standardized, parameterized prompt templates and complex multi-step prompt chains categorized by academic, coding, and productivity tasks.",
    files: [
      { name: "10_Prompts.txt", size: "2.8 KB", desc: "Core 6-field standardized prompt catalog (10 verified prompts)" },
      { name: "10_Step_Prompt_Chain_Weekly_Study_Timetable.docx", size: "37.8 KB", desc: "Sequential timetable prompt chain" },
      { name: "my prompts.txt", size: "2.2 KB", desc: "Working templates and active prompt drafts" }
    ],
    role: "Ensures immediate access to high-impact prompts without re-inventing queries or risking hallucinated model outputs."
  },
  knowledge: {
    name: "Knowledge Base Folder",
    layer: "The Context Repository",
    desc: "Functions as the personal 'Second Brain', storing verified syllabus notes, study kits, and source documents used to ground AI queries.",
    files: [
      { name: "Study_Kit.docx", size: "38.0 KB", desc: "Reusable AI-assisted study methodology and framework" },
      { name: "learning notes.txt", size: "662 B", desc: "Foundational definitions on AI, Prompting, and Python" }
    ],
    role: "Integrates with Google NotebookLM to synthesize revision guides strictly from uploaded, trusted course materials."
  },
  projects: {
    name: "Projects Folder",
    layer: "The Deliverables Hub",
    desc: "Archives all milestone project reports from Builds 1 through 6, capstone portfolios, and future growth roadmaps.",
    files: [
      { name: "Build_1_AI_Comparison_Report.docx", size: "7.6 KB", desc: "Build 1 Benchmark Report" },
      { name: "Build_2_Personal_Prompt_Playbook.docx", size: "9.6 KB", desc: "Build 2 Prompt Playbook" },
      { name: "Build_3_Personal_AI_Study_Kit.docx", size: "10.3 KB", desc: "Build 3 Python Study Kit" },
      { name: "Build_4_Career_Starter_Pack.docx", size: "9.2 KB", desc: "Build 4 Career & Resume Pack" },
      { name: "Build_5_10_Step_Prompt_Chain_Report.docx", size: "38.6 KB", desc: "Build 5 10-Step Chain Report" },
      { name: "Build_6_Report.docx", size: "41.2 KB", desc: "Build 6 Final Project Report" },
      { name: "My_AI_Workspace_Portfolio_Final.docx", size: "148 KB", desc: "Official Capstone Portfolio" },
      { name: "Next month plan.txt", size: "554 B", desc: "7-Point Action Plan" }
    ],
    role: "Maintains versioned proof of completed work and provides an ongoing archive for future college assignments."
  }
};

// ==========================================
// 2. DOM INITIALIZATION
// ==========================================

document.addEventListener("DOMContentLoaded", () => {
  initNeuralCanvas();
  renderPromptLibrary(PROMPTS_DATA);
  setupPromptSearchAndFilter();
  setupNavbar();
  setupModals();
});

// ==========================================
// 3. NEURAL PARTICLE CANVAS IN HERO
// ==========================================
function initNeuralCanvas() {
  const canvas = document.getElementById("neuralCanvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  let width = (canvas.width = canvas.parentElement.offsetWidth);
  let height = (canvas.height = canvas.parentElement.offsetHeight);

  window.addEventListener("resize", () => {
    width = canvas.width = canvas.parentElement.offsetWidth;
    height = canvas.height = canvas.parentElement.offsetHeight;
  });

  const particleCount = Math.min(Math.floor(width / 22), 55);
  const particles = [];

  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.45,
      vy: (Math.random() - 0.5) * 0.45,
      radius: Math.random() * 2 + 1,
      color: Math.random() > 0.5 ? "rgba(56, 189, 248, " : "rgba(129, 140, 248, "
    });
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);

    // Draw connecting lines
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 120) {
          const alpha = (1 - dist / 120) * 0.22;
          ctx.strokeStyle = `rgba(56, 189, 248, ${alpha})`;
          ctx.lineWidth = 0.8;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }
    }

    // Draw and update particles
    particles.forEach((p) => {
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0 || p.x > width) p.vx *= -1;
      if (p.y < 0 || p.y > height) p.vy *= -1;

      ctx.fillStyle = p.color + "0.65)";
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fill();
    });

    requestAnimationFrame(animate);
  }

  animate();
}

// ==========================================
// 4. PROMPT LIBRARY RENDERING & INTERACTIONS
// ==========================================
function renderPromptLibrary(prompts) {
  const container = document.getElementById("promptsGrid");
  if (!container) return;

  if (prompts.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 40px; color: var(--text-muted);">
        <p style="font-size: 1.1rem; margin-bottom: 8px;">No prompts found matching your criteria.</p>
        <span style="font-size: 0.9rem;">Try searching for another keyword or selecting "All" categories.</span>
      </div>
    `;
    return;
  }

  container.innerHTML = prompts
    .map(
      (p) => `
    <div class="glass-card prompt-card" data-category="${p.category}">
      <div class="prompt-card-top">
        <div class="prompt-badge-row">
          <span class="prompt-cat-badge">${p.category}</span>
          <span class="prompt-tool-badge">Best: ${p.tool}</span>
        </div>
        <h3 class="prompt-name">${p.name}</h3>
        <div class="prompt-template-box">${escapeHtml(p.template)}</div>
        <div class="prompt-meta-details">
          <div><strong>When to use:</strong> ${p.whenToUse}</div>
          <div><strong>Notes:</strong> ${p.notes}</div>
        </div>
      </div>
      <button class="btn-copy" onclick="copyPromptText('${escapeJsString(p.template)}', this)">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
        </svg>
        <span>Copy Prompt</span>
      </button>
    </div>
  `
    )
    .join("");
}

function setupPromptSearchAndFilter() {
  const searchInput = document.getElementById("promptSearch");
  const filterBtns = document.querySelectorAll(".filter-btn");

  let currentCategory = "All";
  let currentSearch = "";

  function applyFilters() {
    const filtered = PROMPTS_DATA.filter((p) => {
      const matchCat = currentCategory === "All" || p.category.toLowerCase() === currentCategory.toLowerCase();
      const matchSearch =
        currentSearch === "" ||
        p.name.toLowerCase().includes(currentSearch) ||
        p.template.toLowerCase().includes(currentSearch) ||
        p.category.toLowerCase().includes(currentSearch) ||
        p.notes.toLowerCase().includes(currentSearch) ||
        p.whenToUse.toLowerCase().includes(currentSearch);
      return matchCat && matchSearch;
    });

    renderPromptLibrary(filtered);
  }

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      currentSearch = e.target.value.trim().toLowerCase();
      applyFilters();
    });
  }

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      currentCategory = btn.getAttribute("data-filter");
      applyFilters();
    });
  });
}

// Copy to Clipboard
window.copyPromptText = function (text, btnElement) {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard
      .writeText(text)
      .then(() => triggerCopySuccess(btnElement))
      .catch(() => fallbackCopy(text, btnElement));
  } else {
    fallbackCopy(text, btnElement);
  }
};

function fallbackCopy(text, btnElement) {
  const textarea = document.createElement("textarea");
  textarea.value = text;
  document.body.appendChild(textarea);
  textarea.select();
  try {
    document.execCommand("copy");
    triggerCopySuccess(btnElement);
  } catch (err) {
    console.error("Copy failed", err);
  }
  document.body.removeChild(textarea);
}

function triggerCopySuccess(btn) {
  const originalHtml = btn.innerHTML;
  btn.classList.add("copied");
  btn.innerHTML = `
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
    <span>Copied!</span>
  `;

  showToast("Prompt copied to clipboard!");

  setTimeout(() => {
    btn.classList.remove("copied");
    btn.innerHTML = originalHtml;
  }, 2200);
}

function showToast(message) {
  let toast = document.getElementById("toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "toast";
    toast.className = "toast";
    document.body.appendChild(toast);
  }
  toast.innerHTML = `
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
    <span>${message}</span>
  `;
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 2500);
}

// ==========================================
// 5. MODAL SYSTEM
// ==========================================
function setupModals() {
  const overlay = document.getElementById("modalOverlay");
  const closeBtn = document.getElementById("modalClose");

  if (!overlay) return;

  function closeModal() {
    overlay.classList.remove("active");
  }

  if (closeBtn) closeBtn.addEventListener("click", closeModal);
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) closeModal();
  });

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && overlay.classList.contains("active")) closeModal();
  });

  // Open Project Modal
  window.openProjectModal = function (buildId) {
    const data = BUILDS_DETAIL_DATA[buildId];
    if (!data) return;

    const modalBody = document.getElementById("modalBody");
    modalBody.innerHTML = `
      <span class="modal-badge">${data.badge}</span>
      <h2 class="modal-title">${data.title}</h2>
      <p style="color: var(--cyan); font-weight: 500; margin-bottom: 16px;">${data.subtitle}</p>

      <h4 class="modal-section-title">Project Objective</h4>
      <p class="modal-text">${data.objective}</p>

      <h4 class="modal-section-title">Work Completed</h4>
      <p class="modal-text">${data.workCompleted}</p>

      <h4 class="modal-section-title">Tools Utilized</h4>
      <p class="modal-text">${data.toolsUsed}</p>

      <h4 class="modal-section-title">Key Outcome & Insights</h4>
      <p class="modal-text">${data.outcome}</p>

      <div style="margin-top: 24px; padding: 14px; border-radius: 8px; background: rgba(56, 189, 248, 0.08); border-left: 3px solid var(--cyan);">
        <span style="font-size: 0.85rem; color: #BAE6FD;">Verified Deliverable: <strong>${data.reportFile}</strong></span>
      </div>

      <div class="modal-footer">
        <a href="${data.reportFile}" download class="btn btn-primary" style="font-size: 0.875rem; padding: 10px 20px;">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
            <polyline points="7 10 12 15 17 10"></polyline>
            <line x1="12" y1="15" x2="12" y2="3"></line>
          </svg>
          <span>Download Word Report</span>
        </a>
      </div>
    `;

    overlay.classList.add("active");
  };

  // Open Workspace Folder Modal
  window.openFolderModal = function (folderKey) {
    const data = FOLDER_DETAIL_DATA[folderKey];
    if (!data) return;

    const modalBody = document.getElementById("modalBody");
    const fileListHtml = data.files
      .map(
        (f) => `
      <li class="modal-file-item">
        <div>
          <div class="modal-file-name">${f.name}</div>
          <div style="font-size: 0.775rem; color: var(--text-muted);">${f.desc}</div>
        </div>
        <span class="modal-file-action">${f.size}</span>
      </li>
    `
      )
      .join("");

    modalBody.innerHTML = `
      <span class="modal-badge">${data.layer}</span>
      <h2 class="modal-title">${data.name}</h2>
      <p class="modal-text" style="margin-bottom: 16px;">${data.desc}</p>

      <h4 class="modal-section-title">Architectural Role</h4>
      <p class="modal-text">${data.role}</p>

      <h4 class="modal-section-title">Verified Local Files</h4>
      <ul class="modal-file-list">
        ${fileListHtml}
      </ul>

      <div class="modal-footer">
        <button class="btn btn-secondary" onclick="document.getElementById('modalOverlay').classList.remove('active')" style="font-size: 0.875rem;">
          Close Overview
        </button>
      </div>
    `;

    overlay.classList.add("active");
  };
}

// ==========================================
// 6. NAVBAR & MOBILE MENU
// ==========================================
function setupNavbar() {
  const navbar = document.querySelector(".navbar");
  const toggleBtn = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  if (toggleBtn && navLinks) {
    toggleBtn.addEventListener("click", () => {
      navLinks.classList.toggle("mobile-nav");
      navLinks.classList.toggle("active");
    });

    document.querySelectorAll(".nav-link").forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("mobile-nav", "active");
      });
    });
  }

  // Active Link Observer
  const sections = document.querySelectorAll("section[id]");
  window.addEventListener("scroll", () => {
    const scrollY = window.pageYOffset;
    sections.forEach((current) => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute("id");
      const navItem = document.querySelector(`.nav-link[href*="${sectionId}"]`);

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        if (navItem) navItem.classList.add("active");
      } else {
        if (navItem) navItem.classList.remove("active");
      }
    });
  });
}

// Helpers
function escapeHtml(str) {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function escapeJsString(str) {
  return str.replace(/\\/g, "\\\\").replace(/'/g, "\\'").replace(/"/g, '\\"').replace(/\n/g, "\\n");
}
