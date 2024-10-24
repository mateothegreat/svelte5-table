<script lang="ts">
  import type { Snippet } from "svelte";

  type Props = {
    children: Snippet;
    class?: string;
  };

  let { children, class: className }: Props = $props();
</script>

<table class="w-full caption-bottom text-sm {className}">
  {@render children()}
</table>
