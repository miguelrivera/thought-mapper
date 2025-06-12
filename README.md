
# ThoughtMapper

**Visualize your ideas, track evidence, and reveal contradictions as you explore complex goals.**

---

## Overview

**ThoughtMapper** is a Svelte 5 application for mapping your thoughts, research, and conversations as you pursue ambitious goals—whether you’re building an organization, investigating a problem, or planning a big project.  
Easily add new insights from meetings, tag them by source, and connect ideas visually. The app helps you discover gaps in knowledge and highlights contradictions, so you can resolve uncertainty and make informed decisions.

---

## Features

- **Visual Thought Map:**  
  Build a network of nodes (ideas, facts, quotes, questions) and see how they connect.

- **Link Relationships:**  
  Mark connections as “supports,” “contradicts,” or “related.”

- **Contradiction Detection:**  
  Instantly see where information conflicts, so you can follow up or resolve discrepancies.

- **Source Tracking:**  
  Tag every node with its source—meeting, document, person, or date.

- **Search & Filter:**  
  Find information quickly by keyword, tag, or source.

- **Timeline & Evolution:**  
  Optional: Track how your understanding changes over time.

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/)
- [pnpm](https://pnpm.io/) (or npm/yarn)

### Installation

```bash
git clone https://github.com/miguelrivera/thought-mapper.git
cd thought-mapper
pnpm install
pnpm dev
```
Or, if using npm:
```bash
npm install
npm run dev
```

### Usage

1. **Create a new project:** Start a new “thought map” for your goal or investigation.
2. **Add nodes:** Capture facts, opinions, questions, or ideas as nodes.
3. **Link nodes:** Connect related ideas and specify the type of relationship.
4. **Spot contradictions:** Contradictory links are highlighted for easy review.

---

## Roadmap

- [ ] Node graph visualization with drag-and-drop
- [ ] Full-text search & filtering
- [ ] Contradiction view (list all conflicting info)
- [ ] Meeting note integration
- [ ] Timeline/history view
- [ ] Data import/export

---

## Tech Stack

- [Svelte 5](https://svelte.dev/)
- [vis-network](https://visjs.github.io/vis-network/) or [d3.js](https://d3js.org/) (for graph visualization)
- [Vite](https://vitejs.dev/) (build tool)
- LocalStorage (for quick prototyping; can swap for backend later)

---

## Contributing

Contributions are welcome!  
Feel free to open issues or submit pull requests to suggest new features, improvements, or bug fixes.

---

## License

[Apache-2](LICENSE)

---

## Inspiration

Inspired by mind maps, personal knowledge management tools, and the need to make sense of complex, evolving information—especially in collaborative or investigative settings.
