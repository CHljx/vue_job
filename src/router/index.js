import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/Index.vue'
import Job from '@/views/Job.vue'
import Detail from '@/views/Detail.vue'
import Commit from '@/views/Commit.vue'
import My from '@/views/My.vue'
import More from '@/views/More.vue'
import Login from '@/views/Login.vue'
import Regist from '@/views/Regist.vue';
import VueResource from 'vue-resource'



Vue.use(Router);
Vue.use(VueResource);

export default new Router({
  routes: [
    {
		path: '/',
		name: 'Index',
		component: Index
    },
    {
		path:"/index",
		name:"Index",
		component:Index
    },
    {
		path:"/job",
		name:"Job",
		component:Job
    },
    {
		path:"/detail",
		name:Detail,
		component:Detail
    },
    {
		path:"/commit",
		name:Commit,
		component:Commit
    },
	{
		path:"/my",
		name:My,
		component:My
	 },
	{
		path:"/more",
		name:More,
		component:More
	 },
    {
      path:"/login",
      name:Login,
      component:Login
    },
    {
      path:"/regist",
      name:Regist,
      component:Regist
    }
  ]
})
