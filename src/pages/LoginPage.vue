<script setup>

import FormInput from "@/components/tags/FormInput.vue";
import FormButton from "@/components/tags/FormButton.vue";

import {ref, reactive} from "vue";
import axios from "axios";

let isLoading = ref(false);
let authorization = reactive({
    email: "",
    password: ""
})

function auth() {
    isLoading.value = true
    axios.post('http://localhost:8888/api/users/auth', authorization)
        .then ((res) => {
            console.log('Token olindi')
            localStorage.setItem('token', res.data.token)
            console.log(res)
        })
        .catch
         ((error) => {
             console.log(error)
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