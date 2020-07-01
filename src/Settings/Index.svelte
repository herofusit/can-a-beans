<script>
  import Input from "../Components/Input.svelte";
  import Button from "../Components/Button.svelte";
  let settings = {};

  function saveSettings() {}
</script>

<div class="card">
  <div class="card-header card-header-icon card-header-rose">
    <div class="card-icon">
      <i class="material-icons">bubble_chart</i>
    </div>
    <Button text="save settings" icon="save" classes="float-right" on:click={saveSettings} />
  </div>
  <div class="card-body">
    <!-- <h4 class="card-title"> </h4>
      <div class="clearfix"></div> -->

    <Input type="number" name="Days in veg" bind:value={settings.defaultDaysInVeg} />
  </div>
</div>
