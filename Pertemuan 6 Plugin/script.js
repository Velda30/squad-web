//pengkondisian

// let angka = 13 ;
// if( angka % 2 == 0) {
//     console.log(angka + "adalah bilangan genap");
// }else {
//     console.log(angka + "adalah bilangan ganjil");
// }

//pengulangan  for 

// for (i = 0; i< 10; i++){
//     console.log("hello word" + i + "x")
// }

//perulangan while (jgn dijalankan)

// let angka = true;
// while(angka) {
//     console.log("hai")
// }

//dihentikan oleh user
// let angka = true);
// while(angka) {
//     console.log("hai");
//     angka = confirm("mau jalankan lagi")
//}

//dihentikan oleh system
// let angka = 1;
// while(angka <=10){
//     console.log("hay" + angka +"x");
//     angka++; 
// }

//perulangan do while
// let angka = 1;
// do{
//     console.log("hay kawan");
//     angka++;
// } while(angka <= 10);

//Functiond dg cara biasa
// function hello(){
//     console.log("hello word");
// }

//function dg cara ekspresi
// let hello = function(){
//     console.log("penulisan function ekspresi");
//}

//function arrow
// let arr = ()=> {
//     console.log("penulisan function arrow");
// }

//array
// let angka = [1, 2, 3, 4, 5]
// angka[2]

//et hewan = ["anjing", "kucing", "macan", "ikan"];

//push utk menambah index dibelakang
//  hewan.push("kelinci", "buaya", "kuda");

 //pop utk menghapus index dibelakang
// hewan.pop();
// // hewan.pop();

// //unshift menambah index bagian depan
// hewan.unshift("badak", "gajah");

// //shift menghapus index bagian depan
// hewan.shift();

//splice menambah dan mengahapus data di index bagian mana saja
// console.log(hewan.splice(2, 0, "jerapah", "kecoa"));

//length menampilkan panjang array
// console.log(hewan.length);

// sort menyortir data 
//let angka=[3, 5, 6, 1, 2, 7, 9];
// angka.sort();
// console.log(angka);
// let abjad=["r", "a", "c", "b"];
// abjad.sort();
// console.log(abjad);
// let tambah = (a, b) => a+b;

// console.log(angka.reduce(tambah));

// let hewan = [];
// hewan[0] = "macan";
// hewan[1] = "kuda";
// hewan[2] = "buaya";

// let mahasiswa = ["velda", 19090038, true, "3c"]
// console.log(mahasiswa[1]);

//penulisan array
// let angka[1, 2, 3, 4, 5, 6, 7];

// let hari=[];
// hari[0] = "senin";
// hari[1] = "selasa";
// hari[2] = "rabu";
// hari[3] = "kamis";
// console.log(hari.join(","));


//OBJECT
//membuat object literal
// let mhs = {
//     nama : "velda",
//     kelas : "3c"
// }

// let mhs1 = {
//     nama : "salsa",
//     kelas : "3c"
// }

//function declaration
// function buatObject(nama,kelas,nim) {
//     let mahasiswa= {};
//     mahasiswa.nama=nama;
//     mahasiswa.kelas=kelas;
//     mahasiswa.nim=nim;
//     return mahasiswa;
// }
// let mhs2 = mahasiswa = buatObject("bila","3c",19090038);

//construtor
// function Mahasiswa(nama,nim,kelasjurusan) {
//     this.nama=nama;
//     this.nim=nim;
//     this.kelas=kelas;
//     this.jurusan=jurusan;

// }
// let mhs3 = new Mahasiswa("illah",1909001,"3c","farmasi");

//manipulasi
// let namaObject = {
//     nama : "utari",
//     nim : 190900556
// }
// console.log(namaObject);

//add
// namaObject.jurusan = "teknik informatika";
// console.log(namaObject);

//update
// namaObject.nama="ivan";
// console.log(namaObject);

//delete
// delete namaObject.nim;
// console.log(namaObject);

let orang = {
    nama : "zaim",
    umur : "21",
    sayHai : function() {
        alert("hay nama saya : "+orang.nama+ " dan usia saya : "+orang.umur)
    }
}








