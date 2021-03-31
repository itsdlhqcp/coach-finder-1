import mutations from './mutations.js';
import actions from './actions.js';

export default {
  namespaced: true,
  state() {
    return {
      requests: []
    };
  },
  // Using object property value shorthand
  mutations,
  actions
};
