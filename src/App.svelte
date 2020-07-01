<script>
  import { selectedCan } from "./stores";
  import SeedsList from "./Seeds/SeedsList.svelte";
  import Settings from "./Settings/Index.svelte";
  const views = [
    {
      name: "seed-list",
      component: SeedsList
    },
    {
      name: "settings",
      component: Settings
    }
  ];

  let currentView = views[0];
</script>

<style>
  :global(.cursor-pointer) {
    cursor: pointer;
  }
</style>

<main>
  <i class="material-icons float-right cursor-pointer" on:click={() => (currentView = views[1])}>settings</i>
  <div class="clearfix" />
  <svelte:component this={currentView.component} />
</main>
