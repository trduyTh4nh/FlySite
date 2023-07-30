<script>

import { addFlight, getAllFlight, addTicket, deleteFlight } from '../helper'
import FlightComponent from '../components/FlightComponent.vue'
export default {
    components: {
        FlightComponent
    },
    mounted() {
        getAllFlight().then(e => {
            this.resultFlight = e
            console.log(e)
        })
    },
    data() {
        return {
            arrive: '',
            takeof: '',
            idflight: '',
            slghedadat: '',
            slghehang1: '',
            slghehang2: '',
            time: '',
            resultFlight: [],
            dynamicCB: '',

            maCB: '',
            ticketgia: '',
            tickethangve: '',
            ticketloai: '',
            tickethangbay: '',
            ticketmave: '',
            ticketngaydi: '',
            ticketngayve: '',



        }
    },
    methods: {
        add() {
            var flight = {
                DiemDen: this.arrive,
                DiemDi: this.takeof,
                MaChuyenBay: this.idflight,
                SLDaDat: this.slghedadat,
                SLGheHang1: this.slghehang1,
                SLGheHang2: this.slghehang2,
                ThoiGianBay: this.time
            }
            console.log(flight)
            addFlight(flight).then(
                e => {
                    alert("Add Success!")
                    getAllFlight().then(e => {
                        this.resultFlight = e
                        console.log(e)
                    })
                }
            ).catch(e => {
                console.log("Add Failed!")
            })
        }
        ,
        onSelect(e) {
            this.maCB = e.MaChuyenBay
        }
        , addNewTicket() {
            var ticket = {
                ChuyenBay: this.maCB,
                GiaVe: this.ticketgia,
                HangVe: this.tickethangve,
                LoaiVe: this.ticketloai,
                MaHangBay: this.tickethangbay,
                MaVe: this.ticketmave,
                NgayDi: this.ticketngaydi,
                NgayVe: this.ticketngayve
            }
            console.log(ticket)
            addTicket(ticket).then(
                e => {
                    alert("Add Success")
                }
            ).catch(e => {
                alert("Add failed!")
            }) 

        }, removeFlight() {
              ;
            console.log(this.maCB)
            if(this.maCB != null){
                deleteFlight(this.maCB).then(e => {
                    alert("Deleted")
                }).catch(e=> {
                    console.log(e)
                })
            }
            else{
                alert("Hãy chọn chuyến bay muốn xóa")
            }
        }


    }
}

</script>
<template>
    <div id="admin">
        <div class="admin-flight">

            <div class="admin-wrap">
                <div class="wrap-diemden">
                    <div class="diemden-tittle">Điểm đến</div>
                    <div class="diemden-input">
                        <input v-model="arrive" type="text" placeholder="">
                    </div>
                </div>

                <div class="wrap-diemdi">
                    <div class="diemdi-tittle">Điểm đi</div>
                    <div class="diemdi-input">
                        <input v-model="takeof" type="text" placeholder="">
                    </div>
                </div>

                <div class="wrap-macb">
                    <div class="macb-tittle">Mã chuyến bay</div>
                    <div class="macb-input">
                        <input v-model="idflight" type="text" placeholder="">
                    </div>
                </div>

                <div class="wrap-time">
                    <div class="time-tittle">Thời gian bay</div>
                    <div class="time-input">
                        <input v-model="time" type="text" placeholder="">
                    </div>
                </div>

            </div>
            <div class="wrap-button">
                <div class="btnAdd">
                    <button @click="add(), refreshComponent()">Add flight</button>
                </div>
                <div class="btnAdd">
                    <button @click="removeFlight()">Delete flight</button>
                </div>
            </div>

        </div>


        <div class="admin-list">
            <FlightComponent v-for="res in resultFlight" :flight="res" @transfer-cb="e => { dynamicCB = e; onSelect(e) }">
            </FlightComponent>
        </div>


        <div class="ticketadd">
            <div class="admin-ticket">
                <div class="ticket-macb">
                    <div class="ticket-tittle">Mã chuyến bay</div>
                    <div class="ticket-input">
                        <input v-model="maCB" type="text" placeholder="">
                    </div>
                </div>

                <div class="ticket-gia">
                    <div class="ticket-tittle">Giá</div>
                    <div class="ticket-input">
                        <input v-model="ticketgia" type="text" placeholder="">
                    </div>
                </div>

                <!-- <div class="ticket-hangve">
                    <div class="ticket-tittle">Hạng vé</div>
                    <div class="ticket-input">
                        <input v-model="tickethangve" type="text" placeholder="">
                    </div>
                </div> -->

                <div class="ticket-loaive">
                    <div class="ticket-tittle">Hạng vé</div>
                    <div class="ticket-input">
                        <select id="ticket-type" v-model="tickethangve" name="tickets">
                            <option value="Phổ thông">Phổ thông</option>
                            <option value="Thương">Thương gia</option>
                        </select>
                    </div>
                </div>

                <div class="ticket-hangbay">
                    <div class="ticket-tittle">Hãng bay</div>
                    <div class="ticket-input">
                        <input v-model="tickethangbay" type="text" placeholder="">
                    </div>
                </div>

                <div class="ticket-mave">
                    <div class="ticket-tittle">Mã vé</div>
                    <div class="ticket-input">
                        <input v-model="ticketmave" type="text" placeholder="">
                    </div>
                </div>

                <div class="ticket-ngaydi">
                    <div class="ticket-tittle">Ngày đi</div>
                    <div class="ticket-input">
                        <input v-model="ticketngaydi" type="text" placeholder="">
                    </div>
                </div>

                <div class="ticket-ngayve">
                    <div class="ticket-tittle">Ngày về</div>
                    <div class="ticket-input">
                        <input v-model="ticketngayve" type="text" placeholder="">
                    </div>
                </div>
            </div>
            <div class="wrap-button">
                <div class="btnadd-ticket">
                    <button @click="addNewTicket()">Add ticket</button>
                </div>

            </div>
        </div>



    </div>
</template>