<script>
    import "../app.css";
    import info from '$lib/info';
    import bg1 from '$lib/images/bg1.jpg';
    import imgBuyMeACoffee from '$lib/images/coffee-clipart-transparent-7.png';
    import imgGooglePlay from '$lib/images/googleplay.png';
    import imgIos from '$lib/images/ios.png';

//     export async function load({ cookies }) {
//     return {
//       sessionid: await cookies.get('sessionid')
//     };
// }
  </script>

    <style>
      /* @import url(https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/5.3.45/css/materialdesignicons.min.css); */
      :global(html) {
        /* background-color: theme('colors.blue.100'); */
        direction: rtl;
        /* margin: 1rem 1rem 1rem 1rem; */
      }
      </style>
      <div class="min-w-screen min-h-screen flex items-center justify-center px-5 py-5" style="background-image: url({bg1})">
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
      
      <!-- This is an example component -->
<div class=" bg-gray-900">
    <div class="max-w-2xl mx-auto text-white py-10">
        <div class="text-center">
            <h3 class="text-2xl mb-3"> I appreciate your support</h3>
            <div class=" bottom-0 right-0 mb-4 mr-4 z-10">
                <div>

              </div>
          </div>
            <div class="flex justify-center my-10">
                <div class="flex items-center px-4 py-2 w-52 mx-2">
                  <a title="Buy me a coffee" href="https://www.buymeacoffee.com/noghte" target="_blank" class="block w-24 h-24 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110">
                    <img alt="buy me a coffee" src="{imgBuyMeACoffee}" class="object-cover object-center w-full h-full rounded-full" />
                    <div class="text-left ml-3">
                        <p class='text-xs text-gray-200'>Buy me </p>
                        <p class="text-sm md:text-base"> a coffee </p>
                    </div>
                </a>
            </div>
                <div class="flex items-center px-4 py-2 w-52 mx-2">
                    <img alt="Google Play" src="{imgGooglePlay}" class="w-7 md:w-8">
                    <div class="text-left ml-3">
                        <p class='text-xs text-gray-200'>Download on </p>
                        <p class="text-sm md:text-base"> Google Play Store </p>
                    </div>
                </div>
                <div class="flex items-center px-4 py-2 w-44 mx-2">
                    <img alt="iOS" src="{imgIos}" class="w-7 md:w-8">
                    <div class="text-left ml-3">
                        <p class='text-xs text-gray-200'>Download on </p>
                        <p class="text-sm md:text-base"> Apple Store </p>
                    </div>
                </div>
            </div>
        </div>
        <!-- <div class="mt-28 flex flex-col md:flex-row md:justify-between items-center text-sm text-gray-400">
            <p class="order-2 md:order-1 mt-8 md:mt-0"> &copy; Beautiful Footer, 2021. </p>
            <div class="order-1 md:order-2">
                <span class="px-2">About us</span>
                <span class="px-2 border-l">Contact us</span>
                <span class="px-2 border-l">Privacy Policy</span>
            </div>
        </div> -->
    </div>
</div>
      <!-- <div class="flex items-end justify-end fixed bottom-0 right-0 mb-4 mr-4 z-10"> -->

