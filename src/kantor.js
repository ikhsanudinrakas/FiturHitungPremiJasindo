function remove_dot(x)
{
    return x.split(/[.,]/).join("");
}

function add_comma(x)
{
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

function show_table(x, y, z)
{
    // TABLE TOP
    var polis = document.getElementById('polis').value;
    var nama = document.getElementById('nama').value;
    var alamat = document.getElementById('alamat').value;
    var nomor = document.getElementById('nomor').value;
    var objek = document.getElementById('objek').value;
    var polisi = document.getElementById('polisi').value;
    var mulai = document.getElementById('waktu-mulai').value;
    var akhir = document.getElementById('waktu-akhir').value;

    document.getElementById("polis-isi").innerHTML= polis;
    document.getElementById("nama-isi").innerHTML= nama;
    document.getElementById("alamat-isi").innerHTML= alamat;
    document.getElementById("nomor-isi").innerHTML= nomor;
    document.getElementById("objek-isi").innerHTML= objek;
    document.getElementById("polisi-isi").innerHTML= polisi;
    document.getElementById("jaminan-isi").innerHTML= z;
    document.getElementById("nilai-isi").innerHTML= "Rp. "+add_comma(y);
    document.getElementById("tahun-isi").innerHTML= x;
    document.getElementById("jangka-isi").innerHTML= mulai +" s/d "+ akhir;
}

function nilai_input() {
    
    // DEKLARASI VARIABEL YANG DICARI
    var batas_bawah;

    // AMBIL NILAI DARI FORM INPUT
    var jaminan = document.getElementById('jaminan').value;
    var tipe = document.getElementById('tipe').value;
    var wilayah = document.getElementById('wilayah').value;
    var tahun = document.getElementById('tahun').value;
    var diskon = document.getElementById('diskon').value;
    var tjh = document.getElementById('tjh').value;

    // Hiangkan Koma Pada Input Nominal
    var nilai_awal = remove_dot(document.getElementById('nilai').value);
    var perlengkapan = remove_dot(document.getElementById('perlengkapan').value);
    var nilai = (+nilai_awal) + (+perlengkapan);
   
    // PANGGIL TABEL
    show_table(tahun, nilai, jaminan);

    // BIAYA DISKON
    if(isNaN(diskon))
    {
        diskon = 0;
    }
    var biaya_diskon = diskon * 0.01;

    // BIAYA TJH KENDARAAN
    var biaya_tjh = 0;   
    var persen_tjh;
    var nominal_tjh;
    if(tjh == 10)
    {
        nominal_tjh = 10000000
        if(tipe == "Kategori 1" || tipe == "Kategori 4")
        {
            persen_tjh = 0.01;
            biaya_tjh = nominal_tjh * persen_tjh;
        }

        else if (tipe == "Kategori 2" || tipe == "Kategori 3")
        {
            persen_tjh = 0.015;
            biaya_tjh = nominal_tjh * persen_tjh;
        }
    }

    else if(tjh = 25)
    {
        nominal_tjh = 25000000
        if(tipe == "Kategori 1" || tipe == "Kategori 4")
        {
            persen_tjh = 0.01;
            biaya_tjh = nominal_tjh * persen_tjh;
        }

        else if (tipe == "Kategori 2" || tipe == "Kategori 3")
        {
            persen_tjh = 0.015;
            biaya_tjh = nominal_tjh * persen_tjh;
        }
    }

    // BIAYA KECELAKAAN PENUMPANG
    var biaya_tjhp= 0; 
    var persen_thjp = 0.001;
    if(document.getElementById('penumpang').checked)
    {       
        biaya_tjhp = (10000000 * persen_thjp) * 3;
        document.getElementById('penumpang-check').checked = "true";
    }
  
    // BIAYA KECELAKAAN DIRI
    var biaya_kecelakaan= 0; 
    var persen_kecelakaan= 0.005;
    var nominal_kecelakaan = 10000000;
    if(document.getElementById('kecelakaan').checked)
    {       
        biaya_kecelakaan = nominal_kecelakaan * persen_kecelakaan;
        document.getElementById('diri-check').checked = "true";
    }

    // BIAYA KERUSUHAN
    var biaya_kerusuhan = 0;
    var persen_kerusuhan = 0;
    if(document.getElementById('kerusuhan').checked)
    {       
        if(jaminan == "Comperehensive")
        {
            persen_kerusuhan = 0.0005;
        }

        else if (jaminan == "TLO")
        {
            persen_kerusuhan = 0.00035;
        }
        biaya_kerusuhan = nilai * persen_kerusuhan;

        document.getElementById('kerusuhan-check').checked = "true";
    }

    // BIAYA TERORISME
    var biaya_terorisme = 0;
    var persen_terorisme = 0;
    if(document.getElementById('terorisme').checked)
    {       
        if(jaminan == "Comperehensive")
        {
            persen_terorisme = 0.0005
        }

        else if (jaminan == "TLO")
        {
            persen_terorisme = 0.00035
        }
        biaya_terorisme = nilai * persen_terorisme;
        document.getElementById('terorisme-check').checked = "true";
    }

    // BIAYA BANJIR
    var biaya_banjir = 0;
    var persen_banjir = 0; 
    if(document.getElementById('banjir').checked)
    {      
        if(wilayah == "Wilayah 1")
        {
            if(jaminan == 'Comperehensive')
            {
                persen_banjir = 0.00075;
            }

            else if (jaminan == "TLO")
            {
                persen_banjir = 0.0005;
            }
        }

        else if (wilayah == "Wilayah 2")
        {
            if(jaminan == 'Comperehensive')
            {
                persen_banjir = 0.001;
            }

            else if (jaminan == "TLO")
            {
                persen_banjir = 0.00075;
            }
        }

        else if (wilayah == "Wilayah 3")
        {
            if(jaminan == 'Comperehensive')
            {
                persen_banjir = 0.00075;
            }

            else if (jaminan == "TLO")
            {
                persen_banjir = 0.0005;
            }
        }
        biaya_banjir = nilai * persen_banjir;

        document.getElementById('banjir-check').checked = "true";
    }

    // BIAYA GEMPA
    var biaya_gempa = 0;
    var persen_gempa = 0;
    if(document.getElementById('gempa').checked)
    {       
        if(wilayah == "Wilayah 1")
        {
            if(jaminan == 'Comperehensive')
            {
                persen_gempa =  0.0012;
            }

            else if (jaminan == "TLO")
            {
                persen_gempa  = 0.00085;
            }
        }

        else if (wilayah == "Wilayah 2")
        {
            if(jaminan == 'Comperehensive')
            {
                persen_gempa  =   0.001;
            }

            else if (jaminan == "TLO")
            {
                persen_gempa  =  0.00075;
            }
        }

        else if (wilayah == "Wilayah 3")
        {
            if(jaminan == 'Comperehensive')
            {
                persen_gempa  =   0.00075;
            }

            else if (jaminan == "TLO")
            {
                persen_gempa  =   0.0005;
            }
        }
        biaya_gempa = nilai * persen_gempa ;

        document.getElementById('gempa-check').checked = "true";
    }
    
    // PREMI DASAR Comperehensive
    if (jaminan == 'Comperehensive')
    {
        //NON TRUK & NON BUS
        if (tipe == 'Kategori 1')
        {
            if(wilayah == 'Wilayah 1')
            {
                if(nilai >= 0 && nilai <= 125000000)
                {
                    batas_bawah = 0.0382;
                    batas_atas = 0.0420;
                }

                else if (nilai > 125000000 && nilai <= 200000000)
                {
                    batas_bawah = 0.0267;
                    batas_atas = 0.0294;
                }

                else if (nilai > 200000000 && nilai <= 400000000)
                {
                    batas_bawah = 0.0218;
                    batas_atas = 0.0240;
                }

                else if (nilai > 400000000 && nilai <= 800000000)
                {
                    batas_bawah = 0.0120;
                    batas_atas = 0.0132;
                }

                else if (nilai > 800000000)
                {
                    batas_bawah = 0.0105;
                    batas_atas = 0.0116;
                }
            }

            else if (wilayah == 'Wilayah 2')
            {
                if(nilai >= 0 && nilai <= 125000000)
                {
                    batas_bawah = 0.0326;
                    batas_atas = 0.0359;
                }

                else if (nilai > 125000000 && nilai <= 200000000)
                {
                    batas_bawah = 0.0247;
                    batas_atas = 0.0272;
                }

                else if (nilai > 200000000 && nilai <= 400000000)
                {
                    batas_bawah = 0.0208;
                    batas_atas = 0.0229;
                }

                else if (nilai > 400000000 && nilai <= 800000000)
                {
                    batas_bawah = 0.0120;
                    batas_atas = 0.0132;
                }

                else if (nilai > 800000000)
                {
                    batas_bawah = 0.0105;
                    batas_atas = 0.0116;
                }
            }

            else if (wilayah == 'Wilayah 3')
            {
                if(nilai >= 0 && nilai <= 125000000)
                {
                    batas_bawah = 0.0253;
                    batas_atas = 0.0278;
                }

                else if (nilai > 125000000 && nilai <= 200000000)
                {
                    batas_bawah = 0.0269;
                    batas_atas = 0.0296;
                }

                else if (nilai > 200000000 && nilai <= 400000000)
                {
                    batas_bawah = 0.0179;
                    batas_atas = 0.0197;
                }

                else if (nilai > 400000000 && nilai <= 800000000)
                {
                    batas_bawah = 0.0114;
                    batas_atas = 0.0125;
                }

                else if (nilai > 800000000)
                {
                    batas_bawah = 0.0105;
                    batas_atas = 0.0116;
                }
            }
        }

        // TRUK & PICKUP
        else if (tipe == 'Kategori 2')
        {
             if(wilayah == 'Wilayah 1')
            {
                batas_bawah = 0.0242;
                batas_atas = 0.0267;
            }

            else if (wilayah == 'Wilayah 2')
            {
                batas_bawah = 0.0239;
                batas_atas = 0.0263;
            }

            else if (wilayah == 'Wilayah 3')
            {
                batas_bawah = 0.0223;
                batas_atas = 0.0246;
            }
        }

        // BUS
        else if (tipe == 'Kategori 3')
        {
            if(wilayah == 'Wilayah 1')
            {
                batas_bawah = 0.0104;
                batas_atas = 0.0114;
            }

            else if (wilayah == 'Wilayah 2')
            {
                batas_bawah = 0.0104;
                batas_atas = 0.0114;
            }

            else if (wilayah == 'Wilayah 3')
            {
                batas_bawah = 0.0088;
                batas_atas = 0.0097;
            }
        }

        // RODA DUA
        else if (tipe == 'Kategori 4')
        {
            if(wilayah == 'Wilayah 1')
            {
                batas_bawah = 0.0318;
                batas_atas = 0.0350;
            }

            else if (wilayah == 'Wilayah 2')
            {
                batas_bawah = 0.0318;
                batas_atas = 0.0350;
            }

            else if (wilayah == 'Wilayah 3')
            {
                batas_bawah = 0.0318;
                batas_atas = 0.0350;
            }
        }

    }

    // PREMI DASAR TLO
    else if (jaminan == 'TLO')
    {

        //NON TRUK & NON BUS
        if (tipe == 'Kategori 1')
        {
            if(wilayah == 'Wilayah 1')
            {
                if(nilai >= 0 && nilai <= 125000000)
                {
                    batas_bawah = 0.0047;
                    batas_atas = 0.0056;
                }

                else if (nilai > 125000000 && nilai <= 200000000)
                {
                    batas_bawah = 0.0063;
                    batas_atas = 0.0069;
                }

                else if (nilai > 200000000 && nilai <= 400000000)
                {
                    batas_bawah = 0.0041;
                    batas_atas = 0.0046;
                }

                else if (nilai > 400000000 && nilai <= 800000000)
                {
                    batas_bawah = 0.0025;
                    batas_atas = 0.0030;
                }

                else if (nilai > 800000000)
                {
                    batas_bawah = 0.0020;
                    batas_atas = 0.0024;
                }
            }

            else if (wilayah == 'Wilayah 2')
            {
                if(nilai >= 0 && nilai <= 125000000)
                {
                    batas_bawah = 0.0065;
                    batas_atas = 0.0078;
                }

                else if (nilai > 125000000 && nilai <= 200000000)
                {
                    batas_bawah = 0.0044;
                    batas_atas = 0.0053;
                }

                else if (nilai > 200000000 && nilai <= 400000000)
                {
                    batas_bawah = 0.0038;
                    batas_atas = 0.0042;
                }

                else if (nilai > 400000000 && nilai <= 800000000)
                {
                    batas_bawah = 0.0025;
                    batas_atas = 0.0030;
                }

                else if (nilai > 800000000)
                {
                    batas_bawah = 0.0020;
                    batas_atas = 0.0024;
                }
            }

            else if (wilayah == 'Wilayah 3')
            {
                if(nilai >= 0 && nilai <= 125000000)
                {
                    batas_bawah = 0.0051;
                    batas_atas = 0.0056;
                }

                else if (nilai > 125000000 && nilai <= 200000000)
                {
                    batas_bawah = 0.0044;
                    batas_atas = 0.0048;
                }

                else if (nilai > 200000000 && nilai <= 400000000)
                {
                    batas_bawah = 0.0029;
                    batas_atas = 0.0035;
                }

                else if (nilai > 400000000 && nilai <= 800000000)
                {
                    batas_bawah = 0.0023;
                    batas_atas = 0.0027;
                }

                else if (nilai > 800000000)
                {
                    batas_bawah = 0.0020;
                    batas_atas = 0.0024;
                }
            }
        }

        //TRUK & PICKUP
        else if (tipe == 'Kategori 2')
        {
             if(wilayah == 'Wilayah 1')
            {
                batas_bawah = 0.0088;
                batas_atas = 0.0107;
            }

            else if (wilayah == 'Wilayah 2')
            {
                batas_bawah = 0.0168;
                batas_atas = 0.0202;
            }

            else if (wilayah == 'Wilayah 3')
            {
                batas_bawah = 0.0081;
                batas_atas = 0.0098;
            }
        }

        //BUS
        else if (tipe == 'Kategori 3')
        {
            if(wilayah == 'Wilayah 1')
            {
                batas_bawah = 0.0023;
                batas_atas = 0.0029;
            }

            else if (wilayah == 'Wilayah 2')
            {
                batas_bawah = 0.0023;
                batas_atas = 0.0029;
            }

            else if (wilayah == 'Wilayah 3')
            {
                batas_bawah = 0.0018;
                batas_atas = 0.0022;
            }
        }

        //RODA DUA
        else if (tipe == 'Kategori 4')
        {
            if(wilayah == 'Wilayah 1')
            {
                batas_bawah = 0.0176;
                batas_atas = 0.0211;
            }

            else if (wilayah == 'Wilayah 2')
            {
                batas_bawah = 0.0180;
                batas_atas = 0.0216;
            }

            else if (wilayah == 'Wilayah 3')
            {
                batas_bawah = 0.0067;
                batas_atas = 0.0080;
            }
        }
    }

    // HASIL AWAL
    var nilai_bawah_raw = nilai*batas_bawah;

    // PEMBULATAN
    var nilai_bawah = Math.floor(nilai_bawah_raw);

    // PREMI TAHUN
    const date = new Date();
    let tahun_sekarang = date.getFullYear();
    var tahun_kendaraan = tahun_sekarang - tahun;
    var biaya_reload = 0;

    // MAX 10 Tahun
    var persen_reload = 0;
    if(tahun_kendaraan==5)
    {
        persen_reload = 0.05;
    }
    else if(tahun_kendaraan==6)
    {
        persen_reload = 0.1;
    }
    else if(tahun_kendaraan==7)
    {
        persen_reload = 0.15;
    }
    else if(tahun_kendaraan==8)
    {
        persen_reload = 0.2;
    }
    else if(tahun_kendaraan==9)
    {
        persen_reload = 0.25;
    }
    else if(tahun_kendaraan==10)
    {
        persen_reload =  0.3;
    }
    biaya_reload = nilai_bawah * persen_reload;

    // OUTPUT
    var output =  (nilai_bawah + biaya_tjh + biaya_tjhp + biaya_kerusuhan + biaya_terorisme + biaya_kecelakaan + biaya_banjir + biaya_gempa);
    output_akhir = output - (output * biaya_diskon) + 25000 + biaya_reload;

    // TAMPIL HASIL
    if(isNaN(output_akhir) || output_akhir==0)
    {
        document.getElementById("hasil").innerHTML= "Masukkan Input Dengan Lengkap";
    }

    else{
        document.getElementById("hasil").innerHTML= "Rp. "+ add_comma(output_akhir);
    }


    // TABEL BAWAH
    document.getElementById("kendaraan-harga").innerHTML= "Rp. "+add_comma(nilai);
    document.getElementById("kendaraan-tarif").innerHTML= batas_bawah*100+" %";
    document.getElementById("kendaraan-premi").innerHTML= "+ Rp. "+add_comma(nilai_bawah);

    document.getElementById("tjh-harga").innerHTML= "Rp. "+add_comma(nominal_tjh);
    document.getElementById("tjh-tarif").innerHTML= persen_tjh*100+" %";
    document.getElementById("tjh-premi").innerHTML= "+ Rp. "+add_comma(biaya_tjh);

    document.getElementById("kecelakaan-harga").innerHTML= "Rp. "+add_comma(nominal_kecelakaan);
    document.getElementById("kecelakaan-tarif").innerHTML= persen_kecelakaan*100+" %";
    document.getElementById("kecelakaan-premi").innerHTML= "+ Rp. "+add_comma(biaya_kecelakaan);

    document.getElementById("penumpang-harga").innerHTML= "Rp. "+add_comma(nominal_kecelakaan);
    document.getElementById("penumpang-tarif").innerHTML= persen_thjp*100+" % (x3)";
    document.getElementById("penumpang-premi").innerHTML= "+ Rp. "+add_comma(biaya_tjhp);

    document.getElementById("kerusuhan-harga").innerHTML= "Rp. "+add_comma(nilai);
    document.getElementById("kerusuhan-tarif").innerHTML= persen_kerusuhan*100+" %";
    document.getElementById("kerusuhan-premi").innerHTML= "+ Rp. "+add_comma(biaya_kerusuhan);

    document.getElementById("terorisme-harga").innerHTML= "Rp. "+add_comma(nilai);
    document.getElementById("terorisme-tarif").innerHTML= persen_terorisme*100+" %";
    document.getElementById("terorisme-premi").innerHTML= "+ Rp. "+add_comma(biaya_terorisme);

    document.getElementById("banjir-harga").innerHTML= "Rp. "+add_comma(nilai);
    document.getElementById("banjir-tarif").innerHTML= persen_banjir*100+" %";
    document.getElementById("banjir-premi").innerHTML= "+ Rp. "+add_comma(biaya_banjir);

    document.getElementById("reload-harga").innerHTML= "Rp. "+add_comma(nilai_bawah);
    document.getElementById("reload-tarif").innerHTML= persen_reload*100+" %";
    document.getElementById("reload-premi").innerHTML= "+ Rp. "+add_comma(biaya_reload);

    biaya_gempa = Math.floor(biaya_gempa);
    document.getElementById("gempa-harga").innerHTML= "Rp. "+add_comma(nilai);
    document.getElementById("gempa-tarif").innerHTML= persen_gempa*100+" %";
    document.getElementById("gempa-premi").innerHTML= "+ Rp. "+add_comma(biaya_gempa);

    document.getElementById("diskon-harga").innerHTML= "Rp. "+add_comma(output);
    document.getElementById("diskon-tarif").innerHTML= diskon+" %";
    document.getElementById("diskon-premi").innerHTML= "- Rp. "+add_comma(output*biaya_diskon);

    document.getElementById("hasil-premi").innerHTML= "Rp. "+add_comma(output);
    document.getElementById("hasil-akhir").innerHTML= "Rp. "+add_comma(output_akhir);

    // TABEL PERINCIAN
    document.getElementById("nilai-kendaraan").innerHTML= "+ Rp. "+add_comma(nilai_awal);
    document.getElementById("perlengkapan-tambahan").innerHTML= "+ Rp. "+add_comma(perlengkapan);
    document.getElementById("jumlah-pertanggungan").innerHTML= "Rp. "+add_comma(nilai);

}