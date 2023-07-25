<script>
export default{
    props:{
        isPop: Boolean
    },
    methods:{
        hidePop(){
            this.$emit("hide-takeoff", false)
        }
    }
}
</script>
<template>
     <div class="login_cover">
        <div class="search-takeoff">
            <div class="takeoff-iconsearch">
                <font-awesome-icon :icon="['fas', 'search']" />
            </div>
            <div class="takeoff-input">
                <input type="text" placeholder="Search your fly">
            </div>
            <div @click="hidePop()" class="takeoff-iconclose">
                <div class="signup-close-icon">
                        <font-awesome-icon :icon="['fas', 'xmark']" />
                </div>
            </div>
        </div>
     </div>
</template>
<style>


</style>