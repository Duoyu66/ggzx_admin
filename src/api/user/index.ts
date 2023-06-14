//统一管理用户接口
import requests from "../../utils/requests.ts";
import type {loginForm,loginResponseData} from "./type.ts";
enum API{
    LOGIN_URL="/user/login",
    USERINFO_URL="/user/info"
}
//统一管理接口
//登录接口方法
export const reqLogin = (data:loginForm)=>requests<any,loginResponseData>(API.LOGIN_URL,data);
export const reqUserInfo=()=>requests.get(API.USERINFO_URL)


