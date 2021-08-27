<template>
  <div class="bg-white">

    <main>

      <h1 id="primary-heading" class="sr-only">Описание</h1>
      <div class="relative bg-main">
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
        <div class="max-w-full  px-4 sm:px-6 lg:max-w-7xl lg:px-8 xl:grid xl:grid-cols-2 xl:grid-flow-col-dense xl:gap-x-8">
          <div class="text-left relative pt-6 pb-32 sm:pt-12 sm:pb-32 xl:col-start-1 xl:pb-24">
            <h2 class="text-sm font-semibold tracking-wide uppercase">
              <span class="bg-gradient-to-r from-purple-300 to-purple-50 bg-clip-text text-transparent">Важная информация</span>
            </h2>
            <p class="mt-3 text-3xl font-extrabold text-white">Не подошёл стандартный вариант?</p>
            <p class="mt-5 text-lg text-gray-300">Изготовим по индивидуальному проекту. Выезд замерщика в
              черте города бесплатно. Приедем в удобное для вас время.</p>
            <div class="mt-12 grid grid-cols-1 gap-y-12 gap-x-6 sm:grid-cols-2">
              <p>
                <span class="block text-2xl font-bold text-white">826</span>
                <span class="mt-1 block text-base text-gray-300"><span
                  class="font-medium text-white">Заказов</span> доставленных клиентам в срок.</span>
              </p>

              <p>
                <span class="block text-2xl font-bold text-white">458</span>
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


      <!-- This example requires Tailwind CSS v2.0+ -->
      <div class="flex overflow-hidden">

        <div class="flex-1 min-w-0 flex flex-col overflow-hidden">

          <main class="flex-1 flex overflow-hidden">
            <div class="flex-1 flex xl:overflow-hidden">

              <!-- Secondary column (hidden on smaller screens) -->
<!--              <aside class="hidden lg:block lg:flex-shrink-0 lg:order-first">-->
<!--                <div class=" relative flex flex-col w-96 border-r border-gray-200">-->
<!--                  <div class=" space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-2xl xl:max-w-none">-->
<!--                    <h3 class="text-center py-3 sm:px-3 lg:py-6 text-2xl text-main font-extrabold tracking-tight sm:text-4xl">Наши акции</h3>-->
<!--                  </div>-->
<!--                  <section v-for="(action, id) in actions" key="action.id" class="py-2 text-gray-600 body-font">-->
<!--                    <NuxtLink :to="action.link">-->
<!--                      <div class="container px-5  mx-auto">-->
<!--                        <div class="flex flex-wrap -m-4">-->
<!--                          <div class=" p-4 w-full">-->
<!--                            <a class="block relative h-48 rounded overflow-hidden">-->
<!--                              <img alt="ecommerce" class="object-contain object-center w-full h-full block"-->
<!--                                   :src="`${action.img}`">-->
<!--                            </a>-->
<!--                            <div class="mt-4">-->
<!--                              <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">{{ action.category }}</h3>-->
<!--                              <h2 class="text-gray-900 title-font text-lg font-medium">{{ action.name }}</h2>-->
<!--                              <p class="mt-1">Цена: {{ action.price }} р.</p>-->
<!--                            </div>-->
<!--                          </div>-->
<!--                        </div>-->
<!--                      </div>-->
<!--                    </NuxtLink>-->
<!--                    <hr class="my-6">-->
<!--                  </section>-->

<!--                </div>-->
<!--              </aside>-->

              <!-- Primary column -->
              <section aria-labelledby="primary-heading"
                       class="min-w-0 flex-1 h-full flex flex-col overflow-hidden lg:order-last">
                <div class="bg-white">
                  <div class="mx-auto py-3 px-4 max-w-7xl sm:px-3  lg:py-6">
                    <div class="space-y-6">
                      <div class="text-center space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
                        <h2 class="text-3xl text-main font-extrabold tracking-tight sm:text-4xl">Категории</h2>
                        <p class="text-xl text-gray-500">Вся производимая мебель соответствует стандартам качества ГОСТ.</p>
                      </div>
                      <div class="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8">
                          <div class="space-y-4">
                            <div class="aspect-w-3 aspect-h-2">
                              <img class="object-cover shadow-lg rounded-lg"
                                   src="https://www.mcstyle.ru/assets/images/catalog/CHALET/NEZHNOST/nezhnost.jpg"
                                   alt="">
                            </div>

                            <div class="space-y-2">
                              <div class="text-lg leading-6 font-medium space-y-1">
                                <h2>Кухонный гарнитур</h2>
<!--                                <p class="text-main">от 8500 р.</p>-->
                              </div>
                            </div>
                          </div>

                          <div class="space-y-4">
                            <div class="aspect-w-3 aspect-h-2">
                              <img class="object-cover shadow-lg rounded-lg"
                                   src="/Rubrics/спальня.jpg"
                                   alt="">
                            </div>

                            <div class="space-y-2">
                              <div class="text-lg leading-6 font-medium space-y-1">
                                <h3>Спальня</h3>
                                <p class="text-main">от 8500 р.</p>
                              </div>
                            </div>
                          </div>

                          <div class="space-y-4">
                            <div class="aspect-w-3 aspect-h-2">
                              <img class="object-cover shadow-lg rounded-lg"
                                   src="/Rubrics/гостиная.jpg"
                                   alt="">
                            </div>

                            <div class="space-y-2">
                              <div class="text-lg leading-6 font-medium space-y-1">
                                <h3>Гостиная</h3>
                                <p class="text-main">от 8500 р.</p>
                              </div>
                            </div>
                          </div>

                          <div class="space-y-4">
                            <div class="aspect-w-3 aspect-h-2">
                              <img class="object-cover shadow-lg rounded-lg"
                                   src="/Rubrics/1.jpg"
                                   alt="">
                            </div>

                            <div class="space-y-2">
                              <div class="text-lg leading-6 font-medium space-y-1">
                                <h3>Прихожая</h3>
                                <p class="text-main">от 8500 р.</p>
                              </div>
                            </div>
                          </div>

                          <div class="space-y-4">
                            <div class="aspect-w-3 aspect-h-2">
                              <img class="object-cover shadow-lg rounded-lg"
                                   src="/Rubrics/детская.jpg"
                                   alt="">
                            </div>

                            <div class="space-y-2">
                              <div class="text-lg leading-6 font-medium space-y-1">
                                <h3>Детская</h3>
                                <p class="text-main">от 8500 р.</p>
                              </div>
                            </div>
                          </div>

                          <div class="space-y-4">
                            <div class="aspect-w-3 aspect-h-2">
                              <img class="object-cover shadow-lg rounded-lg"
                                   src="/Rubrics/шкафы.jpg"
                                   alt="">
                            </div>

                            <div class="space-y-2">
                              <div class="text-lg leading-6 font-medium space-y-1">
                                <h3>Шкафы</h3>
                                <p class="text-main">от 8500 р.</p>
                              </div>
                            </div>
                          </div>

                          <div class="space-y-4">
                            <div class="aspect-w-3 aspect-h-2">
                              <img class="object-cover shadow-lg rounded-lg"
                                   src="/Rubrics/диваны.jpg"
                                   alt="">
                            </div>

                            <div class="space-y-2">
                              <div class="text-lg leading-6 font-medium space-y-1">
                                <h3>Диваны</h3>
                                <p class="text-main">от 8500 р.</p>
                              </div>
                            </div>
                          </div>

                          <div class="space-y-4">
                            <div class="aspect-w-3 aspect-h-2">
                              <img class="object-cover shadow-lg rounded-lg"
                                   src="/Rubrics/столыистулья.jpg"
                                   alt="">
                            </div>

                            <div class="space-y-2">
                              <div class="text-lg leading-6 font-medium space-y-1">
                                <h3>Столы и стулья</h3>
                                <p class="text-main">от 8500 р.</p>
                              </div>
                            </div>
                          </div>

                          <div class="space-y-4">
                            <div class="aspect-w-3 aspect-h-2">
                              <img class="object-cover shadow-lg rounded-lg"
                                   src="/Rubrics/5640693b3fd5b734120987a5fb1a63cb.jpg"
                                   alt="">
                            </div>

                            <div class="space-y-2">
                              <div class="text-lg leading-6 font-medium space-y-1">
                                <h3>Для дачи</h3>
                                <p class="text-main">от 8500 р.</p>
                              </div>
                            </div>
                          </div>

                        <!-- More people... -->
                      </div>
                    </div>
                  </div>
                </div>

              </section>





            </div>
          </main>
        </div>
      </div>


    </main>

    <div class="py-16 bg-gray-50 overflow-hidden">
      <div class="max-w-7xl mx-auto px-4 space-y-8 sm:px-6 lg:px-8">
        <div class="text-base max-w-prose mx-auto lg:max-w-none">
          <h2 class="text-base text-main font-semibold tracking-wide uppercase">Компания</h2>
          <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">Любая Мебель</p>
        </div>
        <div class="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-start">
          <div class="relative z-10">
            <div class="prose prose-main text-gray-500 mx-auto lg:max-w-none">
              <p>Компания «ЛюбаМебель» предлагает стильную и функциональную мебель, которая идеально впишется в общую концепцию помещения. Каталог насчитывает более 25000 готовых вариантов. Но если вы не нашли подходящее решение, то дизайнеры составят индивидуальный проект с учетом требований, финансовых возможностей. К вашим услугам бесплатный выезд замерщика.</p>
              <p>Все модели изготавливаются из надежных, проверенных материалов, качественной фурнитуры, за счет чего прослужат долгое время, сохранив безупречный вид. Вашему вниманию кухни, гостиные, прихожие, мебель в детскую комнату, диваны, стулья и столы, все для обустройства дачи. Поэтому даже самый притязательный покупатель выберет для себя идеальный вариант. </p>
              <p>Вас обрадуют справедливые цены, высокий уровень обслуживания, оперативная доставка. Воплотите свои мечты об идеальном гарнитуре вместе с магазином «ЛюбаМебель». Сотрудники постоянно совершенствуют свои знания, отслеживают новые тенденции, чтобы создать изысканное произведение искусства. Постоянно расширяется модельный ряд, внедряются свежие дизайнерские разработки, применяется креативный подход.</p>
              <h3>Преимущества покупки и заказа мебели в интернет-магазине:</h3>
              <ul>
                <li>Большой выбор, который удовлетворит предпочтения каждого покупателя</li>
                <li>Возможность заказать изготовление мебели по индивидуальному размеру</li>
                <li>Производство на эксклюзивном европейском оборудовании</li>
                <li>Эргономичный дизайн, функциональность</li>
                <li>Разнообразие форм</li>
              </ul>
            </div>
            <div class="mt-10 flex text-base max-w-prose mx-auto lg:max-w-none">
              <div class="rounded-md shadow">
                <a href="#" class="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-main ">
                  Записаться на замер
                </a>
              </div>
            </div>
          </div>
          <div class="mt-12 relative text-base max-w-prose mx-auto lg:mt-0 lg:max-w-none">
            <svg class="absolute top-0 right-0 -mt-20 -mr-20 lg:top-auto lg:right-auto lg:bottom-1/2 lg:left-1/2 lg:mt-0 lg:mr-0 xl:top-0 xl:right-0 xl:-mt-20 xl:-mr-20" width="404" height="384" fill="none" viewBox="0 0 404 384" aria-hidden="true">
              <defs>
                <pattern id="bedc54bc-7371-44a2-a2bc-dc68d819ae60" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                  <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
                </pattern>
              </defs>
              <rect width="404" height="384" fill="url(#bedc54bc-7371-44a2-a2bc-dc68d819ae60)" />
            </svg>
            <blockquote class="relative bg-white rounded-lg shadow-lg">
              <div class="rounded-t-lg px-6 py-8 sm:px-10 sm:pt-10 sm:pb-8">
                <img src="/Logo/Безымянный.jpg" alt="Workcation" class="h-8">
                <div class="relative text-lg text-gray-700 font-medium mt-8">
                  <svg class="absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-gray-200" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                  <p class="relative">Наше производство работает с компанией "ЛюбаМебель" уже несколько лет. Нас радует разнообразие заказов и их постоянство. Надеемся на долгое и взаимовыгодное сотрудничество.</p>
                </div>
              </div>
              <cite class="relative flex items-center sm:items-start bg-main rounded-b-lg not-italic py-5 px-6 sm:py-5 sm:pl-12 sm:pr-10 sm:mt-10">
                <div class="relative rounded-full border-2 border-white sm:absolute sm:top-0 sm:transform sm:-translate-y-1/2">
                  <img class="w-12 h-12 sm:w-20 sm:h-20 rounded-full bg-main" src="https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2.5&w=160&h=160&q=80" alt="">
                </div>
                <span class="relative ml-4 text-main font-semibold leading-6 sm:ml-24 sm:pl-1">
              <p class="text-white font-semibold sm:inline">Румянцева Ольга</p>
              <p class="text-white sm:inline">(Менеджер)</p>
            </span>
              </cite>
            </blockquote>
          </div>
        </div>
      </div>
    </div>


  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  },
  data() {
    return {
      actions: [
        {
          id: 1,
          category: 'Диван',
          name: 'Уют',
          price: 7100,
          img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/luba-mebel/products/yllhHJUrhByfQrpOTY3XUb339cUekTtI3BgvBzef.jpg',
          link: '/shop/product/divan-uyut'
        },
        {
          id: 1,
          category: 'Гостинная',
          name: 'Софи',
          price: 14450,
          img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/luba-mebel/products/lWnLRPbd4ImrRmX0moUnjtF7SdSXFeHtIHCxFamm.jpg',
          link: '/shop/product/gostinaya-sofi'
        },
        {
          id: 1,
          category: 'Шкаф купе',
          name: 'Бася',
          price: 9650,
          img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/luba-mebel/products/XnUMPehMMzbsws284yq2o1JuHHLspHHOr91tTi3I.jpg',
          link: '/shop/product/skaf-kupe-basya'
        },
        {
          id: 1,
          category: 'Кухня',
          name: 'Татьяна',
          price: 12850,
          img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/luba-mebel/products/SRZt13Z215ISOI6KZESqBu0s7qhaAJNDKSYVM0iX.jpg',
          link: '/shop/product/kuxnya-tatna'
        },
      ]
    }
  }
}
</script>

