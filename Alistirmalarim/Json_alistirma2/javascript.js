const obje =
[
    {
    name : "Dursun inel",
    yas : 17
    },

    {
        name:"yağmur inel",
        yas: 9
    },

    {
        name:"ismail",
        soyad:"hamulu",
        brans:"ogretmen",
        adres : [
            il="istanbul",
            ilce="sarıyer",
            mahalle="ayazağa"
        ]
    }
]
const a = obje.map(function(user)
{
    return user.yas;
})
console.log(a);

console.log(obje[2].adres[2-2]);
document.write(obje[2].adres[0]);
document.write(obje[0].yas);
console.log(obje[0].yas);
console.log(obje[1].name);

// Sadece yaşı değiştirme denemesi

console.log(obje[0].name === "Dursun inel" ? "true" : "false");

function mer(ad,yass)
{
    if(ad != String)
    {
        yass=ad;
        ad=undefined;
    }
    console.log("adım:",ad,"yaşim:",yass);
}
mer(17);
