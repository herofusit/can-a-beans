<script>
  import AddSeed from "./AddSeed.svelte";
  import EditSeed from "./EditSeed.svelte";
  import Button from "../Components/Button.svelte";
  import List from "../Components/List.svelte";
  import { SeedProxy } from "./SeedProxy";
  import { seeds, selectedSeed } from "../stores";
  import { onMount, onDestroy } from "svelte";
  let view = "list";
  // $:filteredSeeds = $seeds.filter(s => s.can.id == $selectedCan.id);
  const proxy = new SeedProxy();
  async function load() {
    await proxy.getSeedsAsync();
  }
  onMount(() => {
    load();
    // const unsubscribe = selectedSeed.subscribe(load);
    // onDestroy(unsubscribe);
  });
  function onItemSelected(item) {
    selectedSeed.set(item.detail);
  }
  function showAddSeedForm() {
    console.log("adding seed");
    view = "add";
  }
  function showEditSeedForm(item) {
    $selectedSeed = item.detail;
    console.log("editing seed");
    view = "edit";
  }
  function showSeedDeleteForm(item) {
    //$selectedSeed = item;
    console.log("deleting seed", item);
    proxy.deleteSeedAsync(item);
  }
  function onSeedAdded(event) {
    view = "list";
    console.log(event);
  }
  function onSeedUpdated(event) {
    view = "list";
    console.log(event);
  }
  function onCancel(event) {
    view = "list";
    console.log(event);
  }
</script>

{#if view == 'add'}
  <AddSeed on:seed.added={onSeedAdded} on:cancel={onCancel} />
{:else if view == 'edit'}
  <EditSeed on:seed.updated={onSeedUpdated} />
{:else}
  <div class="card">
    <div class="card-header card-header-icon card-header-rose">
      <div class="card-icon">
        <i class="material-icons">bubble_chart</i>
      </div>
       <Button text="add bean" icon="bubble_chart" classes="float-right" on:click={showAddSeedForm} />
    </div>
    <div class="card-body">
      <!-- <h4 class="card-title"> </h4>
      <div class="clearfix"></div> -->
      <List on:item.selected={showEditSeedForm} items={$seeds}>
        <div slot="item-template" let:item>
          {item.cultivar}
          <p>
            <small>{item.type}</small>
          </p>
        </div>
        <div slot="buttons-template" let:item>
          <button class="btn btn-danger btn-fab btn-fab-mini btn-round" 
            on:click={showSeedDeleteForm(item)}>
            <i class="material-icons">delete</i>
          </button>
        </div>
      </List>
    </div>
  </div>
{/if}
