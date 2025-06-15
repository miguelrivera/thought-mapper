<script lang="ts">
  import type { Project } from "$lib";
  export let projects: Project[] = [];
  export let selectedProjectId: string;
  export let onSelect: (id: string) => void;
  export let onNew: () => void;
</script>

<aside class="w-64 bg-base-200 min-h-screen p-4 flex flex-col gap-2">
  <div class="text-lg font-bold mb-4">Projects</div>
  {#each projects as project}
    <button
      class="btn btn-block btn-sm mb-2 {selectedProjectId === project.id.idString ? 'btn-primary' : 'btn-ghost'}"
      on:click={() => onSelect(project.id.idString)}
    >
      {project.title}
    </button>
  {/each}
  <button class="btn btn-outline btn-block btn-sm mt-auto" on:click={onNew}>+ New Project</button>
</aside>