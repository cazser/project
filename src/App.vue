<template>
  <el-container style="height: 100%; border: 1px solid #eee">
  <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
	    <el-collapse v-model="activeNames">
  			<el-collapse-item>
    			<template #title>
      				<i class="header-icon el-icon-folder"></i>
					  <span>管理后台</span>
    			</template>
				<div style="margin-left:10px">
    			<el-collapse v-model="activeNames">
  					<el-collapse-item>
    					<template #title>
      						<i class="header-icon el-icon-folder"></i>
					  		<span>运营者</span>
    					</template>
						
						<div style="margin-left:10px">
							<el-collapse v-model="activeNames">
								<el-collapse-item>
									<template #title>
      									<i class="header-icon el-icon-tickets"></i>
										<router-link to="/selectCharacter">选择角色</router-link>
									</template>
									<router-link to="/">系统管理</router-link>
								</el-collapse-item>
							</el-collapse>
						</div>
					</el-collapse-item>
					
				</el-collapse>
				<el-collapse v-model="activeNames">
  					<el-collapse-item>
    					<template #title>
      						<i class="header-icon el-icon-folder"></i>
					  		<span>分区管理员</span>
    					</template>
					</el-collapse-item>
				</el-collapse>
				<el-collapse v-model="activeNames">
  					<el-collapse-item>
    					<template #title>
      						<i class="header-icon el-icon-folder"></i>
					  		<span>办公区管理员</span>
    					</template>
					</el-collapse-item>
				</el-collapse>
				</div>
  			</el-collapse-item>
  			<el-collapse-item>
				  <template #title>
      				<i class="header-icon el-icon-folder"></i>
					  <span>移动端</span>
    			</template>
    			<div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
    			<div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
  			</el-collapse-item>
  			<el-collapse-item>
				  <template #title>
      				<i class="header-icon el-icon-folder"></i>
					  <span>PC端</span>
    			</template>
    			<div>简化流程：设计简洁直观的操作流程；</div>
    			<div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
    			<div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
  			</el-collapse-item>
  			
			</el-collapse>
  </el-aside>

  <el-container>
  

    <el-main>
     <router-view></router-view> 
    </el-main>
  </el-container>
</el-container>
</template>



<script>
import TopPanel from './components/TopPanel.vue'
import Sider from './components/Sider.vue'
export default {
  name: 'App',
  components: {
    TopPanel,
	Sider
  }
}
</script>
