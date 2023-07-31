<script>
    import sidebar from '../components/SidebarComponent.vue'
    import { getAllFlight } from '../helper';
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
                stt: -499
            }
        },
        mounted(){
            if(Object.keys(this.usr).length == 0){
            this.$router.push('/forbidden')
        } else if(this.usr[0].Email != 'admin@gmail.com'){
                this.$router.push('/forbidden')
            }
            this.stt= -499;
            getAllFlight().then(e => {
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
                <h1>Danh sách chuyến bay</h1>
                <button @click="$router.push('/admin')">Quản lý</button>
            </div>
            <table class="tblFlights">
                <tr>
                    <th>STT</th>
                    <th>Mã Chuyến Bay</th>
                    <th>Điểm đi</th>
                    <th>Điểm đến</th>
                </tr>
                <tr v-for="cb in listCB">
                    <td>{{ stt++ }}</td>
                    <td>{{ cb.MaChuyenBay }}</td>
                    <td>{{ cb.DiemDi }}</td>
                    <td>{{ cb.DiemDen }}</td>
                </tr>
            </table>
        </div>
    </div>
</template>
<style scoped>
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
</style>