const projects = [
  {
    name: "skillgrade",
    stack: "TypeScript",
    category: "Agent Skills",
    description: "Trust layer for Agent Skills: lint, scan, doctor, and CI summaries.",
    pain: "Stops broken, unsafe, or host-specific skills before they become someone else's install problem.",
    url: "https://github.com/xtt1997/skillgrade",
    tags: ["lint", "scan", "ci"],
  },
  {
    name: "mcpdock",
    stack: "TypeScript",
    category: "MCP Setup",
    description: "Local MCP server manager and exporter for Codex, Claude Desktop, and Cursor.",
    pain: "Keeps one source of truth for MCP servers instead of copying JSON into multiple clients.",
    url: "https://github.com/xtt1997/mcpdock",
    tags: ["mcp", "export", "doctor"],
  },
  {
    name: "promptdiff",
    stack: "Python",
    category: "Prompt Eval",
    description: "Zero-dependency CLI for diffing prompt and eval output snapshots.",
    pain: "Makes prompt regression reviews readable without booting a full evaluation platform.",
    url: "https://github.com/xtt1997/promptdiff",
    tags: ["diff", "eval", "snapshots"],
  },
  {
    name: "repocanon",
    stack: "Python",
    category: "Repo Docs",
    description: "Zero-dependency CLI for turning repositories into compact Markdown summaries.",
    pain: "Creates a fast first-pass repo overview for onboarding, release notes, and project handoffs.",
    url: "https://github.com/xtt1997/repocanon",
    tags: ["docs", "onboarding", "markdown"],
  },
  {
    name: "feishu-mcp-starter",
    stack: "Python",
    category: "China Workflow",
    description: "Minimal Feishu MCP starter kit with env doctor and config renderer.",
    pain: "Removes the dead time between “we need Feishu integration” and “we have a valid MCP-style config.”",
    url: "https://github.com/xtt1997/feishu-mcp-starter",
    tags: ["feishu", "starter", "env"],
  },
  {
    name: "csvlens-web",
    stack: "JavaScript",
    category: "Data Utility",
    description: "Lightweight browser CSV inspector with column summaries and preview table.",
    pain: "Lets you inspect a CSV immediately without opening a spreadsheet, notebook, or BI stack.",
    url: "https://github.com/xtt1997/csvlens-web",
    tags: ["csv", "browser", "preview"],
  },
];

const grid = document.querySelector("#project-grid");

function createCard(project) {
  const card = document.createElement("article");
  card.className = "card reveal";
  card.innerHTML = `
    <div class="card-head">
      <div>
        <p class="eyebrow">${project.category}</p>
        <h3>${project.name}</h3>
      </div>
      <span class="stack">${project.stack}</span>
    </div>
    <p>${project.description}</p>
    <p>${project.pain}</p>
    <div class="pills">
      ${project.tags.map((tag) => `<span class="pill">${tag}</span>`).join("")}
    </div>
    <div class="card-actions">
      <a class="card-link" href="${project.url}" target="_blank" rel="noreferrer">Open repository</a>
      <span>${project.stack}</span>
    </div>
  `;
  return card;
}

projects.forEach((project) => {
  grid.append(createCard(project));
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
      }
    });
  },
  { threshold: 0.12 },
);

document.querySelectorAll(".reveal").forEach((node) => observer.observe(node));
