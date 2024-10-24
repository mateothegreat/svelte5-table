<script lang="ts">
  import type { TableColumn } from "@mateothegreat/svelte5-table";
  import { DropinTable } from "@mateothegreat/svelte5-table";
  import { writable, type Writable } from "svelte/store";
  import "./app.pcss";

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
      header: customHeader
    },
    {
      field: "actions",
      classes: "w-24 flex items-center justify-center",
      renderer: actionsColumn
    }
  ];

  const components: Writable<Component[]> = writable([
    {
      id: "1",
      name: "Foo",
      custom: "This is a custom column 1",
      description: "A foo component"
    },
    {
      id: "2",
      name: "Bar",
      custom: "This is a custom column 2",
      description: "A bar component"
    }
  ]);

  let selections = writable([]);
  selections.set([$components[0].id]);
</script>

{#snippet customHeader()}
  <div class="flex justify-center rounded-lg border border-pink-500 p-1 text-indigo-500">My Custom Header</div>
{/snippet}

{#snippet actionsColumn(row: any)}
  <button class="rounded-md bg-blue-500 px-3 py-1 text-white">
    Edit #{row.id}
  </button>
{/snippet}

<div class="absolute flex h-full w-full flex-col gap-5 bg-black p-20 text-slate-500">
  <DropinTable config={{ selection: { all: true } }} {columns} id="id" data={$components} bind:selections />
  <div class="flex flex-col gap-2 rounded-md border border-slate-700 p-2">
    <div class="text-sm font-medium">Selections:</div>
    <pre>{JSON.stringify($selections)}</pre>
  </div>
</div>

<!-- <pre>{$inspect($selected).with(console.trace)}</pre> -->
