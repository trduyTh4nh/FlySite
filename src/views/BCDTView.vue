<script>
    import sidebar from '../components/SidebarComponent.vue'
    import { getAllHoaDon, getSumEverything } from '../helper';
    export default{
        props: [
            "usr"
        ],
        data(){
            return {
                listCB: [],
                listRoutes: [
                    {path: '/admin/listcb', name: 'Danh sách chuyến bay'},
                    {path: '/admin/doanhthu', name: 'Báo cáo doanh thu'}
                ],
                thongke: {},
                stt: 0
            }
        },
        mounted(){
            console.log(this.usr)
        if(Object.keys(this.usr).length == 0){
            this.$router.push('/forbidden')
        } else if(this.usr[0].Email != 'admin@gmail.com'){
                this.$router.push('/forbidden')
            }
            this.stt= -499;
            getSumEverything().then(e => {
                this.thongke = e
            })
            getAllHoaDon().then(e => {
                this.listCB = e
            })
        },
        components: {
            sidebar,
        }
    }
</script>
<template>
    <div class="adminpagewrapper">
        <sidebar :listRoutes="listRoutes"/>
        <div class="dsVe">
            <div class="title_wrapper">
                <h1>Doanh thu</h1>
                
            </div>
            <div class="summary">
                <div class="card loinhuan">
                    <font-awesome-icon :icon="['fas', 'dollar-sign']" />
                    <div>
                        <h2>{{ thongke.sumMoney }} VND</h2>
                        <p>Tổng lợi nhuận</p>
                    </div>
                </div>
                <div class="card luotmua">
                    <font-awesome-icon :icon="['fas', 'ticket']" />
                    <div>
                        
                        <h2>{{ thongke.sumPurchase }}</h2>
                        <p>Số lượt mua</p>
                    </div>
                </div>
                <div class="card doanhthu">
                    <font-awesome-icon :icon="['fas', 'dollar-sign']" />
                    <div>
                        <h2>{{ thongke.sumMoney }} VND</h2>
                        <p>Tổng doanh thu</p>
                    </div>
                </div>
                <div class="card hanhkhach">
                    <font-awesome-icon :icon="['fas', 'user']" />
                    <div>
                        <h2>{{ thongke.sumKH }}</h2>
                        <p>Tổng số khách hàng</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="dsVe">
            <div class="title_wrapper">
                <h1>Chi tiết tài chính</h1>
            </div>
            <table class="tblFlights">
                <tr>
                    <th>STT</th>
                    <th>Khách hàng</th>
                    <th>Hoá đơn</th>
                    <th>Tổng tiền</th>
                </tr>
                <tr v-for="cb in listCB">
                    <td>{{ Number(cb.stt) + 1 }}</td>
                    <td>{{ cb.tenKH }}</td>
                    <td>{{ cb.maHD }}</td>
                    <td>{{ cb.tongTien }}</td>
                </tr>
            </table>
        </div>
    </div>
</template>
<style scoped>
.sidebar_wrapper{
    width: 45% !important;
}
    .adminpagewrapper{
        width: 100%;
        display: flex;
        padding-top: 6rem;
    }
    .dsVe{
        display: flex;
        flex-direction: column;
        gap: 25px;
        width: 100%;
        padding: 0 2rem;
    }
    .title_wrapper{
        display: flex;
        align-items: center;
        gap: 2rem;
    }
    .tblFlights{
        border-collapse: collapse;
        width: 100%;
    }
    .tblFlights td, th{
        text-align: center;
        padding: 16px;
        border-radius: 3px;
        border: 1px black solid;
        
    }
    .summary{
        width: 100%;
        display: grid;
        grid-template-columns: auto auto;
        gap: 16px;
    }
    .card{
        display: flex;
        flex-direction: column;
        gap: 15px;
        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
        padding: 16px;
        border-radius: 16px;
    }
    .card svg{
        font-size: 24px;
        width: fit-content;
        text-align: left;
    }
    .loinhuan{
        background: #59BCFF;
    }
    .luotmua{
        background: #59FFA5;
    }
    .doanhthu{
        background: #FCFF59;

    }
    .hanhkhach{
        background: #FF5981;
    }
</style>