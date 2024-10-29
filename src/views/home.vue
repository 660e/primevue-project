<script setup lang="ts">
const value = ref();
</script>

<template>
  <div class="h-screen flex flex-col justify-center items-center gap-2">
    <div class="flex gap-2">
      <InputText v-model="value" type="text" />
      <Button class="!px-8" label="Submit" />
    </div>
    <div class="h-8 w-1/2 bg-primary rounded-border transition-colors hover:bg-primary-emphasis"></div>
  </div>
</template>
