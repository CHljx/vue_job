<template>
  <div class="wrapper pb10">
    <logo-header></logo-header>
    <div class="wrapper-form">
      <input type="number" placeholder="请输入手机号码" v-model="phone" />
    </div>
    <div class="wrapper-form">
      <input type="password" placeholder="请输入登录密码" v-model="password" />
    </div>
    <div class="wrapper-form">
      <a class="btn m0" v-on:click="doLogin">登录</a>
    </div>
    <div class="wrapper-form text-right">
      <a href="#regist" class="gray-link">用户注册</a>
    </div>
  </div>
</template>
<script>
  import {LOGIN_DO} from '../store/module/login.js';
  import LogoHeader from '../components/LogoHeader.vue';
  export default{
      data(){
          return {
              phone:"",
              password:""
          }
      },
      components:{LogoHeader},
      methods:{
          checkLogin(){
              if(!this.phone){
                  alert("请填写手机号码");
                  return false;
              }
              if(!this.password){
                  alert("请填写密码");
                  return false;
              }
              return true;
          },
          doLogin(){
              this.checkLogin()&&this.$store.dispatch(LOGIN_DO,{
                  phone:this.phone,
                  password:this.password
              }).then((oRes)=>{
                     if(oRes.info=="success"){
                         window.location.hash="#my"
                     }else if(oRes.info=="fail"){
                         alert("登陆失败（密码错误）");
                     }else if(oRes.info=="no_user"){
                       alert("用户不存在");
                     }else{
                         alert(oRes.info)
                     }
              },(oRes)=>{
                  alert(oRes.msg)
              })
          }
      }
  }
</script>
