<script lang="ts">
  import { onMount } from "svelte";
  import { sampleProjects } from "$lib/data/sample";
  import Sidebar from "$lib/components/Sidebar.svelte";
  import Dashboard from "$lib/components/Dashboard.svelte";
  import type { Project } from "$lib";

  let projects: Project[] = [];
  let selectedProjectId: string = "";

  onMount(() => {
    projects = sampleProjects;
    selectedProjectId = projects[0]?.id.idString ?? "";
  });

  function selectProject(id: string) {
    selectedProjectId = id;
  }
  function newProject() {
    // Placeholder for project creation UI/modal
    alert("New project coming soon!");
  }

  $: selectedProject = projects.find(p => p.id.idString === selectedProjectId);
</script>

<div class="flex min-h-screen">
  <Sidebar {projects} {selectedProjectId} onSelect={selectProject} onNew={newProject} />
  <main class="flex-1 p-6">
    {#if selectedProject !== undefined}
      <Dashboard project={selectedProject} />
      <!-- Here: render  root "cloud" and node cards/components for the selected project -->
    {:else}
      <p class="text-gray-500">No project selected.</p>
    {/if}
  </main>
</div>
