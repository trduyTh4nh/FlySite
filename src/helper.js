// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore, collection, getDocs, getDoc, query, where, doc, setDoc, addDoc, QuerySnapshot} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
export async function getTickets(){
    const ticketCollection = collection(db, 'VeBay')
    const snapshot = await getDocs(ticketCollection)
    const list = snapshot.docs.map(doc => doc.data())
    console.log(
        list
    )
    return list
}
export async function insertTickets(ticket){
    await addDoc(collection(db, 'VeBay'), ticket)
    console.log('inserted.')
}

export async function regis(user){
    await addDoc(collection(db, 'HanhKhach'), user)
    console.log('Signup Successfully!');
}

export async function checkvar(email, pass){
    const q = query(collection(db, 'HanhKhach'), where("Email", "==", email, "and", "MatKhau", "==", pass));
    const snap = await getDocs(q)
    var res = snap.docs.map(doc => doc.data())
    console.log(res)
    return res.length > 0
}
export async function getSearch(obj){
    const chuyenbay = await getFlightIdByQuery(obj);
    const idCB = chuyenbay[0].MaChuyenBay
    var result = []
    console.log(obj)
    const q = query(collection(db, 'VeBay'), where("HangVe", "==", obj.type, "and", "NgayDi", "==", obj.dateFlight.start, "and", "NgayVe", "==", obj.dateFlight.end, "and", "ChuyenBay", "==", idCB))
    const snap = await getDocs(q)
    var res = snap.docs.map(doc => doc.data())
    for (var e of res){
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
async function getFlightIdByQuery(obj){
    const q = query(collection(db, 'ChuyenBay'), where("DiemDen", "==", obj.cityTo, "and", "DiemDi", "==", obj.cityFrom));
    const snap = await getDocs(q)
    var res = snap.docs.map(doc => doc.data())
    console.log(res)
    return res
}