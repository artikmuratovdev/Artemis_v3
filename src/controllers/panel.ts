import { FaBook, FaUser, FaMoneyBillAlt, FaEnvelope  } from 'react-icons/fa';
import { FaGear } from "react-icons/fa6";
export const panel = [
  { name: "O'quv reja", icons: FaBook, items: [
    { item_name: "O'quv reja" , target:"#"},
    { item_name: "Dars jadvali" , target:"#"},
    { item_name: "Nazorat jadvali" , target:"#"},
    { item_name: "Fan resurslari" , target:"#"},
    { item_name: "Davomat" , target:"#"},
    { item_name: "Davomat hisoboti" , target:"#"},
    { item_name: "O'zlashtirish" , target:"#"},
    { item_name: "Shaxsiy qaydnoma" , target:"#"},
    { item_name: "Imtihonlar" , target:"#"},
    { item_name: "Reyting daftarcha" , target:"#"},
    { item_name: "Fan tanlovi" , target:"#"},
  ] },
  { name: "Qayta o'qish", icons: FaBook, items: [
    { item_name: "Ariza qayta o'qish" , target:"#"},
    { item_name: "Q.O'qish mashg'ulotlari" , target:"#"},
    { item_name: "Q.O'qish nazorat jadvali" , target:"#"},
    { item_name: "Q.O'qish o'zlashtirish" , target:"#"},
  ] },
  { name: "Talaba ma'lumoti", icons: FaUser, items: [
    { item_name: "Rezyume" , target:"#"},
    { item_name: "Buyruqlar" , target:"#"},
    { item_name: "Shartnomalar" , target:"#"},
    { item_name: "Ma'lumotnomalar" , target:"#"},
    { item_name: "Talaba hujjati" , target:"#"},
    { item_name: "Bitiruv varaqa" , target:"#"},
    { item_name: "Talaba GPA bali" , target:"#"},
    { item_name: "Shaxsiy ma'lumotlar" , target:"#"},
    { item_name: "Bitiruv ishi" , target:"#"},
  ] },
  { name: "Moliyaviy to'lov", icons: FaMoneyBillAlt, items: [
    { item_name: "Kontrakt ro'yhati" , target:"#"},
    { item_name: "Stipendiya hisobi" , target:"#"},
  ] },
  { name: "Xabarlar", icons: FaEnvelope , items: [
    { item_name: "Mening xabarlarim" , target:"#"},
    { item_name: "Xabar yaratish" , target:"#"},
  ] },
  { name: "Tizim", icons: FaGear, items: [
    { item_name: "Profil" , target:"#"},
    { item_name: "So'rovnoma" , target:"#"},
    { item_name: "Kirish tarixi" , target:"#"},
  ] },
];

export const accordions = [
  { name: "Fanlar va resurslar", items: [
    { item_name: "O'quv reja" , target:"#" , img:"src/img/book.png"},
    { item_name: "Dars jadvali" , target:"#" , img:"src/img/calendar.png"},
    { item_name: "Nazorat jadvali" , target:"#" , img:"src/img/Achievement.png"},
    { item_name: "Fan tanlovi" , target:"#" , img:"src/img/Target.png"},
    { item_name: "Fan resurslari" , target:"#" , img:"src/img/PC.png"},
    { item_name: "Unilibrary" , target:"#" , img:"src/img/PC.png"},
  ]},
  {name: "O'quv faoliyati", items: [
    { item_name: "Davomat" , target:"#" , img:"src/img/clock.png"},
    { item_name: "O'zlashtirish" , target:"#" , img:"src/img/Calc.png"},
    { item_name: "Reyting daftarcha" , target:"#" , img:"src/img/book.png"},
    { item_name: "Imtihonlar" , target:"#" , img:"src/img/question.png"},
    { item_name: "Bitiruv ishi" , target:"#" , img:"src/img/book.png"},
  ] },
  { name: "Qayta o'qish", items: [
    { item_name: "Ariza qayta o'qish" , target:"#" , img:"src/img/book.png"},
    { item_name: "Q.O'qish mashg'ulotlari" , target:"#" , img:"src/img/calendar.png"},
    { item_name: "Q.O'qish nazorat jadvali" , target:"#" , img:"src/img/Achievement.png"},
    { item_name: "Q.O'qish o'zlashtirish" , target:"#" , img:"src/img/Calc.png"},
  ] },
  { name: "Hujjatlar ro'yhati", items: [
    { item_name: "Buyruqlar" , target:"#" , img:"src/img/Note.png"},
    { item_name: "Shartnomalar" , target:"#" , img:"src/img/list.png"},
    { item_name: "Ma'lumotnomalar" , target:"#" , img:"src/img/list.png"},
    { item_name: "Bitiruv varaqa" , target:"#" , img:"src/img/book.png"},
    { item_name: "Talaba hujjati" , target:"#" , img:"src/img/list.png"},
    { item_name: "Talaba hujjati" , target:"#" , img:"src/img/message.png"},
  ] },
]
