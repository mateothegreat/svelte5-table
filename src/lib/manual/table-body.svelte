<script lang="ts">
  import { writable, type Writable } from "svelte/store";
  import type { TableColumn } from "../types";
  import TableCheckbox from "./table-checkbox.svelte";

  type Props = {
    data: any[];
    columns: TableColumn[];
    selected: Writable<any[]>;
  };

  let { columns, data, selected = $bindable() }: Props = $props();

  let checkSelected = writable(false);
</script>

<tbody class="text-slate-400 [&_tr:last-child]:border-0">
  {#each data as row}
    <tr data-state={$selected.includes(row) ? "selected" : ""} class="hover:bg-muted/10 overflow-hidden rounded-lg transition-colors duration-300 data-[state=selected]:bg-zinc-800/50">
      <td class="p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]">
        <TableCheckbox
          onselected={(v) => {
            selected.update((prev) => {
              if (v) {
                return [...prev, row];
              }
              return prev.filter((item) => item !== row);
            });
          }} />
      </td>
      {#each columns as column, index (column.field)}
        <td class="p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px] {column.classes}">
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
<!--
<style lang="postcss">
  td:first-child,
  th:first-child {
    border-radius: 7px 0 0 7px;
  }

  td:last-child,
  th:last-child {
    border-radius: 0 7px 7px 0;
  }
</style> -->
