<template lang="">
  <div>
    <template v-for="(image, index) in images">
      <img :src="image.path" with="50" height="50" />
    </template>
  </div>
</template>
<script setup>
import { API_LOCAL_URL } from '@/constants/constants'
import { onMounted, ref } from 'vue'

const images = ref(null)

onMounted(() => {
  getFirebaseImages()
})

const getFirebaseImages = async () => {
  const url = API_LOCAL_URL + '/images'
  try {
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`)
    }

    const res = await response.json()
    if (res) {
      images.value = res
    }
  } catch (error) {
    console.error(error.message, 'error message')
  }
}
</script>
