<template>
	<div>
		<header class="commit-header">
			{{currentStep}}/{{stepCount}}
		</header>
		<div class="wrapper content">
			<div class="wrapper" v-for="(item,index) in list" v-show="item.step==currentStep">
				<div class="wrapper-form">
					{{item.stepContent}}
				</div>
				<div class="wrapper-form" v-if="index<list.length-1">
					<input type="text" v-bind:placeholder="item.stepContent" v-model="item.stepValue"/>
				</div>
				<div class="wrapper-form" v-if="index==list.length-1">
					<div class="wrapper-file">
						选择图片
						<input type="file"/>
					</div>
				</div>
				<div class="wrapper-form">
					{{item.remark}}
				</div>
			</div>
		</div>
		<footer class="app-footer">
			<div class="item padding0" v-if="currentStep>1" v-on:click="preStep">
				<a class="footer-btn btn-no-bg">上一步</a>
			</div>
			<div class="item padding0" v-if="currentStep<stepCount">
				<a class="footer-btn"  v-on:click="nextStep">下一步</a>
			</div>
			<div class="item padding0" v-if="currentStep==stepCount">
				<a class="footer-btn"  v-on:click="commit">提交数据</a>
			</div>
		</footer>
	</div>
</template>
<script>
export default{
	data(){
		return {
			list:[
				{
					step:1,
					stepContent:"提交注册的姓名",
				},
				{
					step:2,
					stepContent:"提交注册的手机号码",
				},
				{
					step:3,
					stepContent:"提交指定截图审核",
				}
			],
			data:[
				{
					stepValue:"lijiaxin"
				},
				{
					stepValue:"13711556327"
				}
			],
			currentStep:3,
			stepCount:3
		}
	},
	methods:{
		nextStep(){
			if(this.list[this.currentStep-1].stepValue){
				this.currentStep++;
			}else{
				alert("请填写相关输入框内容")
			}
		},
		preStep(){

			this.currentStep--;
		},
		commit(){

		}
	},
	created(){

		for(var index=0,len=this.list.length;index<len;index++){
			this.list[index].stepValue=(this.data[index]&&this.data[index]["stepValue"])||"";
		}
		this.$store.state.showFooter=false;
	}
};
</script>
<style>
@import "../assets/css/commit.css"
</style>