<template>
  <form class="bg-transparent popup-wrapper" @submit.prevent @submit="handleSubmit">
    <div class="overlay" @click="setActivePopUp(false)"></div>
    <div class="py-7 px-8 bg-white rounded-md z-10 w-full max-w-xl grid gap-7 form-wrapper">
      <div class="flex items-center pb-7 border-b-2  justify-between">
        <span class="text-2xl font-bold">Homiy qo‘shish</span>
        <i class="fa-solid fa-xmark fa-xl cursor-pointer border-b-2" @click="setActivePopUp(false)"
          style="color: #B2B7C1;"></i>
      </div>
      <div class="grid gap-2 z-30">
        <span class="text-sm font-medium uppercase tracking-wide">F.I.Sh. (Familiya Ism Sharifingiz)</span>
        <CustomSelect :selectChange="selectSponsor" :data="sponsors?.map(el => el?.sponsor?.full_name)" />
      </div>
      <div class="grid gap-2">
        <span class="text-sm font-medium uppercase tracking-wide">Ajratilingan summa</span>
        <input @change="data.summa = +$event.target.value" type="number" placeholder="Kiriting" maxlength="50"
          minlength="3" required>
      </div>
      <div class="border"></div>
      <div class="flex items-center justify-end gap-4">
        <button type="submit"
          class="font-xs font-medium text-white bg-blue-600 px-8 py-2.5 rounded-md flex items-center gap-3">
          <i class="fa-solid fa-plus fa-lg" style="color: #ffffff;"></i>
          <span>Qo‘shish</span>
        </button>
      </div>
    </div>
  </form>
</template>

<script>
import axios from 'axios';
import { GET_SPONSOR_SUMMA, POST_SPONSOR_SUMMA } from '../utils/api';
import CustomSelect from './CustomSelect.vue';

export default {
  data() {
    return {
      data: {},
      sponsors: []
    }
  },
  methods: {
    handleSubmit() {
      axios.post(POST_SPONSOR_SUMMA, this.data)
        .then(res => this.addSponsor())
        .catch(err => alert(err?.response?.data?.summa))
      this.setActivePopUp()
    },
    selectSponsor(id) {
      this.data.sponsor = this.sponsors[id]?.sponsor?.id?.toString()
    }
  },
  mounted() {
    this.data.student = this.$route.params?.id?.toString()
    axios.get(GET_SPONSOR_SUMMA)
      .then(res => {
        this.sponsors = res.data
        this.data.sponsor = res.data[0]?.sponsor?.id?.toString()
      })
      .catch(err => console.log(err))
  },
  props: {
    setActivePopUp: {
      type: Function,
      required: true
    },
    addSponsor: {
      type: Function,
      required: true
    }
  },
  components: {
    CustomSelect
  }
}
</script>