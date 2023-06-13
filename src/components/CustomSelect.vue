<template>
  <div class="relative z-10" @mouseenter="hoverSelect(true)" @mouseleave="hoverSelect(false)">
    <div
      class="px-4 py-3 w-full rounded-md bg-indigo-50 border border-indigo-100 flex items-center justify-between cursor-pointer">
      <span>{{ selectValue }}</span>
      <i class="fa-solid fa-chevron-down" style="color: #B5B5C3;"></i>
    </div>
    <div
      class="rounded-md rounded-lg shadow-md bg-white overflow-hidden border border-indigo-100 absolute inset-x-0 top-12"
      :class="[{ 'scaleHidden': !activeSelectBar }, { 'scaleActive': activeSelectBar }]">
      <div v-for="(item, index) in data" :key="index" @click="$event => {
        selectChange(index)
        hoverSelect(false)
        selectValue = item
      }" class="px-4 py-3 w-full border border-indigo-100 flex items-center justify-between cursor-pointer">
        <span>{{ item }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    selectChange: {
      type: Function,
      required: true
    },
    data: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      activeSelectBar: false,
      selectValue: "Barchasi"
    }
  },
  methods: {
    hoverSelect(el) {
      this.activeSelectBar = el
    }
  }

}
</script>