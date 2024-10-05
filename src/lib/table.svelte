<script lang="ts">
  import { Body, Header } from ".";
  import type { TableColumn } from "./types";
  import type { TableProps } from "./types.ts";

  type Props = {
    table: TableProps;
    data: any[];
  };

  let { table, data }: Props = $props();
</script>

{#snippet header(columns: TableColumn[])}
  <Header header={columns} />
{/snippet}

{#snippet body(columns: TableColumn[], data: any[])}
  <Body {columns} {data} />
{/snippet}

<table class="w-full caption-bottom text-sm {table.classes}">
  {@render header(table.columns)}
  {@render body(table.columns, data)}
</table>
