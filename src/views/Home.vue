

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
            <button @click.prevent="addCart(item)" class="bg-red rounded-lg py-2 hover:blur-sm focus:blur-sm">
                {{ item.price }} {{ item.status }}
                <i class="fa-solid fa-cart-shopping"></i>
            </button>
        </div>

    </div>

</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import axios from 'axios'
import { listsType } from '../type/cart'
// import db from './db.json'
const title = ref<string>('列表')

const lists = ref<listsType[]>([]);
const addCartLists = ref<any[]>([]);
const getProducts = async () => {
    try {
        const api = 'https://script.google.com/macros/s/AKfycbyGmoZukCQze0nw3UF-VX9ELODVy5Rs6CIQ1U-YbwNHfG3JIjGz4JThKAvWJB1P0qTg/exec';
        await axios.get(api)
            .then((res) => {
                lists.value = res.data;
                console.log(res)
            })

    } catch (error) {
        console.log(error)
    }
}
const cartlists = ref<listsType[]>([]);
const addCart = (item:any) => {
    cartlists.value.push(item);

}
onMounted(() => {
    getProducts();
})
</script>


