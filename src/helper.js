
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs, getDoc, query, where, doc, setDoc, addDoc, QuerySnapshot, CollectionReference } from 'firebase/firestore';
import { async } from "@firebase/util";
import { deleteDoc } from "firebase/firestore";
import { registerRuntimeCompiler } from "vue";
const firebaseConfig = {
    apiKey: "AIzaSyDzcBSkNo1q1ZQwQ3usxN4XWwTKXg559aA",
    authDomain: "flysite-1a371.firebaseapp.com",
    projectId: "flysite-1a371",
    storageBucket: "flysite-1a371.appspot.com",
    messagingSenderId: "459720626798",
    appId: "1:459720626798:web:f81df8c4421fe373470c7f",
    measurementId: "G-QXGMV9R8Q6"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore(firebaseApp);
export async function getTickets() {
    const ticketCollection = collection(db, 'VeBay')
    const snapshot = await getDocs(ticketCollection)
    const list = snapshot.docs.map(doc => doc.data())
    console.log(
        list
    )
    return list
}
export async function insertTickets(ticket) {
    await addDoc(collection(db, 'VeBay'), ticket)
    console.log('inserted.')
}
export async function addFlight(flight) {
    await addDoc(collection(db, 'ChuyenBay'), flight)
}



export async function regis(user) {
    await addDoc(collection(db, 'HanhKhach'), user)
    console.log('Signup Successfully!');
}

export async function checkvar(email, pass) {
    const q = query(collection(db, 'HanhKhach'), where("Email", "==", email), where("MatKhau", "==", pass));
    const snap = await getDocs(q)
    var res = snap.docs.map(doc => doc.data())
    console.log(res)
    return res.length > 0
}
export async function deleteFlight(MaChuyenBay) {
    const qr = query(collection(db, "ChuyenBay"), where("MaChuyenBay", "==", MaChuyenBay))
    let q = await getDocs(qr)
    q.forEach(doc => {
        deleteDoc(doc.ref)
    })
}
export async function getUserCurrentByEmail(email) {
    const qr = query(collection(db, 'HanhKhach'), where("Email", "==", email));
    const snap = await getDocs(qr)
    var res = snap.docs.map(doc => doc.data())
    console.log(res)
    return res;
}
export async function getAllFlight() {
    const qr = query(collection(db, "ChuyenBay"));
    const snap = await getDocs(qr)
    var result = snap.docs.map(doc => doc.data())
    var kq = []
    for (var e of result) {
        kq.push(
            {
                MaVe: e.MaVe,
                DiemDen: e.DiemDen,
                DiemDi: e.DiemDi,
                MaChuyenBay: e.MaChuyenBay,
                SLDaDat: e.SLDaDat,
                SLGheHang1: e.SLGheHang1,
                SLGheHang2: e.SLGheHang2,
                ThoiGianBay: e.ThoiGianBay
            }
        )
        console.log(kq)

    }
    return kq;
}
export async function getoldOrder(passengerID) {
    const qr = query(collection(db, "HoaDon"), where("MaKH", "==", passengerID));
    const snap = await getDocs(qr);
    var result = snap.docs.map(doc => doc.data())
    var kq = []
    for (var e of result) {
        kq.push({
            MaKH: e.MaKH,
            NgayLap: e.NgayLap,
            TongTien: e.TongTien
        })
        //console.log(kq)
    }
    return kq;
}

export async function getSearch(obj) {
    console.log(`Ngày đi: ${obj.dateFlight.start}, Ngày về: ${obj.dateFlight.end}`)
    const chuyenbay = await getFlightIdByQuery(obj);
    const idCB = chuyenbay[0].MaChuyenBay
    var result = []
    console.log(obj)
    const q = query(collection(db, 'VeBay'), where("HangVe", "==", obj.type),  where("NgayDi", "==", obj.dateFlight.start), where("NgayVe", "==", obj.dateFlight.end), where( "ChuyenBay", "==", idCB))
    const snap = await getDocs(q)
    var res = snap.docs.map(doc => doc.data())
    for (var e of res) {
        result.push(
            {
                MaVe: e.MaVe,
                GiaVe: e.GiaVe,
                HangVe: e.HangVe,
                NgayDi: e.NgayDi,
                NgayVe: e.NgayVe,
                cityFrom: chuyenbay[0].DiemDi,
                cityTo: chuyenbay[0].DiemDen,
                ThoiGianBay: chuyenbay[0].ThoiGianBay
            }
        )
    }
    console.log(result)
    return result
}


async function getFlightIdByQuery(obj) {
    const q = query(collection(db, 'ChuyenBay'), where("DiemDen", "==", obj.cityTo, "and", "DiemDi", "==", obj.cityFrom));
    const snap = await getDocs(q)
    var res = snap.docs.map(doc => doc.data())
    console.log(res)
    return res
}


export async function addTicket(ticket) {
    await addDoc(collection(db, 'VeBay'), ticket);
}


export async function getUserDoc(email) {
    const qr = query(collection(db, 'HanhKhach'), where("Email", "==", email));
    const doc = await getDocs(qr);
    var ids = []
    doc.forEach(e => {
        ids = e.id
    })
    return ids
}

export async function getTicketById(IdTicket){
    const qr = query(collection(db, 'VeBay'), where('MaVe', "==" , IdTicket));
    const snap = await getDocs(qr);
    var res = snap.docs.map(doc => doc.data())
    //console.log(res)
    return res
}
export async function getFlightByID(IdFlight){
    const qr = query(collection(db, 'ChuyenBay'), where('MaChuyenBay', '==', IdFlight))
    const snap = await getDocs(qr);
    var res = snap.docs.map(doc => doc.data())
    console.log(res)
    return res;
}

export async function getOrderDoc(id){
    const usrId = await getUserDoc(id)
    const col = collection(db, 'HoaDon')
    const q = query(col, where('MaKH', '==', usrId))
    const hoadon = await getDocs(q)
    var idHD = []
    console.log(hoadon)
    hoadon.forEach(e => {
        
        idHD.push(e.id)
    })

    return idHD;
}

export async function getAllOrderdetail(idUserCurrent){
    var arrOrrder = await getOrderDoc(idUserCurrent);
    var ojbHD = []
    for(var val of arrOrrder){
        const col = collection(db, 'CTHD')
        const q = query(col, where('MaHD', '==', val))
        const cthoadon = await getDocs(q)
        
        cthoadon.forEach(e => {
            
            ojbHD.push(e.data())
            
        })

    }
    return ojbHD
}

export async function addHoaDon(hoadon) {
    const id = await getUserDoc(hoadon.Email)
    var hd = hoadon
    hd.MaKH = id
    var date = new Date()
    console.log(date.toDateString())
    hd.NgayLap = date.toDateString()
    console.log(hoadon)
    var hdon = {
        MaKH: id,
        NgayLap: hd.NgayLap,
        TongTien: hd.TongTien
    }
    var ref = await addDoc(collection(db, 'HoaDon'), hdon)
    console.log(ref.id)
    var refId = ref.id
    hd.MaHD = refId
    console.log(hoadon)
    var cthd = {
        DonGia: hd.DonGia,
        MaHD: hd.MaHD,
        MaVe: hd.MaVe,
        SLHanhKhach: 1
    }
    await addDoc(collection(db, 'CTHD'), cthd)
}
export async function ifExistsOrder(email, mave){
    var id = await getUserDoc(email)
    const col = collection(db, 'HoaDon')
    const q = query(col, where('MaKH', '==', id))
    const hoadon = await getDocs(q)
    var idHD = []
    hoadon.forEach(e => {
        idHD.push(e.id)
    })
    var el = false;
    var exists;
    for(var id of idHD){
        const cthdcol = collection(db, 'CTHD')
        const cthdq = query(cthdcol, where('MaHD', '==', id))
        const cthdsnap = await getDocs(cthdq)
        console.log(id)
        cthdsnap.forEach(e => {
            console.log(e.data())
            exists = e.data().MaVe == mave
            if(exists){
                el = exists
            }
        })
    }
    console.log(el)
    return el
}
export async function getTicketByIDCB(id, cb){
    const q = query(collection(db, 'VeBay'), where('ChuyenBay', '==', id));
    const doc = await getDocs(q)
    const res = doc.docs.map(e => e.data())
    var result = []
    for (var e of res) {
        result.push(
            {
                MaVe: e.MaVe,
                GiaVe: e.GiaVe,
                HangVe: e.HangVe,
                NgayDi: e.NgayDi,
                NgayVe: e.NgayVe,
                cityFrom: cb.DiemDi,
                cityTo: cb.DiemDen,
                ThoiGianBay: cb.ThoiGianBay
            }
        )
    }
    return result
}
export async function ifExistInCTHD(mave){
    const q = query(collection(db, 'CTHD'), where('MaVe', '==', mave))
    const snap = await getDocs(q)
    const res = snap.docs.map(e => e.data())
    return res.length > 0
}
export async function getOrderbyIDOrder(idOrder){
    const docu = doc(db, 'HoaDon', idOrder)
    const d = await getDoc(docu)
    return d.data()
}
export async function getSumEverything(){
    const col = collection(db,'HoaDon')
    const doc = await getDocs(col)
    var sumMoney = 0;
    var sumPurchase = 0;
    doc.forEach(e => {
        sumMoney+=Number(e.data().TongTien)
        sumPurchase++;
    })
    sumMoney = numberWithCommas(sumMoney)
    const colKH = collection(db, 'HanhKhach')
    const docu = await getDocs(colKH)
    var sumKH = 0;
    docu.forEach(e => {
        sumKH++
    })
    console.log(`tổng tiền: ${sumMoney}, tổng mua: ${sumPurchase}, tổng KH: ${sumKH}`)
    return {
        sumMoney: sumMoney,
        sumPurchase: sumPurchase,
        sumKH: sumKH
    }
}
function numberWithCommas(x) {
    x = x.toString();
    var pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(x))
        x = x.replace(pattern, "$1.$2");
    return x;
}
export async function getAllHoaDon(){
    const col = collection(db, 'HoaDon')
    const doc = await getDocs(col)
    const list = doc.docs.map(e => e.data())
    const ids = doc.docs.map(e => e.id)
    var tenKH;
    var maHD;
    var tongTien;
    var hdList = [];
    for(var l in list){
        var usr = await getKH(list[l].MaKH)
        tenKH = usr.TenKH
        maHD = ids[l]
        tongTien = list[l].TongTien
        hdList.push(
            {
                stt: l,
                tenKH: tenKH,
                maHD: maHD,
                tongTien: tongTien
            }
        )
    }
    return hdList
    

}
async function getKH(id){
    const col = doc(db, 'HanhKhach', id)
    const docu = await getDoc(col)
    return docu.data()
}