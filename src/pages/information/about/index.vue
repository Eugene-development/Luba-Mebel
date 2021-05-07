<template>
<div>



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
          <span class="block text-base text-center text-main font-semibold tracking-wide uppercase">О нашей компании</span>
          <span class="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-main sm:text-4xl">"Любая мебель"</span>
        </h1>
        <p class="mt-8 text-xl text-gray-500 leading-8">Мебельный интернет–магазин ЛюбаМебель предлагает широкий выбор мебели для дома.</p>
        <p class="mt-8 text-xl text-gray-500 leading-8">Своим покупателям мы предлагаем ряд преимуществ и благоприятные условия при покупке
          мебели в нашем магазине, а именно:</p>
      </div>
      <div class="mt-6 prose prose-indigo prose-lg text-gray-500 mx-auto">
        <ul>
          <li><b>Демократичные цены.</b> Мы стараемся держать доступные цены для покупателей</li>
          <li><b>Шоурум.</b> У нас имеется экспозиционные зал, где Вы сможете воочию посмотреть и потрогать мебель.</li>
          <li><b>Высокое качество продукции.</b> Вся продукция производимая на фабрике сертифицирована и имеет гарантию производителя</li>
          <li><b>Широкий ассортимент.</b>Наш ассортимент включает: мебель для спальни, гостиной , прихожей, кухни, шкафы, диваны,
            столы, стулья, детские.</li>
          <li><b>Мебель на заказ.</b> У вас есть возможность заказать мебель по своим размерам и индивидуальному проекту, тк мы
            имеем цех по производству мебели по индивидуальным заказам.</li>
          <li><b>Наличие товара на складе.</b> Благодаря наличию собственных складских помещений практически весь товар представленный
            на сайте имеется в наличии и доступен для покупки.</li>
          <li><b>Быстрая доставка.</b> ЛюбаяМебель имеет собственную службу доставки. По этому Вы можете быть уверенны в том, что
            мебель будет доставлена в обговоренный срок.</li>
        </ul>
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
export default {
  data() {
    return {
      title: 'Любая мебель || О компании',
      description: '',
    }
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.description
        }
      ]
    }
  },
}
</script>
