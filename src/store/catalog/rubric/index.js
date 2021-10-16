export const state = () => ({
  rubrics: [],
  apiCRUD: { baseURL: process.env.API_CRUD }
});

export const actions = {
  async getRubrics ({ commit, state}) {

    const { data } = await this.$axios.$get('get-all-rubric', state.apiCRUD);
    commit('RUBRICS', data);
  },
};

export const mutations = {
  RUBRICS: (state, data) => state.rubrics = data,
};

export const getters = {
  rubrics: state => state.rubrics,
};
