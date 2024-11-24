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
  class?: string;
  header?: any;
  renderer?: Function;
};

export type TableProps = {
  columns: TableColumn[];
  class?: string;
};
