<script>
  import { flip } from "svelte/animate";
  import { dndzone } from "svelte-dnd-action";
  import ShowDocument from "./ShowDocument.svelte";
/**
 * @typedef {import('$lib/object/signed-document').SignedDocument} SignedDocument
 */
  /**
   * @type {Array<SignedDocument>}
   */
  export let items = [];

  const flipDurationMs = 300;
  // @ts-ignore
  function handleDndConsider(e) {
    items = e.detail.items;
  }
  // @ts-ignore
  function handleDndFinalize(e) {
    items = e.detail.items;
  }
</script>

<section
  class="dnd-area d-grid gap-3 p-2"
  use:dndzone={{ items, flipDurationMs }}
  on:consider={handleDndConsider}
  on:finalize={handleDndFinalize}
>
  {#each items as item(item.id)}
  <div animate:flip={{ duration: flipDurationMs }}>
    <ShowDocument bind:document={item} />
  </div>
  {/each}
</section>
