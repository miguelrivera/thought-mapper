import { Id } from "./value-types/id";

export type LinkType = "supports" | "contradicts" | "relates-to";

export interface Node<T = string> {
  id: Id;
  title: string;
  content: T;
  links: { to: Id; type: LinkType }[];
}

