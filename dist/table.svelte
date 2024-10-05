<script lang="ts">import { Body, Header } from ".";
let { table, data } = $props();
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
