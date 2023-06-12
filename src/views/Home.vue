<script>
import Header from '@/components/Header.vue'
import Filter from "@/components/Filter.vue"
import PriceInfo from '../components/PriceInfo.vue';
export default {
  components: {
    Header,
    Filter,
    PriceInfo
  }
}
</script>

<template>
  <Header />
  <main>
    <Filter />
    <PriceInfo />
  </main>
</template>
