<script>
export default{
    methods:{
        hidePop(){
            this.$emit("hide-arrive", false)
            console.log("hello")
        }, 
        search(){
            console.log("Hello")
            this.$emit("result", this.$refs.takeoff.value)
        }
    }
}
</script>
<template>
     <div class="login_cover">
        <div class="search-arrrive">
            <div  class="arrrive-iconsearch" @click="search()">
                <font-awesome-icon :icon="['fas', 'search']" />
            </div>
            <div class="arrrive-input">
                <input type="text" placeholder="Search your fly" ref="takeoff">
            </div>
            <div @click="hidePop()" class="arrrive-iconclose">
                <div class="signup-close-icon">
                        <font-awesome-icon :icon="['fas', 'xmark']" />
                </div>
            </div>
        </div>
     </div>
</template>