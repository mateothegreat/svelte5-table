import type { Snippet } from "svelte";

export type TableColumn = {
  field: string;
  classes?: string;
  header?: Snippet | string | number;
  renderer?: Function;
};

export type TableProps = {
  columns: TableColumn[];
  classes?: string;
};
