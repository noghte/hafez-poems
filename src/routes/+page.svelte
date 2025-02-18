<script>
	import { onMount } from 'svelte';
	import Poem from './components/Poem.svelte';
    import info from '$lib/info';
	import { get } from 'svelte/store';
	import { goto } from "$app/navigation";
	import { page } from "$app/stores"; 
	const description = 'A random peom';

	let data;
	let currPoemUrl = '';
	let selectedPoet = 'hafez';
	$: $info = selectedPoet;

	function handlePoetChange(event) {
		selectedPoet = event.target.value;
		fetchData(selectedPoet, -1);
	}
	async function fetchData(poet, pid)
	{
		const url = `?poet=${poet}&pid=${pid}`;
		try {
			const response = await fetch(url);
			data = await response.json();
			console.log(data)
			let poemId = data.poem_id;
			currPoemUrl = `${$page.url.origin}/?poet=${poet}&pid=${poemId}`;
			console.log(currPoemUrl);

			// updateInfo(poet);
		} catch (error) {
			console.error(error);
			// handle error
		}
	}
	onMount(() => {
		//http://localhost:5174/?poet=hafez&pid=2483
		const params = new URLSearchParams($page.url.search);
		selectedPoet = params.get('poet') || 'hafez';
		let poemId = params.get('pid') || -1;
		fetchData(selectedPoet, poemId);
		goto("/"); // to remove the query string from the url, so next poem does not show an incorrect value
	});
	function buttonClicked(id) {
		// if (id === 'btnNext') {
		// 	poem_id++;
		// } else {
		// 	poem_id--;
		// }
		fetchData(selectedPoet, -1);
	}
	const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(currPoemUrl);
      alert("آدرس شعر در حافظه کپی شد.");
    } catch (err) {
      alert("failed to copy!");
    }
  };
  
</script>

<svelte:head>
	<meta name="description" content={description} />
	<title>فال شعرا</title>
</svelte:head>


<main class="w-[95%] max-w-2xl mx-auto mt-4">
	<!-- <button id="btnPrev" type="button" on:click={() => buttonClicked(event.target.id)} class="float-right p-2 bg-gray-800 text-white rounded-l-md border-r border-gray-100 py-2 hover:bg-red-700 hover:text-white px-3">
		<div class="flex align-middle">
	
		  <svg class="w-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
			<path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
		  </svg>	
		  <p class="ml-2">شعر قبلی</p>
		</div>
	  </button> -->
	<select id="drpPoets" on:change={handlePoetChange} bind:value={selectedPoet} class="appearance-none w-40 bg-gray-200 border border-gray-200 text-gray-700 py-2 px-4 pr-8 rounded focus:outline-none focus:bg-white focus:border-gray-500">
		<option value="hafez">حافظ</option>
		<option value="saadi">سعدی</option>
		<option value="moulavi">مولوی</option>
		<option value="attar">عطار</option>
		<option value="khayyam">خیام</option>
		<option value="bahar">بهار</option>
		<option value="parvin">پروین</option>
		<option value="bidel">بیدل</option>
		<option value="jami">جامی</option>
		<option value="saeb">سائب</option>
		<option value="vahshi">وحشی</option>
	</select>
		  <button id="btnNext" type="button" on:click={() => buttonClicked(event.target.id)} class="float-left p-2 bg-gray-800 text-white rounded-l-md border-r border-gray-100 py-2 hover:bg-red-700 hover:text-white px-3">
			<div class="flex align-middle">
			  <p class="ml-2">شعری دیگر</p>
			  <svg class="w-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
				<path fill-rule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clip-rule="evenodd"></path>
			  </svg>	
			</div>
		  </button>
		  <!-- <button type="button" class="bg-gray-800 text-white rounded-r-md py-2 border-l border-gray-200 hover:bg-red-700 hover:text-white px-3">
			<div class="flex flex-row align-middle">
			  <span class="mr-2">Next</span>
			  <svg class="w-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
				<path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
			  </svg>
			</div>
		  </button> -->

	<!-- <h1 class="text-xl font-bold">
		شعر شماره {poem_id}

	</h1> -->
	<!-- <hr /> based on https://www.svgrepo.com/svg/110692/horizontal-line?edit=true-->
	<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="w-full" height="93px" viewBox="-29.07 -29.07 348.80 348.80" xml:space="preserve" fill="#310a6b" stroke="#310a6b" stroke-width="1.162632"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.581316"></g><g id="SVGRepo_iconCarrier"> <g> <g> <rect y="139.474" style="fill:#030303;" width="290.658" height="11.711"></rect> </g> </g> </g></svg>
	<!-- <p>Search for Hafez below</p>
      <input
        class="p-2"
        type="search"
        autocomplete="off"
        placeholder="Search"
        bind:value
      /> -->
	<Poem {data} />
	<input type="text" style="direction:ltr"  class="p-2 w-1/2" bind:value={currPoemUrl} readonly />
	<button id="btnNext" type="button" on:click={copyToClipboard} class="p-2 bg-gray-800 text-white rounded-l-md border-r border-gray-100 py-2 hover:bg-red-700 hover:text-white px-3">
		<div class="flex align-middle">
		  <p class="ml-2">کپی</p>
		</div>
	  </button>

</main>
