import { createApp, defineAsyncComponent } from 'vue';

import router from './router.js';
import store from './store/index.js';
import App from './App.vue';
import BaseCard from './components/ui/BaseCard.vue';
import BaseButton from './components/ui/BaseButton.vue';
import BaseBadge from './components/ui/BaseBadge.vue';
import BaseSpinner from './components/ui/BaseSpinner.vue';
import GoBack from './components/ui/GoBack.vue';
// import BaseDialog from './components/ui/BaseDialog.vue';

// Only download code when needed
// Vue checks templates of components you're working with, and if none of the components uses this file, it's not downloaded
// Can be used for local and global components and routes
const BaseDialog = defineAsyncComponent(() =>
  import('./components/ui/BaseDialog.vue')
);

const app = createApp(App);

app.use(router);
app.use(store);

// Register global components
app.component('base-card', BaseCard);
app.component('base-button', BaseButton);
app.component('base-badge', BaseBadge);
app.component('base-spinner', BaseSpinner);
app.component('base-dialog', BaseDialog);
app.component('go-back', GoBack);

app.mount('#app');
