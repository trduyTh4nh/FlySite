<script >
import TicketComponent from '../components/TicketComponent.vue'
import { getOrderbyIDOrder, getFlightByID, getUserDoc, getoldOrder, getOrderDoc, getAllOrderdetail, getTicketById } from '../helper'
export default {
    components: {
        TicketComponent
    },
    data() {
        return {
            ojbIDuser: '',
            ojbOrder: {},
            VeBay: [],
            ChuyenBayTemp: [],
            HistoryTicket: [],
            currentOrder: '',
            dataMainHisTory: []

        }
    },
    props: [
        "EmailDynamic",
    ],
    mounted() {
        getUserDoc(this.EmailDynamic).then(
            e => {
                this.ojbIDuser = e;
                console.log(this.ojbIDuser)
                getoldOrder(this.ojbIDuser).then(
                    result => {
                        if (result.length != 0) {
                            console.log(result)
                        }
                        else {
                            console.log("Rỗng")
                        }
                    }
                ).catch(e => {
                    console.log(e)
                })
            }
        ),
            getOrderDoc(this.EmailDynamic).then(
                e => {
                    console.log(e)
                }
            )
            ,
            getAllOrderdetail(this.EmailDynamic).then(e => {
                for (var val of e) {
                    console.log(val)
                    getTicketById(val.MaVe).then(
                        res => {
                            this.VeBay.push(res)
                            for (var temp of res) {
                                console.log(temp.ChuyenBay)
                                getFlightByID(temp.ChuyenBay).then(
                                    kq => {
                                        this.ChuyenBayTemp.push(kq)
                                        console.log(kq)
                                        getOrderbyIDOrder(val.MaHD).then(
                                            end => {
                                                this.dataMainHisTory.push({
                                                    ChuyenBayDi: kq[0].DiemDi,
                                                    ChuyenBayDen: kq[0].DiemDen,
                                                    NgayDi: res[0].NgayDi,
                                                    NgayVe: res[0].NgayVe,
                                                    LoaiVe: res[0].LoaiVe,
                                                    TongTien: end.TongTien
                                                })
                                                console.log(this.dataMainHisTory)
                                            }
                                        )

                                    })
                            }

                        }
                    )
                }
            })


    },
    methods: {
        test() {
            console.log(this.EmailDynamic)
        }
    }
}
</script>
<template>
    <div @click="test()" class="view_body">
        <TicketComponent v-for=" val in this.dataMainHisTory" :data="val" ></TicketComponent>
    </div>
</template>
<style>
.view_body {
    padding-top: 5rem;
}
</style>