<script>
export default{
    props: [
        "usr"
    ],
    data(){
        return{
            name: '',
            email: ''
        }
    },
    methods:{
        close(){
            this.$emit("call-to-close", false)
        }
    },
    mounted(){
        this.name = this.usr[0].TenKH
            this.email = this.usr[0].Email
    },
    watch:{
        usr(){
            this.name = 'Đã đăng xuất'
            this.email = 'Đã đăng xuất'
        }
    }
}
</script>
<template>
    <div class="user-info">
        <div class="user-info-wrap">

            <div class="user-info-close">
                <font-awesome-icon @click="close()" :icon="['fas', 'xmark']" />
            </div>
            <div class="user-info-head">

            </div>
            <div class="user-info-body">
                <div class="user-infor-body_img">
                    <img src="https://img.freepik.com/free-icon/user_318-159711.jpg" alt="">
                </div>

                <div class="user-info-body-content">
                    <span>{{ name }}</span>
                </div>

                <div class="user-info-email">
                    <div class="info-email-icon">
                        <font-awesome-icon :icon="['fas', 'at']" />
                    </div>
                    <div class="info-email-content">
                        <span>{{ email }}</span>
                    </div>
                </div>

                <div class="user-info-logout">
                    <button @click="$emit('logout')">Đăng xuất</button>
                </div>
            </div>

        </div>
    </div>
</template>