<script lang="ts">
  import type { Project, Node } from "$lib";

  export let project: Project;

  function getRootNode(): Node | undefined {
    return project.nodes.find(n => n.isRoot);
  }
  function getDepth(): number {
    function depth(node: Node, visited: Set<string> = new Set()): number {
      if (visited.has(node.id.idString)) return 0;
      visited.add(node.id.idString);
      const links = node.links.map(l =>
        project.nodes.find(n2 => n2.id.idString === l.to.idString)
      ).filter(Boolean) as Node[];
      if (!links.length) return 1;
      return 1 + Math.max(...links.map(n2 => depth(n2, visited)));
    }
    const root = getRootNode();
    if (!root) return 0;
    return depth(root);
  }
  function getStats() {
    const nodes = project.nodes;
    const unresolved = nodes.filter(n => n.links.length === 0 && !n.isRoot).length;
    const linked = nodes.filter(n => n.links.length > 0).length;
    const contradictions = nodes.flatMap(n => n.links.filter(l => l.type === "contradicts")).length;
    const supports = nodes.flatMap(n => n.links.filter(l => l.type === "supports")).length;
    return { unresolved, linked, contradictions, supports };
  }
  function getSuccessProbability() {
    const stats = getStats();
    const totalLinks = stats.supports + stats.contradictions;
    if (!totalLinks) return "N/A";
    return Math.round((stats.supports / totalLinks) * 100) + "%";
  }
</script>

<div class="mb-3 text-3xl font-bold">{project.title}</div>

<div class="card card-dash bg-base-200 w-192">
  <div class="card-body">
    <h2 class="card-title">Description</h2>
    <p>The project has no description...</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Add description</button>
    </div>
  </div>
</div>

<div class="mb-2 text-2xl font-bold">Stats</div>
<div class="stats shadow">
  <div class="stat bg-base-200 shadow">
    <div class="stat-title">Depth</div>
    <div class="stat-value text-info">{getDepth()}</div>
    <div class="stat-desc">Longest chain from root</div>
  </div>
  <div class="stat bg-base-200 shadow">
    <div class="stat-title">Success Probability</div>
    <div class="stat-value text-success">{getSuccessProbability()}</div>
    <div class="stat-desc">Based on supports vs. contradicts</div>
  </div>
  <div class="stat bg-base-200 shadow">
    <div class="stat-title">Unresolved Nodes</div>
    <div class="stat-value text-warning">{getStats().unresolved}</div>
    <div class="stat-desc">Nodes with no links</div>
  </div>
  <div class="stat bg-base-200 shadow">
    <div class="stat-title">Linked Nodes</div>
    <div class="stat-value text-accent">{getStats().linked}</div>
    <div class="stat-desc">Nodes with at least one link</div>
  </div>
  <div class="stat bg-base-200 shadow">
    <div class="stat-title">Contradictions</div>
    <div class="stat-value text-error">{getStats().contradictions}</div>
    <div class="stat-desc">Contradicting links</div>
  </div>
  <div class="stat bg-base-200 shadow">
    <div class="stat-title">Supports</div>
    <div class="stat-value text-primary">{getStats().supports}</div>
    <div class="stat-desc">Supporting links</div>
  </div>
</div>


<!-- Add your root node "cloud" and node cards here! -->
