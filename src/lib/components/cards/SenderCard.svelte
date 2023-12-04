<script>
  import DndMessages from "$lib/components/DndMessages.svelte";
  import {SignedDocument} from "$lib/object/signed-document";
  import {ValidationStatus} from "$lib/object/document-status";
  import { generateRSAKeyPair } from "$lib/logic/rsa";
  import { KeyPair } from "$lib/object/keyPair";

  /**
   * @type {Array<SignedDocument>}
   */
  export let newItems = [];

  let testItem = new SignedDocument("test" ,"loremddf","12335","df",ValidationStatus.NOTVALIDATED)
  newItems.push(testItem)
  let testItem2 = new SignedDocument("test2" ,"loremddf","12335","dfs",ValidationStatus.NOTVALIDATED)
  newItems.push(testItem2)

 let generationBits = 2048;
 let privateKey = "";
 let publicKey = "";

 let message = "";

 function generateKeys(){
    let result = generateRSAKeyPair(generationBits)
    privateKey = result.privateKey
    publicKey = result.publicKey
 }
</script>

<div class="card border-secondary">
  <h5 class="card-header">Sender</h5>
  <div class="card-body">
    <div class="mb-3">
        <label for="privateKey" class="form-label">Bits count for generation</label>
        <input type="number" class="form-control" id="privateKey" bind:value={generationBits}/>
      </div>
    <div class="mb-3">
      <label for="privateKey" class="form-label">Private key</label>
      <input type="text" class="form-control" id="privateKey" disabled={true} bind:value={privateKey}/>
    </div>
  </div>
  <div class="card-footer">
    <div class="mb-3">
      <label for="publicKey" class="form-label">Public key</label>
      <input type="text" class="form-control" id="publicKey" bind:value={publicKey}/>
    </div>
    <div class="d-grid">
      <button class="btn btn-success" on:click={() => console.log("Clicked")}>
        Generate key
      </button>
    </div>
    <div class="mb-3">
      <label for="message" class="form-label">Message</label>
      <textarea class="form-control" id="message" rows="3" bind:value={message}></textarea>
      <div class="form-text">Message that will be signed</div>
    </div>
    <div class="d-grid">
      <button class="btn btn-primary" on:click={() => console.log("Clicked")}>
        Sign
      </button>
    </div>
    <p>The newly created document will be shown below</p>
    <DndMessages bind:items={newItems} />
  </div>
</div>
