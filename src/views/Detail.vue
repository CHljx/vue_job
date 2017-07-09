<template>
	<div>
		<job-item v-bind:item="item"></job-item>
		<div class="wrapper mt-10">
			<div class="wrapper-header">任务说明</div>
			<div class="job-content" v-html="item.content">

			</div>
		</div>
		<footer class="app-footer">
			<div class="item padding0">
				<a class="footer-btn" v-on:click="doAjax">
					<span v-if="item.status==0">申请任务</span>
					<span v-if="item.status==1">提交数据</span>
					<span v-if="item.status==2">待审核</span>
				</a>
			</div>
			
		</footer>
	</div>
</template>
<script>
import JobItem from '../components/JobItem.vue';
import {JOB_APPLY} from '../store/module/job.js';
export default{
	data(){
		return {
			item:{
					"image":"http://img.mayivzhuan.com/task/2016-02-24//56cd4d94ce3b4.png",
					"title":"素质调研A C170629 限制吉林",
					"date":"截至：2017-07-06 15:16:39",
					"limit":"不限",
					"type":"网络调查",
					"color":"rgb(126, 201, 93)",
					"money":"¥3.00",
					"id":1,
					"content":'<p><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">注意事项：</span></p><p><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">1、必须走以下链接，输入姓名手机号注册，不走链接无效。</span></p><p><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">2、此APP是招商银行掌上生活，安全可靠。</span></p><p><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">3、有任何问题加QQ群：1559982找管理员辉哥</span></p><p><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">4、以前<span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">做过</span>掌上生活的不要再做。</span></p><p><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">5、不做不要申请。随时会换码。做完及时提交。</span></p><p><br></p><p><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">一、打开以下链接输入姓名手机号，然后下载招行掌上生活APP。必须走链接，不走链接无效</span></p><p><a href="https://mlife.cmbchina.com/a/rmmIne" _src="https://mlife.cmbchina.com/a/rmmIne" style="text-decoration: underline; font-family: arial, helvetica, sans-serif; font-size: 20px;"><span style="font-family: arial, helvetica, sans-serif; font-size: 20px;"><strong>https://mlife.cmbchina.com/a/rmmIne</strong></span></a><br></p><p><strong><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">下载A</span><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">PP后，点击下面 【我的】 点头部【登录/注册】</span></strong><br></p><p><br><a href="https://mlife.cmbchina.com/a/v2uMZr" _src="https://mlife.cmbchina.com/a/v2uMZr"></a></p><p><img src="http://img.mayivzhuan.com/ueditor/2017/07/1499583926325062.png" title="1498707433319510.png" alt="blob.png" width="265" height="496" style="width: 265px; height: 496px;"><img src="http://img.mayivzhuan.com/ueditor/2017/07/1499583926138885.png" title="1498707408795270.png" alt="blob.png" width="247" height="495" style="width: 247px; height: 495px;"></p><p><br></p><p><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">二、登录进去后，点实名认证，绑定银行卡。</span><br></p><p><br></p><p><img src="http://img.mayivzhuan.com/ueditor/2017/07/1499583926934607.png" title="1498708117648445.png" alt="blob.png" width="274" height="385" style="width: 274px; height: 385px;"></p><p><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">三、绑定成功后提交 &nbsp;姓名+手机号+以下截图审核</span></p><p><img src="http://img.mayivzhuan.com/ueditor/2017/07/1499583926298898.png" title="1498708202996228.png" alt="blob.png" width="260" height="465" style="width: 260px; height: 465px;"></p>',
					"status":1
			}
		}
	},
	methods:{
		doAjax(){
			if(this.item.status==0){
				this.$store.dispatch(JOB_APPLY,{
					id:this.item.id
				}).then(this.doCallback.bind(this),this.doCallback.bind(this));
			}else if(this.item.status==1){
				this.gotoCommit();
			}
		},
		doCallback(oRes){
			if(oRes&&oRes.code==1){
				alert(oRes.data.message);
				this.gotoCommit();
			}else{
				alert(oRes.message);
			}
		},
		gotoCommit(){
			window.location.href="#commit?id="+this.item.id;
		}
	},
	created(){
		this.$store.state.showFooter=false;
	},
	components:{JobItem}
}
</script>
<style>
@import "../assets/css/jobdetail.css"
</style>