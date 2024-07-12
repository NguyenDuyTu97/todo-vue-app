<template lang="">
  <div>
    <CreateUser @onCreateUser="handleCreateUser" />

    <div>---------------------------------------------------</div>

    <template v-for="(item, index) in users" :key="item.id">
      <UserItem :i="item" :onDelete="handleDeleteUser" @on-delete-user="handleDeleteUser" />
    </template>
  </div>
  <div>
    <button @click="onChangeData">Change data</button>
    <button @click="onResetData">Reset data</button>
  </div>
  <!-- <div>{{ publishedBooksMessage }}</div>
  <div>{{ getMessage() }}</div>
  <div>Count: {{ count }}</div>
  <button @click="onChangeAuthorData">Change author data</button> -->
</template>

<script setup>
import { computed, onMounted, reactive, ref } from 'vue'
import UserItem from '../components/users/UserItem.vue'
import CreateUser from '../components/users/CreateUser.vue'
import { API_URL } from '../constants/constants'

let users = ref([])

const count = ref(10)
const author = reactive({
  name: 'John Doe',
  books: ['Vue 2 - Advanced Guide', 'Vue 3 - Basic Guide', 'Vue 4 - The Mystery']
})

// a computed ref
const publishedBooksMessage = computed(() => {
  console.log('publishedBooksMessage computed')

  // let a = count.value > 3

  return author.books.length > 0 ? 'Yes' : 'No'
})

const getMessage = () => {
  console.log('getMessage normal function')

  return author.books.length > 0 ? '1' : '0'
}

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
  console.log('onChangeData 001')

  // users.value = [
  //   { id: 1, name: 'NDT', isActive: true },
  //   { id: 2, name: 'NTD', isActive: false },
  //   { id: 3, name: 'NAD', isActive: false },
  //   { id: 4, name: 'HVB', isActive: true }
  // ]

  // users.value.push({ id: 1, name: 'NDT', isActive: true })

  users.value = users.value.filter((item) => +item.id > 10)
}

const onResetData = () => {
  getUsers()
}

const onChangeAuthorData = () => {
  // author.books = []
  count.value = -1
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

const handleCreateUser = async (data) => {
  const { username, gender } = data
  console.log(data, 'data 0000')

  const url = API_URL + `/users`
  try {
    const model = {
      name: username,
      avatar: '',
      createdAt: Date.now(),
      gender
    }

    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(model)
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
