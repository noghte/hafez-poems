<script>
	// export let items = [];
	export let data = null;

</script>

  

<main class="flex flex-row justify-between">
	{#if data === null || data.poem === undefined || data.poem.length === 0}
		<p> در حال بارگزاری ...  </p>
	{:else}
	
	<div class="container mx-auto p-4">
		{#each data.poem as item, index}
		  <div class="grid grid-cols-1">
			{#if index % 2 === 0}
				<div class="pb-0">
				  <p class="text-lg">{item.text}</p>
				</div>
			{/if}
			{#if index % 2 === 1}
				<div class="pb-4">
				  <p class="text-lg">{item.text}</p>
				</div>
			{/if}
		  </div>
		{/each}
	  </div>
	  
		<!-- write items.length in console -->
			
	{/if}
</main>
