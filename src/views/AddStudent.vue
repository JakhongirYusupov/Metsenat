<template>
  <Header />
  <BackNavbar :name="'Talaba qo‘shish'" :holat="null" />
  <div class="container flex justify-center">
    <form class="rounded-md bg-white shadow-md p-7 w-full max-w-3xl grid gap-7 mt-10" @submit.prevent
      @submit="handleSubmit">
      <div class="grid grid-cols-2 gap-7">
        <div class="grid gap-2">
          <span class="text-sm font-medium uppercase tracking-wide">F.I.Sh. (Familiya Ism Sharifingiz)</span>
          <input @change="data.full_name = $event.target.value" type="text" placeholder="Kiriting" maxlength="50"
            minlength="3" required>
        </div>
        <div class="grid gap-2">
          <span class="text-sm font-medium uppercase tracking-wide">Telefon raqam</span>
          <input @change="data.phone = $event.target.value" type="tel" placeholder="Kiriting" maxlength="50" minlength="3"
            required>
        </div>
      </div>
      <div class="flex flex-col gap-4 z-20">
        <span class="text-sm font-medium uppercase tracking-wide">OTM</span>
        <CustomSelect :selectChange="selectOtm" :data="typeOtm.map(el => el.name)" />
      </div>
      <div class="grid grid-cols-2 gap-7">
        <div class="flex flex-col gap-4 z-10">
          <span class="text-sm font-medium uppercase tracking-wide">Talabalik turi</span>
          <CustomSelect :selectChange="selectType" :data="typeStudent" />
        </div>
        <div class="grid gap-2">
          <span class="text-sm font-medium uppercase tracking-wide">Kontrakt summa</span>
          <input @change="data.contract = $event.target.value" type="number" placeholder="Kiriting" maxlength="15"
            minlength="3" required>
        </div>
      </div>
      <div class="flex justify-end">
        <button class="font-xs font-medium text-white bg-blue-600 px-8 py-2.5 rounded-md flex items-center gap-3">
          <i class="fa-solid fa-plus fa-lg" style="color: #ffffff;"></i>
          <span>Qo‘shish</span>
        </button>
      </div>
    </form>
  </div>
  <SuccessPopUp v-if="activePopUp" :name="'Student yaratildi'" :setPopUp="setPopUp" />
</template>

<script>
import BackNavbar from "@/components/BackNavBar.vue";
import Header from "../components/Header.vue";
import CustomSelect from "../components/CustomSelect.vue";
import { GET_INSTITUTE_LIST, POST_STUDENT } from "../utils/api";
import SuccessPopUp from "../components/SuccessPopUp.vue";
import axios from "axios";

export default {
  components: {
    SuccessPopUp,
    CustomSelect,
    BackNavbar,
    Header,
  },
  data() {
    return {
      data: {
        institute: 0,
        type: 1
      },
      typeStudent: ['Bakalavr', 'Magistr'],
      typeOtm: [],
      activePopUp: false
    }
  },
  mounted() {
    axios.get(GET_INSTITUTE_LIST).then(res => {
      this.data.institute = res.data[0]?.id
      this.typeOtm = res.data
    })
  },
  methods: {
    selectOtm(id) {
      this.data.institute = this.typeOtm[id].id
    },
    selectType(id) {
      this.data.type = ++id
    },
    handleSubmit(e) {
      console.log(this.data);
      axios.post(POST_STUDENT, this.data)
        .then(res => {
          e.target.reset()
          this.activePopUp = true
        })
        .catch(err => alert(err.message))
    },
    setPopUp() {
      this.activePopUp = false
    }
  }
}
</script>