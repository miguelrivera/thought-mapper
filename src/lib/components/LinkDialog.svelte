<script lang="ts">
  import type { Node, LinkType } from '../types';
  export let open: boolean;
  export let nodes: Node[];
  export let sourceNodeId: string;
  export let onClose: () => void;
  export let onLink: (targetId: string, type: LinkType) => void;

  let targetId = "";
  let linkType: LinkType = "supports";
</script>

{#if open}
  <div class="fixed inset-0 bg-black/50 flex items-center justify-center z-40">
    <div class="card w-96 bg-base-100 shadow-xl">
      <div class="card-body">
        <h2 class="card-title mb-2">Link Node</h2>
        <label class="form-control w-full mb-2">
          <span class="label-text">Target Node</span>
          <select class="select select-bordered" bind:value={targetId}>
            <option value="">Select a node</option>
            {#each nodes.filter(n => n.id.idString !== sourceNodeId) as node}
              <option value={node.id.idString}>{node.title}</option>
            {/each}
          </select>
        </label>
        <label class="form-control w-full mb-2">
          <span class="label-text">Link Type</span>
          <select class="select select-bordered" bind:value={linkType}>
            <option value="supports">Supports</option>
            <option value="contradicts">Contradicts</option>
          </select>
        </label>
        <div class="card-actions justify-end">
          <button class="btn btn-sm btn-outline" on:click={onClose}>Cancel</button>
          <button class="btn btn-sm btn-primary" on:click={() => { onLink(targetId, linkType); onClose(); }} disabled={!targetId}>Link</button>
        </div>
      </div>
    </div>
  </div>
{/if}
