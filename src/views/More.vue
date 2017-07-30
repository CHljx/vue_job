<template>
	<div>
    <logo-header></logo-header>
	  <div class="wrapper marginLg">
		<div class="item border">
			<p class="item-title">系统通知</p>
		</div>
		<div class="item border">
			<p class="item-title">帮助手册</p>
		</div>
		<div class="item border">
			<p class="item-title">联系我们</p>
		</div>
		<div class="item border">
			<p class="item-title">站内公告</p>
		</div>
	  </div>

	  <div class="margin">
		<a class="btn">退出登录</a>
	  </div>

	</div>
</template>
<script>
  import LogoHeader from '../components/LogoHeader.vue';
export default{
	data(){
		return {
		}
	},
	components:{LogoHeader},
	methods:{

	},
	created(){
		this.$store.state.footerIndex=3;
		this.$store.state.showFooter=true;
	}
}
</script>
<style scoped lang="scss">
@import '../assets/css/my.scss'
</style>
