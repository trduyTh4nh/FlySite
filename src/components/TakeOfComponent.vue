<script>
export default{
    props:{
       
    },
    methods:{
        hidePop(){
            this.$emit("hide-takeoff", false)
        },
        truyen(){
            this.$emit("takeoff-connect", this.$refs.takeoff.value)
        }
    },
    data(){
        return{
            
        }
    }
}
</script>
<template>  
     <div class="login_cover">
        <div class="search-takeoff">
            <div @click="truyen()" class="takeoff-iconsearch">
                <font-awesome-icon :icon="['fas', 'search']" />
            </div>
            <div class="takeoff-input">
                <input ref="takeoff" type="text" placeholder="Search your fly">
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