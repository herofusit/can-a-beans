<script>
  export let icon = undefined;
  export let text = undefined;
  export let style = undefined;
  export let size;
  export let classes;
  export let iconSize;
  export let modalSelector;
  export let disabled = false;
  export let type = "button";

  let localStyle;
  let localIcon;
  let localText;
  switch (type) {
    case "submit":
      localIcon = "check";
      localStyle = "success";
      break;
    case "create":
      localIcon = "add";
      localStyle = "success";
      break;
    case "save":
      localIcon = "save";
      localText = "Save";
      localStyle = "primary";
      break;
    case "undo":
      localIcon = "undo";
      localStyle = "danger";
      localText = "Undo";
      break;
    case "close":
      text = "Close";
      localStyle = "secondary";
      localIcon = "close";
      break;
    case "ok":
      localText = "Okay";
      localStyle = "primary";
      localIcon = "done";
      break;
    default:
      break;
  }

  if (style !== undefined) localStyle = style;
  if (icon !== undefined) localIcon = icon;
  if (text !== undefined) localText = text;

  if (type != "submit") type = "button";
  if (!localStyle) localStyle = "primary";
  if (!size) size = "sm";
  if (!iconSize) iconSize = "18";
  if (!localText) text = "";

  $: toggleMode = modalSelector > "" ? "modal" : null;
</script>

<style>
  i {
    vertical-align: text-bottom;
  }
</style>

<button
  on:click
  {disabled}
  class="btn btn-{size} btn-outline-{localStyle}
  {classes}"
  {type}
  data-target={modalSelector}
  data-toggle={toggleMode}>
  {#if localIcon}
    <i class="material-icons fs--{iconSize}">{localIcon}</i>
  {/if}
  {localText}
</button>
