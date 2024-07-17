

<template>
<div>
<ul>
<li v-for="item in lists" :key="item.title">
   <router-link :to="item.href">
     {{item.title}}
   </router-link> 
</li>
</ul>

</div>
</template>

<script setup lang="ts">
import { ref,  onMounted ,watchEffect,onUnmounted} from 'vue'
const title=ref<string>('列表');

const lists =ref<any[]>([
    {title:'列表',href:'/index'},
    {title:'購物車',href:'/shop_cart'},
])
</script>

