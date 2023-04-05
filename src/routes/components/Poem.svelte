<script>
	export let items = [];
</script>

<main class="flex flex-row justify-between">
	{#if items.length === 0}
		<p>حافظ سرش جای دیگه گرمه</p>
	{:else}
			<div class="w-1/2">
				<!-- <h1 class="text-center">Right Column</h1> -->
				<ul>
					{#each items.filter((item) => item.position === 0) as item}
						<li>
							<!-- <strong>ID:</strong> {item.poem_id}  -->
							<!-- <strong>vorder:</strong> {item.vorder}  -->
							{item.text}
						</li>
					{/each}
				</ul>
			</div>
			<div class="w-1/2">
				<!-- <h1 class="text-center">Left Column</h1> -->
				<ul>
					{#each items.filter((item) => item.position === 1) as item}
						<li>
							<!-- <strong>ID:</strong> {item.poem_id}  -->
							<!-- <strong>vorder:</strong> {item.vorder}  -->
							{item.text}
						</li>
					{/each}
				</ul>
			</div>
	{/if}
</main>
