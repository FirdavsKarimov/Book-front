<script setup>

import {computed} from "vue";
import {reactive} from "vue";
import {useFetchCategories} from "@/stores/category/getCategories.js";

useFetchCategories().categoriesGet()
const categories = computed(()=> useFetchCategories().state.categories)
</script>

<template>
    <div class="col-12 col-md-4 col-xl-3 mb-3">
       <div class="list-group">
           <a v-for="category in categories" :key="category.id" class="list-group-item list-group-item-action">
               {{category.name}}
           </a>
       </div>
    </div>

</template>

<style scoped>

</style>