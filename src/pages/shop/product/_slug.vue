<template>
  <div>
    <div v-for="(item, idx) of product" :key="item.id">


      <div class="p-10 mx-auto sm:px-6 lg:px-8 bg-gradient-to-b from-blueGray-300 to-gray-50 shadow-lg mb-4">
        <div class="flex flex-col text-center w-full">
          <h1 class=" text-5xl font-medium title-font text-gray-900">{{ item.name }}</h1>
        </div>
      </div>


      <div class="bg-white">
        <div class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <div class="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start">
            <!-- Image gallery -->
            <div class="flex flex-col-reverse">
              <!-- Image selector -->
              <div class="hidden mt-6 w-full max-w-2xl mx-auto sm:block lg:max-w-none">
                <div class="grid grid-cols-4 gap-6" aria-orientation="horizontal" role="tablist">
                  <button id="tabs-1-tab-1" class="relative h-24 bg-white rounded-md flex items-center justify-center text-sm font-medium uppercase text-gray-900 cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring focus:ring-offset-4 focus:ring-opacity-50" aria-controls="tabs-1-panel-1" role="tab" type="button">
              <span class="sr-only">
                Product
              </span>
                    <span class="absolute inset-0 rounded-md overflow-hidden">
                                  <img
                                    v-for="(image, idx) of item.image" :key="image.id"
                                    alt="ecommerce" class="w-full h-full object-center object-cover"
                                    :src="`${pathAWS}${image.filename}`">

              </span>
                    <!-- Selected: "ring-indigo-500", Not Selected: "ring-transparent" -->
                    <span class="ring-transparent absolute inset-0 rounded-md ring-2 ring-offset-2 pointer-events-none" aria-hidden="true"></span>
                  </button>

                  <!-- More images... -->
                </div>
              </div>

              <div class="w-full aspect-w-1 aspect-h-1">
                <!-- Tab panel, show/hide based on tab state. -->
                <div id="tabs-1-panel-1" aria-labelledby="tabs-1-tab-1" role="tabpanel" tabindex="0">
                  <img
                    v-for="(image, idx) of item.image" :key="image.id"
                    alt="Angled front view with bag zipped and handles upright."
                    class="w-full h-full object-center object-cover sm:rounded-lg"
                    :src="`${pathAWS}${image.filename}`">
                </div>
<!--                TODO без цикла если?-->

                <!-- More images... -->
              </div>
            </div>

            <!-- Product info -->
            <div class="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0">
              <h2 class="text-sm title-font text-gray-500 tracking-widest">
                <NuxtLink v-for="(category, idx) of category" :key="category.id"
                          :to="'/shop/products/' + category.slug">
                  <span class="ml-auto text-gray-900">
                  {{ category.name }}
                </span>
                  <!--                TODO без цикла если?-->

                </NuxtLink>
              </h2>

              <h1 class="text-3xl font-extrabold tracking-tight text-gray-900">{{ item.name }}</h1>

              <div class="mt-3">
                <h2 class="sr-only">Product information</h2>
                <p class="text-3xl text-gray-900">{{ item.price }} руб/{{ item.unit }}</p>
              </div>

              <!-- Reviews -->
              <div class="mt-3">
                <h3 class="sr-only">Reviews</h3>
                <div class="flex items-center">
                  <div class="flex items-center">
                    <!--
                      Heroicon name: solid/star

                      Active: "text-indigo-500", Inactive: "text-gray-300"
                    -->
                    <svg class="h-5 w-5 flex-shrink-0 text-indigo-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>

                    <!-- Heroicon name: solid/star -->
                    <svg class="h-5 w-5 flex-shrink-0 text-indigo-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>

                    <!-- Heroicon name: solid/star -->
                    <svg class="h-5 w-5 flex-shrink-0 text-indigo-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>

                    <!-- Heroicon name: solid/star -->
                    <svg class="h-5 w-5 flex-shrink-0 text-indigo-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>

                    <!-- Heroicon name: solid/star -->
                    <svg class="h-5 w-5 flex-shrink-0 text-gray-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                  <p class="sr-only">4 out of 5 stars</p>
                </div>
              </div>

              <div class="mt-6">
                <h3 class="sr-only">Description</h3>

                <div class="flex mb-4">
                  <button
                    @click="changeVisibleDescription"
                    class="focus:outline-none flex-grow border-b-2 border-gray-300 py-2 text-lg px-1"
                    :class="{ 'text-indigo-900 border-indigo-900': visibleDescription }"
                  >Описание</button>
                  <button
                    @click="changeVisiblePayment"
                    class="focus:outline-none flex-grow border-b-2 border-gray-300 py-2 text-lg px-1"
                    :class="{ 'text-indigo-900 border-indigo-900': visiblePayment }"
                  >Оплата</button>
                  <button
                    @click="changeVisibleDelivery"
                    class="focus:outline-none flex-grow border-b-2 border-gray-300 py-2 text-lg px-1"
                    :class="{ 'text-indigo-900 border-indigo-900': visibleDelivery }"
                  >Доставка</button>
                </div>
                <p v-show="visibleDescription" class="leading-relaxed mb-4" v-html="item.description"></p>
                <p v-show="visiblePayment" class="leading-relaxed mb-4">
                  Предлагаем следующие варианты оплаты: <br>
                  - наличными курьеру при получении товара;<br>
                  - картой через терминал, либо наличными в нашем офисе;<br>
                  - безналичный расчет (через банк для юридических лиц). Мы отправим счёт на оплату с нашими реквизитами на указанный вами электронный адрес. Доставка (самовывоз) товара осуществляется после получения денежных средств на наш расчётный счёт.</p>
                <p v-show="visibleDelivery" class="leading-relaxed mb-4" >Для удобства мы предлагаем доставку товара на адрес объекта.
                  <br>Наша компания осуществляет доставку мебели по Нижнему Новгороду и области. Стоимость доставки составляет от 350 рублей с максимальным весом до 1500 кг. Более подробную информацию о стоимости за пределы города вы можете уточнить у наших менеджеров.</p>
              </div>

              <form class="mt-6">
                <!-- Colors -->
                <div>
                  <h3 class="text-sm text-gray-600">Color</h3>

                  <fieldset class="mt-2">
                    <legend class="sr-only">
                      Choose a color
                    </legend>
                    <div class="flex items-center space-x-3">
                      <!--
                        Active and Checked: "ring ring-offset-1"
                        Not Active and Checked: "ring-2"
                      -->
                      <label class="-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none ring-gray-700">
                        <input type="radio" name="color-choice" value="Washed Black" class="sr-only" aria-labelledby="color-choice-0-label">
                        <p id="color-choice-0-label" class="sr-only">
                          Washed Black
                        </p>
                        <span aria-hidden="true" class="h-8 w-8 bg-gray-700 border border-black border-opacity-10 rounded-full"></span>
                      </label>

                      <!--
                        Active and Checked: "ring ring-offset-1"
                        Not Active and Checked: "ring-2"
                      -->
                      <label class="-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none ring-gray-400">
                        <input type="radio" name="color-choice" value="White" class="sr-only" aria-labelledby="color-choice-1-label">
                        <p id="color-choice-1-label" class="sr-only">
                          White
                        </p>
                        <span aria-hidden="true" class="h-8 w-8 bg-white border border-black border-opacity-10 rounded-full"></span>
                      </label>

                      <!--
                        Active and Checked: "ring ring-offset-1"
                        Not Active and Checked: "ring-2"
                      -->
                      <label class="-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none ring-gray-500">
                        <input type="radio" name="color-choice" value="Washed Gray" class="sr-only" aria-labelledby="color-choice-2-label">
                        <p id="color-choice-2-label" class="sr-only">
                          Washed Gray
                        </p>
                        <span aria-hidden="true" class="h-8 w-8 bg-gray-500 border border-black border-opacity-10 rounded-full"></span>
                      </label>
                    </div>
                  </fieldset>
                </div>

                <div class="mt-10 flex sm:flex-col1">
                  <button
                    v-if="!productsInCart.some(arrVal => item.id === arrVal)"
                    @click.prevent.once="sendToCart (item.id)"
                    type="submit"
                    class="max-w-xs flex-1 bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500 sm:w-full">
                    В корзину
                  </button>
                  <button
                    v-else
                    type="submit"
                    class="max-w-xs flex-1 bg-red-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500 sm:w-full">
                    В корзине
                  </button>

                  <button type="button" class="ml-4 py-3 px-3 rounded-md flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-gray-500">
                    <!-- Heroicon name: outline/heart -->
                    <svg class="h-6 w-6 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                    <span class="sr-only">Add to favorites</span>
                  </button>
                </div>
              </form>

              <section aria-labelledby="details-heading" class="mt-12">
                <h2 id="details-heading" class="sr-only">Additional details</h2>

                <div class="border-t divide-y divide-gray-200">
                  <div>
                    <h3>
                      <!-- Expand/collapse question button -->
                      <button type="button" class="group relative w-full py-6 flex justify-between items-center text-left" aria-controls="disclosure-1" aria-expanded="false">
                        <!-- Open: "text-indigo-600", Closed: "text-gray-900" -->
                        <span class="text-gray-900 text-sm font-medium">
                    Features
                  </span>
                        <span class="ml-6 flex items-center">
                    <!--
                      Heroicon name: outline/plus-sm

                      Open: "hidden", Closed: "block"
                    -->
                    <svg class="block h-6 w-6 text-gray-400 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                          <!--
                            Heroicon name: outline/minus-sm

                            Open: "block", Closed: "hidden"
                          -->
                    <svg class="hidden h-6 w-6 text-indigo-400 group-hover:text-indigo-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 12H6" />
                    </svg>
                  </span>
                      </button>
                    </h3>
                    <div class="pb-6 prose prose-sm" id="disclosure-1">
                      <ul role="list">
                        <li>Multiple strap configurations</li>

                        <li>Spacious interior with top zip</li>

                        <li>Leather handle and tabs</li>

                        <li>Interior dividers</li>

                        <li>Stainless strap loops</li>

                        <li>Double stitched construction</li>

                        <li>Water-resistant</li>
                      </ul>
                    </div>
                  </div>

                  <!-- More sections... -->
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>


      <section class="text-gray-600 body-font overflow-hidden">
        <div class="container px-5 py-24 mx-auto">
          <div class="lg:w-4/5 mx-auto flex flex-wrap">
            <div class="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
              <h2 class="text-sm title-font text-gray-500 tracking-widest">НАИМЕНОВАНИЕ</h2>
              <h1 class="text-gray-900 text-3xl title-font font-medium mb-4">{{ item.name }}</h1>

              <div class="flex mb-4">
                <button
                  @click="changeVisibleDescription"
                  class="focus:outline-none flex-grow border-b-2 border-gray-300 py-2 text-lg px-1"
                  :class="{ 'text-indigo-900 border-indigo-900': visibleDescription }"
                >Описание</button>
                <button
                  @click="changeVisiblePayment"
                  class="focus:outline-none flex-grow border-b-2 border-gray-300 py-2 text-lg px-1"
                  :class="{ 'text-indigo-900 border-indigo-900': visiblePayment }"
                >Оплата</button>
                <button
                  @click="changeVisibleDelivery"
                  class="focus:outline-none flex-grow border-b-2 border-gray-300 py-2 text-lg px-1"
                  :class="{ 'text-indigo-900 border-indigo-900': visibleDelivery }"
                >Доставка</button>
              </div>
              <p v-show="visibleDescription" class="leading-relaxed mb-4" v-html="item.description"></p>
              <p v-show="visiblePayment" class="leading-relaxed mb-4">
                Предлагаем следующие варианты оплаты: <br>
                - наличными курьеру при получении товара;<br>
                - картой через терминал, либо наличными в нашем офисе;<br>
                - безналичный расчет (через банк для юридических лиц). Мы отправим счёт на оплату с нашими реквизитами на указанный вами электронный адрес. Доставка (самовывоз) товара осуществляется после получения денежных средств на наш расчётный счёт.</p>
              <p v-show="visibleDelivery" class="leading-relaxed mb-4" >Для удобства мы предлагаем доставку товара на адрес объекта.
                <br>Наша компания осуществляет доставку мебели по Нижнему Новгороду и области. Стоимость доставки составляет от 350 рублей с максимальным весом до 1500 кг. Более подробную информацию о стоимости за пределы города вы можете уточнить у наших менеджеров.</p>


              <NuxtLink v-for="(category, idx) of category" :key="category.id"
                        :to="'/shop/products/' + category.slug">
                <div
                  class="flex border-t border-gray-200 py-2">
                  <span class="text-gray-500">Категория</span>
                  <span class="ml-auto text-gray-900">
                  {{ category.name }}
                </span>
                </div>
              </NuxtLink>

              <div class="flex border-t border-gray-200 py-2">
                <span class="text-gray-500">Единица измерения</span>
                <span class="ml-auto text-gray-900">{{ item.unit }}</span>
              </div>
              <div class="flex border-t border-b mb-6 border-gray-200 py-2">
                <span class="text-gray-500">Наличие на складе</span>
                <span class="ml-auto text-gray-900">Уточняйте у менеджера</span>
              </div>
              <div class="flex">
                <span class="title-font font-medium text-4xl text-gray-900">{{ item.price }} руб/{{ item.unit }}.</span>
                <button
                  v-if="!productsInCart.some(arrVal => item.id === arrVal)"
                  @click.prevent.once="sendToCart (item.id)"
                  class="flex ml-auto text-main bg-indigo-100 border-0 py-2 px-6 focus:outline-none rounded"
                  wfd-id="157">В корзину
                </button>
                <button v-else
                        class="flex ml-auto text-white bg-main border-0 py-2 px-6 focus:outline-none rounded"
                        wfd-id="157">В корзине
                </button>
                <button
                  class="rounded-full w-10 h-10 bg-gray-100 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4 hover:bg-red-900"
                  wfd-id="156">
                  <svg class="w-5 h-5" fill="currentColor" stroke-linecap="round" stroke-linejoin="round"
                       stroke-width="2" viewBox="0 0 24 24">
                    <path
                      d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                  </svg>
                </button>
              </div>
            </div>

            <img
              v-for="(image, idx) of item.image" :key="image.id"
              alt="ecommerce" class="lg:max-w-md max-w-lg object-contain object-center rounded"
              :src="`${pathAWS}${image.filename}`">

          </div>
        </div>
      </section>

    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";


export default {
  async asyncData({store, params}) {
    await store.dispatch('catalog/product/getProduct', {
      slug: params.slug
    })
  },

  methods: {
    ...mapActions({
      'changeVisibleDescription': 'catalog/product/changeVisibleDescription',
      'changeVisiblePayment': 'catalog/product/changeVisiblePayment',
      'changeVisibleDelivery': 'catalog/product/changeVisibleDelivery',
      'sendToCart':'catalog/cart/sendToCart'
    })
  },

  computed: {
    ...mapGetters({
      product: 'catalog/product/product',
      category: 'catalog/product/category',
      pathAWS: 'catalog/product/pathAWS',
      visibleDescription: 'catalog/product/visibleDescription',
      visiblePayment: 'catalog/product/visiblePayment',
      visibleDelivery: 'catalog/product/visibleDelivery',
      productsInCart: 'catalog/cart/productsInCart',
    }),
  },

}
</script>
