<template>
  <section>
    <div class="container">
      <table class="w-full">
        <thead class="rounded-md overflow-hidden">
          <tr>
            <th v-for="item of tableRow" key="item.id" class="text-xs font-medium text-gray-400"
              :class="{ 'text-start': item.id === 2 }">{{
                item.name }}</th>
          </tr>
        </thead>
        <tbody v-for="(item, index) in sponsors" class="gap-3">
          <tr class="h-3" :key="index"></tr>
          <tr class="bg-white h-16" :key="index">
            <td class="text-center text-base font-medium px-4">{{ activePage > 1 ? ++index + limit * (activePage - 1) :
              ++index }}
            </td>
            <td class="text-start text-base font-medium">{{ item?.full_name }}</td>
            <td class="text-center text-base font-medium">{{ item?.phone }}</td>
            <td class="text-center text-base font-medium">{{ item?.sum }} <span class="text-gray-400">UZS</span> </td>
            <td class="text-center text-base font-medium">{{ item?.spent }} <span class="text-gray-400">UZS</span> </td>
            <td class="text-center text-base font-medium">{{ item?.created_at.split("T")[0] }}</td>
            <td class="text-center text-base font-medium" :class="[
              { 'text-blue-400': item?.get_status_display === 'Yangi' },
              { 'text-orange-400': item?.get_status_display === 'Moderatsiyada' },
              { 'text-grey-400': item?.get_status_display === 'Bekor qilingan' },
              { 'text-green-400': item?.get_status_display === 'Tasdiqlangan' },
            ]">
              {{ item?.get_status_display }}</td>
            <td class="text-center text-base font-medium">
              <router-link :to="'/sponsor/' + item?.id">
                <i class="fa-solid fa-eye fa-lg cursor-pointer" style="color: #3366FF"></i>
              </router-link>
            </td>
          </tr>
        </tbody>
      </table>
      <Pagination v-if="dataCount" :countData="dataCount" :handleFetch="handleFetch" />
      <Spinner v-if="loading" />
    </div>
  </section>
</template>

<script>
import axios from "axios"
import Pagination from "./Pagination.vue"
import { GET_SPONSORS, serverApi } from "../utils/api.js"
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
          name: "Tel.raqami"
        },
        {
          id: 3,
          name: "Homiylik summasi"
        },
        {
          id: 4,
          name: "Sarflangan summa"
        },
        {
          id: 5,
          name: "Sana"
        },
        {
          id: 6,
          name: "Holati"
        },
        {
          id: 7,
          name: "Amallar"
        },
      ],
      sponsors: [],
      loading: true,
      error: null,
      dataCount: 0,
      activePage: 1,
      limit: 10
    }
  },
  components: {
    Pagination,
    Spinner
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
      axios.get(GET_SPONSORS + `?page=${page}&page_size=${limit}`).then((res) => {
        this.loading = false
        this.sponsors = res?.data?.results
        this.dataCount = res?.data?.count
      }).catch((err) => {
        this.loading = false,
          this.error = err?.message
      })
    },
    search() {
      if (this.searchData?.length >= 3) {
        axios.get(`${serverApi}/search/${this.searchData}`, { name: this.searchData })
          .then((res) => console.log(res))
          .catch((err) => console.log(err))
      }
    },
    onSearch(value) {
      this.dataCount = 0
      const filtered = this.sponsors?.filter(el => el?.full_name.toLowerCase().includes(value.toLowerCase()))
      this.sponsors = filtered
    },
    onFilter(value) {
      if (value.clear !== true) {
        this.dataCount = 0
        let filtered = []
        if (value.holat === 0) {
          filtered = this.sponsors?.filter(el => el?.sum <= value.summa)
        } else {
          filtered = this.sponsors?.filter(el => el.get_status_display === value.holat && el.sum < value.summa)
        }
        this.sponsors = filtered
      } else this.handleFetch(1, 10)
    }
  }
}
</script>