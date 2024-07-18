

<template>

    <div class="grid gap-x-8 gap-y-4 grid-cols-5">

        <div class="bg-current flex flex-col border border-indigo-600 shadow-md " v-for="(item ) in lists" :key="item">
            <img :src="item.imageUrl" />

            <button class="bg-sky-500" v-if="item.displayCategory=='音樂'">
                {{ item.displayCategory }}
            </button>
            <button class="bg-pink" v-else-if="item.displayCategory == '戲劇'">
                {{ item.displayCategory }}
            </button>
            <button class="bg-other" v-else>
                {{ item.displayCategory }}
            </button>
            <div class="subject">{{ item.name }}
              
            </div>
            <button @click.prevent="addCart(item)" class="bg-red rounded-lg py-2 hover:shadow-lg focus:shadow-lg "
                :class="{ disabled: item.status === '尚未開始' || item.status === '已結束' }">
                {{ item.price }} {{ item.status }}
                <i class="fa-solid fa-cart-shopping"></i>
            </button>
        </div>

    </div>

</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { ref, onMounted } from 'vue'
import moment from 'moment'
import { useCartStore } from '../stores/cart';
const storeCart = useCartStore();
const { lists, cartLists } = storeToRefs(storeCart);
const { getProducts, addCart } = storeCart;
// import db from './db.json'
const title = ref<string>('列表')



onMounted(() => {
    getProducts();
})
</script>


