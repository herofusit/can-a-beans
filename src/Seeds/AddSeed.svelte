<script>
  import { createEventDispatcher } from "svelte";
  import { SeedProxy } from "./SeedProxy";
  import SeedForm from "./SeedForm.svelte";
  import Button from "../Components/Button.svelte";
  import Input from "../Components/Input.svelte";
  const proxy = new SeedProxy();
  const dispatch = createEventDispatcher();
  let seed = { name: "" };
  async function saveSeed() {
    await proxy.addSeedAsync(seed);
  }

  function cancel(){
    dispatch("cancel");
  }
</script>

<div class="card">
  <div class="card-header card-header-icon card-header-rose">
    <div class="card-icon">
      <i class="material-icons">create</i>
    </div>
  </div>
  <div class="card-body">
    <h4 class="card-title">Add a new seed to your collection :)</h4>
    <form>
      <SeedForm bind:seed />
    </form>
  </div>
  <div class="card-footer">
    <Button text="cancel" style="warning" on:click={cancel} />
    <Button text="save" on:click={saveSeed} />
  </div>
</div>
