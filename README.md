# ThoughtMapper

**Visualize your ideas, track evidence, and reveal contradictions as you explore complex goals.**

## Overview

**ThoughtMapper** is a Svelte 5 application for mapping your thoughts, research, and conversations as you pursue ambitious goals—whether you’re building an organization, investigating a problem, or planning a big project.  
Easily add new insights from meetings, tag them by source, and connect ideas visually. The app helps you discover gaps in knowledge and highlights contradictions, so you can resolve uncertainty and make informed decisions.

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

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/)

### sv

Everything you need to build a Svelte project, powered by [`sv`](https://github.com/sveltejs/cli).

#### Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npx sv create

# create a new project in my-app
npx sv create my-app
```

#### Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

#### Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.

### Usage

1. **Create a new project:** Start a new “thought map” for your goal or investigation.
2. **Add nodes:** Capture facts, opinions, questions, or ideas as nodes.
3. **Link nodes:** Connect related ideas and specify the type of relationship.
4. **Spot contradictions:** Contradictory links are highlighted for easy review.

## Roadmap

- [ ] Node graph visualization with drag-and-drop
- [ ] Full-text search & filtering
- [ ] Contradiction view (list all conflicting info)
- [ ] Meeting note integration
- [ ] Timeline/history view
- [ ] Data import/export


## Tech Stack

- [Svelte 5](https://svelte.dev/)
- [vis-network](https://visjs.github.io/vis-network/) or [d3.js](https://d3js.org/) (for graph visualization)
- [Vite](https://vitejs.dev/) (build tool)
- LocalStorage (for quick prototyping; can swap for backend later)

## Contributing

Contributions are welcome!  
Feel free to open issues or submit pull requests to suggest new features, improvements, or bug fixes.


## License

[Apache-2](LICENSE)


## Inspiration

Inspired by mind maps, personal knowledge management tools, and the need to make sense of complex, evolving information—especially in collaborative or investigative settings.

