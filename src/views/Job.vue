<template>
	<div>
		<job-type v-bind:className="'tab-type'"></job-type>
		<scroll-tip></scroll-tip>
		<job-list v-bind:searchParam="listParam" v-bind:isRefresh='isRefresh'></job-list>
	</div>
</template>
<script>
import Vue from 'Vue'
import JobType from "../components/JobType.vue";
import JobList from '../components/JobList.vue';
import ScrollTip from '../components/ScrollTip.vue';
export default{
	data(){
		return {
			isRefresh:0,
			listParam:{
				g:"Task",
				m:"TaskMobile",
				a:"api_task_list",
				id:0
			}
		}
	},
	methods:{
		changeType(id){
			this.listParam.id=id;
			this.isRefresh=id;
		}
	},
	components:{JobType,JobList,ScrollTip},
	created(){
		this.listParam.id=this.$route.query.id||0;
		this.$store.state.footerIndex=1;
		this.$store.state.showFooter=true;
	}
}
</script>
<style>
</style>
