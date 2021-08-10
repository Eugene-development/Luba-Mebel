import {forEach} from 'lodash';
import {find} from 'lodash';

export const state = () => ({
  allCategories: [],
  allRubric: [],
  products: [],
  pathAWS: '',
  categoryId: null,

  pathAWSBucket: {
    path: process.env.IMAGE_PRODUCTS
  },
  apiCRUD: {
    baseURL: process.env.API_CRUD
  }
  // apiCRUD: { baseURL: 'http://localhost:7788/' }
});

export const actions = {
  async getCategories({commit, state}, payload) {


    //TODO а как на счёт искать по слагу на бэке?
    //Получил Id категории по слагу в пейлоаде
    const rubrics = await this.$axios.$get('get-all-rubric', state.apiCRUD);

    forEach(rubrics, function (value) {
      const {id} = find(value, {'slug': payload.slug});
      commit('RUBRIC_ID', id);
    });

    const {data} = await this.$axios.$get('get-where-rubric-category-count-text/' + state.rubricID, state.apiCRUD);
    commit('ALL_CATEGORIES', data);
  },

  async getRubric({commit, state}, payload) {

    // await this.$axios.setToken('1', 'Bearer')
    // this.$axios.setHeader('Authorization', '1');
    // this.$axios.setToken('1');

    const {data} = await this.$axios.$get('get-where-rubric-category-count-text/' + payload.id, state.apiCRUD);
    const rubricID = payload.id;

    commit('ALL_RUBRIC', data);
    commit('RUBRIC_ID', rubricID);
  },

  async getProducts({commit, state}, payload) {


    const pathAWS = state.pathAWSBucket.path
    commit('PATH_AWS', pathAWS)




    //TODO а как на счёт искать по слагу на бэке?
    //Получил Id категории по слагу в пейлоаде
    const categories = await this.$axios.$get('get-all-category', state.apiCRUD);

    forEach(categories, function (value) {
      const {id} = find(value, {'slug': payload.slug});
      commit('CATEGORY_ID', id);
    });

    const {data} = await this.$axios.$get('get-WhCategory-HmProduct-HmImageProduct-HmTextProduct-CoProduct/' + state.categoryId, state.apiCRUD);
    commit('PRODUCTS', data[0]);


    // const {data} = await this.$axios.$get('get-where-rubric-category-count-text/' + state.rubricID, state.apiCRUD);
    // const slugCategory = payload.slug;
    // forEach(data, function (value) {
    //   const products = find(value.category, {'slug': slugCategory});
    //   commit('PRODUCTS', products);
    // });
  },
};


export const mutations = {
  ALL_CATEGORIES: (state, data) => state.allCategories = data,
  ALL_RUBRIC: (state, data) => state.allRubric = data,
  PRODUCTS: (state, data) => state.products = data,
  RUBRIC_ID: (state, rubricID) => state.rubricID = rubricID,
  PATH_AWS: (state, pathAWS) => state.pathAWS = pathAWS,
  CATEGORY_ID: (state, id) => state.categoryId = id
};

export const getters = {
  allCategories: state => state.allCategories,
  allRubric: state => state.allRubric,
  products: state => state.products,
  pathAWS: state => state.pathAWS,
  seo: state => state.seo,
};
