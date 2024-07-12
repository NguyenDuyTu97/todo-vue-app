<template lang="">
  <div class="user-item">
    <span>{{ i.id }}. {{ i.name }}</span> |
    <!-- <button @click="onDelete(i.id)" :style="{ cursor: 'pointer' }">x</button> | -->
    <Button label="x" severity="danger" size="small" @click="$emit('onDeleteUser', i.id)" />
  </div>
</template>

<!-- script -->
<script setup>
import Button from 'primevue/button'

defineProps({
  i: Object,
  onDelete: Function
})
</script>

<!-- style -->
<style scoped>
.user-item {
  margin: 2px;
}
</style>
