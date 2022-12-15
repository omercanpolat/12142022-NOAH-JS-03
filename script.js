// * =======================================================
// *             Karar Yapilari (Conditions)
// * =======================================================

console.log(" **** Conditions ****");

//? ORNEK1: Console'dan girilen bir sayisinin pozitif,negatif
//? yada 0 oldugunu tespit ederek yazdiriniz.

// const num = Number(prompt("Please enter a number:"))
// if (num > 0) {
//   console.log(`${num} is posivite`)
// } else if (num < 0) {
//   console.log(`${num} is negative`)
// } else {
//   console.log(`${num} is equal to zero`)
// }

//? ORNEK2: console'dan 3 tamsayi alarak bunlarin en buyugunu
//? yazdiriniz.

const n1 = +prompt("Number1:");
const n2 = +prompt("Number2:");
const n3 = +prompt("Number3:");

//* 1.Yontem
if (n1 >= n2 && n1 >= n3) {
  console.log(`${n1} is biggest`);
} else if (n2 >= n1 && n2 >= n3) {
  console.log(`${n2} is biggest`);
} else if (n3 >= n1 && n3 >= n2) {
  console.log(`${n3} is biggest`);
}

//* 2.Yontem
let biggest = n1;

if (n2 >= biggest) {
  biggest = n2;
}

if (n3 >= biggest) {
  biggest = n3;
}

console.log(`${biggest} is biggest`);

//* 3.Yontem
console.log(`The Biggest : ${Math.max(n1, n2, n3)}`);

//? ORNEK3: kosullar birlestirilerek bir degiskene aktarilarak kullanilabilir.
const year = 11;
const kidsCount = 3;
const graduate = true;
const langCount = 5;

const increase =
  year >= 10 && kidsCount >= 2 && graduate == true && langCount >= 2;

if (increase === true) {
  console.log("He or She deserves an increased salary");
}

//? Alternatif olarak
if (increase) {
  console.log("He or She deserves an increased salary");
}
//**************** SWITCH-CASE *******************

// console.log("-------------------------------------")
// console.log(" ***** 4 Islem Hesap Makinasi ****** ")
// console.log("-------------------------------------")
// const s1 = Number(prompt("1.Sayiyi Giriniz:"))
// const islem = prompt("Islemi giriniz: +,-,*, /")
// const s2 = +prompt("2.Sayiyi Giriniz:")
// let sonuc = 0
// switch (islem) {
//   case "+":
//     sonuc = s1 + s2
//     break
//   case "-":
//     sonuc = s1 - s2
//     break
//   case "*":
//     sonuc = s1 * s2
//     break
//   case "/":
//     sonuc = s1 / s2
//     break
//   default:
//     alert("Yanlis islem girisi")
//     break
// }
// console.log(`${s1} ${islem} ${s2} = ${sonuc}`)
//

// * =============   TERNARY ===========================

// const grade = Number(prompt("Pleas enter your grade : "));
// const result = grade >= 50 ? "Succesful" : "Failed";
// console.log(`You are ${result} with the grade ${grade}`);

// const = "male"
// const age = 20
// const healty = true
// const status = "student"

// age >= 18 && gender === male && healty === true && status !== "student"
//   ? alert("military service is required")
//   : alert("military service is NOT mandatory");

// console.log("-------------------------------------");
// console.log(" ***** 4 İŞLEM HESAP MAKINASI ****** ");
// console.log("-------------------------------------");

// const s1 = Number(prompt("1.Sayiyi Giriniz:"));
// const islem = prompt("Islemi giriniz: +,-,*, /");
// const s2 = Number(prompt("2.Sayiyi Giriniz:"));
// let sonuc = 0;
// if (islem == "+") {
//   console.log((sonuc = s1 + s2));
// } else if (islem == "-") {
//   console.log((sonuc = s1 - s2));
// } else if (islem == "/") {
//   console.log((sonuc = s1 / s2));
// } else if (islem == "*") {
//   console.log((sonuc = s1 * s2));
// } else {
//   console.log("İşlem işaretini hatali giriş yaptiniz!");
// }

// console.log("-------------------------------------");
// console.log(" ***** HAFTALIK DERS PROGRAMI ****** ");
// console.log("-------------------------------------");

// const gun = prompt(
//   "Hangi günün programını görmek istiyorsanız o günü giriniz (örneğin 'Monday') :"
// );

// let sonuc = 0;
// switch (gun) {
//   case "Monday":
//     sonuc = alert("In Class");
//     break;
//   case "Tuesday":
//     sonuc = alert("In Class");
//     break;
//   case "Wednesday":
//     sonuc = alert("In Class");
//     break;
//   case "Thursday":
//     sonuc = alert("In Class");
//     break;
//   case "Friday":
//     sonuc = alert("Teamwork");
//     break;
//   case "Saturday":
//     sonuc = alert("In Class - Workshop");
//     break;
//   case "Sunday":
//     sonuc = alert("Self Study");
//     break;
//   default:
//     alert("Yanlis gün ismi girildi");
//     break;
// }

// console.log("-------------------------------------");
// console.log(" ***** MAAŞA ZAM PROGRAMI     ****** ");
// console.log("-------------------------------------");
// const maas = Number(prompt("Aldığınız maaşı rakam olarak giriniz:"));
// let yenimaas = 0;
// if (maas <= 5500) {
//   let yenimaas = maas * 1.5;
//   console.log("Yeni zamlı maaşınız:", yenimaas);
// } else if (maas >= 5500) {
//   let yenimaas = maas * 1.1;

//   console.log("Yeni zamlı maaşınız:", yenimaas);
// } else {
//   console.log("Hatalı giriş yaptiniz!");
// }

console.log("-------------------------------------");
console.log(" ***** KREDİ RİSK PROGRAMI    ****** ");
console.log("-------------------------------------");

const gelir = Number(
  prompt(
    "Toplam olarak aylık gelir miktarınızı TL cinsinden rakam olarak giriniz:"
  )
);
const gider = Number(
  prompt(
    "Toplam olarak aylık gider miktarınızı TL cinsinden rakam olarak giriniz:"
  )
);

let tasarruf = gelir - gider;

if (tasarruf >= 5500) {
  console.log("Ne mutlu, size kredi verebiliriz!");
} else if (tasarruf <= 5500) {
  console.log(
    "Maalesef, aylık yeterli tasarrufunuz olmadığı için size kredi veremeyiz!"
  );
} else {
  console.log("Hatalı giriş yaptiniz! Tekrar deneyiniz...");
}
