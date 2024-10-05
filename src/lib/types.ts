import type { Snippet } from "svelte";

export type TableColumn = {
  field: string;
  snippet?: Snippet;
  classes?: string;
};

export type TableHeader = {
  field: string;
  snippet?: Snippet;
  classes?: string;
};

export type TableProps = {
  header: TableHeader[];
  columns: TableColumn[];
  classes?: string;
};
