<template>
  <div class="bg-transparent popup-wrapper">
    <div class="overlay" @click="setActiveFilter"></div>
    <div class="py-12 px-8 bg-white rounded-md z-10 w-full max-w-md grid gap-7 wrapperScale">
      <div class="flex items-center justify-between">
        <span class="text-2xl font-bold"></span>
        <i class="fa-solid fa-xmark fa-xl cursor-pointer border-b-2 " style="color: #B2B7C1;" @click="setPopUp"></i>
      </div>
      <div class="flex justify-center">
        <img class="w-36 h-36 mb-4 image-scale" src="@/assets/images/success.png" alt="">
      </div>
      <h3 class="text-2xl text-center font-bold">{{ name }}</h3>
      <div class="flex justify-center">
        <button class="py-3 w-56 bg bg-blue-600 rounded-md font-medium text-sm text-white cursor-pointer"
          @click="setPopUp">Yopish</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    setPopUp: {
      type: Function,
      required: true
    },
    name: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.wrapperScale {
  animation: wrapperScale 1s backwards;
}

@keyframes wrapperScale {
  0% {
    scale: 1;
  }

  50% {
    scale: 1.5
  }

  100% {
    scale: 1
  }

}
</style>