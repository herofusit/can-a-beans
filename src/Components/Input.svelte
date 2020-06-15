<script>
  // import PhoneNumberInput from "./Inputs/PhoneNumberInput.svelte";
  // import DatePicker from "./Inputs/DatePicker.svelte";
  // import CurrencyEditor from "./Inputs/CurrencyEditor.svelte";
  // import ToggleSwitch from "./Inputs/ToggleSwitch.svelte";
  // import ZipCodeInput from "./Inputs/ZipCodeInput.svelte";
  export let type = "text";
  export let id = "input-" + new Date().getTime();
  export let name = null;
  export let label = "";
  export let value = "";
  export let placeholder = ""; // label;
  export let required = "";
  export let options = {};
  export let helpText = "";
</script>

{#if type == 'email'}
  <div class="form-group">
    <label for={id}>{label}</label>
    <input
      type="email"
      class="form-control"
      aria-describedby="{id}Help"
      {name}
      {id}
      bind:value
      {placeholder}
      {required}
      maxlength={options.maxLength}
      data-val="true"
      data-val-length="{label ? label : 'This field'} has maximum length of {options.maxLength}."
      data-val-length-max={options.maxLength} />
    <small id="{id}Help" class="form-text text-muted">{helpText}</small>
  </div>
{:else if type == 'checkbox'}
  <!-- <ToggleSwitch bind:checked={value} {id} {name} {label} {required} {...options} {helpText}/> -->
  <div class="form-check">
    <label class="form-check-label">
      <input class="form-check-input" type="checkbox" bind:checked={value} />
      {label}
      <span class="form-check-sign">
        <span class="check" />
      </span>
    </label>
  </div>
{:else if type === 'number'}
  <div class="form-group">
    <label for={id}>{label}</label>
    <input
      type="number"
      class="form-control"
      aria-describedby="{id}Help"
      {name}
      {id}
      bind:value
      {placeholder}
      {required}
      maxlength={options.maxLength}
      data-val="true"
      data-val-length="{label ? label : 'This field'} has maximum length of {options.maxLength}."
      data-val-length-max={options.maxLength} />
    <small id="{id}Help" class="form-text text-muted">{helpText}</small>
  </div>
  <!-- {:else if type == 'currency'}
  <CurrencyEditor bind:value {id} {name} {label} {required} {...options} {helpText}/>
{:else if type == 'tel'}
  <PhoneNumberInput bind:value {id} {name} {label} {required} {...options} {helpText}/>
{:else if type == 'zip'}
  <ZipCodeInput bind:value {id} {name} {label} {required} {...options} {helpText}/>
{:else if type == 'date'}
  <DatePicker bind:value {id} {name} {label} {required} {...options} {helpText} /> -->
{:else if type == 'textarea'}
  <div class="form-group">
    <label for={id}>{label}</label>
    <textarea
      {name}
      {id}
      bind:value
      {placeholder}
      {required}
      maxlength={options.maxLength}
      class="form-control form-control-sm"
      rows={options.rows ? options.rows : 3} />
    {#if helpText}
      <small class="form-text text-muted">{helpText}</small>
    {/if}
  </div>
{:else}
  <div class="form-group">
    <label for={id}>{label}</label>
    <input
      type="text"
      class="form-control"
      aria-describedby="{id}Help"
      {name}
      {id}
      bind:value
      {placeholder}
      {required}
      maxlength={options.maxLength}
      data-val="true"
      data-val-length="{label ? label : 'This field'} has maximum length of {options.maxLength}."
      data-val-length-max={options.maxLength} />
    <small id="{id}Help" class="form-text text-muted">{helpText}</small>
  </div>
{/if}

<!-- 
<span
        class="field-validation-valid text-danger"
        data-valmsg-for="Customer.ExtraData"
        data-valmsg-replace="true" /> -->
