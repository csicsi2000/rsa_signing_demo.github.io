<script>
    /**
 * @typedef {import('$lib/object/signed-document').SignedDocument} SignedDocument
 */
    /**
     * @type {SignedDocument} 
     */
    export let document;


</script>
<div class="card text-bg-info border border-secondary" style="width: 100%">
    <div class="card-header">
        Document with signature
    </div>
    <div class="card-body">
      {document.text}
    </div>
    <div class="card-footer">
        Status: {document.status}
    </div>
  </div>