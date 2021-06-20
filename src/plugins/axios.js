export default function ({ $axios, store, $auth }) {
  $axios.onRequest((config) => {
    $axios.setToken(process.env.TOKEN, 'Bearer')
  })
}
