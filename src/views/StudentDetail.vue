<template>
  <div class="h-full min-h-screen detail-background">
    <Header />
    <BackNavBar :name="data?.full_name ? data?.full_name : ''" :holat="null" />
    <StudentCard :data="data" :setActiveEdit="setActiveEdit" />
    <ListSponsorOfStudent />
    <StudentEditPopUp v-if="activeEdit" :setActiveEdit="setActiveEdit" :data="data" :setData="setData" />
    <Spinner v-if="loading" />
  </div>
</template>

<script>
import Header from "../components/Header.vue"
import BackNavBar from "../components/BackNavbar.vue"
import StudentCard from "../components/StudentCard.vue";
import axios from "axios";
import { GET_STUDENT_INFO } from "../utils/api";
import ListSponsorOfStudent from "../components/ListSponsorOfStudent.vue";
import StudentEditPopUp from "../components/StudentEditPopUp.vue"
import Spinner from "../components/Spinner.vue";

export default {
  components: {
    ListSponsorOfStudent,
    StudentEditPopUp,
    StudentCard,
    BackNavBar,
    Spinner,
    Header
  },
  data() {
    return {
      data: {},
      loading: true,
      error: null,
      activeEdit: false
    }
  },
  mounted() {
    axios.get(GET_STUDENT_INFO + this.$route.params?.id)
      .then((res) => {
        this.loading = false
        this.data = res?.data
      })
      .catch(err => {
        this.loading = false
        this.error = err.message
      })
  },
  methods: {
    setActiveEdit(value) {
      this.activeEdit = value
    },
    setData(newData) {
      this.data = newData
    }
  }
}
</script>