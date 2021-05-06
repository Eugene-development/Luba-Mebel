<template>
  <div>
    <div class="relative ">
      <div class=" mx-auto py-3 sm:px-6 lg:px-8 bg-gray-200 ">
        <div class="pr-16 sm:text-left sm:px-8 flex justify-between">
          <p class="text-sm text-main">
            <NuxtLink to="/" class="mr-2">
              Главная
            </NuxtLink>
            <NuxtLink to="/information/about" class="mr-2">
              О компании
            </NuxtLink>
<!--            <NuxtLink to="/information/" class="mr-2">-->
<!--              Поставщикам-->
<!--            </NuxtLink>-->
<!--            <NuxtLink to="/information/" class="mr-2">-->
<!--              Новости-->
<!--            </NuxtLink>-->
<!--            <NuxtLink to="/information/" class="mr-2">-->
<!--              Акции-->
<!--            </NuxtLink>-->
            <NuxtLink to="/information/delivery" class="mr-2">
              Доставка
            </NuxtLink>
            <NuxtLink to="/information/assembly" class="mr-2">
              Сборка
            </NuxtLink>
            <NuxtLink to="/information/payment" class="mr-2">
              Оплата
            </NuxtLink>
            <NuxtLink to="/information/warranty" class="mr-2">
              Гарантии
            </NuxtLink>
            <NuxtLink to="/information/contact" class="mr-2">
              Контакты
            </NuxtLink>
          </p>
          <p class="text-sm text-main">
            <NuxtLink to="/" class="mr-2">
              Вход
            </NuxtLink>
            <NuxtLink to="/" class="mr-2">
              Регистрация
            </NuxtLink>
          </p>
        </div>
      </div>
    </div>

    <div class="bg-gray-50 pl-3">
      <div class="py-2 px-8 sm:py-2 sm:px-6 lg:px-8 lg:flex flex justify-between ">

        <div class="flex">
          <div class="max-w-xs m-4 hidden lg:block">
            <NuxtLink to="/">
              <span class="sr-only">Мебель</span>
              <img alt="logo" class="h-32" src="https://www.mcstyle.ru/media/images/logo.png">
            </NuxtLink>
          </div>
          <div class="max-w-5xl mr-8 mt-8">
            <p class="pb-4 font-extrasolar text-main  md:text-4xl sm:text-5xl flex">
              <svg class="mt-2 mr-4 w-7 h-7 hidden lg:block" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                   xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M21 3l-6 6m0 0V4m0 5h5M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z"
                  stroke-linecap="round" stroke-linejoin="round"
                  stroke-width="2"></path>
              </svg>
              8 (999) 077-43-88
            </p>

            <p class=" text-base md:text-left text-gray-700 ">Режим работы: 10:00-18:00 (ежедневно)</p>
          </div>
        </div>

        <div class="flex">
          <div class="max-w-xs object-right justify-end mt-6">

            <NuxtLink
              to="/shop/cart">
              <div>


                <svg
                  class="w-20 h-20 text-main text-right"
                  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"/>
                </svg>


                <!-- This example requires Ta
                ilwind CSS v2.0+ -->
                <!--            <span class="w-full inline-flex items-center justify-center p-1 rounded text-xs font-medium bg-gray-700 text-gray-50">-->
                <!--                          Корзина-->

                <!--              <svg class="mx-2 animate-ping mr-1.5 h-2 w-2 text-blueGray-50" fill="currentColor" viewBox="0 0 8 8">-->
                <!--                <circle cx="4" cy="4" r="3"/>-->
                <!--              </svg>-->
                <!--              {{lengthCart}}-->
                <!--            </span>-->
              </div>
            </NuxtLink>
          </div>
          <div class="max-w-5xl mr-8 mt-8 ml-2">
            <p class="pb-4 text-main font-extrasolar md:text-2xl sm:text-3xl border-b-1 flex">
              Избранное
            </p>
            <p class=" text-sm md:text-left text-gray-700 animate-pulse ">Товаров (0)</p>
          </div>
          <div class="max-w-xs object-right justify-end mt-6">

            <NuxtLink
              to="/shop/cart">
              <div>
                <svg class="w-20 h-20 text-main text-right " fill="none" stroke="currentColor" viewBox="0 0 24 24"
                     xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    stroke-linecap="round" stroke-linejoin="round"
                    stroke-width="2"></path>
                </svg>
                <!-- This example requires Tailwind CSS v2.0+ -->
                <!--            <span class="w-full inline-flex items-center justify-center p-1 rounded text-xs font-medium bg-gray-700 text-gray-50">-->
                <!--                          Корзина-->

                <!--              <svg class="mx-2 animate-ping mr-1.5 h-2 w-2 text-blueGray-50" fill="currentColor" viewBox="0 0 8 8">-->
                <!--                <circle cx="4" cy="4" r="3"/>-->
                <!--              </svg>-->
                <!--              {{lengthCart}}-->
                <!--            </span>-->
              </div>
            </NuxtLink>
          </div>
          <div class="max-w-5xl mr-8 mt-8 ml-2">
            <p class="pb-4 text-main font-extrasolar md:text-2xl sm:text-3xl border-b-1 flex">
              Моя корзина
            </p>
            <p class=" text-sm md:text-left text-gray-700 animate-pulse ">Ваша корзина пуста</p>
          </div>
        </div>

      </div>
    </div>


    <div class="relative bg-gray-200 h-18 ">
      <div class="relative z-10">
        <div
          class="mb-2 flex py-5 sm:px-6 sm:py-5 lg:px-8 md:justify-start md:space-x-10">
          <div class="md:hidden">
            <button
              @click="change_visibleMobileMenu"
              class="bg-white rounded-md p-2 inline-flex   text-gray-700 hover:text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-800"
              type="button">
              <span class="sr-only">Открыть меню</span>
              <!-- Heroicon name: menu -->
              <svg aria-hidden="true" class="h-6 w-6" fill="none" stroke="currentColor"
                   viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 6h16M4 12h16M4 18h16" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
              </svg>
            </button>
          </div>
          <div class="hidden md:flex-1 md:flex md:items-center flex justify-between">
            <nav class=" -ml-2 flex space-x-10">
              <NuxtLink
                class="mt-2 text-base px-1 font-medium rounded-md text-gray-700 hover:text-gray-800 focus:text-gray-800 focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-indigo-500 hover:underline"
                to="/"
                @click.native="close_visible"
              >
                Диваны
              </NuxtLink>

              <div class="relative">
                <!-- Item active: "text-gray-900", Item inactive: "text-gray-700" -->
                <button
                  class="mt-2 group px-1 rounded-md text-gray-700 inline-flex items-center text-base font-medium hover:text-gray-800 focus:text-gray-800 focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-indigo-500 hover:underline"
                  type="button"
                  @click="change_visibleCatalog">
                  <span>Кухня и столовая</span>
                  <!--
                    Heroicon name: chevron-down

                    Item active: "text-gray-600", Item inactive: "text-gray-700"
                  -->
                  <svg aria-hidden="true" class="ml-2 h-5 w-5 text-gray-700 group-hover:text-gray-700"
                       fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path clip-rule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          fill-rule="evenodd"/>
                  </svg>
                </button>
              </div>
              <NuxtLink
                class="mt-2 text-base px-1 font-medium rounded-md text-gray-700 hover:text-gray-800 focus:text-gray-800 focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-indigo-500 hover:underline"
                to="/actions"
                @click.native="close_visible"
              >
                Спальня
              </NuxtLink>
              <!--              <NuxtLink-->
              <!--                class="text-base px-1 font-medium rounded-md text-gray-700 hover:text-gray-800 focus:text-gray-800 focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-indigo-500 hover:underline"-->
              <!--                to="/blog"-->
              <!--                @click.native="close_visible"-->
              <!--              >-->
              <!--                Блог-->
              <!--              </NuxtLink>-->
              <NuxtLink
                class="mt-2 text-base px-1 font-medium rounded-md text-gray-700 hover:text-gray-800 focus:text-gray-800 focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-indigo-500 hover:underline"
                to="/about"
                @click.native="close_visible"
              >
                Гостинная
              </NuxtLink>
              <div class="relative">
                <!-- Item active: "text-gray-900", Item inactive: "text-gray-700" -->
                <button
                  class="mt-2 group px-1 rounded-md text-gray-700 inline-flex items-center text-base font-medium hover:text-gray-800 focus:text-gray-800 focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-indigo-500 hover:underline"
                  type="button"
                  @click="change_visibleInformation">
                  <span>Прихожая</span>
                  <!--
                    Heroicon name: chevron-down

                    Item active: "text-gray-600", Item inactive: "text-gray-700"
                  -->
                  <svg aria-hidden="true" class="ml-2 h-5 w-5 text-gray-700 group-hover:text-gray-700"
                       fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path clip-rule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          fill-rule="evenodd"/>
                  </svg>
                </button>
              </div>
              <NuxtLink
                class="mt-2 text-base px-1 font-medium rounded-md text-gray-700 hover:text-gray-800 focus:text-gray-800 focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-indigo-500 hover:underline"
                to="/contact"
                @click.native="close_visible"
              >
                Детская
              </NuxtLink>
              <a
                class="mt-2 text-base px-1 font-medium rounded-md text-gray-700 hover:text-gray-800 focus:text-gray-800 focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-indigo-500 hover:underline"
                href="https://vk.com/orbita_stroy"
                target="_blank">
                Шкафы
              </a>
            </nav>
            <div class="mх-8 w-1/5 relative rounded-md shadow-sm">
              <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24"
                     stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                </svg>
              </div>
              <input type="text" name="search" id="search"
                     class="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                     placeholder="Поиск товара">
            </div>


            <!--                                <div class="flex items-center md:ml-12">-->
            <!--                        <a class="text-base font-medium text-gray-700 hover:text-gray-700"-->
            <!--                           href="http://localhost:3700">-->
            <!--                          Вход-->
            <!--                        </a>-->
            <!--                        <a-->
            <!--                          class="ml-8 inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-gray-900 hover:bg-gray-700"-->
            <!--                          href="http://localhost:3700/admin/registration">-->
            <!--                          Регистрация-->
            <!--                        </a>-->
            <!--                      </div>-->
          </div>
        </div>
      </div>

      <!--    <Catalog/>-->
      <!--    <Information/>-->
      <!--    <MobileMenu/>-->

    </div>


  </div>
</template>

<script>
export default {
  name: "index"
}
</script>

