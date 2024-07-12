<template lang="">
  <form>
    <label>Username: </label>
    <input v-model="formData.username" placeholder="Username" />

    <div>Gender: {{ formData.gender }}</div>

    <input type="radio" id="male" value="true" v-model="formData.gender" />
    <label for="male">Male</label>

    <input type="radio" id="female" value="false" v-model="formData.gender" />
    <label for="female">Female</label>

    <br />

    <button @click="onSubmitForm">Save</button>
  </form>
</template>

<script setup>
import { reactive } from 'vue'

const emit = defineEmits(['onCreateUser'])

const formData = reactive({
  username: '',
  gender: true
})

const onSubmitForm = (event) => {
  event.preventDefault()

  console.log(formData, 'formData 000')

  emit('onCreateUser', formData)
}
</script>
<style lang=""></style>
