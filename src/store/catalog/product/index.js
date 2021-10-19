import {find, forEach, map} from 'lodash';

export const state = () => ({
  product: [],
  category: [],
  pathAWS: '',
  productId: null,
  currentProduct:[],

  visibleDescription: true,
  visiblePayment: false,
  visibleDelivery: false,
  startSize: true,
  changeSize: false,

  pathAWSBucket: {
    path: process.env.IMAGE_PRODUCTS
  },

  // apiCRUD: {baseURL: 'http://localhost:7788/'}
  apiCRUD: {
    baseURL: process.env.API_CRUD
  }
});

export const actions = {

  async getProduct({commit, state}, payload) {

    const pathAWS = state.pathAWSBucket.path
    commit('PATH_AWS', pathAWS)


    const products = await this.$axios.$get('get-all-product', state.apiCRUD);
    forEach(products, function (value) {
      const {id} = find(value, {'slug': payload.slug});
      commit('PRODUCT_ID', id);
    });

    // const id = payload.id;
    // await this.$axios.setToken('1', 'Bearer')
    // this.$axios.setHeader('Authorization', '1');
    // this.$axios.setToken('1');

    const { data } = await this.$axios.$get('get-product/' + state.productId, state.apiCRUD);
    commit('PRODUCT', data);

    const category = map(data, 'category');
    commit('CATEGORY', category);
  },

  setCurrentSize({commit, state}, payload){
    const currentSize = {
      size: payload.size,
      price: payload.price.price
    };
    commit('CURRENT_SIZE', currentSize);

    const startSize = false;
    commit('START_SIZE', startSize);

    const changeSize = false;
    commit('CHANGE_SIZE', changeSize)
  },

  changeVisibleDescription({ commit }) {
    const visibleDescription = true;
    const visiblePayment = false;
    const visibleDelivery = false;
    commit('VISIBLE_DESCRIPTION', visibleDescription);
    commit('VISIBLE_PAYMENT', visiblePayment);
    commit('VISIBLE_DELiVERY', visibleDelivery);
  },

  changeVisiblePayment({ commit }) {
    const visibleDescription = false;
    const visiblePayment = true;
    const visibleDelivery = false;
    commit('VISIBLE_DESCRIPTION', visibleDescription);
    commit('VISIBLE_PAYMENT', visiblePayment);
    commit('VISIBLE_DELiVERY', visibleDelivery);
  },

  changeVisibleDelivery({ commit }) {
    const visibleDescription = false;
    const visiblePayment = false;
    const visibleDelivery = true;
    commit('VISIBLE_DESCRIPTION', visibleDescription);
    commit('VISIBLE_PAYMENT', visiblePayment);
    commit('VISIBLE_DELiVERY', visibleDelivery);
  },

  changeVisibleSize ({ commit, state }){
    const changeSize = !state.changeSize;
    commit('CHANGE_SIZE', changeSize);
  },

  cleanSize ({ commit }){
    const startSize = true;
    commit('START_SIZE', startSize);
  }


};

export const mutations = {
  PRODUCT: (state, data) => state.product = data,
  CATEGORY: (state, data) => state.category = data,
  PATH_AWS: (state, pathAWS) => state.pathAWS = pathAWS,
  VISIBLE_DESCRIPTION: (state, visibleDescription) => state.visibleDescription = visibleDescription,
  VISIBLE_PAYMENT: (state, visiblePayment) => state.visiblePayment = visiblePayment,
  VISIBLE_DELiVERY: (state, visibleDelivery) => state.visibleDelivery = visibleDelivery,
  PRODUCT_ID: (state, id) => state.productId = id,
  CURRENT_SIZE: (state, currentProduct) => state.currentProduct = currentProduct,
  START_SIZE: (state, startSize) => state.startSize = startSize,
  CHANGE_SIZE: (state, changeSize) => state.changeSize = changeSize,
};

export const getters = {
  product: state => state.product,
  category: state => state.category,
  pathAWS: state => state.pathAWS,
  visibleDescription: state => state.visibleDescription,
  visiblePayment: state => state.visiblePayment,
  visibleDelivery: state => state.visibleDelivery,
  currentProduct: state => state.currentProduct,
  startSize: state => state.startSize,
  changeSize: state => state.changeSize
};
