import Vue from 'vue';
import {HOST} from '../config';
export const JOB_TYPE_ACTION=HOST+"static/jobType.json";
export const JOB_TYPE="getJobType";
export const JOB_LIST_ACTION=HOST+"static/jobList.json";
export const JOB_LIST="getJobList";
export const JOB_APPLY_ACTION=HOST+"static/jobApply.json";
export const JOB_APPLY="applyJob";
export const JOB_TIPS_ACTION=HOST+"static/jobTips.json";
export const JOB_TIPS="getJobTips"
export default{
	actions:{
		[JOB_TYPE]:()=>{
			return new Promise((resovle,reject)=>{

				Vue.http.get(JOB_TYPE_ACTION).then((oRes)=>{
					resovle(oRes.body)
				},(oRes)=>{
					reject({
						message:JOB_TYPE_ACTION+"请求失败"
					});
				})
			})
		},
		[JOB_LIST]:({commit},params)=>{
			return new Promise((resovle,reject)=>{
				Vue.http.get(JOB_LIST_ACTION,{
					params:params
				}).then((oRes)=>{
					resovle(oRes.body)
				},(oRes)=>{
					reject({
						message:JOB_LIST_ACTION+"请求失败"
					});
				})
			})
		},
		[JOB_APPLY]:({commit},params)=>{

			return new Promise((resovle,reject)=>{

				Vue.http.get(JOB_APPLY_ACTION,{
					params:params
				}).then((oRes)=>{
						resovle(oRes.body)
					},(oRes)=>{
						reject({
							message:JOB_APPLY_ACTION+"请求失败"
						});
				});
			});
		},
		[JOB_TIPS]:({commit})=>{
			return new Promise((resovle,reject)=>{

				Vue.http.get(JOB_TIPS_ACTION).then((oRes)=>{
					resovle(oRes.body)
				},(oRes)=>{
					reject({
						message:JOB_TIPS_ACTION+"请求失败"
					});
				})
			})
		}
	}
}