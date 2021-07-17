<template>
  <el-container style="height: 100vh; border: 1px solid #eee">
  <el-aside width="200px" style="background-color: rgb(238, 241, 246);overflow:scroll;">
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
										<router-link to="/selectCharacter">	
										<i class="header-icon el-icon-tickets"></i>
										选择角色
										</router-link>
									</template>
									<div style="margin-left:10px">
										<el-collapse v-model="activeNames">
											<el-collapse-item>
											<template #title>
												<router-link to="/levelAssign">
												<i class="header-icon el-icon-tickets"></i>
												权限分配
												</router-link>
											</template>
											<router-link to="/newLevel">
												<i class="el-icon-tickets"></i>新增分级
											</router-link>
											</el-collapse-item>
										</el-collapse>
									</div>
									<router-link to="/systemManage"><i class="el-icon-tickets"></i>系统管理</router-link>
								</el-collapse-item>
							</el-collapse>
						</div>
					</el-collapse-item>
					
				</el-collapse>
				<el-collapse v-model="activeNames">
  					<el-collapse-item>
    					<template #title>
      						<i class="header-icon el-icon-folder"></i>
					  		<span>分级管理员</span>
    					</template>
						<router-link to="/selectCharacter1"><i class="el-icon-tickets"></i>选择角色</router-link>
						<div style="margin-left: 10px;">
						<el-collapse v-model="activeNames">
  							<el-collapse-item>
    							<template #title>
									<router-link to="/meetingManage">
      									<i class="header-icon el-icon-tickets"></i>
					  					<span>会议室管理</span>
									</router-link>
    							</template>
								<div style="margin-left: 10px;">
								<el-collapse v-model="activeNames">
  									<el-collapse-item>
    									<template #title>
											<router-link to="/meetingRoomList">
      											<i class="header-icon el-icon-tickets"></i>
					 		 					<span>会议室列表</span>
											</router-link>
    									</template>
										  <ul>
											  <li>
												  <router-link to="/new">
												  	<i class="header-icon el-icon-tickets"></i>新增
												  </router-link> 
											  </li>
											  <li>
												  <router-link to="/edit">
												  	<i class="header-icon el-icon-tickets"></i>编辑
												  </router-link>
											  </li>
											  <li>
												  <router-link to="/outOfUse">
												  <i class="header-icon el-icon-tickets"></i>停用
												  </router-link>
											</li>
											  <li>
												  <router-link to="/bitImport">
												  <i class="header-icon el-icon-tickets"></i>批量导入(二期)
												  </router-link>
											  </li>
											  <li>
												  <router-link to="/bitModify">
												  <i class="header-icon el-icon-tickets"></i>批量修改(二期)
												  </router-link>
											  </li>
										  </ul>
									  </el-collapse-item>
									  
										

									</el-collapse>
								</div>
								<div style="margin-left: 10px;">
								<el-collapse v-model="activeNames">
  									<el-collapse-item>
    									<template #title>
											<router-link to='/officeAreaManage'>
      											<i class="header-icon el-icon-tickets"></i>
					 		 					<span>办公区管理</span>
											</router-link>
    									</template>
										  <div>
											  <router-link to="/newOfficeArea">
											  	<i class="header-icon el-icon-tickets"></i>
											  	新增办公区
											  </router-link>
										  </div>
									  </el-collapse-item>
									  
										

									</el-collapse>
								</div>
								<div style="margin-left: 10px;">
								<el-collapse v-model="activeNames">
  									<el-collapse-item>
    									<template #title>
											<router-link to="/meetingRoomEquip">
      											<i class="header-icon el-icon-tickets"></i>
					 		 					<span>会议室设备</span>
											</router-link>
    									</template>
										<div>
											<router-link to="/newMeetingRoomEquip">
											 	<i class="header-icon el-icon-tickets"></i>
										  		新增会议室设备
											</router-link>
									  </div>
										 
									  </el-collapse-item>
									  
									</el-collapse>
								</div>
								<div style="margin-left: 10px;">
								<el-collapse v-model="activeNames">
  									<el-collapse-item>
    									<template #title>
											<router-link to="/extraRequire">
      											<i class="header-icon el-icon-tickets"></i>
					 		 					<span>额外需求(二期)</span>
											</router-link>
    									</template>
										  <div>
											  <router-link to="/newExtraRequire">
											  	<i class="header-icon el-icon-tickets"></i>
											  	新增额外需求
											  </router-link>
										  </div>
									  </el-collapse-item>
									  
										

									</el-collapse>
								</div>
								<div>
								<router-link to="/bookToKnow">
									<i class="header-icon el-icon-tickets"></i>预定须知
								</router-link>
								</div>
								<div>
								<router-link to="/messageRemind">
									<i class="header-icon el-icon-tickets"></i>消息提醒
								</router-link>
								</div>
							  </el-collapse-item>
						</el-collapse>
						</div>
						<div style="margin-left: 10px;">
						<el-collapse v-model="activeNames">
  							<el-collapse-item>
    							<template #title>
									<router-link to="/bookManage">
      									<i class="header-icon el-icon-tickets"></i>
					  					<span>预定管理</span>
									</router-link>
    							</template>
								<div>
									<router-link to="/bookManage1">
									<i class="header-icon el-icon-tickets"></i>
									预定管理
									</router-link>
								</div>
								<div>
									<router-link to="/curBook">
									<i class="header-icon el-icon-tickets"></i>
									当前预定情况
									</router-link>
								</div>
							  </el-collapse-item>
						</el-collapse>
						</div>
						<div style="margin-left: 10px;">
						<el-collapse v-model="activeNames">
  							<el-collapse-item>
    							<template #title>
									<router-link to="/applyConfig">
      									<i class="header-icon el-icon-tickets"></i>
					  					<span>应用配置</span>
									</router-link>
    							</template>
								<div>
									<router-link to="/applyCharacterManage">
										<i class="header-icon el-icon-tickets"></i>
										审批角色管理
									</router-link>
								</div>
								<div style="margin-left:10px">
								<el-collapse v-model="activeNames">
									<el-collapse-item>
										<template #title>
											<router-link to="/applyProgressConfig">
												<i class="header-icon el-icon-tickets"></i>
												<span>
													审批流程配置
												</span>
											</router-link>
										</template>
										<ul style="margin-left:10px">
											<li>
												<router-link to="/newApply">
												<i class="header-icon el-icon-tickets"></i>新增
												</router-link>
											</li>

											<li>
												<router-link to="/step1">
													<i class="header-icon el-icon-tickets"></i>
													第一步
												</router-link>
											</li>
											<li>
												<router-link to="/step2">
													<i class="header-icon el-icon-tickets"></i>
													第二步
												</router-link>
											</li>
											<li>	
												<router-link to="/step3">
													<i class="header-icon el-icon-tickets"></i>
													第三步
												</router-link>
											</li>
										</ul>
									</el-collapse-item>
								</el-collapse>
								</div>
								<div>
									<router-link to="/bookLevel">
										<i class="header-icon el-icon-tickets"></i>
										预定权限
									</router-link>
								</div>
								<div>
									<router-link to="/johnerLevel">
										<i class="header-icon el-icon-tickets"></i>
										参会人权限
									</router-link>
								</div>
								<div>
									<router-link to="/assocVideoMeeting">
										 <i class="header-icon el-icon-tickets"></i>
										 关联视频会议
									</router-link>
								</div>
								<div>
									<router-link to="/assocScreenDisplay">
										<i class="header-icon el-icon-tickets"></i>
										关联电子屏显示
									</router-link>
								</div>
							  </el-collapse-item>
						</el-collapse>
						</div>
						<div style="margin-left: 10px;">
						<el-collapse v-model="activeNames">
  							<el-collapse-item>
    							<template #title>
									<router-link to="/historyBookRecord">
      									<i class="header-icon el-icon-tickets"></i>
					  					<span>历史预定记录</span>
									</router-link>
    							</template>
								
								<div style="margin-left: 10px;">
								<el-collapse v-model="activeNames">
  									<el-collapse-item>
    								<template #title>
										<router-link to="/bookSuccessRecord">
      										<i class="header-icon el-icon-tickets"></i>
					 	 					<span>预定成功记录</span>
										</router-link>
    								</template>
									<div>
										<router-link to="/detail">
											<i class="header-icon el-icon-tickets"></i>
											详情
										</router-link>
									</div>
									  </el-collapse-item>
								</el-collapse>
								</div>
								<div style="margin-left: 10px;">
								<el-collapse v-model="activeNames">
  									<el-collapse-item>
    								<template #title>
										<router-link to="/checkOvertimeRecord">
      										<i class="header-icon el-icon-tickets"></i>
					 	 					<span>签到超时记录</span>
										</router-link>
    								</template>
									<div>
										<router-link to="/detail1">
											<i class="header-icon el-icon-tickets"></i>
											详情
										</router-link>
									</div>
									  </el-collapse-item>
								</el-collapse>
								</div>
								<div style="margin-left: 10px;">
								<el-collapse v-model="activeNames">
  									<el-collapse-item>
    								<template #title>
										<router-link to="/cancelRecord">
      										<i class="header-icon el-icon-tickets"></i>
					 	 					<span>撤销记录</span>
										</router-link>
    								</template>
									<div>
										<router-link to="/detail2">
											<i class="header-icon el-icon-tickets"></i>
											详情
										</router-link>
									</div>
									  </el-collapse-item>
								</el-collapse>
								</div>
							  </el-collapse-item>
						</el-collapse>
						</div>
						<div style="margin-left: 10px;">
						<el-collapse v-model="activeNames">
  							<el-collapse-item>
    							<template #title>
									<router-link to="/messageManage">
      									<i class="header-icon el-icon-tickets"></i>
					  					<span>消息管理</span>
									</router-link>
    							</template>
								<div>
									<router-link to="/newMessage">
										<i class="header-icon el-icon-tickets"></i>
										新增消息
									</router-link>	
								</div>
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
						<router-link to="/selectCharacter1">
							<i class="el-icon-tickets"></i>
							选择角色
						</router-link>
						<div style="margin-left: 10px;">
						<el-collapse v-model="activeNames">
  							<el-collapse-item>
    							<template #title>
									<router-link to="/meetingRoomManage">
      									<i class="header-icon el-icon-tickets"></i>
					  					<span>会议室管理</span>
									</router-link>
    							</template>
								<div style="margin-left: 10px;">
								<el-collapse v-model="activeNames">
  									<el-collapse-item>
    									<template #title>
											<router-link to="/meetingRoomList1">
      											<i class="header-icon el-icon-tickets"></i>
					 		 					<span>会议室列表</span>
											</router-link>
    									</template>
										  <ul>
											  <li>
												  <router-link to="/new1">
												  	<i class="header-icon el-icon-tickets"></i>
													  新增
												  </router-link>
											  </li>
											  <li>
												  <router-link to="/edit1">
												  	<i class="header-icon el-icon-tickets"></i>
													  编辑
												  </router-link>
											  </li>
											  <li>
												  <router-link to="/outOfUse1">
												  	<i class="header-icon el-icon-tickets"></i>
													  停用
												  </router-link>
											  </li>
											  <li>
												  <router-link to="/bitImport1">
												  	<i class="header-icon el-icon-tickets"></i>
													  批量导入(二期)
												  </router-link>
											  </li>
											  <li>
												  <router-link to="/bitModify1">
												 	<i class="header-icon el-icon-tickets"></i>
													 批量修改(二期)
												  </router-link>	 
											  </li>
										  </ul>
									  </el-collapse-item>
									  
										

									</el-collapse>
								</div>
								
								
								
								
							  </el-collapse-item>
						</el-collapse>
						</div>
						<div style="margin-left: 10px;">
						<el-collapse v-model="activeNames">
  							<el-collapse-item>
    							<template #title>
									<router-link to="/bookManage2">
      									<i class="header-icon el-icon-tickets"></i>
					  					<span>预定管理</span>
									</router-link>
    							</template>
								<ul>
									<li>
										<router-link to="/bookManage3">
											<i class="header-icon el-icon-tickets"></i>
											预定管理
										</router-link>
									</li>
									<li>
										<router-link to="/curBook1">
											<i class="header-icon el-icon-tickets"></i>
											当前预定情况
										</router-link>
									</li>
								</ul>
								
								
								
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
								<div><i class="header-icon el-icon-tickets"></i>审批角色管理</div>
								<div style="margin-left: 10px;">
								<el-collapse v-model="activeNames">
  									<el-collapse-item>
    									<template #title>
      										<i class="header-icon el-icon-tickets"></i>
					 		 				<span>审批流程配置</span>
    									</template>
										  <ul>
											  <li><i class="header-icon el-icon-tickets"></i>新增</li>
											  <li><i class="header-icon el-icon-tickets"></i>第一步</li>
											  <li><i class="header-icon el-icon-tickets"></i>第二步</li>
											  <li><i class="header-icon el-icon-tickets"></i>第三步</li>
											  
										  </ul>
									  </el-collapse-item>
									  
										

									</el-collapse>
								</div>
								
								
								
								
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
								
								<div style="margin-left: 10px;">
								<el-collapse v-model="activeNames">
  									<el-collapse-item>
    								<template #title>
      									<i class="header-icon el-icon-tickets"></i>
					 	 				<span>预定成功记录</span>
    								</template>
									<div><i class="header-icon el-icon-tickets"></i>详情</div>
									  </el-collapse-item>
								</el-collapse>
								</div>
								<div style="margin-left: 10px;">
								<el-collapse v-model="activeNames">
  									<el-collapse-item>
    								<template #title>
      									<i class="header-icon el-icon-tickets"></i>
					 	 				<span>签到超时记录</span>
    								</template>
									<div><i class="header-icon el-icon-tickets"></i>详情</div>
									  </el-collapse-item>
								</el-collapse>
								</div>
								<div style="margin-left: 10px;">
								<el-collapse v-model="activeNames">
  									<el-collapse-item>
    								<template #title>
      									<i class="header-icon el-icon-tickets"></i>
					 	 				<span>撤销记录</span>
    								</template>
									<div><i class="header-icon el-icon-tickets"></i>详情</div>
									  </el-collapse-item>
								</el-collapse>
								</div>
							  </el-collapse-item>
						</el-collapse>
						</div>
						
					</el-collapse-item>
				</el-collapse>
				</div>
  			</el-collapse-item>
  			<el-collapse-item>
				  <template #title>
      				<i class="header-icon el-icon-folder"></i>
					  <span>移动端</span>
    			</template>
    			<div><i class="header-icon el-icon-tickets"></i>多身份选择</div>
				<div style="margin-left:10px;">
					<el-collapse-item>
						<template #title>
							<i class="header-icon el-icon-folder"></i>
							<span>会议室列表</span>
						</template>
						<div><i class="header-icon el-icon-tickets"></i>预定页面</div>
						<div><i class="header-icon el-icon-tickets"></i>预定成功</div>
						<div><i class="header-icon el-icon-tickets"></i>预定详情</div>
						<div><i class="header-icon el-icon-tickets"></i>预定须知</div>
						<div><i class="header-icon el-icon-tickets"></i>参会人</div>
					</el-collapse-item>
				</div>
				<div><i class="header-icon el-icon-tickets"></i>查看预定</div>
				<div><i class="header-icon el-icon-tickets"></i>我的预定</div>
				<div><i class="header-icon el-icon-tickets"></i>预定管理</div>
				<div><i class="header-icon el-icon-tickets"></i>公号消息</div>
  			</el-collapse-item>
  			<el-collapse-item>
				  <template #title>
      				<i class="header-icon el-icon-folder"></i>
					  <span>PC端</span>
    			</template>
    			<div><i class="header-icon el-icon-tickets"></i>选择身份</div>
				<div style="margin-left:10px;">
					<el-collapse-item>
						<template #title>
							<i class="header-icon el-icon-folder"></i>
							<span>预定申请</span>
						</template>
						<div><i class="header-icon el-icon-tickets"></i>选择时间</div>
						<div><i class="header-icon el-icon-tickets"></i>预定成功</div>
					</el-collapse-item>
				</div>
				<div><i class="header-icon el-icon-tickets"></i>我的预定</div>
				<div><i class="header-icon el-icon-tickets"></i>我的审批</div>
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
