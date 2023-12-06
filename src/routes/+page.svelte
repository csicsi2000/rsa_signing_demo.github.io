<script>
  import ReceiverCard from "../lib/components/cards/ReceiverCard.svelte";
  import MaliciousCard from "../lib/components/cards/MaliciousCard.svelte";
  import DeleteMessage from "$lib/components/DeleteMessage.svelte";
  import SenderCard from "$lib/components/cards/SenderCard.svelte";
  import DndMessages from "$lib/components/DndMessages.svelte";

/**
 * @typedef {import('$lib/object/signed-document').SignedDocument} SignedDocument
 */
  /**
   * @type {Array<SignedDocument>}
   */
  let newItems = [];

  /**
   * @type {Array<SignedDocument>}
   */
  let maliciousItem = [];

  /**
   * @type {Array<SignedDocument>}
   */
  let validationItems = [];


    /**
   * @type {Array<SignedDocument>}
   */
   export let toBeAdded = [];

   function addToNewItems(){
    toBeAdded.push(...newItems)
    newItems = toBeAdded
    toBeAdded = []
   }
</script>

<nav class="navbar navbar-expand-lg bg-secondary text-uppercase" id="mainNav">
  <div class="container">
    <p class="navbar-brand text-white">RSA signing demo</p>
  </div>
</nav>
<!-- Button trigger modal -->
<div class="d-grid m-3">
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#newItemModal">
    Launch Document Creation
  </button>
</div>
<div class="container ">
  <div class="row">
    <div class="col">
        <div class="card">
            <div class="card-header">
              Active messages
            </div>
            <div class="card-body">
                Generated messages
            </div>
            <div class="card-footer">
                <DndMessages bind:items={newItems} />
                </div>
          </div>
          <div class="row m-3">
            <DeleteMessage />
          </div>
    </div>
    <div class="col ">
      <MaliciousCard bind:maliciousItem />
    </div>
    <div class="col ">
      <ReceiverCard bind:validationItems />
    </div>
  </div>
</div>

  
  <!-- Modal -->
  <div class="modal fade" id="newItemModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-scrollable " style="max-width: 1000px;">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Create new item</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" on:click={() => addToNewItems()}></button>
        </div>
        <div class="modal-body">
            <SenderCard bind:newItems={toBeAdded} />
          
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" on:click={() => addToNewItems()}>Close</button>
        </div>
      </div>
    </div>
  </div>