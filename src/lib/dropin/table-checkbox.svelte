<script lang="ts">
  import { Checkbox, type WithoutChildrenOrChild } from "bits-ui";

  type Props = {
    className?: string;
    changed?: (v: boolean | "indeterminate") => void;
  };

  let { className, checked = $bindable<boolean | "indeterminate">(false), changed, ...rest }: WithoutChildrenOrChild<Checkbox.RootProps> & Props = $props();
</script>

<Checkbox.Root
  controlledChecked={true}
  bind:checked
  onCheckedChange={(v: boolean | "indeterminate") => {
    if (checked != v) {
      changed(v);
      checked = v;
    }
  }}
  class="border-muted active:scale-98 peer inline-flex size-[25px] items-center justify-center rounded-md border transition-all duration-150 ease-in-out data-[state=checked]:border-2 data-[state=checked]:border-slate-400 data-[state=unchecked]:border-slate-700 data-[state=unchecked]:hover:border-slate-700">
  {#snippet children({ checked }: { checked: boolean | "indeterminate" })}
    <div class="text-background inline-flex items-center justify-center">
      {#if checked === "indeterminate"}
        <svg class={"h-3.5 w-3.5" + (!checked ? " text-transparent" : "")} xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14" /></svg>
      {:else}
        <svg class={"h-3.5 w-3.5" + (!!!checked ? " text-transparent" : "")} xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 6L9 17l-5-5" /></svg>
      {/if}
    </div>
  {/snippet}
</Checkbox.Root>
