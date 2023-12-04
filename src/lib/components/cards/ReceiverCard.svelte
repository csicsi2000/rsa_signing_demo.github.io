<script>
  import ReceiveMessage from "$lib/components/ReceiveMessage.svelte";
/**
 * @typedef {import('$lib/object/signed-document').SignedDocument} SignedDocument
 */
  /**
   * @type {Array<SignedDocument>}
   */
  export let validationItems = [];

  let isItemSelected = false;
  $: {
    if(validationItems.length == 0){
      isItemSelected = true;
    }else{
      isItemSelected = false;
    }
  }
</script>

<div class="card border-secondary">
  <h5 class="card-header">Receiver</h5>
  <div class="card-body" style="min-height: 19rem;">
    <h5 class="card-title">The receiver of the document</h5>
    <p class="card-text">The receiver can validate the message based on the received public key. If the document has been manipulated, the message will be invalid.</p>
  </div>
  <div class="card-footer">
    <div class="d-grid">
      <button class="btn btn-success" on:click={() => console.log("Clicked")} disabled={isItemSelected}>
        Validate message
      </button>
    </div>
    <ReceiveMessage bind:items={validationItems} />
  </div>
</div>
