
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs, getDoc, query, where, doc, setDoc, addDoc, QuerySnapshot, CollectionReference } from 'firebase/firestore';
import { async } from "@firebase/util";
import {  deleteDoc } from "firebase/firestore";
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
    const q = query(collection(db, 'HanhKhach'), where("Email", "==", email, "and", "MatKhau", "==", pass));
    const snap = await getDocs(q)
    var res = snap.docs.map(doc => doc.data())
    console.log(res)
    return res.length > 0
}
export async function deleteFlight(MaChuyenBay){
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

export async function getSearch(obj) {
    const chuyenbay = await getFlightIdByQuery(obj);
    const idCB = chuyenbay[0].MaChuyenBay
    var result = []
    console.log(obj)
    const q = query(collection(db, 'VeBay'), where("HangVe", "==", obj.type, "and", "NgayDi", "==", obj.dateFlight.start, "and", "NgayVe", "==", obj.dateFlight.end, "and", "ChuyenBay", "==", idCB))
    const snap = await getDocs(q)
    var res = snap.docs.map(doc => doc.data())
    for (var e of res) {
        result.push(
            {
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

