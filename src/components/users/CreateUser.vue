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
import { reactive, watch } from 'vue'
const props = defineProps(['userEdit'])

console.log(props, 'props 0000')

const emit = defineEmits(['onCreateUser'])

const formData = reactive({
  username: '',
  gender: true
})

// Watch for changes in the prop value and update the ref
watch(
  () => props.userEdit,
  (newValue) => {
    console.log(newValue, 'newValue 000')
    formData = newValue
  }
)

const onSubmitForm = (event) => {
  event.preventDefault()

  console.log(props.userEdit, 'userEdit 111111')

  // emit('onCreateUser', formData)
}
</script>
<style lang=""></style>
