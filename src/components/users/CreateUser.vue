<template lang="">
  <form>
    <label>Username: </label>
    <input v-model="formData.name" placeholder="Username" />

    <div>Gender: {{ formData.gender }}</div>

    <input type="radio" id="male" value="true" v-model="formData.gender" />
    <label for="male">Male</label>

    <input type="radio" id="female" value="false" v-model="formData.gender" />
    <label for="female">Female</label>

    <br />

    <div>Value form: {{ formData }}</div>

    <button @click="onSubmitForm">Save</button>
  </form>
</template>

<script setup>
import { reactive, watch } from 'vue'
const props = defineProps(['userEdit'])
const emit = defineEmits(['onCreateUser'])

const formData = reactive({
  name: '',
  gender: true
})

// Watch for changes in the prop value and update the ref
watch(
  () => props.userEdit,
  (newValue) => {
    Object.assign(formData, newValue)
  }
)

const onSubmitForm = (event) => {
  event.preventDefault()

  emit('onCreateUser', formData)
}
</script>
<style lang=""></style>
