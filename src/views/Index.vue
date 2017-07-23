<template>
	<div>
		<swiper :options="swiperOption" ref="mySwiper">
		    <!-- slides -->
		    <swiper-slide>
			<img src="http://xy.mianfeibang.cn/themes/xy_job/Public/image/ad_3.jpg"/>
		    </swiper-slide>
		    <swiper-slide>
			<img src="http://xy.mianfeibang.cn/themes/xy_job/Public/image/ad_2.jpg"/>
		    </swiper-slide>
		    <swiper-slide>
			<img src="http://xy.mianfeibang.cn/themes/xy_job/Public/image/ad_1.jpg"/>
		    </swiper-slide>
		    
		    <div class="swiper-pagination"  slot="pagination"></div>
		    <div class="swiper-scrollbar"   slot="scrollbar"></div>
		  </swiper>
		<job-type v-bind:showImg=true></job-type>
		<scroll-tip></scroll-tip>
		<job-list v-bind:header="'推荐任务'" v-bind:searchParam="listParam"></job-list>
	</div>
</template>
<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
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
			},
			swiperOption: {
			  autoplay: 3000,
			  height:400,
			  pagination : '.swiper-pagination',
			  paginationClickable :true,
			  scrollbar:'.swiper-scrollbar',
			  mousewheelControl : true,
			  observeParents:true,
			}
		}
	},
	computed:{
	},
	methods:{
		changeType(id){
			window.location.href="#job?id="+id;
		},
		 onSlideChangeStart (currentPage) {
			console.log('onSlideChangeStart', currentPage);
		},
		onSlideChangeEnd (currentPage) {
		    console.log('onSlideChangeEnd', currentPage);
		}
	},
	created(){
		this.$store.state.footerIndex=0;
		this.$store.state.showFooter=true;
	},
	components:{JobList,ScrollTip,JobType,swiper,swiperSlide}
}
</script>
<style>
.swiper-wrapper img{
	width:100%;
	height:100%;
}
</style>