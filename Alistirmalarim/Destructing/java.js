document.title = "Destructing";

const arr = new Array (100,200,300);

const [n1,n2] = arr;

console.log(n1,n2);

// obje ile kullanımı

const person = {
    name : "Dursun İnel",
    age : 17,
    dateOfBirth : "20/07/2003",
    country : "Türkiye",
    showinfo : () => console.log("Bilgiler Gösteriliyor ... ")
}

const {name:isim,age:yas,dateOfBirth:dogumTarihi,country:ulke,showinfo:goster} = person;

goster();
console.log(isim,String(yas),dogumTarihi,ulke);
