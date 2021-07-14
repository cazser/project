import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import { createWebHashHistory , createRouter} from 'vue-router'
import Frank from './components/Frank.vue'
import Frank2 from './components/Frank2.vue'
import Antd from 'ant-design-vue';

import 'ant-design-vue/dist/antd.css';

const history = createWebHashHistory()
const router  = createRouter({
	history,
	routes:[
		{path:'/', component: Frank},
		{path:'/xxx', component: Frank2}
	]
})


const app = createApp(App)
app.use(router)
app.config.productionTip = false;

app.use(Antd);
app.mount('#app')
