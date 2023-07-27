<script>
export default{
    methods:{
        hidePopUp(){
            this.$emit("hide-adult", false)
        }
    }
}
</script>
<template>
    <div class="login_cover">

        <div class="adult">
            
            <div  class="adult-btnClose">
                <font-awesome-icon @click="hidePopUp()" icon="circle-xmark" />
            </div>

            <div class="adult-wrap">
                <div class="adult-large">
                    <div class="adult-large_icon">
                        <font-awesome-icon :icon="['fas', 'user']" />
                    </div>
                    <div class="adult-large_text">
                        <p>Người lớn</p>
                    </div>
                    <div class="adult-large_quantity" >
                        <div class="adult-large_quantity-minus">
                            <font-awesome-icon :icon="['fas', 'minus']" />
                        </div>
                        <div class="adult-large_quantity-number">
                            <span>1</span>
                        </div>
                        <div class="adult-large_quantity-plus">
                            <font-awesome-icon :icon="['fas', 'plus']" />
                        </div>

                    </div>
                </div>


                <div class="adult-child">
                    <div class="adult-child_icon">
                        <font-awesome-icon :icon="['fas', 'child']" />
                    </div>
                    <div class="adult-child_text">
                        <p>Trẻ em</p>
                    </div>
                    <div class="adult-child_quantity" >
                        <div class="adult-child_quantity-minus">
                            <font-awesome-icon :icon="['fas', 'minus']" />
                        </div>
                        <div class="adult-child_quantity-number">
                            <span>1</span>
                        </div>
                        <div class="adult-child_quantity-plus">
                            <font-awesome-icon :icon="['fas', 'plus']" />
                        </div>

                    </div>
                </div>


                <div class="adult-super-child">
                    <div class="adult-super-child_icon">
                        <font-awesome-icon :icon="['fas', 'baby-carriage']" />
                    </div>
                    <div class="adult-super-child_text">
                        <p>Em bé</p>
                    </div>
                    <div class="adult-super-child_quantity" >
                        <div class="adult-super-child_quantity-minus">
                            <font-awesome-icon :icon="['fas', 'minus']" />
                        </div>
                        <div class="adult-super-child_quantity-number">
                            <span>1</span>
                        </div>
                        <div class="adult-super-child_quantity-plus">
                            <font-awesome-icon :icon="['fas', 'plus']" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
</template>