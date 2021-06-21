<template>
  <div class="">

  <div v-for="(rubric, idx) of allRubric" :key="allRubric.id">
    <div class="p-10 mx-auto sm:px-6 lg:px-8 bg-gradient-to-b from-blueGray-200 to-gray-50 shadow-lg mb-4">
      <div class="flex flex-col text-center w-full">
        <h1 class=" text-5xl font-medium title-font text-gray-900">{{ rubric.name }}</h1>
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
