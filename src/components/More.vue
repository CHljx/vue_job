<template>
	<div>
	  
	  <div class="wrapper">
		<div class="item">
			<p class="item-title">系统通知</p>
		</div>
		<div class="item">
			<p class="item-title">帮助手册</p>
		</div>
		<div class="item">
			<p class="item-title">联系我们</p>
		</div>
		<div class="item">
			<p class="item-title">站内公告</p>
		</div>
	  </div>

	  <div class="margin">
		<button class="btn">退出登录</button>
	  </div>
	  
	</div>
</template>
<script>
export default{
	data(){
		return {
		}
	},
	methods:{
		
	},
	components:{JobType,JobList,ScrollTip},
	created(){
		this.$store.state.footerIndex=3;
		this.$store.state.showFooter=true;
	}
}
</script>
<style scoped lang="scss">
@import '../assets/css/my.scss'
</style>
