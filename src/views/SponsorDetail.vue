<template>
  <div class="h-screen detail-background">
    <Header />
    <BackNavbar :name="'Jakhongir Yusupov'" :holat="'Tasdiqlangan'" />
    <SponsorCard :data="data" />
  </div>
</template>

<script>
import Header from "@/components/Header.vue"
import BackNavbar from "@/components/BackNavbar.vue"
import SponsorCard from "@/components/SponsorCard.vue"
import { GET_SPONSOR_INFO } from "@/utils/api.js"
import axios from "axios"
export default {
  components: {
    Header,
    BackNavbar,
    SponsorCard
  },
  mounted() {
    this.loading = true
    axios.get(GET_SPONSOR_INFO + this.$route.params?.id)
      .then(res => {
        console.log(res.data);
        this.loading = false
        this.data = res?.data
      }).catch(err => this.error = err?.message)
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