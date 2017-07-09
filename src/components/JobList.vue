<template>
	<div class="wrapper-tasklist">
		<header class="wrapper-header" v-if='header'>{{header}}</header>
		<div v class="wrapper">
			<job-item v-for='item in list' v-bind:item="item" :key="item.id"></job-item>
		</div>
		<footer class="wrapper">
			{{loaddingMsg}}
		</footer>
	</div>
</template>
<script>
import JobItem from './JobItem';
import {JOB_LIST} from '../store/module/job';
export default{
	data(){
		return{
			list:[],
			currentPage:1,
			pageSize:1
		}
	},
	computed:{
		loaddingMsg:function(){
			if(this.pageSize>this.currentPage){
				return "正在加载....";
			}else{
				return "已无更多";
			}
		}
	},
	methods:{
		initList(){
			this.list=[];
			this.currentPage=1;
			this.searchObj=JSON.parse(JSON.stringify(this.searchParam||{}));
			this.ajaxList();
			window.addEventListener("scroll",this.doScroll);
		},
		ajaxList(){
			this.doAjax=true;
			this.searchObj['currentPage']=this.currentPage;
			this.$store.dispatch(JOB_LIST,this.searchObj).then(this.renderList.bind(this),this.renderList.bind(this));
		},
		renderList(oRes){
			if(oRes&&oRes.code){
				this.list=this.list.concat(oRes.data.list);
				this.pageSize=oRes.data.pageSize;
				
				if(document.documentElement.scrollHeight<document.documentElement.clientHeight&&this.pageSize>this.currentPage){

					setTimeout(function(){
						if(document.documentElement.scrollHeight<document.documentElement.clientHeight&&this.pageSize>this.currentPage){
							this.currentPage++;
							this.ajaxList();
						}
					},500);
				}

				if(this.pageSize<=this.currentPage){
					this.removeScroll();
				}
			}
			this.doAjax=false;
		},
		doScroll(){
			var _self = this;
			if(this.timer){
				clearTimeout(this.timer);
				this.timer=null;
			}
			this.timer=setTimeout(function(){
				if(((document.documentElement.clientHeight+document.body.scrollTop)>=document.body.scrollHeight-50)&&!_self.doAjax){
					_self.currentPage++;
					_self.ajaxList();
				}
			},300)
			
		},
		removeScroll(){
			window.removeEventListener("scroll",this.doScroll);
		}
	},
	watch:{
		isRefresh(){
			this.initList();
		}
	},
	created(){
		this.initList();
	},
	destroyed(){
		this.removeScroll();
	},
	props:["header","searchParam","isRefresh"],
	components:{JobItem}
}
</script>
<style scoped>
@import "../assets/css/joblist.css"
</style>