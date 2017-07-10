<template>
	<div>
		<job-type v-bind:showImg=true></job-type>
		<scroll-tip></scroll-tip>
		<job-list v-bind:header="'推荐任务'" v-bind:searchParam="listParam"></job-list>
	</div>
</template>
<script>
import JobType from "../components/JobType.vue";
import JobList from '../components/JobList.vue';
import ScrollTip from '../components/ScrollTip.vue';
import {JOB_LIST} from '../store/module/job';
export default{
	data(){
		return {
			listParam:{
				g:"Task",
				m:"TaskMobile",
				a:"api_task_list"
			}
		}
	},
	methods:{
		changeType(id){
			window.location.href="#job?id="+id;
		}
	},
	created(){
		this.$store.state.footerIndex=0;
		this.$store.state.showFooter=true;
	},
	components:{JobList,ScrollTip,JobType}
}
</script>
<style>
</style>