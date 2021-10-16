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

    //Получил Id категории по слагу в пейлоаде
    const rubrics = await this.$axios.$get('get-all-rubric', state.apiCRUD);
    forEach(rubrics, function (value) {
      const {id} = find(value, {'slug': payload.slug});
      commit('RUBRIC_ID', id);
    });//TODO А если вшить в сторадж номер рубрики?

    const {data} = await this.$axios.$get('get-rubric/' + state.rubricID, state.apiCRUD);
    // const {data} = await this.$axios.$get('get-where-rubric-category-count-text/' + state.rubricID, state.apiCRUD);
    commit('ALL_CATEGORIES', data);
  },


};


export const mutations = {
  ALL_CATEGORIES: (state, data) => state.allCategories = data,
  RUBRIC_ID: (state, rubricID) => state.rubricID = rubricID,
};

export const getters = {
  allCategories: state => state.allCategories,
  allRubric: state => state.allRubric,
};
