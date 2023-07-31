<script>
import { list } from 'firebase/storage';
import { getTickets, insertTickets } from '../helper';
import TitleComponent from '../components/TitleComponent.vue'
import { Timestamp } from 'firebase/firestore';
export default {
    components: {
        TitleComponent
    },
    data() {
        return {
            l: []
        };
    },
    mounted() {
        getTickets().then(e => { this.l = e })
    },
    methods: {
        insertTicket() {
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
    <div class="about-me">
        <div class="about-img">
            <TitleComponent></TitleComponent>
        </div>
        <div class="about-content">
            <div class="content-tittle">GIỚI THIỆU VỀ CHÚNG TÔI</div>
        </div>
        <div class="about-content-hello">
            Chào mừng đến với trang web của chúng tôi! Chúng tôi hân hạnh giới thiệu đến bạn một trải nghiệm bay đẳng cấp
            với dịch vụ tuyệt vời và sự an toàn hàng đầu ❤️.
        </div>
        <div class="about-content-v1">
            Những điều đặc biệt mà bạn có thể trải nghiệm khi chọn chúng tôi là:
        </div>

        <div class="about-content-v1-child">
            Dịch vụ chuyên nghiệp: Đội ngũ nhân viên chuyên nghiệp và tận tâm sẽ luôn lắng nghe và đáp ứng mọi nhu cầu của
            bạn, để bạn có được cảm giác thoải mái và an tâm trong suốt hành trình.
        </div>
        <div class="about-content-v1-child">
            Chúng tôi không bao giờ đánh đổi sự an toàn của hành khách. Đội phi công giàu kinh nghiệm cùng các biện pháp an
            toàn tiên tiến luôn được áp dụng một cách nghiêm ngặt
        </div>

        <div class="about-content-v1-child">
            Từ các hạng vé Economy tiết kiệm đến hạng vé Business sang trọng, chúng tôi đáp ứng mọi nhu cầu và túi tiền của
            hành khách.
        </div>

        <div class="about-content-v1-child">
            Chúng tôi luôn cập nhật các chương trình khuyến mãi hấp dẫn và ưu đãi đặc biệt, giúp bạn tiết kiệm hơn khi đặt
            vé.
        </div>

        <div class="about-content-v1-child-end">
            Bất kể lúc nào bạn cần giúp đỡ hoặc có thắc mắc, đội ngũ hỗ trợ của chúng tôi luôn sẵn sàng giúp đỡ qua điện
            thoại hoặc email
        </div>
        
        <div class="about-content-v1-child-end">
            <img src="../assets/Logo.svg"/>
        </div>






</div></template>
<style>
    .about-content-v1-child-end img{
        height: 512px;
        width: auto;
        filter: drop-shadow(0 4px 14px rgba(0, 0, 0, 0.555));
    }
</style>