import type { Snippet } from "svelte";
import type { Writable } from "svelte/store";

export type TableHeader = {
  class?: string;
  value: string | Snippet;
};

export type TableRow = {
  selected?: Writable<boolean>;
};

export type TableColumn = {
  field: string;
  class?: string;
  header?: any | string | TableHeader;
  renderer?: Function;
};

export type TableProps = {
  columns: TableColumn[];
  classes?: string;
};
