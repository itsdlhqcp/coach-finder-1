// Vuex data store setup
// App has two features: coaches and requests. Will make each feature and its associated state and actions a module, which is why store also has a modules folder
import { createStore } from 'vuex';

import coachesModule from './modules/coaches/index.js';

const store = createStore({
  modules: {
    // coaches is the namespace of coachesModule (namespace is set to true in module, so have to prepend actions, getters, etc., with this name to use them)
    coaches: coachesModule
  }
});

export default store;
