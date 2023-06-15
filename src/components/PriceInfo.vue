<template>
  <section>
    <div class="container flex items-center justify-between gap-7">
      <div class="flex items-center rounded-md bg-white p-6 w-full">
        <div class="flex items-center justify-center rounded-md bg-indigo-100 w-12 h-12">
          <i class="fa-solid fa-money-bill-wave fa-lg" style="color: #4C6FFF;"></i>
        </div>
        <div class="flex flex-col justify-center ml-4 gap-1.5">
          <span class="text-xs text-gray-400 font-normal">Jami to‘langan summa</span>
          <p class="text-xl font-bold text-black">{{ data?.total_paid }} <span class="text-gray-400">UZS</span></p>
        </div>
      </div>
      <div class="flex items-center rounded-md bg-white p-6 w-full">
        <div class="flex items-center justify-center rounded-md bg-yellow-100 w-12 h-12">
          <i class="fa-solid fa-money-bill-wave fa-lg" style="color: #EDC700;"></i>
        </div>
        <div class="flex flex-col justify-center ml-4 gap-1.5">
          <span class="text-xs text-gray-400 font-normal">Jami so‘ralgan summa</span>
          <p class="text-xl font-bold text-black">{{ data?.total_need }} <span class="text-gray-400">UZS</span></p>
        </div>
      </div>
      <div class="flex items-center rounded-md bg-white p-6 w-full">
        <div class="flex items-center justify-center rounded-md bg-orange-100 w-12 h-12">
          <i class="fa-solid fa-money-bill-wave fa-lg" style="color: #ED7200;"></i>
        </div>
        <div class="flex flex-col justify-center ml-4 gap-1.5">
          <span class="text-xs text-gray-400 font-normal">To‘lanishi kerak summa</span>
          <p class="text-xl font-bold text-black">{{ data?.total_must_pay }} <span class="text-gray-400">UZS</span></p>
        </div>
      </div>
    </div>
    <Spinner v-if="loading" />
  </section>
</template>

<script>
import axios from 'axios';
import { GET_DASHBOARD } from '../utils/api.js'
import Spinner from '../components/Spinner.vue';

export default {
  components: {
    Spinner
  },
  data() {
    return {
      data: [],
      loading: true,
      error: null
    }
  },
  mounted() {
    axios.get(GET_DASHBOARD)
      .then((res) => {
        this.loading = false
        this.data = res?.data
      })
      .catch((err) => {
        this.loading = false
        this.error = err
      })
  }
}
</script>