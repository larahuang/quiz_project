

<template>
 
  <div class="md:container md:mx-auto">
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
import { ref,onMounted ,watchEffect,onUnmounted} from 'vue'
const title=ref<string>('列表')
</script>


