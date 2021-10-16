import {forEach} from 'lodash';
import {find} from 'lodash';

export const state = () => ({
  products: [],
  pathAWS: '',
  categoryId: null,

  pathAWSBucket: {
    path: process.env.IMAGE_PRODUCTS
  },
  apiCRUD: {
    baseURL: process.env.API_CRUD
  }
});

export const actions = {

  async getProducts({commit, state}, payload) {

    const pathAWS = state.pathAWSBucket.path
    commit('PATH_AWS', pathAWS)

    //Получил Id категории по слагу в пейлоаде
    const categories = await this.$axios.$get('get-all-category', state.apiCRUD);
    forEach(categories, function (value) {
      const {id} = find(value, {'slug': payload.slug});
      commit('CATEGORY_ID', id);
    });

    const {data} = await this.$axios.$get('get-category/' + state.categoryId, state.apiCRUD);
    commit('PRODUCTS', data[0]);
  },
};


export const mutations = {
  PRODUCTS: (state, data) => state.products = data,
  PATH_AWS: (state, pathAWS) => state.pathAWS = pathAWS,
  CATEGORY_ID: (state, id) => state.categoryId = id
};

export const getters = {allRubric: state => state.allRubric,
  products: state => state.products,
  pathAWS: state => state.pathAWS,
};
