<script>
import { RouterLink } from 'vue-router'
export default {
    props:{
        isLogin: Boolean
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

                <div class="header-container_logo">
                    <img src="https://cdn.discordapp.com/attachments/1072404748818456578/1130747259026411661/FlySite.png" />
                </div>

                <div class="header-container_component">
                    <div class="header-container_component--schedule">
                        <RouterLink to='/'>Trang chủ</RouterLink>
                    </div>
                    <div class="header-container_component--schedule">
                        <RouterLink to='/schedule'>Lịch chuyến bay</RouterLink>
                    </div>
                    <div class="header-container_component--passenger">
                        <RouterLink to='/passenger'>Hành khách</RouterLink>
                    </div>
                    <div class="header-container_component--order">
                        <RouterLink to='/history'>Lịch sử đặt vé</RouterLink>
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


