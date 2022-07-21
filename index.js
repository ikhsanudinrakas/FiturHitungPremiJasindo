function nilai_input() {

    var batas_atas;
    var batas_bawah;

    // AMBIL NILAI DARI FORM INPUT
    var jaminan = document.getElementById('jaminan').value;
    var tipe = document.getElementById('tipe').value;
    var wilayah = document.getElementById('wilayah').value;
    var nilai = document.getElementById('nilai').value.split('.').join("");

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

        // RODA 2
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

        //RODA 2
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

    // HASIL
    var nilai_atas_raw = nilai*batas_atas;
    var nilai_bawah_raw = nilai*batas_bawah;

    // PEMBULATAN
    var nilai_atas = Math.floor(nilai_atas_raw);
    var nilai_bawah = Math.floor(nilai_bawah_raw);

    // TAMPIL HASIL
    document.getElementById("hasil").innerHTML= "Rp. "+   nilai_bawah.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+ "  -  Rp. "  +nilai_atas.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    
}
    

