import { Id } from "$lib/types/id/valueType";
import type { LinkType } from "./linkType";

export interface Node<T = string> {
  id: Id;
  title: string;
  content: T;
  links: { to: Id; type: LinkType }[];
  isRoot?: boolean;
}

