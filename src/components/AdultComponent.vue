<script>
export default {
    data() {
        return {
            numAdult: 1,
            numChild: 1,
            numBaby: 1
        }
    },

    methods: {
        hidePopUp() {
            this.$emit("hide-adult", false)
        },
        increaseAdult(type) {
            switch (type) {
                case 1:
                    this.numAdult++;
                    break;
                case 2:
                    this.numChild++;
                    break;
                default:
                    this.numBaby++;
                    break;
            }

        },
        lowAudult(type) {
            switch (type) {
                case 1:
                    this.numAdult--
                    if (this.numAdult < 0) {
                        this.numAdult = 0
                    }; break;
                case 2:
                    this.numChild--;
                    if (this.numChild < 0) {
                        this.numChild = 0
                    } break;
                default:
                    this.numBaby--;
                    if (this.numBaby < 0) {
                        this.numBaby = 0
                    }
                    break;
            }
        },
        transter(){
            var numa = this.numAdult
            var numb = this.numChild
            var numc = this.numBaby
            var quantityAdult = {
                numAdult: numa,
                numChild: numb,
                numBaby: numc
            }

            this.$emit("call-tohome", quantityAdult)
        }

    }
}
</script>
<template>
    <div class="login_cover">

        <div class="adult-wrap">
            <div class="adult">

                <div class="adult-btnClose">
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
                        <div class="adult-large_quantity">
                            <div class="adult-large_quantity-minus" @click="lowAudult(1)">
                                <font-awesome-icon :icon="['fas', 'minus']" />
                            </div>
                            <div class="adult-large_quantity-number">
                                <span>{{ numAdult }}</span>
                            </div>
                            <div class="adult-large_quantity-plus" @click="increaseAdult(1)">
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
                        <div class="adult-child_quantity">
                            <div class="adult-child_quantity-minus" @click="lowAudult(2)">
                                <font-awesome-icon :icon="['fas', 'minus']" />
                            </div>
                            <div class="adult-child_quantity-number">
                                <span>{{ numChild }}</span>
                            </div>
                            <div class="adult-child_quantity-plus" @click="increaseAdult(2)">
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
                        <div class="adult-super-child_quantity">
                            <div class="adult-super-child_quantity-minus" @click="lowAudult(3)">
                                <font-awesome-icon :icon="['fas', 'minus']" />
                            </div>
                            <div class="adult-super-child_quantity-number">
                                <span>{{ numBaby }}</span>
                            </div>
                            <div class="adult-super-child_quantity-plus" @click="increaseAdult(3)">
                                <font-awesome-icon :icon="['fas', 'plus']" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="btn-adult">
                <button  @click="hidePopUp(), transter()" class="btn-quantity">Chọn</button>
            </div>
        </div>

    </div>
</template>