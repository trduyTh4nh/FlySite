<script>
export default{
    methods: {
        hidePop(){
            this.$emit("close-popUp", false)
        },
        transferdata(tickeyType){
            console.log(tickeyType)
            this.$emit("callback-tiket", tickeyType)
        }

    }
}
</script>
<template>
    <div class="ticket_type_wrapper">
        <div class="type_wrapper">
            <div class="title">
                <h2>Chọn hạng vé</h2>
                <div  @click="hidePop()" class="icon_wrapper">
                    <font-awesome-icon :icon="['fas', 'xmark']" />
                </div>
            </div>
            <div @click="transferdata('Phổ thông')" class="type">
                <font-awesome-icon :icon="['fas', 'ticket']" />                
                <p class="ticket-economy">Phổ thông</p>
                <p><b>+0đ</b></p>
            </div>
            <div @click="transferdata('Thương gia')"  class="type">
                <font-awesome-icon :icon="['fas', 'crown']" />
                <p>Thương gia</p>
                <p><b>+2.000.000đ</b></p>
            </div>
        </div>
    </div>
</template>
<style scoped>
    .icon_wrapper{
        transition: all ease 0.2s;
        cursor: pointer;
        padding: 4px 8px;
        border-radius: 50px;
        background-color: rgb(255, 156, 156);
    }

    .icon_wrapper:hover{
        transform: rotate(45deg);

        background-color: #f0f0f0;
    }
    .title{
        box-sizing: border-box;
        padding: 16px;
        width: 100%;
        display: flex;
        justify-content: space-between;
    }
    .title svg{
        font-size: 24px;
    }
    .type svg{
        color: black;
        font-size: 24px;
    }
    .type{
        transition: ease 0.2s;
        gap: 15px;
        cursor: pointer;
        display: flex;
        align-items: center;
        padding: 15px;
    }
    .type:hover{
        background-color: #f0f0f0;
    }
    .type_wrapper{
        
        overflow: hidden;
        display: flex;
        flex-direction: column;
        background-color: white;
        border-radius: 10px;

        width: 25%;
    }
    .ticket_type_wrapper{
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1;
        width: 100vw;
        height: 100vh;
        position: fixed;
        background-color: rgba(0, 0, 0, 0.398);
    }
</style>