<template>
	<div class="box-tag">

		<div class="wrapper wrapper-tag" v-bind:class="[className]">
			<a v-for="item in list" class="item" v-bind:class="{active:activeId==item.id,search:searchId==item.id}" v-on:click="changeType(item.id)">
				<img v-if="showImg" v-bind:src="'http://xy.mianfeibang.cn/'+item.img"/>
				<p>{{item.name}}</p>
			</a>
		</div>
	</div>
</template>
<script>
import {JOB_TYPE} from "../store/module/job"
export default{
	data(){
		return {
			list:[],
			searchId:0,
			activeId:0
		}
	},
	props:["showImg","className"],
	methods:{
		renderList(oRes){
			if(oRes&&oRes.code){
				this.list=oRes.data.list;
			}else{
				alert(oRes.message);
			}
		},
		changeType(id){
			this.activeId=id;
			this.$parent.changeType&&this.$parent.changeType(id);
		}
	},
	created(){

		this.searchId=this.$route.query.id||0;
		this.activeId=this.$route.query.id||0;
		this.$store.dispatch(JOB_TYPE).then(this.renderList.bind(this),this.renderList.bind(this))
	}
}
</script>
<style scoped>
@import "../assets/css/jobtype.css"
</style>