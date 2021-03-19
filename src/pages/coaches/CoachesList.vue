<template>
  <section>FILTER</section>
  <section>
    <base-card>
      <div class="controls">
        <base-button>Refresh</base-button>
        <!-- Adding link prop automatically sets it to true - including the prop with no value will imply true https://v3.vuejs.org/guide/component-props.html#passing-a-boolean -->
        <base-button link to="/register">Register as Coach</base-button>
      </div>
      <ul v-if="hasCoaches">
        <coach-item
          v-for="coach in filteredCoaches"
          :key="coach.id"
          :id="coach.id"
          :first-name="coach.firstName"
          :last-name="coach.lastName"
          :rate="coach.hourlyRate"
          :areas="coach.areas"
        >
        </coach-item>
      </ul>
      <h3 v-else>No coaches found.</h3>
    </base-card>
  </section>
</template>

<script>
import CoachItem from '../../components/coaches/CoachItem.vue';

export default {
  components: {
    CoachItem
  },
  computed: {
    filteredCoaches() {
      // first coaches is the namespace name, named in store/index.js, and the second (after slash) is getter name
      return this.$store.getters['coaches/coaches']
    },
    hasCoaches() {
      return this.$store.getters['coaches/hasCoaches']
    }
  }
}
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>