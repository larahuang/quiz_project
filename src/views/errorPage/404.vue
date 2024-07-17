<template>
    <div>
       {{title}} 
    </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'
const title=ref<string>('404')
</script>