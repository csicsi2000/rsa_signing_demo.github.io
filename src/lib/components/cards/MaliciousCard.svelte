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
  let signature = ""

  let enterSwitch = true
  $: {
    if (maliciousItem.length != 0 && enterSwitch) {
      publicKey = maliciousItem[0].publicKey
      message = maliciousItem[0].text
      signature = maliciousItem[0].signature
      enterSwitch = false
    }else if(maliciousItem.length == 0){
      publicKey = ""
      message = ""
      signature = ""
      enterSwitch = true
    }
  }

  function modify(){
    maliciousItem[0].publicKey = publicKey
    maliciousItem[0].text = message
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
      <label for="signature" class="form-label">Signature</label>
      <textarea class="form-control" id="signature" bind:value={signature}/>
    </div>
    <div class="mb-3">
      <label for="message" class="form-label">Message</label>
      <input type="text" class="form-control" id="message" bind:value={message}/>
    </div>
    <div class="d-grid">
      <button class="btn btn-danger" on:click={() => modify()}>
        Modify file
      </button>
    </div>
    <ReceiveMessage bind:items={maliciousItem} />
  </div>
</div>
