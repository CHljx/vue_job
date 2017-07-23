<template>
	<div>
	  <div class="wrapper wrapper-personInfo marginLg">
		<div class="item">
			<img v-bind:src="info.img"/>
			<div class="item-right">
				<p>{{info.name}}</p>
				<p>余额：{{info.balance}}</p>
			</div>
		</div>
	  </div>
	  <div class="wrapper margin">
		<div class="item">
			<img src="../assets/images/me1.png" class="item-img"/>
			<p class="item-title">我的任务</p>
		</div>
	  </div>
	  <div class="wrapper margin">
		<div class="item">
			<img src="../assets/images/me2.png" class="item-img"/>
			<p class="item-title">我的钱包</p>
		</div>
	  </div>
	  <div class="wrapper margin">
		<div class="item">
			<img src="../assets/images/me5.png" class="item-img"/>
			<p class="item-title">密码修改</p>
		</div>
		<div class="item">
			<img src="../assets/images/me4.png" class="item-img"/>
			<p class="item-title">我的邀请</p>
		</div>
	  </div>
	</div>
</template>
<script>
export default{
	data(){
		return {
			info:{
				img:"http://api.mayivzhuan.com/base/get_avatar/img/119551_middle_1499593898",
				name:"13711556327",
				balance:0
			}
		}
	},
	methods:{
		changeType(id){
			this.listParam.id=id;
			this.isRefresh=id;
		}
	},
	created(){
		this.$store.state.footerIndex=2;
		this.$store.state.showFooter=true;
	}
}
</script>
<style scoped lang="scss">
@import '../assets/css/my.scss'
</style>
