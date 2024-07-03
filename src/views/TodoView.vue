<template lang="">
  <div>
    <h2>Todo app</h2>
    <div>
      <input v-model="teachName" />
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
  </div>
</template>

<script setup>
import { ref, reactive, computed } from 'vue'
import TodoItem from '../components/todo/TodoItem.vue'

// state
const teachName = ref('')
const list = ref(['ReactJS', 'VueJS', 'Angular'])

// function
function onAddTodo() {
  if (!teachName.value) return

  list.value.push(teachName.value)
  teachName.value = ''
}

function onRemoveTodo(idx) {
  if (!idx) return

  list.value.splice(idx, 1)
}
</script>
