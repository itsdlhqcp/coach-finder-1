// https://vuex.vuejs.org/guide/getters.html
export default {
  coaches(state) {
    return state.coaches;
  },
  hasCoaches(state) {
    // Note: empty array is truthy
    return state.coaches && state.coaches.length > 0;
  }
};
