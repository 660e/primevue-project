<script setup lang="ts">
const value = ref();
</script>

<template>
  <div class="h-screen flex justify-center items-center gap-2">
    <InputText v-model="value" type="text" />
    <Button label="Submit" />
  </div>
</template>
