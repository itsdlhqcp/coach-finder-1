<template>
  DETAILS FOR COACH
  <!-- Note: contact is a child route of this coach details route; won't be loaded to replace what was on screen previously, but it instead needs a new, separate router view within parent component, and child components (here, the contact route) will be loaded in this router view -->
  <router-view></router-view>
  <router-link to="/coaches/c1/contact">Contact</router-link>
</template>