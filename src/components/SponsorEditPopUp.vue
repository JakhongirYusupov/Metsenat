<template>
  <form class="bg-transparent popup-wrapper" @submit.prevent @submit="handleSubmit">
    <div class="overlay" @click="setActiveEdit"></div>
    <div class="py-7 px-8 bg-white rounded-md z-10 w-full max-w-xl grid gap-7 form-wrapper">
      <div class="flex items-center pb-7 border-b-2  justify-between">
        <span class="text-2xl font-bold">Filter</span>
        <i class="fa-solid fa-xmark fa-xl cursor-pointer border-b-2" @click="setActiveEdit" style="color: #B2B7C1;"></i>
      </div>
      <div class="grid grid-cols-2 border-2 border-indigo-100 rounded-md">
        <button type="button" class="rounded-s text-xs font-medium text-indigo-400 uppercase h-11"
          :class="{ 'active-dashboard': activeBtn === 1 }" @click="activeBtn = 1">Jismoniy
          shaxs</button>
        <button type="button" class="rounded-e text-xs font-medium text-indigo-400 uppercase h-11"
          :class="{ 'active-dashboard': activeBtn === 2 }" @click="activeBtn = 2">Yuridik shaxs</button>
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
        <span class="text-sm font-medium uppercase tracking-wide">Holati</span>
        <CustomSelect :selectChange="selectChange" :data="selectData" />
      </div>
      <div class="grid gap-2 z-20">
        <span class="text-sm font-medium uppercase tracking-wide">Homiylik summasi</span>
        <CustomSelect :selectChange="selectChange" :data="allSumma" />
      </div>
      <div class="grid gap-2 z-10">
        <span class="text-sm font-medium uppercase tracking-wide">To‘lov turi</span>
        <CustomSelect :selectChange="selectChange" :data="paymentType" />
      </div>
      <div class="grid gap-2" v-if="activeBtn === 2">
        <span class="text-sm font-medium uppercase tracking-wide">Tashkilot nomi</span>
        <input @change="updateUser.firm = $event.target.value" type="text" placeholder="Kiriting" maxlength="50"
          minlength="3" required :value="data?.firm">
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
import CustomSelect from "./CustomSelect.vue"
import { GET_PAYMENT_TYPE, GET_TRAFFIC_LIST, PUT_SPONSOR } from "../utils/api";
import axios from "axios";
export default {
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
      activeBtn: 1,
      selectData: ['Moderatsiyada', 'Tasdiqlangan', 'Yangi', 'Bekor qilingan'],
      allSumma: [],
      paymentType: [],
      updateUser: {
      },
    }
  },
  components: {
    CustomSelect
  },
  methods: {
    selectChange(value) {
    },
    handleSubmit() {
      const user = { ...this.data, ...this.updateUser }
      delete user.created_at
      delete user.id
      delete user.get_status_display
      axios.put(`${PUT_SPONSOR}${this.data?.id}/`, user)
        .then((res) => {
          this.setData(res.data)
          this.setActiveEdit()
        })
        .catch(err => alert(err.message))
    }
  },
  mounted() {
    axios.get(GET_TRAFFIC_LIST).then(res => {
      res.data?.forEach(element => {
        this.allSumma.push(element?.summa)
      });
    })
    axios.get(GET_PAYMENT_TYPE).then(res => {
      res.data?.forEach(element => {
        this.paymentType.push(element?.title)
      });
    })
  }
}
</script>