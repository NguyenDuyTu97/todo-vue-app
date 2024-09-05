<template lang="">
  <div>Login page</div>

  <form @submit.prevent="onLogin">
    <label for="first"> Username: </label>
    <input
      type="text"
      id="first"
      name="first"
      placeholder="Enter your Username"
      required
      v-model="username"
    />

    <label for="password"> Password: </label>
    <input
      type="password"
      id="password"
      name="password"
      placeholder="Enter your Password"
      required
      v-model="password"
    />

    <div class="wrap">
      <button type="submit">Submit</button>
    </div>
  </form>

  <button type="button" @click="onClickMe">Click me</button>

  <p>Count(store): {{ this.$store.state.count }}</p>

  <GoogleLogin :callback="callback" />
</template>
<script setup>
import { API_LOCAL_URL } from '@/constants/constants'
import { ref } from 'vue'
import { decodeCredential } from 'vue3-google-login'

const username = ref('nguyenvana@gmail.com')
const password = ref('123456a@1')

const onLogin = async () => {
  const url = API_LOCAL_URL + '/login'
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      withCredentials: true,
      credentials: 'include',
      body: JSON.stringify({ username: username.value, password: password.value })
    })
    // if (!response.ok) {
    //   throw new Error(`Response status: ${response.status}`)
    // }

    // const res = await response.json()
    // if (res) {
    //   users.value = res
    // }
  } catch (error) {
    console.error(error.message, 'error message')
  }
}

const onClickMe = async () => {
  try {
    const res = await fetch(`${API_LOCAL_URL}/test`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      withCredentials: true,
      credentials: 'include'
    })

    console.log(res, 'res 123')
  } catch (error) {
    console.log(error, 'error 123')
  }
}

const callback = (response) => {
  // This callback will be triggered when the user selects or login to
  // his Google account from the popup
  const userData = decodeCredential(response.credential)
  console.log('Handle the userData', userData)
}
</script>
<style lang=""></style>
