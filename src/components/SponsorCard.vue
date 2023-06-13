<template>
  <div class="countainer flex justify-center pt-10">
    <div class="w-full max-w-4xl bg-white rounded-md p-8 shadow-md">
      <div class="flex items-center justify-between">
        <h2 class="text-2xl font-bold">Homiy haqida</h2>
        <button class="flex items-center gap-2.5 rounded-md bg-indigo-100 py-2.5 px-8" @click="activeEdit = true">
          <i class="fa-solid fa-pen-to-square" style="color: #3365FC;"></i>
          <span class="text-sm font-medium text-blue-600">Tahrirlash</span>
        </button>
      </div>
      <div class="flex gap-5 pt-8 items-center">
        <div class="rounded md w-16 h-16 bg-gray-200 flex items-center justify-center">
          <i class="fa-solid fa-user-tie fa-2xl" style="color: #2E5BFF;"></i>
        </div>
        <div>
          <p class="text-base font-medium">{{ data?.full_name?.split(" ")[0] }}</p>
          <p class="text-base font-medium">{{ data?.full_name?.split(" ").slice(1).join(' ') }}</p>
        </div>
      </div>
      <div class="grid grid-cols-2 pt-6 gap-6">
        <div v-if="data?.phone" class="grid gap-3">
          <span class="text-xs font-medium text-gray-400 uppercase">telefon raqam</span>
          <p class="text-base font-semibold whitespace-nowrap">{{ data?.phone }}</p>
        </div>
        <div v-if="data?.sum" class="grid gap-3">
          <span class="text-xs font-medium text-gray-400 uppercase">Homiylik summasi</span>
          <p class="text-base font-semibold whitespace-nowrap">{{ data?.sum }} <span>UZS</span></p>
        </div>
        <div v-if="data?.firm" class="grid gap-3">
          <span class="text-xs font-medium text-gray-400 uppercase">Tashkilot nomi</span>
          <p class="text-base font-semibold whitespace-nowrap">{{ data?.firm }}</p>
        </div>
      </div>
    </div>
  </div>
  <SponsorEditPopUp :data="data" v-if="activeEdit" :setActiveEdit="setActiveEdit" :setData="setData" />
</template>

<script>
import SponsorEditPopUp from './SponsorEditPopUp.vue';
export default {
  props: {
    data: {
      type: Object,
      required: true
    },
    setData: {
      type: Function,
      required: true
    }
  },
  data() {
    return {
      activeEdit: false
    }
  },
  methods: {
    setActiveEdit() {
      this.activeEdit = false
    }
  },
  components: {
    SponsorEditPopUp
  }
}
</script>