

<template>
    <div class="flex justify-start md:justify-between menu">
        <div class="col-start-2 col-span-4">
            <a>Lara</a>

        </div>
        <div class="col-start-2 col-span-4">
            <ul class="nav">
                <li v-for="(item,index) in navLists" :key="item.title" :class="menuActive == index ? 'isActive' : ''"
                    @click="menuClickActive(index)">
                    <router-link :to="item.href">
                        {{ item.title }}
                    </router-link>
                </li>
                <li>
                    <i @click.prevent="openCartLists" class="fa-solid fa-cart-shopping"></i>
                    <span>{{ cartLists.length }}</span>

                </li>
            </ul>

        </div>
    </div>


    <router-view></router-view>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { ref, onMounted } from 'vue'
import { useCartStore } from '../stores/cart';
import { navListType } from '../type/cart';
const storeCart = useCartStore();
const { lists, cartLists } = storeToRefs(storeCart);
const { getProducts, addCart, openCartLists } = storeCart;
const title=ref<string>('列表');


const navLists = ref<navListType[]>([
    {title:'列表',href:'/index'},
    {title:'購物車',href:'/shop_cart'},
])
const menuActive = ref<number | any>(0)
const menuClickActive = (index: number | any) => {
    menuActive.value = index;
}
</script>

