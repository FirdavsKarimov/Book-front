import {defineStore} from "pinia";
import axios from 'axios'


export const useAuthorization = defineStore('authorization', ()=>{
    function userAuth(data){
        return new Promise ((resolve, reject) => {
            axios.post('http://localhost:8888/api/users/auth',data)
                .then((res)=>{
                    console.log('Token olindi ')
                    localStorage.setItem('token', res.data.token)
                    resolve()
                })
                .catch(()=>{
                    console.log("Token olishda xatolik")
                    reject()
                })
            }
        )

    }
    return {userAuth}
})