<template>
  <div class="h-full min-h-screen detail-background">
    <Header />
    <BackNavBar :name="data?.full_name ? data?.full_name : ''" :holat="null" />
    <StudentCard :data="data" />
    <ListSponsorOfStudent />
  </div>
</template>

<script>
import Header from "@/components/Header.vue"
import BackNavBar from "@/components/BackNavBar.vue"
import StudentCard from "../components/StudentCard.vue";
import axios from "axios";
import { GET_STUDENT_INFO } from "../utils/api";
import ListSponsorOfStudent from "../components/ListSponsorOfStudent.vue";
export default {
  components: {
    ListSponsorOfStudent,
    StudentCard,
    BackNavBar,
    Header
  },
  mounted() {
    axios.get(GET_STUDENT_INFO + this.$route.params?.id)
      .then((res) => {
        console.log(res.data);
        this.data = res?.data
      })
      .catch(err => this.error = err.message)
  },
  data() {
    return {
      data: {},
      loading: true,
      error: null
    }
  }
}
</script>