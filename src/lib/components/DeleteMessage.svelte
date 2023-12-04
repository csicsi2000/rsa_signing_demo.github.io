<script>
  import { dndzone } from "svelte-dnd-action";
  import { flip } from "svelte/animate";
  import ShowDocument from "./ShowDocument.svelte";

  const flipDurationMs = 300;
/**
 * @typedef {import('$lib/object/signed-document').SignedDocument} SignedDocument
 */
  /**
   * @type {Array<SignedDocument>}
   */
  let items = [];

  // @ts-ignore
  function handleConsider(e) {
    items = e.detail.items;
  }
  // @ts-ignore
  function handleFinalize(e) {
    items = e.detail.items;
	items.pop();
  }
</script>

<h2>Delete</h2>

<p>To delete a document drag the item to the below section.</p>
<div
  class="text-center d-flex container col mb-5"
>
  <section
    class="bg-danger bg-gradient dnd-area"
    use:dndzone={{ items, flipDurationMs }}
    on:consider={handleConsider}
    on:finalize={handleFinalize}
  >
  {#each items as item(item.id)}
  <div animate:flip={{ duration: flipDurationMs }}>
    <ShowDocument bind:document={item} />
  </div>
  {/each}
</section>
</div>
