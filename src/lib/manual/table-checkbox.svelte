<script lang="ts">
  import { Checkbox as CheckboxPrimitive } from "bits-ui";
  import { type Writable } from "svelte/store";
  import { twMerge } from "tailwind-merge";

  type Props = CheckboxPrimitive.Props & {
    className?: string;
    selected?: Writable<boolean>;
    onselected?: (v: boolean) => void;
  };

  let { className, selected = $bindable(), onselected, ...rest }: Props = $props();
</script>

<CheckboxPrimitive.Root
  onCheckedChange={(v) => {
    onselected?.(!!v);
  }}
  class={twMerge("focus-visible:ring-ring data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground peer box-content h-4 w-4 shrink-0 rounded-sm border border-current shadow focus-visible:outline-none focus-visible:ring-1 disabled:cursor-not-allowed disabled:opacity-50 data-[disabled=true]:cursor-not-allowed data-[disabled=true]:opacity-50", className)}
  {...rest}>
  <CheckboxPrimitive.Indicator class={twMerge("flex h-4 w-4 items-center justify-center text-current")} let:isChecked let:isIndeterminate>
    {#if isIndeterminate}
      <svg class={"h-3.5 w-3.5" + (!isChecked && " text-transparent")} xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14" /></svg>
    {:else}
      <svg class={"h-3.5 w-3.5" + (!isChecked && " text-transparent")} xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 6L9 17l-5-5" /></svg>
    {/if}
  </CheckboxPrimitive.Indicator>
</CheckboxPrimitive.Root>
{$selected}
