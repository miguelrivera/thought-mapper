import { Id } from "../types/id/valueType";
import type { Project } from "../types/project";

export const sampleProjects: Project[] = [{
    id: Id.newId(),
    title: "Can our bank provide a pan-European payments API?",
    nodes: [
        {
            id: Id.newId(),
            title: "Can our bank provide a pan-European payments API?",
            content: "Project root: Explore the feasibility, requirements, and challenges.",
            links: [],
            isRoot: true
        },
        {
            id: Id.newId(),
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
