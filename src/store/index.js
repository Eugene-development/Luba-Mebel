export const state = () => ({
});

export const mutations = {
};

export const actions = {
  async nuxtServerInit({dispatch}){
    await dispatch('navbar/head/getHead');
    // await dispatch('user/createUUID');
  }
};

export const getters = {
};

