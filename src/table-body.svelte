<script lang="ts">
  import type { TableColumn } from "./types";

  type Props = {
    data: any[];
    columns: TableColumn[];
  };

  let { columns, data }: Props = $props();
</script>

<tbody class="[&_tr:last-child]:border-0">
  {#each data as row}
    <tr class="hover:bg-muted/25 data-[state=selected]:bg-muted border-b transition-colors duration-300">
      {#each columns as column, index (column.field)}
        <td class="p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]">
          {#if column.snippet}
            {@render column.snippet()}
          {:else}
            {row[column.field]}
          {/if}
        </td>
      {/each}
    </tr>
  {/each}
</tbody>
