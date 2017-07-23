<template>
	<div class="wrapper-task wrapper" v-on:click="gotoDetail(item.id)" v-if="item">
		<div class="wrapper-img">
			<img v-bind:src='item.img'>
		</div>
		<div class="wrapper-detail">
			<p>{{item.title}}</p> 
			<p class="wrapper-date">{{item.date}}</p> 
			<p class="wrapper-tag">
				<span class="tag" v-bind:style="{background:item.typecolor||'#ddd'}">
					{{item.type}}
				</span>
				{{item.limit}}
			</p>
		</div>
		<div class="wrapper-money">
			{{item.money}}
		</div>
	</div>
</template>

<script>
export default {
	props:["item"],
	methods:{
		gotoDetail(id){
			window.location.href="#detail?id="+id;
		}
	}
}
</script>

<style scoped lang="scss">
@import "../assets/css/jobitem.scss"
</style>