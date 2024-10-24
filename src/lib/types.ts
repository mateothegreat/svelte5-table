import type { Writable } from "svelte/store";

export type TableHeaderColumn = {
  field: string;
  class?: string;
  sortable?: boolean;
};

export type TableRow = {
  selected?: Writable<boolean>;
};

export type TableColumn = {
  field: string;
  classes?: string;
  header?: any;
  renderer?: Function;
};

export type TableProps = {
  columns: TableColumn[];
  classes?: string;
};
