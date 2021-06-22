<template>
  <div>
    <div v-for="(rubric, idx) of allRubric" :key="allRubric.id">
      <div class="p-10 mx-auto sm:px-6 lg:px-8 bg-gradient-to-b from-blueGray-300 to-gray-50 shadow-lg mb-4">
        <div class="flex flex-col text-center w-full">
          <h1 class=" text-5xl font-medium title-font text-main">{{ rubric.name }}</h1>
        </div>
      </div>


      <div class="mx-4 flex  ">
<!--        <div class="flex w-1/5 max-w-sm flex-col flex-grow border-r border-gray-200 pt-8 pb-4 overflow-y-auto hidden md:block">-->
<!--          <div class="mb-6 flex items-center flex-shrink-0 px-4">-->
<!--            &lt;!&ndash;          <svg class="text-gray-500 mr-3 h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"&ndash;&gt;-->
<!--            &lt;!&ndash;               xmlns="http://www.w3.org/2000/svg">&ndash;&gt;-->
<!--            &lt;!&ndash;            <path&ndash;&gt;-->
<!--            &lt;!&ndash;              d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"&ndash;&gt;-->
<!--            &lt;!&ndash;              stroke-linecap="round" stroke-linejoin="round"&ndash;&gt;-->
<!--            &lt;!&ndash;              stroke-width="2"/>&ndash;&gt;-->
<!--            &lt;!&ndash;          </svg>&ndash;&gt;-->
<!--            <div class="text-gray-900 text-2xl">-->
<!--              <strong>{{ rubric.name }}</strong>-->
<!--            </div>-->
<!--          </div>-->

<!--          <hr>-->
<!--          <div class="mt-5 flex-grow flex flex-col">-->
<!--            <nav aria-label="Sidebar" class="flex-1 px-2 space-y-1">-->
<!--              &lt;!&ndash; Current: "bg-gray-100 text-gray-900", Default: "text-gray-600 hover:bg-gray-50 hover:text-gray-900" &ndash;&gt;-->

<!--              <NuxtLink v-for="(category, idx) of rubric.category" :key="category.id"-->
<!--                        :to="'products/' + category.slug"-->
<!--                        class="text-gray-600 hover:bg-gray-100 hover:text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md">-->
<!--                &lt;!&ndash; Heroicon name: outline/folder &ndash;&gt;-->
<!--                &lt;!&ndash;                <svg aria-hidden="true" class="text-gray-400 group-hover:text-gray-500 mr-3 h-6 w-6"&ndash;&gt;-->
<!--                &lt;!&ndash;                     fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">&ndash;&gt;-->
<!--                &lt;!&ndash;                  <path d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"&ndash;&gt;-->
<!--                &lt;!&ndash;                        stroke-linecap="round"&ndash;&gt;-->
<!--                &lt;!&ndash;                        stroke-linejoin="round"&ndash;&gt;-->
<!--                &lt;!&ndash;                        stroke-width="2"/>&ndash;&gt;-->
<!--                &lt;!&ndash;                </svg>&ndash;&gt;-->

<!--                {{ category.name }}-->

<!--                <span-->
<!--                  class="bg-gray-100 group-hover:bg-gray-200 ml-auto inline-block py-0.5 px-3 text-xs font-medium rounded-full">-->
<!--                  {{ category.product_count }}-->
<!--                </span>-->
<!--              </NuxtLink>-->
<!--            </nav>-->
<!--          </div>-->
<!--        </div>-->

        <!-- This example requires Tailwind CSS v2.0+ -->
        <div class="relative pt-8 pb-20 px-4 sm:px-6 lg:pt-8 lg:pb-28 lg:px-8">
          <div v-for="(rubric, idx) of allRubric" :key="allRubric.id" class="relative max-w-7xl mx-auto">
            <!--          <div class="text-center">-->
            <!--            <h2 class="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">-->
            <!--              {{ rubric.name }}-->
            <!--            </h2>-->
            <!--            <p class="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">-->
            <!--              Наша компания предлагает стройматериалы по самым низким ценам-->
            <!--            </p>-->
            <!--          </div>-->
            <!--          <hr class="mt-8">-->
            <div class="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
              <div v-for="(category, idx) of rubric.category" :key="category.id"
                   class=" flex flex-col rounded-lg shadow-lg overflow-hidden ">
                <!--            <div class="flex-shrink-0">-->
                <!--              <img class="h-48 w-full object-cover" src="https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixqx=IrF17Golbw&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80" alt="">-->
                <!--            </div>-->
                <div class="flex-1 bg-gray-50 p-6 flex flex-col justify-between">
                  <div class="flex-1">
                    <NuxtLink
                      :to="'/shop/products/' + category.slug">
                      <p class="text-xl font-semibold text-gray-900">
                        {{ category.name }}
                      </p>
                      <p v-for="(text, idx) of category.text" :key="text.id"
                         class="mt-3 text-base text-gray-500">
                        {{ text.H2 }}
                      </p>
                      <p class="mt-2 text-base font-medium text-red-800 place-items-end">
                        Подробнее &rarr;
                        <!--                    <NuxtLink-->
                        <!--                      :to="'products/' + category.slug"-->
                        <!--                      @click.native="getProduct ([category.slug, allRubric])"-->
                        <!--                      class="hover:underline"-->
                        <!--                    >-->
                        <!--                      Подробнее &rarr;-->
                        <!--                    </NuxtLink>-->
                      </p>
                    </NuxtLink>
                  </div>
                  <!--              <div class="mt-6 flex items-center">-->
                  <!--                <div class="flex-shrink-0">-->
                  <!--                  <a href="#">-->
                  <!--                    <span class="sr-only">Roel Aufderehar</span>-->
                  <!--                    <img class="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixqx=IrF17Golbw&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">-->
                  <!--                  </a>-->
                  <!--                </div>-->
                  <!--                <div class="ml-3">-->
                  <!--                  <p class="text-sm font-medium text-gray-900">-->
                  <!--                    <a href="#" class="hover:underline">-->
                  <!--                      Roel Aufderehar-->
                  <!--                    </a>-->
                  <!--                  </p>-->
                  <!--                  <div class="flex space-x-1 text-sm text-gray-500">-->
                  <!--                    <time datetime="2020-03-16">-->
                  <!--                      Mar 16, 2020-->
                  <!--                    </time>-->
                  <!--                    <span aria-hidden="true">-->
                  <!--                  &middot;-->
                  <!--                </span>-->
                  <!--                    <span>-->
                  <!--                  6 min read-->
                  <!--                </span>-->
                  <!--                  </div>-->
                  <!--                </div>-->
                  <!--              </div>-->
                </div>
              </div>

            </div>
          </div>
        </div>

        <!--    {{ new Date().toLocaleString()}}-->
      </div>

    </div>

    <div class="relative py-16 bg-white overflow-hidden">
      <div class="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
        <div class="relative h-full text-lg max-w-prose mx-auto" aria-hidden="true">
          <svg class="absolute top-12 left-full transform translate-x-32" width="404" height="384" fill="none" viewBox="0 0 404 384">
            <defs>
              <pattern id="74b3fd99-0a6f-4271-bef2-e80eeafdf357" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="404" height="384" fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)" />
          </svg>
          <svg class="absolute top-1/2 right-full transform -translate-y-1/2 -translate-x-32" width="404" height="384" fill="none" viewBox="0 0 404 384">
            <defs>
              <pattern id="f210dbf6-a58d-4871-961e-36d5016a0f49" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="404" height="384" fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)" />
          </svg>
          <!--        <svg class="absolute bottom-12 left-full transform translate-x-32" width="404" height="384" fill="none" viewBox="0 0 404 384">-->
          <!--          <defs>-->
          <!--            <pattern id="d3eb07ae-5182-43e6-857d-35c643af9034" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">-->
          <!--              <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />-->
          <!--            </pattern>-->
          <!--          </defs>-->
          <!--          <rect width="404" height="384" fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)" />-->
          <!--        </svg>-->
        </div>
      </div>

      <div class="relative px-4 sm:px-6 lg:px-8">
        <div class="text-lg max-w-prose mx-auto">
          <h1>
            <span class="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-main sm:text-4xl">Какой то текст</span>
          </h1>
          <p class="mt-8 text-xl text-gray-500 leading-8">Здесть размещать текста для продвижения сайта</p>
          <p class="mt-8 text-xl text-gray-500 leading-8">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus ex fugiat itaque molestias mollitia neque ratione voluptatem. Adipisci, asperiores consectetur cupiditate dolor eaque facere facilis nemo nostrum quaerat quia quisquam recusandae similique tempora? Alias aliquid aperiam aspernatur, atque commodi consequuntur earum esse eum laudantium magnam, nam neque nostrum possimus provident quas quisquam, quo repellat ullam veniam voluptas. Accusantium adipisci aliquam animi assumenda consectetur debitis dignissimos dolorem doloremque eos eum facilis fugiat harum illum incidunt inventore ipsam iste labore laudantium libero modi molestiae nostrum, odit officia officiis perspiciatis placeat praesentium provident qui quia quibusdam quos rem reprehenderit rerum sapiente sint veniam vitae! Accusamus aperiam dicta dignissimos dolorum ea eligendi error eveniet facere ipsum itaque iure laborum maxime odit, officia officiis pariatur provident quam quo rem repellat reprehenderit repudiandae similique soluta, sunt ullam unde velit vitae! Iure maxime minus placeat repudiandae similique. Ad blanditiis consequuntur doloremque ea error expedita, illo itaque laboriosam nulla quam ratione repellat vel veritatis, vitae voluptate? A, accusamus eius ex excepturi illo molestiae neque numquam obcaecati odio possimus quaerat repellat reprehenderit unde. A accusamus adipisci aliquam aperiam, aspernatur consequatur dolorem ex exercitationem fugiat harum incidunt ipsa maxime minima molestias perferendis suscipit, totam. Cupiditate inventore laborum odio recusandae sint!</p>
        </div>
        <div class="mt-6 prose prose-indigo prose-lg text-gray-500 mx-auto">
          <!--        <h3>Ждём вас!!!</h3>-->
          <figure>
            <!--          <img class="w-full rounded-lg" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&w=1310&h=873&q=80&facepad=3" alt="" width="1310" height="873">-->
          </figure>
          <!--        <p>Purus morbi dignissim senectus mattis <a href="#">adipiscing</a>. Amet, massa quam varius orci dapibus volutpat cras. In amet eu ridiculus leo sodales cursus tristique. Tincidunt sed tempus ut viverra ridiculus non molestie. Gravida quis fringilla amet eget dui tempor dignissim. Facilisis auctor venenatis varius nunc, congue erat ac. Cras fermentum convallis quam.</p>-->
          <!--        <p>Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque erat velit.</p>-->
        </div>
      </div>
    </div>


  </div>

</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "_id",
  validate({params}) {
    return /^\d+$/.test(params.id);
  },
  async asyncData({store, params}) {
    await store.dispatch('catalog/category/getRubric', {
      id: params.id
    })
  },


  computed: {
    ...mapGetters({
      allRubric: 'catalog/category/allRubric',
    }),
  },

}
</script>

<style scoped>

</style>
