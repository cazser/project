<template>
  <el-container style="height: 500px; border: 1px solid #eee">
  <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
    <el-menu :default-openeds="['1', '3']">
      <el-submenu index="1">
        <template #title><i class="el-icon-folder"></i>管理后台</template>
        <el-submenu index="1-1">
        	<template #title><i class="el-icon-folder"></i>运营者</template>
			<el-menu-item-group>
				<el-menu-item>
					<el-collapse accordion>
  						<el-collapse-item>
    					<template #title>
							<router-link to="/selectCharacter">选择角色</router-link>
    					</template>
							<el-collapse accordion>
  								<el-collapse-item>
    								<template #title>
										<router-link to="/levelAssign">权限分配</router-link>
									</template>
								 </el-collapse-item>
							</el-collapse>
						  </el-collapse-item>
						  <el-collapse-item>
						  </el-collapse-item>
					</el-collapse>
				</el-menu-item>
				<el-menu-item>

				</el-menu-item>
			</el-menu-item-group>
			
	  	</el-submenu>
	  	<el-submenu index="1-2">
        <template #title><i class="el-icon-folder"></i>分区管理员</template>
        
	  	</el-submenu>
	  	<el-submenu index="1-3">
   	     <template #title><i class="el-icon-folder"></i>办公区管理员</template>
        
	  	</el-submenu>
	  </el-submenu>
	  <el-submenu index="2">
        <template #title><i class="el-icon-folder"></i>移动端</template>
        
	  </el-submenu>
	  <el-submenu index="3">
        <template #title><i class="el-icon-folder"></i>PC端</template>
			<el-menu-item>
				<router-link to="/selectCharacter">选择身份</router-link>
			</el-menu-item>
	  </el-submenu>
    </el-menu>
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
