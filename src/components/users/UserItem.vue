<template lang="">
  <div>
    <span>{{ i.id }}. {{ i.name }}</span> |
    <button @click="onDelete(i.id)" :style="{ cursor: 'pointer' }">x</button> |
    <button @click="$emit('onDeleteUser', i.id)">x1</button>
  </div>
</template>
<script setup>
defineProps({
  i: Object,
  onDelete: Function
})
</script>
<style lang=""></style>
