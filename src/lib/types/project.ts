import { Id } from "./id/valueType";
import type { Node } from "./node";

export interface Project {
  id: Id;
  title: string;
  description?: string;
  nodes: Node[];
  createdAt: number;
  updatedAt: number;
}
