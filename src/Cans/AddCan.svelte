<script>
  import { CanProxy } from "./CanProxy";
  import Button from "../Button.svelte";
  import Input from "../Input.svelte";
  const proxy = new CanProxy();
  let can = { id: null, name: "" };
  async function saveCan() {
    await proxy.addCanAsync(can);
  }
</script>

<form>
  <Input type="text" bind:value={can.name} placeholder="Can name" />
  <Button text="save" on:click={saveCan} />
</form>
