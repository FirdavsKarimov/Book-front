<script setup>

import BooksRow from "@/components/BooksRow.vue";
import HeaderRow from "@/components/HeaderRow.vue";
import CategoriesCol from "@/components/CategoriesCol.vue";
import PaginationRow from "@/components/PaginationRow.vue";
import FooterRow from "@/components/FooterRow.vue";
</script>

<template>
    <div class="container-fluid">
        <HeaderRow />
        <div class="row mt-3">
            <CategoriesCol />
            <div class="col-12 col-md-8 col-xl-9">
                <BooksRow />
                <PaginationRow />
            </div>
        </div>
        <FooterRow />

    </div>





</template>

<style scoped>

</style>
