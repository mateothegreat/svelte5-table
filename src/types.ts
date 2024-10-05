import type { Snippet } from "svelte";

export type TableColumn = {
  field: string;
  value: any;
  snippet?: Snippet;
};

export type TableHeader = {
  field: string;
  value: any;
  snippet?: Snippet;
};

export type TableProps = {
  header: TableHeader[];
  columns: TableColumn[];
};
