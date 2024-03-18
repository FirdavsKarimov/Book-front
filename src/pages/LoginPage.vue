<script setup>

import FormInput from "@/components/tags/FormInput.vue";
import FormButton from "@/components/tags/FormButton.vue";

import {reactive, ref} from "vue";
import {useAuthorization} from "@/stores/user/authorization.js";

import {useRouter} from "vue-router";
const router = useRouter()
console.log(router)

let isLoading = ref(false);
let authorization = reactive({
    email: "",
    password: ""
})

function auth() {
    isLoading.value = true
    useAuthorization().userAuth(authorization)
        .then(()=>{
            router.push('/')
        })
}


</script>

<template>
    <div class="row vh-100 justify-content-center align-items-center">
        <div class="col-12 col-sm-8 col-md-6 col-xl-4">
            <h1 class="text-center">
                Kirish
            </h1>
            <form>
                <FormInput v-model="authorization.email" props-id="email" label-name="Email" input-type="email"/>
                <FormInput v-model="authorization.password" label-name="Parol" props-id="password"/>
                <div class="text-end">
                    <FormButton @click="auth()" :loading="isLoading" text="SignIn" class="btn-primary"/>
                </div>
            </form>
        </div>
    </div>
</template>

<style scoped>

</style>