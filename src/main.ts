import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
const app = createApp(App)
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
//svg需要的
import 'virtual:svg-icons-register'
import SvgIcon from './components/SvgIcon/index.vue'

//引入scss
import './styles/index.scss'
//引入自定义插件对象：注册整个项目全局组件
import gloalComponent from './components/index.ts'
app.use(gloalComponent)
app.component('SvgIcon',SvgIcon)
app.use(ElementPlus)

app.mount('#app')
