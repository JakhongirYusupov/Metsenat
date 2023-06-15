<script>
import Header from '../components/Header.vue'
import Filter from "../components/Filter.vue"
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
      search: "",
      searchStudent: null,
      searchSponsor: null,
      filterStudent: null,
      filterSponsor: null
    }
  },
  methods: {
    setActiveComponent(id) {
      this.activeComponent = id
    },
    onSearch(e) {
      this.search = e
      if (this.activeComponent === 3) this.searchStudent(e)
      else if (this.activeComponent === 2) this.searchSponsor(e)
    },
    onFilter(e) {
      if (this.activeComponent === 3) this.filterStudent(e)
      else if (this.activeComponent === 2) this.filterSponsor(e)
    },
    studentSearch(func) {
      this.searchStudent = func
    },
    sponsorSearch(func) {
      this.searchSponsor = func
    },
    studentFilter(func) {
      this.filterStudent = func
    },
    sponsorFilter(func) {
      this.filterSponsor = func
    }
  },
  updated() {

  },
  mounted() {
    console.log(import.meta.url)
    const token = localStorage.getItem('token')
    if (!token) this.$router.push("/login")
  }
}
</script>

<template>
  <Header />
  <main class="pb-24">
    <Filter :activeComponent="activeComponent" :setActiveComponent="setActiveComponent" @onSearch="onSearch"
      @onFilter="onFilter" />
    <PriceInfo :class="[{ 'scaleHidden': activeComponent !== 1 }, { 'scaleActive': activeComponent === 1 }]" />
    <SponsorsTable :class="[{ 'scaleHidden': activeComponent !== 2 }, { 'scaleActive': activeComponent === 2 }]"
      @onSearch="sponsorSearch" @onFilter="sponsorFilter" />
    <StudentTable :class="[{ 'scaleHidden': activeComponent !== 3 }, { 'scaleActive': activeComponent === 3 }]"
      @onSearch="studentSearch" @onFilter="studentFilter" />
  </main>
</template>
