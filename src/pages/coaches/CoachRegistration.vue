<template>
  <section>
    <base-card>
      <h2>Register as a coach now!</h2>
      <coach-form @save-data="saveData"></coach-form>
    </base-card>
  </section>
</template>

<script>
import CoachForm from '../../components/coaches/CoachForm.vue';

export default {
  components: {
    CoachForm
  },
  methods: {
    saveData(data) {
      // coaches: namespace. registerCoach: action name
      this.$store.dispatch('coaches/registerCoach', data);
      // unlike .push, can't go back to page we came from (don't want to go back to form after submitted)
      this.$router.replace('/coaches');
    }
  }
}
</script>