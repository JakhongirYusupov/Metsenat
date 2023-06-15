<template>
  <div class="h-full min-h-screen detail-background">
    <Header />
    <BackNavBar :name="data?.full_name ? data?.full_name : ''" :holat="null" />
    <StudentCard :data="data" :setActiveEdit="setActiveEdit" />
    <ListSponsorOfStudent />
    <StudentEditPopUp v-if="activeEdit" :setActiveEdit="setActiveEdit" :data="data" :setData="setData" />
  </div>
</template>

<script>
import Header from "@/components/Header.vue"
import BackNavBar from "@/components/BackNavBar.vue"
import StudentCard from "../components/StudentCard.vue";
import axios from "axios";
import { GET_STUDENT_INFO } from "../utils/api";
import ListSponsorOfStudent from "../components/ListSponsorOfStudent.vue";
import StudentEditPopUp from "@/components/StudentEditPopUp.vue"

export default {
  components: {
    ListSponsorOfStudent,
    StudentEditPopUp,
    StudentCard,
    BackNavBar,
    Header
  },
  mounted() {
    axios.get(GET_STUDENT_INFO + this.$route.params?.id)
      .then((res) => {
        this.data = res?.data
      })
      .catch(err => this.error = err.message)
  },
  data() {
    return {
      data: {},
      loading: true,
      error: null,
      activeEdit: false
    }
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