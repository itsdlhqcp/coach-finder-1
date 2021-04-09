<template>
  <div class="go-back">
    <base-button @click="goBack" mode="outline">Back</base-button>
  </div>
</template>

<script>
export default {
  methods: {
    goBack() {
      return this.$router.go(-1);
    }
  }
};
</script>

<style scoped>
.go-back {
  margin: 2rem auto 0;
  max-width: 40rem;
}

@media (max-width: 767px) {
  .go-back {
    width: 90%;
    margin-top: 1.5rem;
  }
}
</style>
