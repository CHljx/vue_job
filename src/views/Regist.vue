<template>
  <div class="wrapper pb10">
    <logo-header></logo-header>
    <div class="wrapper-form">
      <input type="number" placeholder="手机号码" v-model="phone" />
    </div>
    <div class="wrapper-form">
      <div class="box-flex">
        <div class="item-flex">
          <input type="text" placeholder="短信验证码" v-model="identy_code"/>
        </div>
        <div class="item-flex">
          <a class="footer-btn" v-bind:class="{disabled:!phone&&sendMsgStatus}"  style="margin-top:2px;" v-on:click="sendMessage">{{sendMsgText}}</a>
        </div>
      </div>
    </div>
    <div class="wrapper-form">
      <input type="password" placeholder="填写密码" v-model="password" />
    </div>
    <div class="wrapper-form">
      <input type="password" placeholder="确认密码" v-model="password_confirm" />
    </div>
    <div class="wrapper-form">
      <input type="text" placeholder="推荐账号(可不填)" v-model="invite_code" />
    </div>
    <div class="wrapper-form">
      <a class="btn m0" v-on:click="doRegist">立即注册</a>
    </div>
    <div class="wrapper-form text-right">
      <a href="#login" class="gray-link">已有账号请点此登录</a>
    </div>
  </div>
</template>
<script>
  import {MESSAGE_TYPE,PHONE_CHECK,LOGIN_DO,PWD_UPDATE,REGIST_DO} from '../store/module/login.js';
  import LogoHeader from '../components/LogoHeader.vue';
  export default{
      data(){
          return{
            sendMsgStatus:1,
            sendMsgTime:60,
            phone:"",
            password:'',
            password_confirm:'',
            invite_code:'',
            identy_code:'',
            interval:null
          }
      },
      computed:{
          sendMsgText(){
              if(this.sendMsgStatus){
                  return "点击发送验证码"
              }else  if(!this.sendMsgText()){
                  return "重新发送验证码("+this.sendMsgTime+"s)";
              }
          }
      },
      components:{LogoHeader},
      destroyed(){
          if(this.interval){
            clearInterval(this.interval);
            this.interval=null;
          }
      },
      methods:{
          sendMessage(){
              if(!this.phone||!this.sendMsgStatus){
                  return;
              }
//              this.$store.dispatch(PHONE_CHECK,{
//                  phone:this.phone
//              }).then(this.checkPhone.bind(this),this.checkPhone.bind(this))
            this.sendMsgStatus=0;
            this.$store.dispatch(MESSAGE_TYPE,this.phone).then(
              this.handlerMessage.bind(this),this.handlerMessage.bind(this)
            )
          },
          checkPhone(){

          },
          checkRegist(){
              if(!this.phone){
                  alert("手机号码不能为空");
                  return false;
              }

              if(!this.identy_code) {
                alert("短信验证码不能为空");
                return false;
              }

              if(!this.password){
                  alert("密码不能为空");
                  return false;
              }
              if(this.password!=this.password_confirm){
                  alert("2次密码输入不一致");
                  return false;
              }
              return true;
          },
          doRegist(){
              if(this.checkRegist()){
                  this.$store.dispatch(REGIST_DO,{
                    phone:this.phone,
                    identy_code:this.identy_code,
                    password:this.password,
                    invite_code:this.invite_code
                  }).then(function(oRes){
                      if(oRes.info=="success"){
                          alert("注册成功");
                          window.location.hash="#login"
                      }else{
                          alert(oRes.info=="exist"?"用户名已存在":"验证码错误");
                      }
                  },function(oRes){
                      alert(oRes.msg)
                  })
              }
          },
          handlerMessage(res){
              var _self = this;
              if(res.info.status==1){
                  alert("手机验证码发送成功，请注意查收")
                _self.sendMsgStatus=0;
                _self.interval=setInterval(function(){
                    _self. sendMsgTime--;
                    if(_self.sendMsgTime==0){
                        clearInterval(_self.interval);
                        _self.interval=null;
                        _self.sendMsgStatus=1;
                        _self.sendMsgTime=60;
                    }
                  },1000)
              }else{
                  _self.sendMsgStatus=1;
                  alert(res.info.msg);
              }
          }
      }
  }
</script>
<style>

</style>
