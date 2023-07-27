<script>
import { faVuejs } from '@fortawesome/free-brands-svg-icons';
import { regis } from '../helper';
import { faArrowLeftRotate } from '@fortawesome/free-solid-svg-icons';
export default{
    methods:{
        closeSignup(){
            this.$emit("signup-callback-close", false)
        },
        register(){
            var value = {
                CCCD: '308239585',
                DiaChi: 'Tây Ninh',
                Email: this.$refs.email.value,
                HinhAnh: '',
                MaKH: 'KH01',
                MatKhau: this.$refs.pass.value,
                SDT: this.$refs.phone.value,
                TenKH: this.$refs.username.value
            }
            if(value.MatKhau.length > 6 && value.MatKhau == this.$refs.repass.value){
                regis(value).then(e => alert("Đăng kí thành công!"))
                
            
            }
            else{
                alert("Không thành công!")
            }
        }
        
        
    }
}

</script>
<template>
<div class="login_cover" >
    <div id="signup">
        <div class="signup-wrap">
            <div @click="closeSignup()" class="signup-close">
                <div class="signup-close-icon">
                    <font-awesome-icon :icon="['fas', 'xmark']" />
                </div>
            </div>
           <div class="wrap-header">
            <div class="signup-tittle">
                <h1>Sign up</h1>
            </div>
           </div>
         
            <div class="signup-wrap-component">
                <div class="component-input">
                    <div class="signup-email">
                        <input ref="email" type="email" placeholder="Enter your email">
                    </div>
                    <div class="signup-username">
                        <input ref="username" type="text" placeholder="User name">
                    </div>
                    <div class="signup-phone">
                        <input ref="phone" type="text" placeholder="Phone">
                    </div>
                    <div class="component-password">
                        <div class="signup-pass">
                            <div class="input-icons">
                                <input ref="pass" type="password" placeholder="Passcode">
                                <font-awesome-icon :icon="['fas', 'eye']" />
                            </div>
                        </div>
                        <div class="signup-repass">
                            <div class="input-icons">
                                <input ref="repass" type="password" placeholder="Repasscode">
                                <font-awesome-icon :icon="['fas', 'eye']" />
                            </div>
                        </div>
                    </div>
                </div>
                <!-- <div class="signup-logo">
                    <img src="../assets/logo_main.svg">
                </div> -->
            </div>

            <div class="signup-question">
                <span>Having trouble in sigin?</span>
            </div>

            <div  @click="register()" class="signup-button">
                <button>Signup</button>
            </div>

            <!-- <div class="signup-bottom">
                <div class="signup-bottom_tittle">
                    <span>Don't have an account?</span>
                </div>
                <div class="signup-bottom_reques">
                    <span>Request Now</span>
                </div>
            </div> -->
        </div>
    </div>
</div>
    
 
</template>