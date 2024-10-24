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

  let selections = writable([]);
  selections.set([$components[0].id]);
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
  <DropinTable config={{ selection: { all: true } }} {columns} id="id" data={$components} bind:selections />
</div>

<!-- <pre>{$inspect($selected).with(console.trace)}</pre> -->
