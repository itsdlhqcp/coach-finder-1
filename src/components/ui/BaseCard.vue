<template>
  <div class="card">
    <!-- Using slot so card can be used as a wrapper around any content passed in by parent (a slot is like a placeholder for HTML content) -->
    <slot></slot>
  </div>
</template>

<style scoped>
.card {
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 2rem;
  margin: 2rem auto;
  max-width: 40rem;
}
</style>
