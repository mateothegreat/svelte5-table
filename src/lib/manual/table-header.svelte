<script lang="ts">
  type Props = {
    field: string;
    class?: string;
    sortable?: boolean;
  };

  let { field, class: className, sortable }: Props = $props();
</script>

<th class="text-muted-foreground h-10 px-2 text-left align-middle font-medium [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]">
  {field}
</th>
