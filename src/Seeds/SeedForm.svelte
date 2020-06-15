<script>
  import Button from "../Components/Button.svelte";
  import Input from "../Components/Input.svelte";

  export let seed = {};
</script>

<Input type="text" bind:value={seed.cultivar} label="Cultivar" placeholder="Enter the cultivar / strain" />
<Input type="number" label="Quantity" bind:value={seed.quantity} />
<Input type="text" label="Breeder" bind:value={seed.breeder} />

<div class="form-group">
  <label for="type">Type</label>
  <select bind:value={seed.type} class="form-control selectpicker" data-style="btn btn-link" id="type">
    <option value="">Select a type</option>
    <option>H</option>
    <option>I</option>
    <option>S</option>
  </select>
</div>
<Input type="checkbox" label="Is Auto" bind:value={seed.autoflower} />

{#if seed.autoflower}
  <Input
    type="number"
    label="Days Until Harvest"
    placeholder="Enter the number of days until harvest"
    bind:value={seed.minFloweringDays} />
{:else}
  <Input type="number" label="Flowering Days (min)" bind:value={seed.minFloweringDays} />
  <Input type="number" label="Flowering Days (max)" bind:value={seed.maxFloweringDays} />
{/if}
<Input type="url" label="More Info" bind:value={seed.url} />
<Input type="textarea" label="Notes" bind:value={seed.notes} />
