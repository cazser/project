import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import { createWebHashHistory , createRouter} from 'vue-router'
import Frank from './components/Frank.vue';
import Frank2 from './components/Frank2.vue';
import Antd from 'ant-design-vue';
import SelectCharacter from './pages/SelectCharacter.vue'
import 'ant-design-vue/dist/antd.css';
//import Component from './shims-vue'
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';





const history = createWebHashHistory()
const router  = createRouter({
	history,
	routes:[
		{path:'/', component: Frank},
		{path:'/selectCharacter', component: SelectCharacter},
		{path:'/xxx', component: Frank2}
	]
})


const app = createApp(App)
app.use(router)
app.use(ElementPlus)
app.config.productionTip = false;

app.use(Antd);
app.mount('#app')
