<script>
  import { createEventDispatcher } from "svelte";
  import { SeedProxy } from "./SeedProxy";
  import SeedForm from "./SeedForm.svelte";
  import Button from "../Components/Button.svelte";
  import Input from "../Components/Input.svelte";
  import { selectedSeed } from "../stores";
  const dispatcher = createEventDispatcher();
  const proxy = new SeedProxy();
  async function saveSeed() {
    await proxy.updateSeedAsync($selectedSeed);
  }
</script>

<div class="card">
  <div class="card-header card-header-icon card-header-rose">
    <div class="card-icon">
      <i class="material-icons">update</i>
    </div>
    <h4 class="card-title">Update that bean!</h4>
    <p class="category">Category subtitle</p>
  </div>
  <div class="card-body">
    <form>
      <SeedForm bind:seed={$selectedSeed} />
    </form>

  </div>
  <div class="card-footer text-muted">
    <Button text="save" on:click={saveSeed} />
  </div>
</div>
