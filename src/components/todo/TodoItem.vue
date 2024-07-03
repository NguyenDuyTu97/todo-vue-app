<script setup>
defineProps({
  idx: Number,
  title: String,
  onRemoveTodo: Function
})
</script>

<template>
  <span key="idx">
    {{ title }}
    <button @click="onRemoveTodo(idx)">x</button>
    <!-- <button @click.stop="$emit('remove-todo', idx)">Click Me</button> -->
  </span>
</template>
