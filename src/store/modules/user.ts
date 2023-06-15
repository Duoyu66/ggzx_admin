import {defineStore} from "pinia";
import {reqLogin} from "../../api/user";
import type {loginForm} from "../../api/user/type.ts";
import {loginResponseData} from "../../api/user/type.ts";
import  type {userState} from './type/types.ts'
//引入操作本地存储的工具方法
import {SET_TOKEN,GET_TOKEN} from "../../utils/token.ts";
let useUserStore = defineStore('User', {
    state: () => {
        return {
            token:GET_TOKEN('TOKEN')//用户唯一标识token
        }
    },
    actions: {
        async userLogin(data: loginForm) {
            let result:loginResponseData = await reqLogin(data);
            if (result.code == 200) {
                console.log((result.data.token as string))
               SET_TOKEN(result.data.token);
                return 'ok';
            }else{
                return Promise.reject(new Error(result.data.message))
            }
        }
    },
    getters: {}
})
export default useUserStore