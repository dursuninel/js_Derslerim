const yarismacilar =
[
    {
        ad:"Ömer",
        soyad:"Ustaömer",
        yas:35,
        eposta:"ömrustaömr@gmail.com",
        dereceleri:
        [
            "16 Türkiye 1.liği ",
            "8 Avrupa 1.liği",
            "2 Dünya 2.liği"
        ],
        katilimyeri:
        {
            il:"İstanbul",
            ilce:"Beylikdüzü"
        },
        kademesi:"2. Derece Bilek Güreşi Antrenörü",
        sagkol_katilacak:true,
        solkol_katilacak:true,
        yarismayi_kazandi:true
    },
    {
        ad:"Hamza",
        soyad:"Ziypak",
        yas:28,
        eposta:"hmzziypak@gmail.com",
        dereceleri:
        [
            "5 Türkiye 1.liği ",
            "3 Avrupa 1.liği" 
        ],
        katilimyeri:
        {
            il:"İstanbul",
            ilce:"Pendik",
        },
        kademesi:"Yok",
        sagkol_katilacak:true,
        solkol_katilacak:true,
        yarismayi_kazandi:false
    }
];
console.log(yarismacilar[0].ad,yarismacilar[0].soyad," vs ",yarismacilar[1].ad,yarismacilar[1].soyad);
console.log("   Yaş:",yarismacilar[0].yas,"         ","Yaş:",yarismacilar[1].yas);
console.log("            Kazanan");
console.log("        ",yarismacilar[0].ad,yarismacilar[0].soyad);