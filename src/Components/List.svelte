<script>
  import { createEventDispatcher } from "svelte";
  const dispatcher = createEventDispatcher();
  export let items = [];
  let selectedItem = {};

  function selectItem(item) {
    selectedItem = item;
    console.log("item selected", item);
    dispatcher("item.selected", item);
  }
</script>

<style>
  .buttons {
    max-width: 150px;
  }
  .badge > i {
    font-size: 10.5px;
    padding-top: 2px;
    padding-right: 5px;
  }
</style>

<ul class="list-group list-group-flush">
  {#each items as item}
    <li
      class="list-group-item list-group-item-action d-flex justify-content-between align-items-center border"
      class:active={item == selectedItem}>
      <div class="flex-column" on:click={() => selectItem(item)}>
        <slot name="item-template" {item}>{item.name}</slot>

        <span class="badge badge-primary badge-pill">{item.quantity || 0} in da can</span>
        <span class="badge badge-success badge-pill">
          <i class="material-icons">filter_vintage</i>
          {item.minFloweringDays}-{item.maxFloweringDays} days
        </span>
      </div>
      <div class="buttons">
        <slot name="buttons-template" {item} />
      </div>
    </li>
  {/each}
</ul>
