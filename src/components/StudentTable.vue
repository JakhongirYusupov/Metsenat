<template>
  <div class="container">
    <div class="flex pb-7 justify-end">
      <router-link to="/create-student">
        <button class="font-xs font-medium text-white bg-blue-600 px-8 py-2.5 rounded-md flex items-center gap-3">
          <i class="fa-solid fa-plus fa-lg" style="color: #ffffff;"></i>
          <span>Talaba qo‘shish</span>
        </button>
      </router-link>
    </div>
    <table class="w-full">
      <thead class="rounded-md overflow-hidden">
        <tr>
          <th v-for="item of tableRow" key="item.id" class="text-xs font-medium text-gray-400"
            :class="{ 'text-start': item.id === 2 }">{{
              item.name }}</th>
        </tr>
      </thead>
      <tbody v-for="(item, index) in students" class="gap-3">
        <tr class="h-3" :key="index"></tr>
        <tr class="bg-white h-16" :key="index">
          <td class="text-center text-base font-medium px-4">{{ activePage > 1 ? ++index + limit * (activePage - 1) :
            ++index }}
          </td>
          <td class="text-start text-base font-medium">{{ item?.full_name }}</td>
          <td class="text-center text-base font-medium">{{ studentType[item?.type] }}</td>
          <td class="text-center text-base font-medium">{{ item?.institute?.name }}</td>
          <td class="text-center text-base font-medium">{{ item?.given }} <span class="text-gray-400">UZS</span> </td>
          <td class="text-center text-base font-medium">{{ item?.contract }} <span class="text-gray-400">UZS</span> </td>
          <td class="text-center text-base font-medium">
            <router-link :to="'/student/' + item?.id">
              <i class="fa-solid fa-eye fa-lg cursor-pointer" style="color: #3366FF"></i>
            </router-link>
          </td>
        </tr>
      </tbody>
    </table>
    <Pagination v-if="dataCount" :countData="dataCount" :handleFetch="handleFetch" />
    <Spinner v-if="loading" />
  </div>
</template>

<script>
import Pagination from "./Pagination.vue"
import axios from "axios";
import { GET_STUDENTS } from "../utils/api.js"
import Spinner from '../components/Spinner.vue';

export default {
  data() {
    return {
      tableRow: [
        {
          id: 1,
          name: "#"
        },
        {
          id: 2,
          name: "F.I.SH."
        },
        {
          id: 3,
          name: "Talabalik turi"
        },
        {
          id: 3,
          name: "OTM"
        },
        {
          id: 4,
          name: "Ajratilingan summa"
        },
        {
          id: 5,
          name: "Kontrakt miqdori"
        },
        {
          id: 7,
          name: "Amallar"
        },
      ],
      students: [],
      loading: true,
      error: null,
      dataCount: 0,
      activePage: 1,
      limit: 10,
      studentType: [
        '', "Magistr", "Bakalavr",
      ]
    }
  },
  mounted() {
    this.handleFetch(this.activePage, this.limit)
    this.$emit('onSearch', this.onSearch)
    this.$emit('onFilter', this.onFilter)
  },
  methods: {
    handleFetch(page, limit) {
      this.activePage = page
      this.limit = limit
      this.loading = true
      axios.get(GET_STUDENTS + `?page=${page}&page_size=${limit}`).then((res) => {
        this.loading = false
        this.students = res?.data?.results
        this.dataCount = res?.data?.count
      }).catch((err) => {
        this.loading = false,
          this.error = err?.message
      })
    },
    onSearch(value) {
      this.dataCount = 0
      const filtered = this.students?.filter(el => el?.full_name.toLowerCase().includes(value.toLowerCase()))
      this.students = filtered
    },
    onFilter(value) {
      if (value.clear !== true) {
        this.dataCount = 0
        const filtered = this.students?.filter(el => el?.institute?.id === value?.otm && el?.type === value?.type + 1)
        this.students = filtered
        return
      }
      this.handleFetch(1, 10)
    }
  },
  components: {
    Pagination,
    Spinner
  },
}
</script>