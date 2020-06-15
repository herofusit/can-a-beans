<script>
  import SeedsList from "../SeedsList.svelte";

  import { onDestroy } from "svelte";
  import { selectedCan } from "../stores";

  const unsubscribe = selectedCan.subscribe((value) => {
    console.log(value);
  });
  onDestroy(unsubscribe);
</script>

{#if $selectedCan != null}
  <div>
    <h3>{$selectedCan.name}</h3>
  </div>
  <SeedsList />
{/if}
