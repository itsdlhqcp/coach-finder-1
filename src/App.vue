<template>
  <the-header></the-header>
  <router-view v-slot="slotProps">
    <!-- out-in: First animate removal of existing page, then appearance of new page -->
    <!-- Normally can have multiple root elements in Vue 3, but if you plan on wrapping components with transition, wrapped components must only have one root element (because transition must have only one child element) -->
    <transition name="route" mode="out-in">
      <component :is="slotProps.Component"></component>
    </transition>
  </router-view>
</template>

<script>
import TheHeader from './components/layout/TheHeader.vue';

export default {
  // Registering it as a local component (because it's only used here) in this root component file https://vuejs.org/v2/guide/components-registration.html#Local-Registration
  components: {
    TheHeader
  },
  created() {
    this.$store.dispatch('tryLogin');
  }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
}

.route-enter-from {
  opacity: 0;
  transform: translateY(-30px);
}

.route-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.route-enter-active {
  transition: all 0.3s ease-out;
}

.route-leave-active {
  transition: all 0.3s ease-in;
}

.route-enter-to,
.route-leave-from {
  opacity: 1;
  transform: translateY(0);
}

button {
  outline: none;
}
</style>
