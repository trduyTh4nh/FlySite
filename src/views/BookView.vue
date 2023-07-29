<script >
import Ticket from '../components/Ticket.vue';
import Title from '../components/TitleComponent.vue'
import {addHoaDon} from '../helper'
    export default{
    props:[
        "usr"
    ],
    data(){
        return {
            value: '',
            tick: JSON.parse(this.$route.params.ticket),
        }
    },
    components: { Ticket, Title },
    mounted(){
        
    },
    methods:{
        checkCredits(){
            var v = this.value
            console.log(v)
            if(v.length > 8 && v.length < 10){
                this.value = this.value + ' '
            }
            if(v.length > 3 && v.length < 5){
                console.log(this.value)
                this.value = this.value + ' '
            }
            this.value = this.value.replace(new RegExp('[a-zA-z]+'),'')
        },
        thanhToan(){
            var DonGia = this.tick.GiaVe
            var email = this.usr[0].Email
            const cthd = {
                MaVe: this.tick.MaVe,
                MaHD: "",
                DonGia: DonGia,
                SLHanhKhach: 1,
                Email: email,
                MaKH: "",
                NgayLap: "",
                TongTien: DonGia
            }
            addHoaDon(cthd)
        }
    }
}
</script>
<template>
    <Title></Title>
    <div class="book_wrapper">
        <h1 style="color: white">Thanh toán</h1>
        <Ticket :ticket="tick" :bookButton="true"></Ticket>
        <div class="div_checkDetail">
            <div class="Cuss_bok">
                <div class="div_Cuss">
                    <div class="payDel">
                        <p class="text_payDel">Thông tin khách hàng</p>
                        <div class="del_inf">
                            <div class="del_inf1">
                                <p class="headed_info">Họ tên</p>
                                <p class="main_info">{{ usr[0].TenKH }}</p>
                            </div>
                            <div class="del_inf1">
                                <p class="headed_info">ID</p>
                                <p class="main_info">{{ usr[0].CCCD }}</p>
                            </div>
                            <div class="del_inf1">
                                <p class="headed_info">Địa chỉ</p>
                                <p class="main_info">{{ usr[0].DiaChi }}</p>
                            </div>
                            <div class="del_inf1">
                                <p class="headed_info">SĐT</p>
                                <p class="main_info">{{ usr[0].Email }}</p>
                            </div>
                            <div class="del_inf1">
                                <p class="headed_info">Confirm ID</p>
                                <button class="outlined">
                                    <a class="text_uploag">Upload Picture</a>
                                </button>
                            </div>
                            <div class="del_inf1">
                                <p class="headed_info">Confirm Passport</p>
                                <button class="outlined">
                                    <a class="text_uploag">Upload Picture</a>
                                </button>
                            </div>
                        </div>
                            
        
                    </div>  
                </div>
            </div>
            <div class="payment_inf">
                <div class="paym_inf">
                    <p class="text_payDel">Thông tin thanh toán</p>
                </div>
                <div class="sum_price">
                    <p style="text-align: left; height: 30%;width:100%;font-size: 25px;font-weight: bold;">{{ tick.GiaVe }} VND</p>
                    <p style="text-align: left;">Thành tiền</p>
                </div>
                <div class="detal_payInf">
                    
                    <input class="card_input" placeholder="CHỦ THẺ" />

                    <input v-model="value" maxlength="14" @input="checkCredits()" ref="number" placeholder="4123 4567 8901" class="payment_cardnumber" />
                    <div class="paym_visa">
                        <img class="img_visa" src="../assets/Visa_Inc._logo.svg" alt="">
                        <div class="del_inf1">
                            <p class="main_info1">Ngày hết hạn</p>
                            <input class="card_input" placeholder="MM/YY" />
                        </div>
                        <div class="del_inf1">
                            <p class="main_info1">CVV</p>
                            <input class="card_input" type="number" maxlength="3" placeholder="123" />
                        </div>
                    </div>
                </div>
                
                <button class="btn_start_bok" @click="thanhToan()">
                    <p href="paySuccess.html">Bắt đầu đặt vé</p>
                </button>
                
        
            </div>
        </div>
    </div>
</template>
<style scoped>

*{
    margin: 0 ;
    padding: 0;
    
}


.div_mainTop{
    position: relative;
    width: 100%;
    height: 350px;
    display: flex;

    
}
#imgTop{
    position: absolute;
    width: 100%;
    height: 350px;
}
/* .img_mainTop{
    width: 100%;
    height: 350px;
    border-radius: 48px;

} */
.cover_opacity{
    position: absolute;
    width: 100%;
    height: 350px;
    background-color:black;
    opacity: 0.5;
    border-radius: 0 0 48px 48px;
}
.div_navhead{
    height: 20%;
    width:100%;
    position: absolute;
    display: flex;
    margin-top: 20px;
    justify-content: space-between;
    box-sizing: border-box;
}
.header-container {
    width: 100%;
    align-items: center;
    display: flex;
    justify-content: space-between;
}
.header-container_component{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
}
.header-container_logo img{
    width: 100px;
    margin: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.header-container_component a {
    transition: linear 0.1s;
    font-weight: 600;
    text-decoration: none !important;
    margin: 10px 50px 10px 50px;
    font-size: 16px;
    color: white;
    
}
.header-container_btnOption{
    display: flex;
    margin: 10px 0px 10px 0px;
    flex-wrap: wrap;
}
.btn_sigin{
    margin-left: 10px;
    margin-right:10px;
    margin-top: 10px;

}
.btn_sigin input{   
    font-weight: 600;
    transition: linear 0.2s;
    width: 110px;
    height: 40px;
    border: 1px solid white;
    border-radius: 10px;
    color: white;
    background-color:transparent;

}
.btn_sigin input:hover{
    background-color: white;
    border: 1px solid black;
    color: black;
}

.btn_sigup {
    margin-left: 10px;
    margin-right: 10px;
    margin-top: 10px;
}
.btn_sigup input {
    font-weight: 600;
    transition: linear 0.2s;
    background-color:#F9A150;
    width: 110px;
    height: 40px;
    border-radius: 10px;
}
.btn_sigup input:hover {
    color: white;
    background-color: transparent;
    border: 1px solid #F9A150;
    color: white;
    background-size: cover
}
.text_check{
    font-size: 60px;
    font-weight: bold; 
    color: #ffffff; 
    margin-top:-15%; 
    position:absolute;
    margin-left: 2%;
}
.div_ticket{
    display: flex;
    justify-content: center;
    height: 166px;
    margin-bottom: 2%;  
    position: absolute;
    width: 91.5%;
    margin-top: -4%;
}

.img_ticket{
    height: 42%;
    width: 60px;
}
.line{
    height: 50%;
    width: 1px;
    margin: 5% ;
}
.in_ticket{
    /* background-color: #F9A150; */
    height: 65%;
    width: 30%;
    
}
.in_in_ticket{
    display: flex;
    
}
.text_temp{
    font-size: 12px;
}
.time_temp{
    font-size: 20px;
}
.day_go{
    padding: 5px;
}
.btn_tempGo{
    background-color: #0066FF;
    border-radius: 30px;
    appearance: none;
    border: 2px none #bababa;
}
.text_temp{
    font-weight: bold;
    margin: 1px;
    color: #777777;
    padding: 2px;
}
.text_lv{
    color: #ffffff;
    font-weight: bold;
    padding: 3px;
}
.time_fly{
    height: 20px;
    width: 50%;
    /* background-color: #ffffff; */
    margin: 7%;
    display: flex;
    justify-content: center;
    box-shadow:
    0 0 2px 2px #FF6347,
    0 0 2px 2px #FFDAB9,
    2px 0 2px 2px #B0E0E6;
    border-radius: 30px;
}

.time_during{
    font-size: 15px;
    margin: 1px;
  
}
.icon_fly{
    height : 70%;
    width : 9% ; 
    padding: 3px;
}
.list_btn{
    background-color: #ffffff;
    border: 2px none #bababa;
    box-shadow:
    0 0 2px 2px #FF6347,
    0 0 2px 2px #FFDAB9,
    2px 0 2px 2px #B0E0E6;
    border-radius: 30px;
    margin: 2%;
}
.text_btn{
    padding: 4px;
    font-weight: bold;
}
.div_price{
    position: relative;
    margin-right: 0%;
    /* background-color: #888888; */
    height: 65%;
    width: 30%;
}
.btn_book{
    position: absolute;
    height: 30%;
    width: 70%;
    margin-top: 7%;
    right: 0px;
    border-radius: 30px;
    border: 2px none #bababa;
    background-color: #F9A150;
}
.bk_prep{
    height: 25px;
    width: 120px;
    background-color: #33CCFF;
    border-radius: 28px;
    margin: 10px;
}
.text_prep{
    font-size: 15px;
    font-weight: bold;
    text-align: center;
    margin-top: 2%;
    color: #ffffff;
    
}
.bnt_Seetk{
    height: 40px;
    width: 110px;
    background-color: #33CCFF;
    font-size: 17px;
    font-weight: bold;
    border-radius: 28px;
    margin: 10px;
    border: 2px none #bababa;
    color: #ffffff;

}
.div_checkDetail{
    height: auto;
    width: 100%;

    display: flex;
    justify-content: space-between;
    gap: 16px;
}
.Cuss_bok{
    width: 60%;

}
.div_Cuss{
    display: flex;
    height: auto;
    width: 100%;
    margin-bottom: 2%;  
}
.payDel{
    width: 100%;
    height: 100% ;  
    background-color: #ffffff;
    border-radius: 16px;
    padding: 25px 25px;
    /* display: inline-block;
    vertical-align: middle; */
    box-shadow: -2px 1px 13px 0px #9e9e9e;
}
.text_payDel{
    font-size: 30px;
    font-weight: bold;
}

.del_inf{

    height: auto;
    width: 100%;
    margin-top: 1%;
    display: flex;
    justify-content: space-between;
    gap: 30px;
}

.headed_info{
    font-size: 10px;
}
.main_info{
    font-size: 16px;
    font-weight: bold;
}
.div_booking{
    display: flex;
    justify-content: center;
    height: 20%;
    margin-bottom: 5%;  
    width: 80%;
}
.div_book{
    display: flex;
    height: auto;
}
.bookdel{
    width: 100%;
    height: 100% ;  
    background-color: #ffffff;
    border-radius: 16px;
    padding: 25px 25px;
    /* display: inline-block;
    vertical-align: middle; */
    box-shadow: -2px 1px 13px 0px #9e9e9e;
}
.text_payDel{
    font-size: 30px;
    font-weight: bold;
}

.del_inf{
    height: 30%;
    width: 65%;
    margin-top: 1%;
    display: grid;
    grid-template-columns: auto auto auto;
    grid-template-rows: auto;
    gap: 16px;
    row-gap: 16px;
    column-gap: 16px;
}

.headed_inf{
    font-size: 15px;
}
.main_inf{
    font-size: 23px;
    font-weight: bold;
}   
.payment_inf{
    display: flex;
    flex-direction: column;
    gap: 15px;
    height: auto;
    width: 35%;
    align-self: flex-end;
    background-color: #ffffff;
    border-radius: 16px;
    padding: 25px 25px;
    /* display: inline-block;
    vertical-align: middle; */
    box-shadow: -2px 1px 13px 0px #9e9e9e;

}
.paym_inf{
    display: flex;
    justify-content: space-between;
}
.btn_add{
    border-radius: 5px;
    border: 2px solid #b0b0b0;
    padding: 0 8px 0 8px;
}
.sum_price{
    margin-top: 15px;

}
.detal_payInf{
    display: flex;
    flex-direction: column;
    gap: 15px;
    background-color: #4F95FF;
    height: auto;
    width: 100%;
    justify-content: center;
    padding: 25px;
    box-sizing: border-box;
    border-radius: 15px;

}
.detal_payInf p{
    color: white;
}
.btn_add{
    padding: 0 8px 0 8px;
    margin-left: auto;
}
.text_payInf{
    font-size: 15px;
}
.paym_visa{
    display: flex;
    gap: 20px;
    align-items: center;
}
.paym_visa p{
    color: white;
}
.paym_visa img{
    padding: 10px;
    background-color: white;
}
.img_visa{
    height: 10%;
    width: 20%;
}
.main_info1{
    font-size: 15px;
}
.del_inf1{
    display: flex;
    flex-direction: column;
    gap: 2px;   
}
.option_visa{
    height: 40px;
    width: 100%;
    border-radius: 10px;
    margin-top: 10px;
}
.btn_start_bok{
    height: 40px;
    width: 100%;
    background-color: #4F95FF !important;
    border-radius: 10px;
    border: 2px solid #ffffff !important;
    box-shadow: none !important;
    color: white !important;
}
.book_wrapper{
    top: 13rem;
    width: 100%;
    box-sizing: border-box;
    position: absolute;
    z-index: 2;
    padding: 0 6rem;
    margin-top: -5rem;
    display: flex;
    flex-direction: column;
    gap: 20px;
}
button{
    transition: ease 0.2s !important;
    display: flex !important;
    padding: 8px 16px !important;
    flex-direction: column !important;
    justify-content: center !important;
    align-items: center !important;
    border-radius: 10px !important;
    border: 1px solid #878787 !important;
    background-color: white !important;
}
button:active{
    transform: scale(95%);
}
.payment_cardnumber{
    font-size: 35px;
    background-color: transparent;
    border: none;
    outline: none;
    color: white;
}
.payment_cardnumber::placeholder{
    color: rgba(255, 255, 255, 0.477);
}
.card_input{
    background-color: transparent;
    border: none;
    outline: none;
    color: white;
    font-size: 1rem;
}
.card_input::placeholder{
    color: rgba(255, 255, 255, 0.477);
}
</style>