<script setup>
const { requestId } = defineProps(["requestId"]);
console.info(`request id: ${requestId}`);
</script>
<template>
  <h1>User Profile</h1>
</template>
<style scoped></style>
