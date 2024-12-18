<script lang="ts" generics="T extends Record<string, any>">
  import { onMount } from "svelte";
  import { type Writable } from "svelte/store";
  import { twMerge } from "tailwind-merge";
  import type { TableColumn } from "../types";
  import TableCheckbox from "./table-checkbox.svelte";
  import { TableConfig } from "./types";

  type Props = {
    id: string;
    config: TableConfig;
    data: T[];
    columns: TableColumn[];
    selections: Writable<T[]>;
  };

  let { id, config, columns, data, selections = $bindable() }: Props = $props();

  /**
   * Determine if the table is in a "select all" state.
   */
  let allSelected = $state(false);

  /**
   * Store the selected rows.
   */
  // let selections = $state<T[]>([]);

  /**
   * Toggle the "select all" state.
   * @param v - The new state.
   */
  const toggleAll = (v: boolean | "indeterminate") => {
    if (v) {
      for (let row of data) {
        select(row[id]);
      }
    } else {
      $selections = [];
    }
  };

  /**
   * Select a row.
   * @param row - The row to select.
   */
  const select = (row: any): void => {
    if (!$selections.includes(row)) {
      selections.update((selections: T[]) => [...selections, row]);
      if ($selections.length >= data.length) {
        allSelected = true;
      } else {
        allSelected = false;
      }
    }
  };

  /**
   * Deselect a row.
   * @param row - The row to deselect.
   */
  const deselect = (v: any): void => {
    selections.update((selections: T[]) => selections.filter((row) => row != v));
    if ($selections.length >= data.length) {
      allSelected = true;
    } else {
      allSelected = false;
    }
  };

  onMount(() => {
    for (let selection of $selections) {
      if (!$selections.includes(selection)) {
        selections.update((selections: T[]) => [...selections, selection]);
      }
    }
  });
</script>

<table class="w-full caption-bottom text-sm">
  <thead>
    <tr>
      {#if config?.selection?.all}
        <th class="text-muted-foreground h-10 px-2 text-left align-middle font-medium [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]">
          <TableCheckbox
            bind:checked={allSelected}
            changed={(v: boolean | "indeterminate") => {
              toggleAll(v);
            }} />
        </th>
      {/if}

      {#each columns as column, index (column.field)}
        {#if typeof column.header === "object"}
          {#if typeof column.header.value === "function"}
            {@render column.header.value()}
          {:else}
            <th class={twMerge("text-muted-foreground h-10 px-2 text-left align-middle font-medium [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]", column.header.class)}>
              {column.header.value}
            </th>
          {/if}
        {:else if typeof column.header === "function"}
          {@render column.header()}
        {:else}
          <th class={twMerge("text-muted-foreground h-10 px-2 text-left align-middle font-medium [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]", column.class)}>
            {column.header}
          </th>
        {/if}
      {/each}
    </tr>
  </thead>
  <tbody class="text-slate-400 [&_tr:last-child]:border-0">
    {#each data as row}
      <tr data-state={$selections.includes(row[id]) ? "selected" : ""} class="hover:bg-muted/10 overflow-hidden rounded-lg transition-colors duration-300 data-[state=selected]:bg-zinc-900/50">
        {#if config?.selection?.row || config?.selection?.all}
          <td class={twMerge("p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]")}>
            <TableCheckbox
              checked={$selections.includes(row[id])}
              changed={(v: boolean | "indeterminate") => {
                if (v) {
                  select(row[id]);
                } else {
                  deselect(row[id]);
                }
              }} />
          </td>
        {/if}
        {#each columns as column, index (column.field)}
          <td class="p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px] {column.class}">
            {#if typeof column.renderer === "function"}
              {@render column.renderer(row)}
            {:else}
              {row[column.field]}
            {/if}
          </td>
        {/each}
      </tr>
    {/each}
  </tbody>
</table>
