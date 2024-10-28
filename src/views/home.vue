<script setup lang="ts">
import { ref } from 'vue';

const value = ref();
</script>

<template>
  <div class="h-screen text-sm flex justify-center items-center gap-2">
    <InputText v-model="value" type="text" />
    <Button label="Submit" />
  </div>
</template>
