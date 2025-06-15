<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import type { Project, Node } from '$lib';

  export let project: Project;

  let container: HTMLDivElement;
  let network: any;

  // You might base value on node importance, degree, or a custom metric:
  function getNodeData() {
    // Example: value = 1 for root, number of links for others
    return project.nodes.map(n => ({
      id: n.id.idString,
      label: n.title,
      title: n.content,
      shape: "dot",
      value: n.isRoot ? 10 : n.links.length + 1, // root gets higher value for size
      color: { background: "#60a5fa", border: "#2563eb", highlight: { background: "#38bdf8", border: "#2563eb" } },
      font: { color: "#fff", face: "Inter" },
      scaling: {
        min: 10,
        max: 50,
        label: { enabled: true, min: 12, max: 28 }
      }
    }));
  }

  function getEdgeData() {
    const edges = [];
    for (const node of project.nodes) {
      for (const link of node.links) {
        edges.push({
          from: node.id.idString,
          to: link.to.idString,
          color: { color: "#fff" },
          label: link.type,
          arrows: "to",
          font: { align: "middle", color: "#fff", size: 10 },
          scaling: {
            min: 1,
            max: 8,
            label: { enabled: true, min: 10, max: 24 }
          }
        });
      }
    }
    return edges;
  }

  function fitGraph() {
    if (network) {
      network.fit({ animation: true });
    }
  }

  onMount(async () => {
    const { Network } = await import('vis-network/peer/esm/vis-network');
    const nodes = getNodeData();
    const edges = getEdgeData();

    network = new Network(container, { nodes, edges }, {
      nodes: {
        scaling: {
          min: 10,
          max: 50,
          label: { enabled: true, min: 12, max: 28 }
        }
      },
      edges: {
        smooth: true,
        scaling: {
          min: 1,
          max: 8,
          label: { enabled: true, min: 10, max: 24 }
        }
      },
      physics: { stabilization: true },
      interaction: {
        hover: true,
        tooltipDelay: 250,
        navigationButtons: true
      }
    });

    fitGraph();
  });

  onDestroy(() => {
    if (network) {
      network.destroy();
      network = null;
    }
  });
</script>

<div class="relative w-full min-h-[400px] bg-base-200 rounded-xl shadow mb-4">
  <div bind:this={container} class="absolute inset-0"></div>
  <button class="btn btn-xs btn-outline absolute top-2 right-2 z-10" on:click={fitGraph}>
    Zoom Fit
  </button>
</div>
