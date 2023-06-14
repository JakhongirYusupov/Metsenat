<template>
  <div class="container">
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
            <router-link :to="'/sponsor/' + item?.id">
              <i class="fa-solid fa-eye fa-lg cursor-pointer" style="color: #3366FF"></i>
            </router-link>
          </td>
        </tr>
      </tbody>
    </table>
    <Pagination v-if="dataCount" :countData="dataCount" :handleFetch="handleFetch" />
  </div>
</template>

<script>
import Pagination from "@/components/Pagination.vue"
import axios from "axios";
import { GET_STUDENTS } from "@/utils/api.js"

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
  },
  props: {
    searchData: {
      type: String,
      required: true
    }
  },
  components: {
    Pagination
  },
}
</script>