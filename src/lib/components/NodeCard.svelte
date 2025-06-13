<script lang="ts">
  import type { Id } from '$lib/value-types/id';
  import type { Node } from '$lib/types';
  export let node: Node;
  export let onLink: (id: Id) => void; 
</script>

<div class="card shadow-md bg-base-100 mb-4">
  <div class="card-body">
    <h2 class="card-title">{node.title}</h2>
    <p>{node.content}</p>
    <div class="card-actions justify-end">
      <button class="btn btn-outline btn-secondary btn-xs" on:click={() => onLink(node.id)}>
        Link
      </button>
    </div>
    {#if node.links.length}
      <div class="mt-2 text-xs opacity-70">
        <div>Links:</div>
        <ul>
          {#each node.links as link}
            <li>{link.type} → {link.to}</li>
          {/each}
        </ul>
      </div>
    {/if}
  </div>
</div>
