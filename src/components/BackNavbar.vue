<template>
  <div class="py-8 bg-gray-50">
    <div class="container flex gap-4 items-center">
      <router-link to="/"><i class="fa-solid fa-arrow-left fa-xl cursor-pointer"
          style="color: #000000;"></i></router-link>
      <h2 class="text-2xl font-bold">{{ name }}</h2>
      <div class="py-1.5 px-3 bg-green-100 text-green-600 rounded-md">{{ holat }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    },
    holat: {
      type: String,
      required: true
    }
  }
}
</script>

<style></style>