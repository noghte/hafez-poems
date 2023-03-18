<script>
    import { onMount } from 'svelte';
    import Poem from "./Poem.svelte";
    const description = "A peom by Hafez";
    const min = 1;
          const max = 630;
          const poem_id = Math.floor(Math.random() * (max - min + 1)) + min;
    let items = [];
    onMount(async () => {
      try {

          
          const url =`/hafez?pid=${poem_id}`;
          try {
  const response = await fetch(url);
  items = await response.json();
  // handle data
} catch (error) {
  console.error(error);
  // handle error
}
  
        //   data = response.data;
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    });
  </script>

<svelte:head>
    <meta name="description" content={description} />
    <title>Here's a title!</title>
    </svelte:head>
<!-- <script>
    import { onMount } from 'svelte';
    import axios from 'axios';
  
    const server_port = 8085;
    let data = [];
    onMount(async () => {
      try {
          const min = 1;
          const max = 630;
          const poem_id = Math.floor(Math.random() * (max - min + 1)) + min;
          
          console.log(poem_id);
          const query = `SELECT poem_id,vorder,position,text FROM verse WHERE poem_id = (SELECT id FROM poem LIMIT 1 OFFSET ${poem_id});`;
          const apiUrl = `http://localhost:${server_port}/runquery`;
  
          const response = await axios.get(apiUrl, {
              params: {
                  query_text: query,
              }
          });
  
          data = response.data;
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    });
  </script> -->
  

      <main class="w-[95%] max-w-2xl mx-auto mt-48">
        <h1 class="text-xl font-bold">
          شعر شماره {poem_id}
        </h1>
        <hr />
        <!-- <p>Search for Hafez below</p>
        <input
          class="p-2"
          type="search"
          autocomplete="off"
          placeholder="Search"
          bind:value
        /> -->
        <Poem {items} /> 
      </main>