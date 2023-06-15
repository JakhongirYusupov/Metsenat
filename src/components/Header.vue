<template>
  <header class="header py-5 bg-white">
    <div class="container flex justify-between">
      <router-link to="/">
        <img class="w-44 h-6 object-cover" src="@/assets/images/logo.png" alt="" />

      </router-link>
      <div class="flex items-center gap-11">
        <div class="header-profile flex items-center bg-gray-200 py-1 pl-5 rounded-md cursor-pointer">
          <p class="mr-6">Shohrux</p>
          <div class="w-8 h-8 bg-green-700 flex items-center justify-center rounded mr-1">
            <i class="fa-solid fa-user-large fa-lg" style="color: #ffffff"></i>
          </div>
        </div>
        <i class="fa-solid fa-arrow-right-from-bracket fa-lg cursor-pointer" @click="logOut" style="color: #b1b1b8"></i>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  methods: {
    logOut() {
      localStorage.removeItem('token')
      this.$router.push('/login')
    }
  }
}
</script>

<style>
.header {
  box-shadow: 0px 25px 40px rgba(0, 0, 0, 0.03);
}
</style>
