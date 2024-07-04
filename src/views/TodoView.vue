<template lang="">
  <div>
    <!-- TODO APP -->
    <h2>Todo app ({{ moment(date).format('YYYY-MM-DD hh:mm:ss') }})</h2>
    <div>
      <input v-model="teachName" @keyup.enter="onAddTodo" />
      <button @click="onAddTodo">Add</button>
    </div>
    <li v-for="(i, index) in list">
      <TodoItem
        :idx="index"
        :title="i"
        :onRemoveTodo="onRemoveTodo"
        @remove-todo.once="onRemoveTodo"
      />
    </li>

    <!-- USERS -->
    <div>-------------------------------------------</div>
    <h3>USERS</h3>
    <template v-for="(user, index) in users">
      <p v-if="user.isActive === isActiveUser">{{ user.name }} - {{ user.isActive }}</p>
    </template>

    <button @click="onToggleActiveUser">Toggle active user</button>

    <!-- FORM -->
    <div>-------------------------------------------</div>
    <h3>FORM</h3>
    <form @submit.prevent="handleSubmit">
      <label>
        First Name:
        <input type="text" v-model="formData.firstName" />
      </label>
      <br />

      <label>
        Last Name:
        <input type="text" v-model="formData.lastName" />
      </label>
      <br />

      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script setup>
import {
  ref,
  reactive,
  computed,
  onMounted,
  onUpdated,
  onUnmounted,
  onBeforeMount,
  onBeforeUnmount,
  watch
} from 'vue'
import TodoItem from '../components/todo/TodoItem.vue'
import moment from 'moment'

// state
const teachName = ref('')
const isActiveUser = ref(false)
const date = ref(new Date())

const list = reactive(['ReactJS', 'VueJS', 'Angular'])
const users = reactive([
  { id: 1, name: 'NDT', isActive: true },
  { id: 2, name: 'NTD', isActive: false },
  { id: 3, name: 'NAD', isActive: false },
  { id: 4, name: 'HVB', isActive: true }
])
const formData = reactive({ firstName: '', lastName: '' })

let timerId = null

// watchers
watch(teachName, (newString, oldString) => {
  console.log(newString, 'new string 0')
  if (newString?.includes('?')) {
    isActiveUser.value = !isActiveUser.value
  }
})

onBeforeMount(() => {
  console.log('status onBeforeMount')
})

// lifecycle
onMounted(() => {
  console.log(`the component is now mounted.`)
  // timerId = setInterval(() => {
  //   date.value = new Date()
  // }, 1000)
})

onUpdated(() => {
  // when state is changed
  console.log(`the component is updated`)
})

onBeforeUnmount(() => {
  console.log('status onBeforeUnmount')
})

onUnmounted(() => {
  console.log(`unmounted component.`)

  // clearInterval(timerId)
})

// function
function onAddTodo() {
  if (!teachName.value) return

  list.push(teachName.value)
  teachName.value = ''
}

function onRemoveTodo(idx) {
  if (idx === undefined || idx === null) return

  list.splice(idx, 1)
}

function onToggleActiveUser() {
  isActiveUser.value = !isActiveUser.value
}

function handleSubmit() {
  console.log(formData, 'formData 111')
  console.log(formData.firstName, ':formData firstName 111')
  console.log(formData.lastName, ':formData lastName 111')
}
</script>

<style scoped>
h2 {
  font-size: 30px;
  font-weight: bold;
}
</style>
