<script setup>
import { useRoute } from "vue-router";

const route = useRoute();
</script>
<template>
  <h1>Not found : {{ route.path }}</h1>
  <p>Sorry, the page you are looking for does'nt exist</p>
</template>

<style scoped></style>
