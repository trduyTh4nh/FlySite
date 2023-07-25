<script>
    import { list } from 'firebase/storage';
import { getTickets, insertTickets } from '../helper';
import { Timestamp } from 'firebase/firestore';
    export default{
        data(){
            return {
                l: []
            };
        },
        mounted(){
            getTickets().then(e => {this.l = e})
        },
        methods:{
            insertTicket(){
                insertTickets({
                    GiaVe: '1000',
                    HangVe: 'Airbus',
                    LoaiVe: 'PhoThong',
                    MaVe: 'V01',
                    NgayVe: new Timestamp(10393, 1021)
                })
            }
        }
    }
</script>
<template>
    <h1>Passenger</h1>
    <div v-for="el in l">
        <p>{{ el.NgayVe.seconds }}</p>
    </div>
    <button @click="insertTicket()">insert</button>
</template>