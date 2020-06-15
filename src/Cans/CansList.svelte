<script>
  import AddCan from "./Cans/AddCan.svelte";
  import Button from "./Button.svelte";

  import List from "./List.svelte";

  import { CanProxy } from "./Cans/CanProxy";
  import { selectedCan, cans } from "./stores";
  let view = "list";
  const proxy = new CanProxy();
  async function load() {
    await proxy.getCansAsync();
  }
  load();
  function onItemSelected(item) {
    selectedCan.set(item.detail);
  }
  function showAddCanForm() {
    view = "add";
  }
</script>

{#if view == 'add'}
  <h2>Add Can</h2>
  <AddCan on:can.added={() => (view = 'list')} />
{/if}
{#if view == 'list'}
  <h2>Cans</h2>
  <Button text="add can" on:click={showAddCanForm} />
  <List on:item.selected={onItemSelected} items={$cans} />
{/if}
