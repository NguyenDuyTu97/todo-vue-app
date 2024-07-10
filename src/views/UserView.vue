<template lang="">
  <div>
    <template v-for="(item, index) in users" :key="item.id">
      <UserItem :i="item" :onDelete="handleDeleteUser" @on-delete-user="handleDeleteUser" />
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
import { API_URL } from '../constants/constants'

let users = ref([])

onMounted(() => {
  getUsers()
})

const getUsers = async () => {
  const url = API_URL + '/users'
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

const handleDeleteUser = async (id) => {
  const url = API_URL + `/users/${id}`
  try {
    const response = await fetch(url, {
      method: 'DELETE'
    })

    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`)
    }

    const res = await response.json()
    if (res?.id) {
      getUsers()
    }
  } catch (error) {
    console.error(error.message, 'error message')
  }
}
</script>
