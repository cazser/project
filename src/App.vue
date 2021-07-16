<template>
  <el-container style="height: 100%; border: 1px solid #eee">
  <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
	    <el-collapse v-model="activeNames" style="overflow: scroll;">
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
									<div style="margin-left:10px">
										<el-collapse v-model="activeNames">
											<el-collapse-item>
											<template #title>
												<i class="header-icon el-icon-tickets"></i>
												<router-link to="/selectCharacter">权限分配</router-link>
											</template>
											<router-link to="/"><i class="el-icon-tickets"></i>新增分级</router-link>
											</el-collapse-item>
										</el-collapse>
									</div>
									<router-link to="/"><i class="el-icon-tickets"></i>系统管理</router-link>
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
						<router-link to="/"><i class="el-icon-tickets"></i>选择角色</router-link>
						<div style="margin-left: 10px;">
						<el-collapse v-model="activeNames">
  							<el-collapse-item>
    							<template #title>
      								<i class="header-icon el-icon-tickets"></i>
					  				<span>会议室管理</span>
    							</template>
								<div style="margin-left: 10px;">
								<el-collapse v-model="activeNames">
  									<el-collapse-item>
    									<template #title>
      										<i class="header-icon el-icon-tickets"></i>
					 		 				<span>会议室列表</span>
    									</template>
										  <ul>
											  <li>新增</li>
											  <li>编辑</li>
											  <li>停用</li>
											  <li>批量导入(二期)</li>
											  <li>批量修改(二期)</li>
										  </ul>
									  </el-collapse-item>
									  
										

									</el-collapse>
								</div>
								<div style="margin-left: 10px;">
								<el-collapse v-model="activeNames">
  									<el-collapse-item>
    									<template #title>
      										<i class="header-icon el-icon-tickets"></i>
					 		 				<span>办公区管理</span>
    									</template>
										  <div>
											  新增办公区
										  </div>
									  </el-collapse-item>
									  
										

									</el-collapse>
								</div>
								<div style="margin-left: 10px;">
								<el-collapse v-model="activeNames">
  									<el-collapse-item>
    									<template #title>
      										<i class="header-icon el-icon-tickets"></i>
					 		 				<span>会议室设备</span>
    									</template>
										<div>
										  新增会议室设备
									  </div>
										 
									  </el-collapse-item>
									  
									</el-collapse>
								</div>
								<div style="margin-left: 10px;">
								<el-collapse v-model="activeNames">
  									<el-collapse-item>
    									<template #title>
      										<i class="header-icon el-icon-tickets"></i>
					 		 				<span>额外需求(二期)</span>
    									</template>
										  <div>
											  新增额外需求
										  </div>
									  </el-collapse-item>
									  
										

									</el-collapse>
								</div>
								<div>
								<router-link to="/">预定须知</router-link>
								</div>
								<div>
								<router-link to="/">消息提醒</router-link>
								</div>
							  </el-collapse-item>
						</el-collapse>
						</div>
						<div style="margin-left: 10px;">
						<el-collapse v-model="activeNames">
  							<el-collapse-item>
    							<template #title>
      								<i class="header-icon el-icon-tickets"></i>
					  				<span>预定管理</span>
    							</template>
								<div>
									预定管理
								</div>
								<div>
									当前预定情况
								</div>
							  </el-collapse-item>
						</el-collapse>
						</div>
						<div style="margin-left: 10px;">
						<el-collapse v-model="activeNames">
  							<el-collapse-item>
    							<template #title>
      								<i class="header-icon el-icon-tickets"></i>
					  				<span>应用配置</span>
    							</template>
							  </el-collapse-item>
						</el-collapse>
						</div>
						<div style="margin-left: 10px;">
						<el-collapse v-model="activeNames">
  							<el-collapse-item>
    							<template #title>
      								<i class="header-icon el-icon-tickets"></i>
					  				<span>历史预定记录</span>
    							</template>
							  </el-collapse-item>
						</el-collapse>
						</div>
						<div style="margin-left: 10px;">
						<el-collapse v-model="activeNames">
  							<el-collapse-item>
    							<template #title>
      								<i class="header-icon el-icon-tickets"></i>
					  				<span>消息管理</span>
    							</template>
							  </el-collapse-item>
						</el-collapse>
						</div>
					</el-collapse-item>
				</el-collapse>
				<el-collapse v-model="activeNames">
  					<el-collapse-item>
    					<template #title>
      						<i class="header-icon el-icon-folder"></i>
					  		<span>办公区管理员</span>
    					</template>
						<router-link to="/"><i class="el-icon-tickets"></i>选择角色</router-link>
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
