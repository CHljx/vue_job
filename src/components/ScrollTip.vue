<template>
	<div class="wrapper wrapper-scrollTip">
		<ul class="list-scrollTip" v-bind:style="{transform:'translateY(-'+offset*38+'px)'}">
			<li class="item-scrollTip" v-for="item in list">{{item}}</li>
		</ul>
	</div>
</template>
<script>
import {JOB_TIPS} from "../store/module/job.js";
export default{
	data(){
		return {
			offset:0,
			list:[
				
			]
		}
	},
	methods:{
		renderList(oRes){
			if(oRes&&oRes.code){
				this.list=oRes.data.list;
				var _self = this;
				var iLen=_self.list.length;
				this.timer=setInterval(function(){
					_self.offset++;
					if(_self.offset>=iLen){
						_self.offset=0;
					}
				},1500)
			}else{
				alert(oRes.message)
			}
		}
	},
	created(){
		
		this.$store.dispatch(JOB_TIPS).then(this.renderList.bind(this),this.renderList.bind(this));
	},
	destroyed(){
		if(this.timer){
			clearInterval(this.timer);
			this.timer=null;
		}
	}
}
</script>
<style scoped>
@import "../assets/css/scrolltip.css"
</style>