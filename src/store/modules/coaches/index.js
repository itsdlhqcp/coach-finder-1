// In this file, will merge all coach-related Vuex mutations, actions, getters, etc., setting up the module (module can alternatively be all in single file, rather than this approach of combining different parts of module into one file)
import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';

export default {
  // Making module namespaced makes it local/detached from the rest of the store, to ensure multiple modules are clearly separated from one another (as app grows, may have getter, action, etc., name clashes in different modules of the same store - everything is merged together into one object)
  // To access namespaced names, have to prepend them with key assigned when adding module to store in modules object (this is the namespace of the module)
  namespaced: true,
  state() {
    return {
      coaches: [
        {
          id: 'c1',
          firstName: 'Maximilian',
          lastName: 'Schwarzmüller',
          areas: ['frontend', 'backend', 'career'],
          description:
            "I'm Maximilian and I've worked as a freelance web developer for years. Let me help you become a developer as well!",
          hourlyRate: 30
        },
        {
          id: 'c2',
          firstName: 'Julie',
          lastName: 'Jones',
          areas: ['frontend', 'career'],
          description:
            'I am Julie and as a senior developer in a big tech company, I can help you get your first job or progress in your current role.',
          hourlyRate: 30
        }
      ]
    };
  },
  mutations, // Using ES6 object property value shorthand
  actions,
  getters
};
