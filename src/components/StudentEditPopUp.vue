<template>
  <form class="bg-transparent popup-wrapper" @submit.prevent @submit="handleSubmit">
    <div class="overlay" @click="setActiveEdit(false)"></div>
    <div class="py-7 px-8 bg-white rounded-md z-10 w-full max-w-xl grid gap-7 form-wrapper">
      <div class="flex items-center pb-7 border-b-2  justify-between">
        <span class="text-2xl font-bold">Tahrirlash</span>
        <i class="fa-solid fa-xmark fa-xl cursor-pointer border-b-2" @click="setActiveEdit(false)"
          style="color: #B2B7C1;"></i>
      </div>
      <div class="grid gap-2">
        <span class="text-sm font-medium uppercase tracking-wide">F.I.Sh. (Familiya Ism Sharifingiz)</span>
        <input @change="updateUser.full_name = $event.target.value" type="text" placeholder="Kiriting" maxlength="50"
          minlength="3" required :value="data?.full_name">
      </div>
      <div class="grid gap-2">
        <span class="text-sm font-medium uppercase tracking-wide">Telefon raqam</span>
        <input @change="updateUser.phone = $event.target.value" type="tel" placeholder="Kiriting" maxlength="50"
          minlength="3" required :value="data?.phone">
      </div>
      <div class="grid gap-2 z-30">
        <span class="text-sm font-medium uppercase tracking-wide">Otm</span>
        <CustomSelect :selectChange="selectOtm" :data="selectData?.map(el => el?.name)" />
      </div>
      <div class="grid gap-2 z-20">
        <span class="text-sm font-medium uppercase tracking-wide">Kontrakt miqdori</span>
        <CustomSelect :selectChange="selectSumma" :data="allSumma?.map(el => el?.summa)" />
      </div>
      <div class="border"></div>
      <div class="flex items-center justify-end gap-4">
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
import CustomSelect from "@/components/CustomSelect.vue"
import axios from "axios";
import { GET_INSTITUTE_LIST, GET_TRAFFIC_LIST, PUT_STUDENT } from "../utils/api";

export default {
  components: {
    CustomSelect
  },
  props: {
    setActiveEdit: {
      type: Function,
      required: true
    },
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
      selectData: [],
      updateUser: {},
      allSumma: [],
      institute: this.data.institute
    }
  },
  mounted() {
    axios.get(GET_TRAFFIC_LIST).then(res => this.allSumma = res.data)
    axios.get(GET_INSTITUTE_LIST).then(res => this.selectData = res.data)
  },
  methods: {
    selectOtm(id) {
      this.institute = this.selectData[id]
      this.updateUser.institute = this.selectData[id]?.id
    },
    selectSumma(id) {
      this.updateUser.contract = this.allSumma[id]?.summa.toString()
    },
    handleSubmit() {
      const { full_name, contract, phone, id, institute } = this.data
      const payload = { full_name, contract, phone, institute: institute?.id?.toString(), ...this.updateUser }
      axios.put(PUT_STUDENT + id + "/", payload)
        .then(res => {
          this.setData({ ...this.data, ...payload, institute: this.institute })
          this.setActiveEdit(false)
        })
        .catch(err => alert(err.message))
    }
  }
}
</script>