

<template>
    <div class="flex justify-start md:justify-between">
        <div class="col-start-2 col-span-4">
            <a>Lara</a>

        </div>
        <div class="col-start-2 col-span-4">
            <ul>
                <li v-for="item in lists" :key="item.title">
                    <router-link :to="item.href">
                        {{ item.title }}
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
    <router-view></router-view>
</template>

<script setup lang="ts">
import { ref,  onMounted ,watchEffect,onUnmounted} from 'vue'
const title=ref<string>('列表');

const lists =ref<any[]>([
    {title:'列表',href:'/index'},
    {title:'購物車',href:'/shop_cart'},
])
</script>

