function tampil(){
    let error= false;
    let bulan = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
    if(!error){
        console.log(bulan.join("\n"));
    }else{
        console.log("error bulan tidak keluar");
    }
}
tampil;