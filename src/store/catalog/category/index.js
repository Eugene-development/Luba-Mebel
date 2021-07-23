import {forEach} from 'lodash';
import {find} from 'lodash';

export const state = () => ({
  allRubric: [],
  products: [],
  pathAWS: '',
  seo: [],
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
  async getSeo({commit, state}, payload) {
    // console.log(payload.slug);

    // await this.$axios.setToken('1', 'Bearer')

    const {data} = await this.$axios.$get('get-all-category-seo', state.apiCRUD);
    const currentCategory = find(data, {'slug': payload.slug});

    //Забрать все категории-По слагу выбрать айди нужной категории-снова отправить запрос на сео
    // const {data} = await this.$axios.$get('get-category-seo/' + 31, state.apiCRUD);


    // console.log(data[0].seo.title);

    commit('SEO', currentCategory.seo);

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
  ALL_RUBRIC: (state, data) => state.allRubric = data,
  PRODUCTS: (state, data) => state.products = data,
  RUBRIC_ID: (state, rubricID) => state.rubricID = rubricID,
  PATH_AWS: (state, pathAWS) => state.pathAWS = pathAWS,
  SEO: (state, seo) => state.seo = seo,
  CATEGORY_ID: (state, id) => state.categoryId = id
};

export const getters = {
  allRubric: state => state.allRubric,
  products: state => state.products,
  pathAWS: state => state.pathAWS,
  seo: state => state.seo,
};
