import { LinkType } from "$lib/types/linkType";
import { Id } from "../types/id/valueType";
import type { Project } from "../types/project";

const projectId = Id.newId();
const rootId = Id.newId();
const psd2Id = Id.newId();

export const sampleProjects: Project[] = [{
    id: Id.newId(),
    title: "Can our bank provide a pan-European payments API?",
    nodes: [
        {
            id: rootId,
            title: "Can we?",
            content: "Project root: Explore the feasibility, requirements, and challenges.",
            links: [{to: psd2Id, type: LinkType.relates}],
            isRoot: true
        },
        {
            id: psd2Id,
            title: "PSD2 Compliance",
            content: "We must comply with PSD2 regulations across all target countries.",
            links: [],
        }
    ],
    createdAt: Date.now(),
    updatedAt: Date.now()
},
{
    id: Id.newId(),
    title: "Should we offer instant payments to SMEs?",
    nodes: [
        {
            id: Id.newId(),
            title: "Should we offer instant payments to SMEs?",
            content: "Project root for instant payments.",
            links: [],
            isRoot: true
        }
    ],
    createdAt: Date.now(),
    updatedAt: Date.now()
}];
