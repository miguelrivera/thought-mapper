<script lang="ts">
  import type { Node } from '../types';
  export let node: Node;
  export let onLink: (id: typeof node.id) => void;
</script>

<div class="card bg-base-200 shadow-lg mb-4">
  <div class="card-body">
    <div class="flex items-center justify-between">
      <h2 class="card-title">{node.title}</h2>
      <button class="btn btn-xs btn-outline btn-secondary" title="Link this node" on:click={() => onLink(node.id)}>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 010 5.656m0 0l-1.414 1.414m1.414-1.414a4 4 0 00-5.656 0m0 0l-1.414-1.414"/></svg>
        Link
      </button>
    </div>
    <p class="mt-1 mb-2">{node.content}</p>

    {#if node.links.length}
      <div>
        <span class="font-bold text-xs opacity-60">Links:</span>
        <div class="flex flex-wrap gap-2 mt-1">
          {#each node.links as link}
            <span
              class="badge gap-1 {link.type === 'contradicts' ? 'badge-error' : 'badge-info'}"
              title={link.type}
            >
              {#if link.type === 'contradicts'}
                <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 5.636L5.636 18.364M5.636 5.636l12.728 12.728"/></svg>
              {:else}
                <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
              {/if}
              {link.type}
              <span class="ml-1 text-xs font-mono">{link.to.toString().slice(0, 8)}…</span>
            </span>
          {/each}
        </div>
      </div>
    {/if}
  </div>
</div>
