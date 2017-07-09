import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/Index.vue'
import Job from '@/views/Job.vue'
import Detail from '@/views/Detail.vue'
import Commit from '@/views/Commit.vue'
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
    }
  ]
})
