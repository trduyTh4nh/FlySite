<script>
import { RouterLink } from 'vue-router'
import { getUserCurrentByEmail } from '../helper'
export default {
    props:{
        isLogin: Boolean,
        isUser: Boolean,
        showUser: Boolean,
        DynamicEmail: String
    },
    data(){
        return {
            usr: {},
            ten,
        }
    },
    // watch:{
    //     DynamicEmail: function(newVal, oldVal){
    //         console.log(newVal + " new, old " + oldVal)
    //         getUserCurrentByEmail(newVal).then(
    //             e => {
    //                 this.usr = e
    //                 this.ten = this.usr[0].TenKH
    //                 console.log(this.ten)
    //             }
    //         )
    //     }
    // },
    mounted(){
    
        
    },

    components: {
        RouterLink
    },
    methods: {
        openSignin() {
            this.$emit("signin-callback", true)
        },
        openSignUp() {
            this.$emit("signup-callback", true)
        },
        loginSuccess(){
            this.$emit("login-success", true)
        },
        check(){
            console.log(this.DynamicEmail);
        }
        
    },
    data() {
        return {
            popUpButton: true
        }
    }
}


</script>
<template>
    <div id="web" style="position: relative">
        <div class="header" style="z-index: 1">
            <div class="header-container" style="width: 100%; position: absolute">

                <div @click="check()" class="header-container_logo">
                    <img src="https://cdn.discordapp.com/attachments/1072404748818456578/1130747259026411661/FlySite.png" />
                </div>

                <div v-if="DynamicEmail != 'Admin69'" class="header-container_component">
                    <div class="header-container_component--schedule">
                        <RouterLink to='/'>Trang chủ</RouterLink>
                    </div>
                    <div class="header-container_component--schedule">
                        <RouterLink to='/schedule'>Chuyến bay</RouterLink>
                    </div>
                    <div class="header-container_component--passenger">
                        <RouterLink to='/passenger'>Về chúng tôi</RouterLink>
                    </div>
                    <div class="header-container_component--order">
                        <RouterLink to='/history'>Lịch sử đặt vé</RouterLink>
                    </div>
                </div>

                <div  v-if="isUser = showUser" class="header-container_btnOption">
                    <div class="imgwrap">
                        <img src="https://img.freepik.com/free-icon/user_318-563642.jpg?w=360">
                    </div>
                    <div  class="header-name-user">
                        <p>{{ DynamicEmail }}</p>
                    </div>
                </div>

                <div v-if="isLogin"  class="header-container_btnOption">
                    <button @click="openSignin()" class="btn_sigin">
                        <p>Đăng nhập</p>
                    </button>
                    <button @click="openSignUp()" class="btn_sigup">
                        <p>Đăng ký</p>
                    </button>
                </div>

            </div>
        </div>

    </div>
</template>


