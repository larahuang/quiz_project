import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import axios from 'axios'
import { useRouter } from 'vue-router'
import { listsType } from '../type/cart.ts'
import router from '../router/router.ts';
export const useCartStore = defineStore('cart', () => {
      const router = useRouter()
    const lists = ref<listsType[]>([]);
    const getProducts = async () => {
        try {
            const api = 'https://script.google.com/macros/s/AKfycbyGmoZukCQze0nw3UF-VX9ELODVy5Rs6CIQ1U-YbwNHfG3JIjGz4JThKAvWJB1P0qTg/exec';
            await axios.get(api)
                .then((res) => {
                    lists.value = res.data;

                })

        } catch (error) {
            console.log(error)
        }
    }
    const cartLists = ref<listsType[]>([]);
    const addCart = (item: listsType) => {
        let query = {
            checkBox :false,
            name: item.name,
            imageUrl: item.imageUrl,
            price: item.price,
            qty: 1,
            sum: item.price * 1,
            
        }
        cartLists.value.push(query);
       
        console.log(cartLists.value)
        localStorage.setItem('cartLists', JSON.stringify(cartLists.value));

    }
   //  const isSeeCartLists = ref<boolean>(false);
    const openCartLists = () => { 
        router.push({ path: '/shop_cart'})
    }
     
    const addItem = (qty:number,index:number) => {
        cartLists.value[index].qty ++;cartLists.value[index].sum =cartLists.value[index].qty * cartLists.value[index].price

   }
  const minusItem = (qty:number,index:number) => {
      cartLists.value[index].qty--; cartLists.value[index].sum = cartLists.value[index].qty * cartLists.value[index].price
      if (cartLists.value[index].qty == 0) {
          cartLists.value.splice(index,1)
      }

  }
    const deleteItem = (qty: number, index: number) => {
         cartLists.value[index].qty--; cartLists.value[index].sum = cartLists.value[index].qty * cartLists.value[index].price
      if (cartLists.value[index].qty == 0) {
          cartLists.value.splice(index,1)
      }
    }
    const sumAll = computed(() => { 
        let lists = cartLists.value; 
        return lists.reduce((Sum,item)=>{
                return Sum += item.qty*item.price
            },0)
    })
    const deleteAll = () => {
        if (checkAll.value) {
            cartLists.value = []
        }
      
    }
     const checkObject=ref<any[]>([]);
    const checkAll = ref<boolean>(false)
    const isCheck= ref<boolean>(false)
    const checkAllCart = (val: boolean) =>{
console.log(val)
        if (checkAll.value) {
            checkObject.value = cartLists.value;
            cartLists.value.forEach((item) => {
               return item.checkBox = true;
            })
            checkObject.value = cartLists.value;
        } else {
            checkObject.value = [];
             isCheck.value = false;
        }
       
    }
    //選擇的checkbox函式
    
    const checkClick = (item: any) => {
        console.log(item)
        const checkedCount =  item.length;
        cartLists.value.length  == checkObject.value.length ?checkAll.value =true : checkAll.value =false;
        isCheck.value = checkedCount > 0 && checkedCount < cartLists.value.length;
    }
    return {
        lists, cartLists, getProducts, addCart,
        openCartLists,
        addItem, minusItem, sumAll, deleteItem,

        checkAllCart, checkClick,
        checkAll, isCheck,
        checkObject,
        deleteAll
    }
})

