<script>
  import ReceiverCard from "../lib/components/cards/ReceiverCard.svelte";
  import MaliciousCard from "../lib/components/cards/MaliciousCard.svelte";
  import DeleteMessage from "$lib/components/DeleteMessage.svelte";
  import SenderCard from "$lib/components/cards/SenderCard.svelte";
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
</script>

<nav class="navbar navbar-expand-lg bg-secondary text-uppercase" id="mainNav">
  <div class="container">
    <a class="navbar-brand text-white" href="#page-top">RSA signing demo</a>
  </div>
</nav>

<div class="container mt-5">
  <div class="row">
    <div class="col">
      <SenderCard bind:newItems />
    </div>
    <div class="col">
      <MaliciousCard bind:maliciousItem />
    </div>
    <div class="col">
      <ReceiverCard bind:validationItems />
    </div>
  </div>
  <div class="row mt-5">
    <DeleteMessage />
  </div>
</div>
