<script lang="ts">
  import type { TableColumn } from "./types";
  let { header }: { header: TableColumn[] } = $props();
</script>
<thead>
  <tr class="hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors">
    {#each header as column (column.field)}
      <th class="text-muted-foreground h-10 px-2 text-left align-middle font-medium [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px] {column.classes}">
        {#if typeof column.header === "string" || typeof column.header === "number"}
          {column.header}
        {:else if typeof column.header === "function"}
          {@render column.header()}
        {/if}
      </th>
    {/each}
  </tr>
  </thead>