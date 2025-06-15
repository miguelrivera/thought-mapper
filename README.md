
# ThoughtMapper

**Visualize your thinking, supercharge brainstorming, and let AI help you explore and resolve complex goals.**

## Overview

**ThoughtMapper** is a modern Svelte 5 application for mapping your ideas, research, and conversations as you pursue ambitious goals-whether you're building an organization, investigating a problem, or planning a project.

- **Create projects:** Start with a big question or challenge.
- **Build a map:** Add nodes for sub-questions, evidence, or opinions. Link them with "supports" or "contradicts" relationships.
- **Spot contradictions:** See conflicting information at a glance.
- **Let AI help:** (Coming soon) Get brainstorming suggestions, sub-questions, and even step-by-step plans, personalized to you and your domain.

## Features

- **Visual Thought Map:**  
  Build a network of nodes (ideas, facts, quotes, questions) and see how they connect.

- **Link Relationships:**  
  Mark connections as "supports," "contradicts," or "related."

- **Contradiction Detection:**  
  Instantly see where information conflicts, so you can follow up or resolve discrepancies.

- **Source & Status Tracking:**  
  Tag every node with its source, author, and mark as "unresolved" or "answered."

- **Project Management:**  
  Multiple projects per user; dashboard for switching, tracking progress, and metrics.

- **Search & Filter:**  
  Find information quickly by keyword, tag, or source.

- **Timeline & Evolution:**  
  Track how your understanding and map change over time.

- **AI-Assisted Exploration:** (Planned)  
  - Personalized AI (via open-source LLMs like Phi-3/Llama 3)
  - Suggests sub-questions, missing evidence, or possible solutions.
  - "Remembers" user/project context for richer, more relevant help.

## Architecture

- **Frontend:** Svelte 5 SPA, DaisyUI/Tailwind CSS, vis-network for mindmap-style graphing.
- **Backend:** C# orchestrator API (ASP.NET Core Minimal API or similar)
    - Handles user auth, project context, and all AI/LLM interaction.
    - Connects to local LLMs (Phi-3, Llama 3, etc.) via [Ollama](https://ollama.com/) or similar.
- **AI Layer:** Open-source LLM, running locally via API. Pluggable, OpenAI-compatible.

## Roadmap & Phases

### **Phase 1: Foundations**
- [x] Visual node graph with links and contradiction detection
- [x] Multiple projects per user
- [x] Dashboard with metrics (depth, unresolved, contradictions, etc.)
- [x] Add node via modal/dialog
- [x] Node/link editing and deletion

### **Phase 2: User & Context Management**
- [ ] User registration/login (with C# API backend)
- [ ] Per-user context in orchestrator
- [ ] Projects and nodes associated with users and sessions

### **Phase 3: AI Integration**
- [ ] C# middleware for AI orchestration (prompt/response, project "memory")
- [ ] Local LLM integration (Phi-3, Llama 3, etc. via Ollama)
- [ ] AI-driven: initial solution suggestion, follow-up questions, sub-nodes
- [ ] "Personalized" AI-remembers your past questions, adapts suggestions

### **Phase 4: Usability & Power**
- [ ] Advanced search and filter
- [ ] Export/import (JSON/CSV)
- [ ] Collaboration features (share maps, comments)
- [ ] Deployment adapters and cloud/local install

## Developing

### Prerequisites
- [Node.js](https://nodejs.org/)
- [Ollama](https://ollama.com/) (for local AI, optional but recommended)
- [Docker](https://www.docker.com/) or [OCI-compatible container runtime](https://opencontainers.org/) (for running local LLMs or backend services)
- [.NET 9+](https://dotnet.microsoft.com/) (for backend orchestrator, planned)

### Running

**Frontend:**
```bash
npm install
npm run dev
# or start the server and open the app in a new browser tab
npm run dev -- --open
```
**Backend (coming soon):**
```bash
dotnet run --project src/backend/ThoughtMapper.Orchestrator
```
Or run the provided Docker Compose setup for both UI and API (coming soon).

### Building

To create a production version of the app:
```bash
npm run build
```
You can preview the production build with:
```bash
npm run preview
```

## Usage

1. **Create or select a project:** Start a new thought map for your goal or investigation.
2. **Add nodes:** Capture facts, opinions, questions, or ideas.
3. **Link nodes:** Connect ideas, mark supports/contradicts.
4. **Resolve contradictions:** Track open questions and surface conflicts.
5. **(Planned) Use AI to suggest questions, sub-nodes, and possible solutions tailored to your project.**

## Tech Stack

- [Svelte 5](https://svelte.dev/) (Frontend)
- [DaisyUI](https://daisyui.com/) + [Tailwind CSS](https://tailwindcss.com/) (Styling)
- [vis-network](https://visjs.github.io/vis-network/) (Graph visualization)
- [Vite](https://vitejs.dev/) (Build tool)
- [ASP.NET Core](https://dotnet.microsoft.com/) (Backend/middleware/orchestrator)
- [Ollama](https://ollama.com/) or [LM Studio](https://lmstudio.ai/) (Local AI)
- [Phi-3](https://github.com/microsoft/phi-3), [Llama 3](https://ai.meta.com/llama/) (Open LLMs)
- LocalStorage (for prototyping; database integration planned)
- [Docker](https://www.docker.com/) or OCI (for containerized deploys)

## Contributing

Contributions are welcome!  
Open issues or submit pull requests for features, bugfixes, or ideas.

## License

[Apache-2.0](LICENSE)

## Inspiration

Inspired by mind maps, knowledge graphs, personal knowledge management, and the dream of a **personal AI copilot** for every big goal.

## Credits

Built by contributors, with help from open-source AI, Svelte, and the OSS community.
