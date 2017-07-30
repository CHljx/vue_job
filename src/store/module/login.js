import Vue from 'vue';
import {HOST,DOMAIN_HOST} from '../config';
export const REQ_ACTION=DOMAIN_HOST+"index.php";
export const MESSAGE_TYPE="getPhoneMessage";
export const PHONE_CHECK="checkPhone";
export const LOGIN_DO="doLogin";
export const PWD_UPDATE="updatePwd";
export const REGIST_DO="doRegist";
export default{
  actions:{
    [MESSAGE_TYPE]:({commit},phone)=>{
      return new Promise((resovle,reject)=>{
        Vue.http.options.emulateJSON = true;
        Vue.http.post(REQ_ACTION+"?g=Job&m=UserMobile&a=phone_identy&ajax=1",{
            phone:phone
        }).then((oRes)=>{
           resovle(oRes.body)
        },(oRes)=>{
          reject({
            info:{
              msg:REQ_ACTION+"请求失败"
            }
          });
        });

      })
    },
    [LOGIN_DO]:({commit},param)=>{
      return new Promise((resovle,reject)=>{
        Vue.http.post(REQ_ACTION+"?g=Job&m=UserMobile&a=login_identy&ajax=1",{
            password:param.password,
            phone:param.phone
        }).then((oRes)=>{
          resovle(oRes.body)
        },(oRes)=>{
          reject({
            msg:REQ_ACTION+"请求失败"
          });
        });

      })
    },
    [PHONE_CHECK]:({commit},param)=>{
      return new Promise((resovle,reject)=>{
        Vue.http.options.emulateJSON = true;
        Vue.http.post(REQ_ACTION,{
            g:"Job",
            m:"UserMobile",
            a:"user_reset",
            phone:param.phone
        }).then((oRes)=>{
          resovle(oRes.body)
        },(oRes)=>{
          reject({
            info:{
              msg:REQ_ACTION+"请求失败"
            }
          });
        });

      })
    },
    [PWD_UPDATE]:({commit},param)=>{
      return new Promise((resovle,reject)=>{
        Vue.http.jsonp(REQ_ACTION,{
          params:{
            g:"Job",
            m:"UserMobile",
            a:"user_reset",
            ajax:1,
            phone:param.phone,
            identy_code:param.identy_code,
            password:param.password
          }
        }).then((oRes)=>{
          resovle(oRes.body)
        },(oRes)=>{
          reject({
            info:{
              msg:REQ_ACTION+"请求失败"
            }
          });
        });

      })
    },
    [REGIST_DO]:({commit},param)=>{
      return new Promise((resovle,reject)=>{
        Vue.http.post(REQ_ACTION+"?g=Job&m=UserMobile&a=submit_identy&ajax=1",{
          phone:param.phone,
          identy_code:param.identy_code,
          password:param.password,
          invite_code:param.invite_code
        }).then((oRes)=>{
          resovle(oRes.body)
        },(oRes)=>{
          reject({
              msg:REQ_ACTION+"请求失败"
          });
        });

      })
    },
  }
}
