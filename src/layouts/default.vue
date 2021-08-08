<template>
  <div>
    <Header />
    <nuxt />
    <Footer />
  </div>
</template>

<script>

import Header from './Header'
import Footer from './Footer'
import { mapActions } from "vuex";


export default {
  components: {
    Header,
    Footer
  },

  methods: {
    ...mapActions({
      'useLocalStorage': 'user/useLocalStorage',
    })
  },
  mounted() {
    this.useLocalStorage();
  },
}
</script>
