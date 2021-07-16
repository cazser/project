import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import { createWebHashHistory , createRouter} from 'vue-router'
import Frank from './components/Frank.vue';
import Frank2 from './components/Frank2.vue';
import Antd from 'ant-design-vue';



import SelectCharacter from './pages/SelectCharacter.vue'
import LevelAssign from './pages/LevelAssign.vue'
import NewLevel from './pages/NewLevel.vue'
import SystemManage from './pages/SystemManage.vue'
import SelectCharacter1 from './pages/SelectCharacter1.vue'
import MeetingManage from './pages/MeetingManage.vue'
import MeetingRoomList from './pages/MeetingRoomList.vue'
import New from './pages/New.vue'
import Edit from './pages/Edit.vue'
import OutOfUse from './pages/OutOfUse.vue'
import BitImport from './pages/BitImport.vue'
import BitModify from './pages/BitModify.vue'
import NewOfficeArea from './pages/NewOfficeArea.vue'
import NewMeetingRoomEquip from './pages/NewMeetingRoomEquip.vue'
import MeetingRoomEquip from './pages/MeetingRoomEquip.vue'
import OfficeAreaManage from './pages/OfficeAreaManage.vue'
import ExtraRequire from './pages/ExtraRequire.vue'
import NewExtraRequire from './pages/NewExtraRequire.vue'
import BookToKnow from './pages/BookToKnow.vue'
import MessageRemind from './pages/MessageRemind.vue'




import 'ant-design-vue/dist/antd.css';
//import Component from './shims-vue'
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';




const history = createWebHashHistory()
const router  = createRouter({
	history,
	routes:[
		{path:'/', redirect:'/selectCharacter'},
		{path:'/selectCharacter', component: SelectCharacter},
		{path:'/levelAssign', component: LevelAssign},
		{path:'/newLevel', component: NewLevel},
		{path:'/systemManage', component: SystemManage},
		{path:'/selectCharacter1', component: SelectCharacter1},
		{path:'/xxx', component: Frank2},
		{path:'/meetingManage', component: MeetingManage},
		{path:'/meetingRoomList', component: MeetingRoomList},
		{path:'/new', component: New},
		{path:'/edit', component: Edit},
		{path:'/outOfUse', component: OutOfUse},
		{path:'/bitImport', component: BitImport},
		{path:'/bitModify', component: BitModify},
		{path:'/newOfficeArea', component: NewOfficeArea},
		{path:'/newMeetingRoomEquip', component: NewMeetingRoomEquip},
		{path:'/meetingRoomEquip', component: MeetingRoomEquip},
		{path:'/officeAreaManage', component: OfficeAreaManage},
		{path:'/extraRequire', component: ExtraRequire},
		{path:'/newExtraRequire', component: NewExtraRequire},
		{path:'/bookToKnow', component: BookToKnow},
		{path:'/messageRemind', component: MessageRemind}
	]
})


const app = createApp(App)
app.use(router)
app.use(ElementPlus)
app.config.productionTip = false;

app.use(Antd);
app.mount('#app')
