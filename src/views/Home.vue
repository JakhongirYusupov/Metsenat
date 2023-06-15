<script>
import Header from '@/components/Header.vue'
import Filter from "@/components/Filter.vue"
import PriceInfo from '../components/PriceInfo.vue';
import SponsorsTable from '../components/SponsorsTable.vue';
import StudentTable from '../components/StudentTable.vue';
export default {
  components: {
    Header,
    Filter,
    PriceInfo,
    StudentTable,
    SponsorsTable
  },
  data() {
    return {
      activeComponent: 1,
      search: ""
    }
  },
  methods: {
    setActiveComponent(id) {
      this.activeComponent = id
    },
    onSearch(e) {
      this.search = e
    }
  },
  mounted() {
    const token = localStorage.getItem('token')
    if (!token) this.$router.push("/login")
  }
}
</script>

<template>
  <Header />
  <main class="pb-24">
    <Filter :activeComponent="activeComponent" :setActiveComponent="setActiveComponent" @onSearch="onSearch" />
    <PriceInfo :class="[{ 'scaleHidden': activeComponent !== 1 }, { 'scaleActive': activeComponent === 1 }]" />
    <SponsorsTable :class="[{ 'scaleHidden': activeComponent !== 2 }, { 'scaleActive': activeComponent === 2 }]"
      :searchData="activeComponent === 2 ? search : ''" />
    <StudentTable :class="[{ 'scaleHidden': activeComponent !== 3 }, { 'scaleActive': activeComponent === 3 }]"
      :searchData="activeComponent === 3 ? search : ''" />
  </main>
</template>
