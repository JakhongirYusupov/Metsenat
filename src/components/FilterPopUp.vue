<template>
  <div class="bg-transparent popup-wrapper">
    <div class="overlay" @click="setActiveFilter"></div>
    <div class="py-7 px-8 bg-white rounded-md z-10 w-full max-w-xl grid gap-7"
      :class="{ 'form-wrapper': activeComponent !== 3 }">
      <div class="flex items-center pb-7 border-b-2  justify-between">
        <span class="text-2xl font-bold">Filter</span>
        <i class="fa-solid fa-xmark fa-xl cursor-pointer border-b-2 " style="color: #B2B7C1;"
          @click="setActiveFilter"></i>
      </div>
      <div v-if="activeComponent === 2 || activeComponent == 1" class="grid gap-7">
        <CustomSelect :selectChange="selectChange" :data="selectData" />
        <div class="grid gap-4">
          <span class="text-sm font-medium uppercase tracking-wide">Homiylik summasi</span>
          <div class="grid grid-cols-4 gap-3">
            <div class="py-4 flex justify-center rounded-md cursor-pointer text-sm font-medium bg-indigo-200"
              :class="[{ 'allSumButton': activeSum === 0 }, { 'activeSum': 0 === activeSum }]" @click="activeSum = 0">
              <span>Barchasi</span>
              <i class="fa-solid fa-circle-check hidden" style="color: #0f67ff;"></i>
            </div>
            <div v-for="item of data" @click="activeSum = item?.id" :class="{ 'activeSum': item?.id === activeSum }"
              class="py-4 flex justify-center rounded-md cursor-pointer text-sm font-medium border-2 border-indigo-200 flex">
              {{ item?.summa }}<span class="ml-1 text-sm text-blue-800">UZS</span>
              <i class="fa-solid fa-circle-check hidden" style="color: #0f67ff;"></i>
            </div>
          </div>
        </div>
        <div class="flex flex-col gap-4">
          <span class="text-sm font-medium uppercase tracking-wide">Sana</span>
          <input type="datetime-local">
        </div>
      </div>
      <div v-if="activeComponent === 3" class="grid gap-7">
        <div class="flex flex-col gap-4 z-20">
          <span class="text-sm font-medium uppercase tracking-wide">Talabalik turi</span>
          <CustomSelect :selectChange="selectChange" :data="typeStudent" />
        </div>
        <div class="flex flex-col gap-4 z-10">
          <span class="text-sm font-medium uppercase tracking-wide">OTM</span>
          <CustomSelect :selectChange="selectChange" :data="typeOtm.map(el => el.name)" />
        </div>
      </div>
      <div class="border h-0"></div>
      <div class="flex items-center justify-end gap-4">
        <button
          class="font-sm font-medium text-blue-600 px-8 py-2.5 border border-blue-600 rounded-md flex items-center gap-3">
          <i class="fa-solid fa-brush" style="color: #2e7bff;"></i>
          <span>Tozalash</span>
        </button>
        <button class="font-xs font-medium text-white bg-blue-600 px-8 py-2.5 rounded-md flex items-center gap-3">
          <i class="fa-regular fa-eye" style="color: #ffffff;"></i>
          <span>Natijalarni ko‘rish</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { GET_TRAFFIC_LIST, GET_INSTITUTE_LIST } from '../utils/api';
import CustomSelect from './CustomSelect.vue';

export default {
  data() {
    return {
      data: [],
      activeSum: -1,
      selectData: ['Barchasi', 'Yangi', 'Moderatsiyada', 'Tasdiqlangan', 'Bekor qilingan'],
      typeStudent: ['Bakalavr', 'Magistr'],
      typeOtm: []
    }
  },
  mounted() {
    axios.get(GET_TRAFFIC_LIST).then(res => this.data = res.data)
    axios.get(GET_INSTITUTE_LIST).then(res => this.typeOtm = res.data)
  },
  props: {
    setActiveFilter: {
      type: Function,
      required: true
    },
    activeComponent: {
      type: Number,
      required: true
    }
  },
  components: {
    CustomSelect
  },
  methods: {
    selectChange(id) {
      console.log(this.typeOtm[id]);
    }
  }
}
</script>

<style>
.activeSum {
  position: relative;
  border: 2px solid #2E5BFF;
  z-index: 1;
  animation: scaleButton 0.3s ease;
}

.allSumButton {
  animation: scaleButton 0.3s ease;
}

.activeSum>i {
  border-radius: 50%;
  display: block;
  position: absolute;
  top: -5px;
  right: -5px;
  z-index: 10;
  background-color: white;
}

@keyframes scaleButton {
  0% {
    scale: 1
  }

  50% {
    scale: 1.2
  }

  100% {
    scale: 1
  }
}
</style>