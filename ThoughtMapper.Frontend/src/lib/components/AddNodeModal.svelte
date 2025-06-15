<script lang="ts">
  import { type Node, LinkType, type Project } from '$lib';
  import { Id } from '$lib/types/id/valueType';
  import { Maybe } from "typescript-functional-extensions";

  export let open: boolean;
  export let project: Project;
  export let onClose: () => void;
  export let onAdd: (node: Node, linkTargetId?: string, linkType?: LinkType) => void;

  let title = "";
  let content = "";
  let linkType: LinkType = LinkType.supports;
  let targetId = "";

  function addNode() {
    const node: Node = {
      id: Id.newId(),
      title,
      content,
      links: []
    };
    if (targetId) {
      node.links.push({
        to: project.nodes.find(n => n.id.idString === targetId)?.id!,
        type: linkType
      });
    }
    onAdd(node, targetId, linkType);
    title = content = targetId = "";
    linkType = LinkType.supports;
    onClose();
  }
</script>

{#if open}
  <div class="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
    <div class="modal-box w-full max-w-md">
      <h3 class="font-bold text-lg mb-2">Add New Node</h3>
      <form on:submit|preventDefault={addNode} class="flex flex-col gap-3">
        <input class="input input-bordered w-full" placeholder="Node title" bind:value={title} required />
        <textarea class="textarea textarea-bordered w-full" placeholder="Node content" bind:value={content}></textarea>
        <div>
          <label class="label" for="project">
            <span class="label-text">Link to existing node?</span>
          </label>
          <select id="project" class="select select-bordered w-full" bind:value={targetId}>
            <option value="">None</option>
            {#each project.nodes as n}
              <option value={n.id.idString}>{n.title}</option>
            {/each}
          </select>
          {#if targetId}
            <div class="mt-2">
              <span class="label-text">Link type:</span>
              <select class="select select-bordered w-full" bind:value={linkType}>
                <option value="supports">Supports</option>
                <option value="contradicts">Contradicts</option>
              </select>
            </div>
          {/if}
        </div>
        <div class="modal-action">
          <button type="button" class="btn" on:click={onClose}>Cancel</button>
          <button type="submit" class="btn btn-primary">Add</button>
        </div>
      </form>
    </div>
  </div>
{/if}
