
// Foreach ile dizi elemanlarını , ilk harflerini ve index lerini gösterme

const kisiler=["Berkan","Dursun","Aslı","Emir"];

kisiler.forEach(function(kisi,index)
{
    console.log(index,kisi,kisi[0]);
})