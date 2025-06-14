<script lang="ts">
    import { Maybe } from "typescript-functional-extensions";
    import { Id } from "$lib";
    import type {Node, LinkType } from "$lib";
    import NodeCard from "$lib/components/NodeCard.svelte";
    import LinkDialog from "$lib/components/LinkDialog.svelte";
    
    import "../style.css";

    let nodes: Node[] = [];
    let nodeTitle = "";
    let nodeContent = "";
    let showLinkDialog = false;
    let linkSourceId: Id = {idString: ""};

    function addNode() {
        if (nodeTitle.trim()) {
            nodes = [
                ...nodes,
                {
                    id: Id.newId(),
                    title: nodeTitle,
                    content: nodeContent,
                    links: [],
                },
            ];
            nodeTitle = "";
            nodeContent = "";
        }
    }

    function openLinkDialog(id: Id) {
        linkSourceId = id;
        showLinkDialog = true;
    }

    function addLink(targetId: string, type: LinkType) {
        const idResult = Id.from(Maybe.from(targetId));
        if (idResult.isFailure) {
            return;
        }
        const id = idResult.getValueOrThrow();
        nodes = nodes.map((n) => {
            if (n.id.idString === linkSourceId.idString) {
                return { ...n, links: [...n.links, { to: id, type }] };
            }
            return n;
        });
    }
</script>

<main class="max-w-xl mx-auto p-6">
    <h1 class="text-3xl font-bold mb-6">Thought Mapper Prototype</h1>

    <form class="mb-6 flex flex-col gap-2" on:submit|preventDefault={addNode}>
        <input
            class="input input-bordered"
            bind:value={nodeTitle}
            placeholder="Node Title"
            required
        />
        <textarea
            class="textarea textarea-bordered"
            bind:value={nodeContent}
            placeholder="Node Content"
        ></textarea>
        <button type="submit" class="btn btn-primary w-fit">Add Node</button>
    </form>

    {#each nodes as node (node.id)}
        <NodeCard {node} onLink={openLinkDialog} />
    {/each}

    <LinkDialog
        {nodes}
        sourceNodeId={linkSourceId.idString}
        onClose={() => (showLinkDialog = false)}
        onLink={addLink}
        bind:open={showLinkDialog}
    />
</main>
