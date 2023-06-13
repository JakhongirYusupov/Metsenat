<template>
  <div class="py-8 bg-gray-50">
    <div class="container flex gap-4 items-center">
      <router-link to="/"><i class="fa-solid fa-arrow-left fa-xl cursor-pointer"
          style="color: #000000;"></i></router-link>
      <h2 class="text-2xl font-bold">{{ name }}</h2>
      <div class="py-1.5 px-3 rounded-md" :class="[
        { 'text-blue-400 bg-blue-100': holat === 'Yangi' },
        { 'text-orange-400 bg-orange-100': holat === 'Moderatsiyada' },
        { 'text-grey-400 bg-grey-100': holat === 'Bekor qilingan' },
        { 'text-green-400 bg-green-100': holat === 'Tasdiqlangan' },
      ]">{{ holat }}</div>
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