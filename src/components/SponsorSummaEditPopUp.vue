<template>
  <form class="bg-transparent popup-wrapper" @submit.prevent @submit="handleSubmit">
    <div class="overlay" @click="setActivePopUp"></div>
    <div class="py-7 px-8 bg-white rounded-md z-10 w-full max-w-xl grid gap-7 form-wrapper">
      <div class="flex items-center pb-7 border-b-2  justify-between">
        <span class="text-2xl font-bold">Homiylarni tahrirlash</span>
        <i class="fa-solid fa-xmark fa-xl cursor-pointer border-b-2" @click="setActivePopUp" style="color: #B2B7C1;"></i>
      </div>
      <div class="grid gap-2 z-30">
        <span class="text-sm font-medium uppercase tracking-wide">F.I.Sh. (Familiya Ism Sharifingiz)</span>
        <CustomSelect :selectChange="selectSponsor" :data="sponsors?.map(el => el?.sponsor?.full_name)" />
      </div>
      <div class="grid gap-2">
        <span class="text-sm font-medium uppercase tracking-wide">Ajratilingan summa</span>
        <input :value="data.summa" @change="data.summa = +$event.target.value.toString()" type="number"
          placeholder="Kiriting" maxlength="50" minlength="3" required>
      </div>
      <div class="border"></div>
      <div class="flex items-center justify-end gap-4">
        <button type="button" @click="$event => {
          updateSponsorList('delete')
          setActivePopUp()
        }" class="font-xs font-normal text-red-600 bg-red-100 px-8 py-2.5 rounded-md flex items-center gap-3">
          <i class="fa-regular fa-trash-can fa-lg" style="color: #FF4945;"></i>
          <span>Homiyni o‘chirish</span>
        </button>
        <button type="submit"
          class="font-xs font-medium text-white bg-blue-600 px-8 py-2.5 rounded-md flex items-center gap-3">
          <i class="fa-regular fa-floppy-disk fa-lg" style="color: #ffffff;"></i>
          <span>Saqlash</span>
        </button>
      </div>
    </div>
  </form>
</template>

<script>
import axios from 'axios'
import CustomSelect from './CustomSelect.vue'
import { PUT_SPONSOR_SUMMA, GET_SPONSOR_SUMMA } from '../utils/api'

export default {
  data() {
    return {
      data: { sponsor: this.editData?.sponsor?.id?.toString(), summa: this.editData?.summa, student: this.$route.params?.id },
      sponsors: [this.editData]
    }
  },

  mounted() {
    axios.get(GET_SPONSOR_SUMMA)
      .then(res => {
        this.sponsors.push(...res.data)
      })
      .catch(err => console.log(err))
  },
  methods: {
    handleSubmit() {
      axios.put(`${PUT_SPONSOR_SUMMA}${this.editData?.id}/`, this.data)
        .then(res => {
          this.updateSponsorList()
          this.setActivePopUp()
        })
        .catch(err => console.log(err))
    },
    selectSponsor(id) {
      this.data.sponsor = this.sponsors[id]?.sponsor?.id?.toString()
    }
  },
  props: {
    setActivePopUp: {
      type: Function,
      required: true
    },
    editData: {
      type: Object,
      required: false
    },
    updateSponsorList: {
      type: Function,
      required: true
    }
  },
  components: {
    CustomSelect
  }
}
</script>