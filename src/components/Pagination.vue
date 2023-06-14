<template>
  <div class="pt-12 flex justify-between items-center">
    <div>
      <p class="text-base font-normal">{{ countData }} tadan {{ data.activePage }}-{{ data.limit }} ko‘rsatilmoqda</p>
    </div>
    <div class="flex items-center">
      <div class="flex items-center gap-3">
        <span class="text-base font-normal">Ko‘rsatish</span>
        <select :value="data.limit" class="h-8 w-14 border rounded-md cursor-pointer outline-none" @change="handleChange">
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="30">30</option>
          <option value="40">40</option>
          <option value="50">50</option>
        </select>
      </div>
      <div class="flex gap-2 ml-5">
        <div class="h-8 w-8 flex items-center justify-center border bg-white rounded-md cursor-pointer"
          :class="{ 'cursor-auto opacity opacity-40': data.activePage === 1 }" @click="$event => {
            if (data.activePage > 1) return data.activePage--
            else return data.activePage
          }">
          <i class="fa-solid fa-chevron-left" style="color: #a7a8aa;"></i>
        </div>

        <div v-for="(item, index) in 't'.repeat((this.countData / this.data.limit) + 1).split('')"
          class="h-8 w-8 flex items-center justify-center border bg-white rounded-md cursor-pointer"
          :class="[{ 'border-blue-600 text-blue-600': data.activePage === index + 1 }, { 'hidden': data.activePage - 3 >= index + 1 && data.activePage !== index + 1 || data.activePage + 2 <= index + 1 && 't'.repeat((this.countData / this.data.limit) + 1).split('').length - 2 > index }, { 'activePage': index + 1 === 1 || index + 1 === 2 }]"
          @click="$event => data.activePage = index + 1">{{ index + 1 }}</div>

        <div class="h-8 w-8 flex items-center justify-center border bg-white rounded-md cursor-pointer"
          :class="{ 'cursor-auto opacity-40': data.activePage === 't'.repeat((this.countData / this.data.limit) + 1).split('').length }"
          @click="$event => {
            if (data.activePage < 't'.repeat((this.countData / this.data.limit) + 1).split('').length) return ++data.activePage
            else return data.activePage
          }">
          <i class="fa-solid fa-chevron-right" style="color: #a0a2a6"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    countData: {
      type: Number,
      required: true
    },
    handleFetch: {
      type: Function,
      required: true
    }
  },
  data() {
    return {
      data: {
        activePage: 1,
        limit: 10,
      }
    }
  },
  updated() {
    this.handleFetch(this.data.activePage, this.data.limit)
  },
  methods: {
    handleChange(event) {
      this.data.limit = +event.target.value
      this.data.activePage = 1
    }
  }
}

</script>

<style >
.activePage {
  display: flex !important;
}
</style>