<script lang="ts">
  import { Body, Header } from ".";
  import type { TableColumn, TableHeader } from "./types";
  import type { TableProps } from "./types.ts";

  type Props = {
    table: TableProps;
    data: any[];
  };

  let { table, data }: Props = $props();
</script>

{#snippet header(columns: TableHeader[])}
  <Header header={table.header} />
{/snippet}

{#snippet body(columns: TableColumn[], data: any[])}
  <Body {columns} {data} />
{/snippet}

<table class="w-full caption-bottom text-sm">
  {@render header(table.header)}
  {@render body(table.columns, data)}
</table>
