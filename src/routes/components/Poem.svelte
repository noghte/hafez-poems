<script lang="ts">
	// export let items = [];
	interface PoemData {
		poem: Array<{
			text: string;
		}>;
	}

	export let data: PoemData | null = null;

	const emojis = ["❤️", "💥"];
	
	// Add state for showing options
	let showOptions = false;
	
	// Add state for selected option
	let selectedOption = "";
	
	// Image mapping for different options
	const optionImages = {
		"option1": "https://plus.unsplash.com/premium_photo-1671527298798-b21e254743d5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1pbi1zYW1lLXNlcmllc3wxfHx8ZW58MHx8fHx8",
		"option2": "https://images.unsplash.com/photo-1457298483369-0a95d2b17fcd?q=80&w=3008&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`",
		"option3": "https://placekitten.com/202/202"
	};

	// Change to track which verse shows options
	let activeVerseIndex: number | null = null;

	// Function to handle emoji click
	function handleEmojiClick(emoji: string, index: number) {
		if (emoji === "💥") {
			activeVerseIndex = activeVerseIndex === index ? null : index;
			showOptions = activeVerseIndex !== null;
		}
	}

	// Function to handle option selection
	function handleOptionSelect(event: Event) {
		selectedOption = (event.target as HTMLSelectElement).value;
	}
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
				  <div class="flex gap-2 mt-1 justify-center">
					{#each emojis as emoji}
						<button 
							class="scale-150 hover:scale-[2] transition-transform" 
							aria-label="emoji reaction"
							title={emoji === "❤️" ? "ذخیره" : "بیشتر"}
							on:click={() => handleEmojiClick(emoji, index)}
						>
							{emoji}
						</button>
					{/each}
				  </div>
				  
				  {#if showOptions && activeVerseIndex === index}
						<div class="mt-4 flex flex-col items-center gap-4">
							<select 
								class="p-2 rounded-md border border-gray-300"
								on:change={handleOptionSelect}
							>
								<option value="">انتخاب کنید</option>
								<option value="option1">گزینه ۱</option>
								<option value="option2">گزینه ۲</option>
								<option value="option3">گزینه ۳</option>
							</select>
							
							{#if selectedOption}
								<img 
									src={optionImages[selectedOption]} 
									alt="Selected option image"
									class="w-48 h-48 rounded-lg shadow-lg"
								/>
							{/if}
						</div>
				  {/if}
				</div>
			{/if}
		  </div>
		{/each}
	  </div>
	  
		<!-- write items.length in console -->
			
	{/if}
</main>
