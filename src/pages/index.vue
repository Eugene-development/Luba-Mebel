<template>
  <!--
    This example requires Tailwind CSS v2.0+

    This example requires some changes to your config:

    ```
    // tailwind.config.js
    module.exports = {
      // ...
      plugins: [
        // ...
        require('@tailwindcss/forms'),
      ]
    }
    ```
  -->
  <div class="bg-white">

    <main>


      <!-- This example requires Tailwind CSS v2.0+ -->
      <div class="h-screen flex bg-gray-50 overflow-hidden">

        <div class="flex-1 min-w-0 flex flex-col overflow-hidden">

          <main class="flex-1 flex overflow-hidden">
            <div class="flex-1 flex xl:overflow-hidden">

              <!-- Secondary column (hidden on smaller screens) -->
              <aside class="hidden lg:block lg:flex-shrink-0 lg:order-first">
                <div class="h-full relative flex flex-col w-96 border-r border-gray-200 bg-white">



                  <div class="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
                    <h3 class="text-center py-3 text-2xl font-extrabold tracking-tight sm:text-4xl">Акции</h3>
                  </div>
                  <section class="py-2 text-gray-600 body-font">
                    <div class="container px-5  mx-auto">
                      <div class="flex flex-wrap -m-4">
                        <div class=" p-4 w-full">
                          <a class="block relative h-48 rounded overflow-hidden">
                            <img alt="ecommerce" class="object-cover object-center w-full h-full block"
                                 src="https://www.mcstyle.ru/assets/images/catalog/leo_print/11-goryi.jpg">
                          </a>
                          <div class="mt-4">
                            <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">Шкафы-купе</h3>
                            <h2 class="text-gray-900 title-font text-lg font-medium">Лео</h2>
                            <p class="mt-1">от 17500 р.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  <section class="py-2 text-gray-600 body-font">
                    <div class="container px-5  mx-auto">
                      <div class="flex flex-wrap -m-4">
                        <div class=" p-4 w-full">
                          <a class="block relative h-48 rounded overflow-hidden">
                            <img alt="ecommerce" class="object-cover object-center w-full h-full block"
                                 src="https://www.mcstyle.ru/assets/images/catalog/leo_print/11-goryi.jpg">
                          </a>
                          <div class="mt-4">
                            <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">Шкафы-купе</h3>
                            <h2 class="text-gray-900 title-font text-lg font-medium">Лео</h2>
                            <p class="mt-1">от 17500 р.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  <section class="py-2 text-gray-600 body-font">
                    <div class="container px-5  mx-auto">
                      <div class="flex flex-wrap -m-4">
                        <div class=" p-4 w-full">
                          <a class="block relative h-48 rounded overflow-hidden">
                            <img alt="ecommerce" class="object-cover object-center w-full h-full block"
                                 src="https://www.mcstyle.ru/assets/images/catalog/leo_print/11-goryi.jpg">
                          </a>
                          <div class="mt-4">
                            <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">Шкафы-купе</h3>
                            <h2 class="text-gray-900 title-font text-lg font-medium">Лео</h2>
                            <p class="mt-1">от 17500 р.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  <section class="py-2 text-gray-600 body-font">
                    <div class="container px-5  mx-auto">
                      <div class="flex flex-wrap -m-4">
                        <div class=" p-4 w-full">
                          <a class="block relative h-48 rounded overflow-hidden">
                            <img alt="ecommerce" class="object-cover object-center w-full h-full block"
                                 src="https://www.mcstyle.ru/assets/images/catalog/leo_print/11-goryi.jpg">
                          </a>
                          <div class="mt-4">
                            <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">Шкафы-купе</h3>
                            <h2 class="text-gray-900 title-font text-lg font-medium">Лео</h2>
                            <p class="mt-1">от 17500 р.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>

                </div>
              </aside>

              <!-- Primary column -->
              <section aria-labelledby="primary-heading"
                       class="min-w-0 flex-1 h-full flex flex-col overflow-hidden lg:order-last">
                <h1 id="primary-heading" class="sr-only">Account</h1>
                <div class="relative bg-main ">
                  <div class="h-80 absolute inset-x-0 bottom-0 xl:top-0 xl:h-full">
                    <div class="h-full w-full xl:grid xl:grid-cols-2">
                      <div class="h-full xl:relative xl:col-start-2">
                        <img class="h-full w-full object-cover opacity-85 xl:absolute xl:inset-0"
                             src="https://www.mcstyle.ru/assets/images/catalog/CHALET/Morskaya/Shale-Morskaya.jpg"
                             alt="People working on laptops">
                        <div aria-hidden="true"
                             class="absolute inset-x-0 top-0 h-32  xl:inset-y-0 xl:left-0 xl:h-full xl:w-32 xl:bg-gradient-to-r"></div>
                      </div>
                    </div>
                  </div>
                  <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8 xl:grid xl:grid-cols-2 xl:grid-flow-col-dense xl:gap-x-8">
                    <div class="relative pt-12 pb-64 sm:pt-24 sm:pb-64 xl:col-start-1 xl:pb-24">
                      <h2 class="text-sm font-semibold tracking-wide uppercase">
                        <span class="bg-gradient-to-r from-purple-300 to-indigo-300 bg-clip-text text-transparent">Важная информация</span>
                      </h2>
                      <p class="mt-3 text-3xl font-extrabold text-white">Не подошёл стандартный вариант?</p>
                      <p class="mt-5 text-lg text-gray-300">Изготовим по индивидуальному проекту. Выезд замерщика в
                        черте города бесплатно. Приедем в удобное для вас время.</p>
                      <div class="mt-12 grid grid-cols-1 gap-y-12 gap-x-6 sm:grid-cols-2">
                        <p>
                          <span class="block text-2xl font-bold text-white">8K+</span>
                          <span class="mt-1 block text-base text-gray-300"><span
                            class="font-medium text-white">Заказов</span> доставленных клиентам в срок.</span>
                        </p>

                        <p>
                          <span class="block text-2xl font-bold text-white">25K+</span>
                          <span class="mt-1 block text-base text-gray-300"><span class="font-medium text-white">Видов продукции</span> в ассортименте магазина.</span>
                        </p>

                        <!--                          <p>-->
                        <!--                            <span class="block text-2xl font-bold text-white">98%</span>-->
                        <!--                            <span class="mt-1 block text-base text-gray-300"><span class="font-medium text-white">Customer satisfaction</span> laoreet amet lacus nibh integer quis.</span>-->
                        <!--                          </p>-->

                        <!--                          <p>-->
                        <!--                            <span class="block text-2xl font-bold text-white">12M+</span>-->
                        <!--                            <span class="mt-1 block text-base text-gray-300"><span class="font-medium text-white">Issues resolved</span> lacus nibh integer quis.</span>-->
                        <!--                          </p>-->
                      </div>
                    </div>
                  </div>
                </div>

                <!--
                  This example requires Tailwind CSS v2.0+

                  This example requires some changes to your config:

                  ```
                  // tailwind.config.js
                  module.exports = {
                    // ...
                    plugins: [
                      // ...
                      require('@tailwindcss/aspect-ratio'),
                    ]
                  }
                  ```
                -->
                <div class="bg-white">
                  <div class="mx-auto py-6 px-4 max-w-7xl sm:px-6  lg:py-12">
                    <div class="space-y-6">
                      <div class="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
                        <h2 class="text-3xl font-extrabold tracking-tight sm:text-4xl">Категории</h2>
                        <p class="text-xl text-gray-500">Вся производимая мебель соответствует стандартам качества.</p>
                      </div>
                      <ul
                        class="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8">
                        <li>
                          <div class="space-y-4">
                            <div class="aspect-w-3 aspect-h-2">
                              <img class="object-cover shadow-lg rounded-lg"
                                   src="https://www.mcstyle.ru/assets/images/catalog/CHALET/NEZHNOST/nezhnost.jpg"
                                   alt="">
                            </div>

                            <div class="space-y-2">
                              <div class="text-lg leading-6 font-medium space-y-1">
                                <h3>Кухни</h3>
                                <p class="text-blue-600">от 8500 р.</p>
                              </div>
                            </div>
                          </div>
                        </li>

                        <li>
                          <div class="space-y-4">
                            <div class="aspect-w-3 aspect-h-2">
                              <img class="object-cover shadow-lg rounded-lg"
                                   src="https://www.mcstyle.ru/assets/images/catalog/manheten/11.jpg"
                                   alt="">
                            </div>

                            <div class="space-y-2">
                              <div class="text-lg leading-6 font-medium space-y-1">
                                <h3>Гостинные</h3>
                                <p class="text-blue-600">от 8500 р.</p>
                              </div>
                            </div>
                          </div>
                        </li>

                        <li>
                          <div class="space-y-4">
                            <div class="aspect-w-3 aspect-h-2">
                              <img class="object-cover shadow-lg rounded-lg"
                                   src="https://www.mcstyle.ru/assets/images/catalog/miya_cherdak/10-mija-a.jpg"
                                   alt="">
                            </div>

                            <div class="space-y-2">
                              <div class="text-lg leading-6 font-medium space-y-1">
                                <h3>Детские</h3>
                                <p class="text-blue-600">от 8500 р.</p>
                              </div>
                            </div>
                          </div>
                        </li>

                        <li>
                          <div class="space-y-4">
                            <div class="aspect-w-3 aspect-h-2">
                              <img class="object-cover shadow-lg rounded-lg"
                                   src="https://www.mcstyle.ru/assets/images/catalog/ameli/1.jpg"
                                   alt="">
                            </div>

                            <div class="space-y-2">
                              <div class="text-lg leading-6 font-medium space-y-1">
                                <h3>Спальни</h3>
                                <p class="text-blue-600">от 8500 р.</p>
                              </div>
                            </div>
                          </div>
                        </li>

                        <li>
                          <div class="space-y-4">
                            <div class="aspect-w-3 aspect-h-2">
                              <img class="object-cover shadow-lg rounded-lg"
                                   src="https://www.mcstyle.ru/assets/images/catalog/junona-2/1.jpg"
                                   alt="">
                            </div>

                            <div class="space-y-2">
                              <div class="text-lg leading-6 font-medium space-y-1">
                                <h3>Прихожие</h3>
                                <p class="text-blue-600">от 8500 р.</p>
                              </div>
                            </div>
                          </div>
                        </li>

                        <li>
                          <div class="space-y-4">
                            <div class="aspect-w-3 aspect-h-2">
                              <img class="object-cover shadow-lg rounded-lg"
                                   src="https://www.mcstyle.ru/assets/images/catalog/leo_mix/10-shkaf-kombi-so-stellazhom-1800-interer.jpg"
                                   alt="">
                            </div>

                            <div class="space-y-2">
                              <div class="text-lg leading-6 font-medium space-y-1">
                                <h3>Шкафы</h3>
                                <p class="text-blue-600">от 8500 р.</p>
                              </div>
                            </div>
                          </div>
                        </li>

                        <!-- More people... -->
                      </ul>
                    </div>
                  </div>
                </div>

              </section>


            </div>
          </main>
        </div>
      </div>


    </main>

  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>

