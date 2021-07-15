<template>
	<a-layout>
    <a-layout-header style="background:rgb(242, 242, 242);padding:0;margin:0;">
		<top-panel/>
	</a-layout-header>
    <a-layout>
      <a-layout-sider style="background:rgb(242, 242, 242);overflow: auto;">
		<sider/>
	  </a-layout-sider>
      <a-layout-content>
		  <router-view/>
	  </a-layout-content>
    </a-layout>
  </a-layout>

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
