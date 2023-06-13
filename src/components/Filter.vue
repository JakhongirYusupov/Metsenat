<template>
  <section class="py-6 bg-gray-50 mb-12">
    <div class="container flex justify-between">
      <div class="flex border-2 border-indigo-100 rounded-md h-11 overflow-hidden">
        <button class="w-48 py-3 text-xs font-medium text-indigo-400 uppercase border-r-2 border-indigo-100"
          :class="{ 'active-dashboard': activeComponent === 1 }"
          @click="$event => setActiveComponent(1)">Dashboard</button>
        <button class="w-48 py-3 text-xs font-medium text-indigo-400 uppercase  border-r-2 border-indigo-100"
          :class="{ 'active-dashboard': activeComponent === 2 }"
          @click="$event => setActiveComponent(2)">Homiylar</button>
        <button class="w-48 py-3 text-xs font-medium text-indigo-400 uppercase "
          :class="{ 'active-dashboard': activeComponent === 3 }"
          @click="$event => setActiveComponent(3)">Talabalar</button>
      </div>
      <div class="flex">
        <form class="flex items-center" @submit.prevent @submit="handleSubmit">
          <label for="search-input" class="flex items-center gap-2 h-11 w-72 py-3 px-2.5 rounded-md"
            style="background-color: #E8E8E8;">
            <i class="fa-solid fa-magnifying-glass fa-lg" style="color: #B1B1B8;"></i>
            <input class="p-0 border-0 bg-transparent" id="search-input" :value="value" type="text" placeholder="Izlash"
              maxlength="30" minlength="3" required @input="value = $event.target.value">
          </label>
          <button type="button" class="flex items-center gap-2.5 ml-5 bg-indigo-100 h-11 px-8 rounded-md"
            @click="activeFilter = true">
            <i class="fa-solid fa-filter" style="color: #2e7bff;"></i>
            <span class="text-sm font-medium text-blue-700">Filter</span>
          </button>
        </form>
      </div>
    </div>
    <FilterPopUp v-if="activeFilter" :setActiveFilter="setActiveFilter" />
  </section>
</template>

<script>
import FilterPopUp from './FilterPopUp.vue';

export default {
  props: {
    activeComponent: {
      type: Number,
      required: true
    },
    setActiveComponent: {
      type: Function,
      required: true
    },
    search: {
      type: Function,
      required: false
    }
  },
  components: {
    FilterPopUp
  },
  data() {
    return {
      value: "",
      activeFilter: false
    }
  },
  methods: {
    handleSubmit() {
      this.$emit('onSearch', this.value)
    },
    setActiveFilter() {
      this.activeFilter = false
    }
  }

}
</script>

<style>
.active-dashboard {
  color: white;
  border: none;
  background: linear-gradient(-45deg, #3366FF, #e73c7e);
  background-size: 400% 400%;
  animation: activeDashboard 10s ease infinite;
}

@keyframes activeDashboard {
  0% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }

  100% {
    background-position: 0% 50%;
  }
}
</style>