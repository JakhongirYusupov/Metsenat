<template>
  <div class="pt-10 pb-28">
    <div class="container flex justify-center">
      <div class="w-full max-w-4xl bg-white rounded-md p-8 shadow-md">
        <div class="flex items-center justify-between">
          <h2 class="text-2xl font-bold">Talabaga homiylar</h2>
          <button class="flex items-center gap-2.5 rounded-md bg-indigo-100 py-2.5 px-8" @click="activeAddPopUp = true">
            <i class="fa-solid fa-plus fa-lg" style="color: #3365FC;"></i>
            <span class="text-sm font-medium text-blue-600">Homiy qo‘shish</span>
          </button>
        </div>
        <table v-if="sponsors?.length" class="w-full mt-7">
          <thead class="rounded-md overflow-hidden">
            <tr>
              <th v-for="(item, index) in tableRow" key="item.id" class="text-xs font-medium text-gray-400 py-4 uppercase"
                :class="{ 'text-start': index === 1 || index === 0 }">{{
                  item }}</th>
            </tr>
          </thead>
          <tbody v-for="(item, index) in sponsors" class="gap-3">
            <tr class="h-3" :key="index"></tr>
            <tr class="bg-gray-100 rounded-md h-16" :key="index">
              <td class="text-start text-base font-medium px-4">{{ ++index }}</td>
              <td class="text-start text-base font-medium">{{ item?.sponsor?.full_name }}</td>
              <td class="text-center text-base font-medium">{{ item?.summa }} <span>UZS</span></td>
              <td class="text-center"><i class="fa-solid fa-pen-to-square fa-lg cursor-pointer" @click="$event => {
                editData = item
                setActiveEdit = true
              }" style="color: rgba(52, 103, 255, 1);"></i>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <AddSponsorPopUp v-if="activeAddPopUp" :setActivePopUp="setActivePopUp" :addSponsor="addSponsor" />
      <SponsorSummaEditPopUp v-if="setActiveEdit" :setActivePopUp="setActiveEditPopUp" :editData="editData"
        :updateSponsorList="updateSponsorList" />
    </div>
  </div>
</template>
<script>
import axios from 'axios';
import { GET_SPONSOR_OF_STUDENT, DELETE_SPONSOR_SUMMA } from '../utils/api';
import AddSponsorPopUp from './AddSponsorPopUp.vue';
import SponsorSummaEditPopUp from './SponsorSummaEditPopUp.vue';

export default {
  components: {
    SponsorSummaEditPopUp,
    AddSponsorPopUp
  },
  data() {
    return {
      activeEdit: false,
      activeAddPopUp: false,
      sponsors: [],
      tableRow: ['#', 'f.i.sh', 'Ajratilingan summa', 'Amallar'],
      setActiveEdit: false,
      editData: {}
    }
  },
  mounted() {
    this.getSponsors()
  },
  methods: {
    setActivePopUp() {
      this.activeAddPopUp = false
    },
    addSponsor() {
      this.getSponsors()
    },
    setActiveEditPopUp() {
      this.setActiveEdit = false
    },
    updateSponsorList(el) {
      if (!el) {
        this.getSponsors()
      } else if (el === 'delete') {
        axios.delete(DELETE_SPONSOR_SUMMA + this.editData?.id + '/')
          .then(res => this.getSponsors())
          .catch(err => alert("Nimadir xato!"))

      }
    },
    getSponsors() {
      axios.get(GET_SPONSOR_OF_STUDENT + this.$route?.params?.id)
        .then(res => {
          this.sponsors = res?.data?.sponsors
        })
    }
  }
}
</script>