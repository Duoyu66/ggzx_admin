//对外暴露插件对象
import SvgICon from './SvgIcon/index.vue'

const allGolablComponent = {SvgICon}
Object.keys(allGolablComponent).forEach(item => {
    console.log(123)
})
export default {
    //务必叫做
    install(app) {
        Object.keys(allGolablComponent).forEach(key => {
            app.component(key, allGolablComponent[key]);
        })
    }
}