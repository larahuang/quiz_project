

<template>
    <div class="flex justify-center flex-col ">
        <div class="flex justify-center my-5"><b>{{ title }}</b></div>

        <table class=" table-auto">
            <tbody>
                <tr><input type="checkbox" v-model="checkAll" name="all" :value="all" :isCheck="isCheck"
                        @change="checkAllCart">
                    <label :for="all">全選</label><br>
                </tr>
                <tr v-for="(item,index) in cartLists" :key="item">
                    <td>

                        <input type="checkbox" :name="item.name" :value="index" v-model="item.checkBox"
                            @change="checkClick(item)">
                        <label :for="index"></label><br>
                    </td>
                    <td><img class="h-10 w-18 border-2" :src="item.imageUrl" /></td>
                    <td>{{ item.name }}</td>
                    <td>{{ item.price }}元</td>
                    <td>
                        <i @click="minusItem(item.qty,index)" class="fa-solid fa-circle-minus ml-2"></i>
                        {{ item.qty }}
                        <i @click="addItem(item.qty, index)" class="fa-solid fa-circle-plus"></i>
                    </td>
                    <td>
                        {{ item.sum }}
                    </td>
                    <td>
                        <i @click="minusItem(item.qty, index)" class="fa-solid fa-trash"></i>
                    </td>
                </tr>

            </tbody>

        </table>
        <div class="all">
            <div class="flex justify-center ">
                <div> <i @click="deleteAll" class="fa-solid fa-trash"></i></div>
                <div> 共{{ cartLists.length }}筆，</div>
                <div>總計:{{ sumAll }}元</div>
            </div>
        </div>
    </div>

</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { ref, onMounted } from 'vue'
import { useCartStore } from '../stores/cart';
const storeCart = useCartStore();
const { cartLists, sumAll, checkAll, isCheck,
    checkObject } = storeToRefs(storeCart);
const { getProducts, addCart, addItem, minusItem, checkAllCart, checkClick, deleteAll } = storeCart;
const title=ref<string>('購物車總價')
</script>


