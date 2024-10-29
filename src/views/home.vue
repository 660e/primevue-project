<script setup lang="ts">
const value = ref();
</script>

<template>
  <div class="h-screen flex flex-col justify-center items-center gap-4">
    <div class="flex gap-2">
      <InputText v-model="value" type="text" />
      <Button class="!px-8" label="Submit" />
      <div class="w-20 bg-primary rounded-border transition-colors hover:bg-primary-emphasis"></div>
    </div>
    <div class="flex gap-2">
      <i class="pi pi-check"></i>
      <i class="pi pi-times"></i>
      <i class="pi pi-spin pi-cog"></i>
      <span class="pi pi-search"></span>
      <span class="pi pi-user"></span>
    </div>
  </div>
</template>
