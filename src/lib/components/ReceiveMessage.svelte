<script>
	import {dndzone} from 'svelte-dnd-action';
	import {flip} from 'svelte/animate';
  import ShowDocument from "./ShowDocument.svelte";

	const flipDurationMs = 200;
/**
 * @typedef {import('$lib/object/signed-document').SignedDocument} SignedDocument
 */
    /**
     * @type {Array<SignedDocument>}
     */
	export let items = [];

	export let maxItems = 1;
	let dropFromOthersDisabled = false;
	
	// @ts-ignore
	function handleConsider(e) {
		items = e.detail.items;
		if (items.length < maxItems) {
			dropFromOthersDisabled = false;
		}
	}
	// @ts-ignore
	function handleFinalize(e) {
		items = e.detail.items;
		dropFromOthersDisabled = (items.length >= maxItems);
	}
</script>
<p>
    Drag a document into the are below
</p>
	<section class="dnd-area d-grid gap-3 p-2" use:dndzone={{items, flipDurationMs, dropFromOthersDisabled}} on:consider={handleConsider} on:finalize={handleFinalize}>
        {#each items as item(item.id)}
        <div animate:flip={{ duration: flipDurationMs }}>
          <ShowDocument bind:document={item} />
        </div>
        {/each}
	</section>