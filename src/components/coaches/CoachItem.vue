<template>
  <li>
    <h3>{{ fullName }}</h3>
    <h4>${{ rate }}/hour</h4>
    <div>
      <base-badge v-for="area in areas" :key="area" :type="area" :title="area">{{ area }}</base-badge>
    </div>
    <div class="actions">
      <base-button mode="outline" link :to="coachContactLink">Contact</base-button>
      <base-button link :to="coachDetailsLink">View Details</base-button>
    </div>
  </li>
</template>

<script>
export default {
  // Passed to this component as props rather than managed with Vuex because it's not application-wide state; just internal local state in the v-for loop in CoachesList
  props: ['id', 'firstName', 'lastName', 'rate', 'areas'],
  computed: {
    fullName() {
      return this.firstName + ' ' + this.lastName;
    },
    coachContactLink() {
      // See https://router.vuejs.org/api/#the-route-object for explanation of $route (it's the route object and represents state of current active route)
      return this.$route.path + '/' + this.id + '/contact'; // /coaches/c1/contact
    },
    coachDetailsLink() {
      return this.$route.path + '/' + this.id; // /coaches/c1
    }
  }
}
</script>


<style scoped>
li {
  margin: 1rem 0;
  border: 1px solid #424242;
  border-radius: 12px;
  padding: 1rem;
}

h3 {
  font-size: 1.5rem;
}

h3,
h4 {
  margin: 0.5rem 0;
}

div {
  margin: 0.5rem 0;
}

.actions {
  display: flex;
  justify-content: flex-end;
}
</style>