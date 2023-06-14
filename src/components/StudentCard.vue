<template>
  <div class="container flex justify-center pt-10">
    <div class="w-full max-w-4xl bg-white rounded-md p-8 shadow-md">
      <div class="flex items-center justify-between">
        <h2 class="text-2xl font-bold">Talaba haqida</h2>
        <button class="flex items-center gap-2.5 rounded-md bg-indigo-100 py-2.5 px-8" @click="activeEdit = true">
          <i class="fa-solid fa-pen-to-square" style="color: #3365FC;"></i>
          <span class="text-sm font-medium text-blue-600">Tahrirlash</span>
        </button>
      </div>
      <div class="flex items-center py-6">
        <div class="flex items-center bg-indigo-100 py-0.5 px-3" @click="activeEdit = true">
          <span class="text-sm font-medium text-blue-600 whitespace-nowrap">Asosiy ma’lumotlar</span>
        </div>
        <div class="border w-full"></div>
      </div>
      <div class="flex gap-5 items-center">
        <div class="rounded md w-16 h-16 bg-gray-200 flex items-center justify-center">
          <i class="fa-solid fa-user-tie fa-2xl" style="color: #2E5BFF;"></i>
        </div>
        <div>
          <p class="text-base font-medium">{{ data?.full_name?.split(" ")[0] }}</p>
          <p class="text-base font-medium">{{ data?.full_name?.split(" ").slice(1).join(' ') }}</p>
        </div>
      </div>
      <div class="grid grid-cols-2 pt-6 gap-6">
        <div v-if="data?.phone" class="grid gap-3">
          <span class="text-xs font-medium text-gray-400 uppercase">telefon raqam</span>
          <p class="text-base font-semibold whitespace-nowrap">{{ data?.phone }}</p>
        </div>
      </div>
      <div class="flex items-center py-6">
        <div class="flex items-center bg-indigo-100 py-0.5 px-3" @click="activeEdit = true">
          <span class="text-sm font-medium text-blue-600 whitespace-nowrap">O‘qish joyi haqida ma’lumot</span>
        </div>
        <div class="border w-full"></div>
      </div>
      <div class="grid grid-cols-2 pt-6 gap-6">
        <div v-if="data?.institute?.name" class="grid gap-3">
          <span class="text-xs font-medium text-gray-400 uppercase">otm</span>
          <p class="text-base font-semibold whitespace-nowrap">{{ data?.institute?.name }}</p>
        </div>
        <div v-if="data?.type" class="grid gap-3">
          <span class="text-xs font-medium text-gray-400 uppercase">Talabalik turi</span>
          <p class="text-base font-semibold whitespace-nowrap">{{ studentType[data?.type] }}</p>
        </div>
        <div v-if="data?.given" class="grid gap-3">
          <span class="text-xs font-medium text-gray-400 uppercase">Ajratilingan summa</span>
          <p class="text-base font-semibold whitespace-nowrap">{{ data?.given }} <span>UZS</span></p>
        </div>
        <div v-if="data?.contract" class="grid gap-3">
          <span class="text-xs font-medium text-gray-400 uppercase">Kontrakt miqdori</span>
          <p class="text-base font-semibold whitespace-nowrap">{{ data?.contract }} <span>UZS</span></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      studentType: ['Bakalavr', 'Magistr']
    }
  },
  props: {
    data: {
      type: Object,
      required: true
    }
  }
}
</script>