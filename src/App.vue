<template>
  <div id="app">
  	<header class="app-header">
      <span class="app-back" v-on:click="goBack"></span>
      百家兼职
    </header>
    <router-view></router-view>
    <footer class="app-footer" v-if="showFooter">
    	<a v-for="(item,index) in footerList" v-bind:href="item.href" class="item" v-bind:class="[item.class ,index==footerIndex?'active':'']">
    		{{item.name}}
    	</a>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'app',
  methods:{
    goBack(){
      window.history.go(-1);
    }
  },
  computed:{
  	footerIndex(){
  		return this.$store.state.footerIndex;
  	},
    showFooter(){
      return this.$store.state.showFooter;
    }
  },
  data(){
  	return {

  		footerList:[
  			{
  				name:"首页",class:"link-index",href:"#"
  			},
  			{
  				name:"任务大厅",class:"link-job",href:"#job"
  			},
  			{
  				name:"我",class:"link-my",href:"#login"
  			},
  			{
  				name:"更多",class:"link-more",href:"#more"
  			}
  		]
  	}
  }
}
</script>

<style lang="scss">
@import './assets/css/base.scss'
</style>
