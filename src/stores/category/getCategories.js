import {defineStore} from "pinia";
import {reactive} from "vue";
import {client} from "@/plugins/axios.js";

export const useFetchCategories = defineStore('fetchCategories', () => {
    const state = reactive({
            categories: [],
            count: 0
        }
    )

    function categoriesGet() {
        return new Promise((resolve, reject) => {
            client.get('categories')
                .then((res) => {
                    console.log('Kategoriyalar olindi')
                    state.categories = res.data['hydra:member']
                    state.count = res.data['hydra:totalItems']
                    resolve()
                })
                .catch(() => {
                    console.log("Kategoriyalarni olishda xatolik bor")
                    reject()
                })
        })
    }

    return {categoriesGet, state}
})