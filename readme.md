# svelte5-table

Slick & lean Svelte 5 Table Component

![screenshot.png](screenshot.png)

**Features**:

- Svelte 5 + Snippets support💖
- Zero dependencies 0️⃣
- Built with override-able TailwindCSS classes 💄.
- Customizable header & cell renderering support.

## Installation

```bash
npm install @mateothegreat/svelte5-table
```

## Usage

```ts
<script lang="ts">
  import { Table } from "@mateothegreat/svelte5-table";
</script>

{#snippet actionsHeader()}
  <div class="flex items-center gap-2">
    My Custom Header
    <PartyPopper class="h-4 w-4 text-pink-500" />
  </div>
{/snippet}

{#snippet actionsColumn(row: any)}
  <div class="flex items-center gap-2">
    <Button variant="outline">Edit</Button>
  </div>
{/snippet}

<Table
  data={$components}
  table={{
    columns: [
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
    ]
  }} />
```
