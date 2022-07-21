function nilai_input() {

    var batas_atas = 0.05;
    var batas_bawah = 0.02;

    // AMBIK NILAI DARI FORM INPUT
    var nilai = document.getElementById('nilai').value;

    // HASIL
    var nilai_atas = nilai*batas_atas;
    var nilai_bawah = nilai*batas_bawah;

    // TAMPIL HASIL
    document.getElementById("hasil").innerHTML= "Rp. "+   nilai_bawah.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+ "  -  Rp. "  +nilai_atas.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    
}
    

