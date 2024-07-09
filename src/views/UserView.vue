<template lang="">
  <div>
    <template v-for="(item, index) in users" :key="item.id">
      <UserItem :i="item" />
    </template>
  </div>
  <div>
    <button @click="onChangeData">Change data</button>
    <button @click="onResetData">Reset data</button>
  </div>
</template>
<script setup>
import { onMounted, reactive, ref } from 'vue'
import UserItem from '../components/users/UserItem.vue'

let users = ref([])

onMounted(() => {
  getUsers()
})

const getUsers = async () => {
  const url = 'https://jsonplaceholder.typicode.com/users'
  try {
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`)
    }

    const res = await response.json()
    if (res) {
      users.value = res
    }
  } catch (error) {
    console.error(error.message, 'error message')
  }
}

const onChangeData = () => {
  console.log('onChangeData click')
  users.value = [
    { id: 1, name: 'NDT', isActive: true },
    { id: 2, name: 'NTD', isActive: false },
    { id: 3, name: 'NAD', isActive: false },
    { id: 4, name: 'HVB', isActive: true }
  ]
}

const onResetData = () => {
  getUsers()
}
</script>
