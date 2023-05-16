<script>
    import "../app.css";
    import info from '$lib/info';

//     export async function load({ cookies }) {
//     return {
//       sessionid: await cookies.get('sessionid')
//     };
// }
  </script>

    <style>
      @import url(https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/5.3.45/css/materialdesignicons.min.css);
      :global(html) {
        /* background-color: theme('colors.blue.100'); */
        direction: rtl;
        /* margin: 1rem 1rem 1rem 1rem; */
        background-image: url("https://images.unsplash.com/photo-1682685797365-41f45b562c0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80");
      }
      </style>
      <div class="min-w-screen min-h-screen flex items-center justify-center px-5 py-5">
          <div class="w-full mx-auto rounded-lg backdrop-blur-lg bg-white/90 shadow-lg px-5 pt-5 pb-10 text-gray-800" style="max-width: 900px">
              <div class="w-full pt-1 pb-5">
                  <!-- <div class="overflow-hidden rounded-full w-20 h-20 -mt-16 mx-auto shadow-lg">
                      <img src="https://randomuser.me/api/portraits/men/15.jpg" alt="">
                  </div> -->
              </div>
              <div class="w-full mb-10">
                  <p class="text-sm text-gray-600 text-center px-5">
                    <slot />
                  </p>
              </div>
              <div class="w-full">
                  <p class="text-md text-indigo-500 font-bold text-center">{$info}</p>
                  <p class="text-xs text-gray-500 text-center">farsi.rocks</p>
              </div>
          </div>
      </div>
      
      <div class="flex items-end justify-end fixed bottom-0 right-0 mb-4 mr-4 z-10">
          <div>
              <a title="Buy me a beer" href="https://www.buymeacoffee.com/noghte" target="_blank" class="block w-16 h-16 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12">
                  <img alt="coffee" class="object-cover object-center w-full h-full rounded-full" src="https://i.pinimg.com/originals/60/fd/e8/60fde811b6be57094e0abc69d9c2622a.jpg"/>
              </a>
          </div>
      </div>
