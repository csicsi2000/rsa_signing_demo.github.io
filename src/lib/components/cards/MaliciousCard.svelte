<script>
  import ReceiveMessage from "$lib/components/ReceiveMessage.svelte";
  /**
   * @typedef {import('$lib/object/signed-document').SignedDocument} SignedDocument
   */
  /**
   * @type {Array<SignedDocument>}
   */
  export let maliciousItem = [];

  let publicKey = ""
  let message = ""

  $: {
    if (maliciousItem.length != 0) {
      publicKey = maliciousItem[0].publicKey;
      message = maliciousItem[0].text;
    }else{
      publicKey = ""
      message = ""
    }
  }
</script>

<div class="card text-dark border-secondary" style="background-color: #faee91;">
  <h5 class="card-header">Malicious 3rd party</h5>
  <div class="card-body">
    <h5 class="card-title">Manipulate content</h5>
    <p class="card-text">
      3rd party can manipulate the signed file for fake documents.
      <br />Select a document to manipulate
    </p>
  </div>
  <div class="card-footer">
    <div class="mb-3">
      <label for="publicKey" class="form-label">Public key</label>
      <textarea class="form-control" id="publicKey" bind:value={publicKey}/>
    </div>
    <div class="mb-3">
      <label for="publicKey" class="form-label">Message</label>
      <input type="text" class="form-control" id="publicKey" bind:value={message}/>
    </div>
    <div class="d-grid">
      <button class="btn btn-danger" on:click={() => console.log("Clicked")}>
        Modify file
      </button>
    </div>
    <ReceiveMessage bind:items={maliciousItem} />
  </div>
</div>
