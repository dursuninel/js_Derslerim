document.title = "For in - and - For of";

const person = {
    name:"Dursun",
    age:17
};

const array = [100,200,300,400,500];

// For in

for(let value in array)
console.log(value);

for(let value in person)
console.log(value);
// Değerleri almak için;

for(let value in person)
console.log(person[value]);

// For of


//for(let value of person)
//console.log(value);

// ^ Bu kod hata verecektir , Çünkü for of döngüsü obje üzerinde gezinemez

for(let value of array)
console.log(value);

// For in den farklı olarak for of bize proplar yerine değerleri döndürdü
