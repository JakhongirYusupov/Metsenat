<template>
  <main class="flex items-center justify-center h-screen px-5">
    <div class="max-w-sm w-full grid gap-12">
      <img src="@/assets/images/login-logo.png" alt="">
      <form class="p-8 bg-white rounded-xl flex flex-col" @submit.prevent @submit="handleSubmit">
        <h1 class="font-bold text-2xl mb-11">Kirish</h1>
        <label class="flex flex-col mb-6">
          <span class="font-xs font-medium mb-2">LOGIN</span>
          <input type="text" :value="form.login" placeholder="Kiriting" @input="event => {
            form.login = event.target.value
          }">
        </label>
        <label class="flex flex-col mb-6">
          <span class="font-xs font-medium mb-2">PAROL</span>
          <input type="text" :value="form.password" placeholder="password">
        </label>
        <div class="flex px-3 bg-gray-100 border  py-2.5 justify-between items-center rounded mb-6 border-gray-300">
          <div class="flex items-center gap-3">
            <input class="w-7 h-7 cursor-pointer" type="checkbox" @input="e => form.checkbox = !form.checkbox">
            <span class="font-medium text-sm">I’m not a robot</span>
          </div>
          <div class="flex flex-col items-center">
            <img class="w-8 h-8 object-fit" :class="{ 'robot-img': form.checkbox }" src="@/assets/images/notrobot.png"
              alt="error">
            <span class="font-light text-xs">reCAPTCHA</span>
            <span class="font-light text-xs">Privacy-Terms</span>
          </div>
        </div>
        <button :disabled="!form.checkbox"
          class="py-3 bg bg-blue-600 rounded-md font-medium text-sm text-white cursor-pointer"
          :class="{ 'login-button-disabled': !form.checkbox }" type="submit">Kirish</button>
      </form>
    </div>

  </main>
</template>

<script>
export default {
  data() {
    return {
      form: {
        login: "",
        password: "",
        checkbox: false
      }
    }
  },
  methods: {
    handleSubmit(e) {
      console.log(e);
    }
  }
}
</script>

<style>
.robot-img {
  transition: 1s;
  rotate: 360deg;
}

.login-button-disabled {
  opacity: 0.4;
}
</style>