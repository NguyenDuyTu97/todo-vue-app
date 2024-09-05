<template lang="">
  <div :style="{ width: '1028px', height: '700px' }">
    <div>{{ userInfo.name }} - {{ userInfo.age }}</div>
    <div>Test 100</div>

    <!-- <VPdfViewer
      src="https://raw.githubusercontent.com/mozilla/pdf.js/ba2edeae/web/compressed.tracemonkey-pldi-09.pdf"
    /> -->
  </div>
</template>
<script setup>
import { VPdfViewer } from '@vue-pdf-viewer/viewer'
import { computed, reactive } from 'vue'

const userInfo = reactive({
  name: 'NTD',
  age: 23
})

// const ageMessage = computed(() => {
//   console.log('ageMessage computed')

//   return userInfo.age > 0 ? 'Yes' : 'No'
// })
</script>
