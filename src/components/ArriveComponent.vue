<script>
export default{
    methods:{
        hidePop(){
            this.$emit("hide-arrive", false)
        },
        transfer(){
            console.log("Arrive")
            this.$emit("connect-arrive", this.$refs.arrive.value))
        }, 
        }
    }
}
</script>
<template>
     <div class="login_cover">
        <div class="search-arrrive">
            <div @click="transfer()"  class="arrrive-iconsearch">
                <font-awesome-icon :icon="['fas', 'search']" />
            </div>
            <div class="arrrive-input">
                <input ref="arrive" type="text" placeholder="Search your fly">
            </div>
            <div @click="hidePop()" class="arrrive-iconclose">
                <div class="signup-close-icon">
                        <font-awesome-icon :icon="['fas', 'xmark']" />
                </div>
            </div>
        </div>
     </div>
</template>