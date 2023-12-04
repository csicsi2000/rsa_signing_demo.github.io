<script>
  import DndMessages from "$lib/components/DndMessages.svelte";
  import {SignedDocument} from "$lib/object/signed-document";
  import {ValidationStatus} from "$lib/object/document-status";
  import { generateRSAKeyPair, encodeMessage } from "$lib/logic/rsa";

  /**
   * @type {Array<SignedDocument>}
   */
  export let newItems = [];

  let testItem = new SignedDocument("test" ,"loremddf","12335","df",ValidationStatus.NOTVALIDATED)
  newItems.push(testItem)

  const minBits = 512;
 let generationBits = 512;
 let privateKey = "";
 let publicKey = "";

 let message = "";

 let isKeyGenerated = false;

 function generateKeys(){
    if(generationBits < minBits){
        alert("Invalid bits value. The value must be greater than "+ minBits +".")
        return
    }
    let result = generateRSAKeyPair(generationBits)
    privateKey = result.privateKey
    publicKey = result.publicKey
    isKeyGenerated = true
 }

 function createSignedMessage(){
    let signature = encodeMessage(message,privateKey)
    let id = Math.floor(Math.random() * 10000)
    let newDocument = new SignedDocument(id.toString(),message,signature,publicKey,ValidationStatus.NOTVALIDATED)
    console.log(newDocument)
    let tempItems = newItems
    tempItems.push(newDocument)
    newItems = tempItems;
    console.log(newItems)
 }
</script>

<div class="card border-secondary">
  <h5 class="card-header">Sender</h5>
  <div class="card-body">
    <div class="mb-3">
        <label for="privateKey" class="form-label">Bits count for generation</label>
        <input type="number" class="form-control" id="privateKey" bind:value={generationBits} min="{minBits}"/>
      </div>
    <div class="mb-3">
      <label for="privateKey" class="form-label">Private key</label>
      <textarea class="form-control" id="privateKey" disabled={true} bind:value={privateKey}/>
    </div>
  </div>
  <div class="card-footer">
    <div class="mb-3">
      <label for="publicKey" class="form-label">Public key</label>
      <textarea class="form-control" id="publicKey" disabled={true} bind:value={publicKey}/>
    </div>
    <div class="d-grid">
      <button class="btn btn-success" on:click={() => generateKeys()}>
        Generate key
      </button>
    </div>
    <div class="mb-3">
      <label for="message" class="form-label">Message</label>
      <textarea class="form-control" id="message" rows="3" bind:value={message}></textarea>
      <div class="form-text">Message that will be signed</div>
    </div>
    <div class="d-grid">
      <button class="btn btn-primary" on:click={() => createSignedMessage()} disabled={!isKeyGenerated}>
        Sign
      </button>
    </div>
    <p>The newly created document will be shown below</p>
    <DndMessages bind:items={newItems} />
  </div>
</div>
