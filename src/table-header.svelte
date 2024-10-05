<script lang="ts">
  import type { TableHeader } from "./types";
  let { header }: { header: TableHeader[] } = $props();
</script>

<thead>
  <tr class="hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors">
    {#each header as column (column.field)}
      <th class="text-muted-foreground h-10 px-2 text-left align-middle font-medium [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]">
        {#if column.snippet}
          {@render column.snippet()}
        {:else}
          {column.value}
        {/if}
      </th>
    {/each}
  </tr>
</thead>
