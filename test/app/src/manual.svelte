<script lang="ts">
  import "./app.pcss";
  import type { TableColumn } from "@mateothegreat/svelte5-table";
  import * as Table from "@mateothegreat/svelte5-table";
  import { writable, type Writable } from "svelte/store";

  type Component = {
    id: string;
    name: string;
    description: string;
  };

  const columns: TableColumn[] = [
    {
      field: "id",
      header: "Component ID"
    },
    {
      field: "name",
      header: "Component Name"
    },
    {
      field: "custom",
      header: actionsHeader
    },
    {
      field: "actions",
      classes: "flex items-center justify-end",
      renderer: actionsColumn
    }
  ];

  const components: Writable<Component[]> = writable([
    {
      id: "1",
      name: "Button",
      description: "A button component"
    },
    {
      id: "2",
      name: "Input",
      description: "An input component"
    }
  ]);

  let selected = writable([]);
</script>

{#snippet actionsHeader()}
  <div class="flex items-center gap-2 border-b border-zinc-700 py-4">My Custom Header</div>
{/snippet}

{#snippet actionsColumn(row: any)}
  <div class="flex items-center gap-2">
    This is a custom snippet!
    <button class="rounded-md bg-blue-500 px-3 py-1 text-white">
      Edit #{row.id}
    </button>
  </div>
{/snippet}

<div class="absolute h-full w-full bg-black p-20">
  <Table.Root class="rounded-lg bg-black text-indigo-500">
    <Table.Head>
      <Table.Header field="id" />
      <Table.Header field="name" />
      <Table.Header field="description" />
      <Table.Header field="actions" />
    </Table.Head>
    <Table.Body {columns} data={$components} bind:selected />
  </Table.Root>
</div>

<pre>{$inspect($selected).with(console.trace)}</pre>

<He