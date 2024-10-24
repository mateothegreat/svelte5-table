<script lang="ts">
  import type { Snippet } from "svelte";
  let { children }: { children: Snippet } = $props();
</script>

<thead>
  <tr>
    {@render children()}
  </tr>
</thead>
