document.title = "Spread";

//Spread ile console da gösterme

const array = [100,200,300,400];

console.log(...array);

// Function ile Kullanma

const func = (n1,n2,n3) => console.log((n1 + n2) / n3 );

func(...array);

// Destructing ile Kullanma

const [s1,s2,...sayilar] = array;

console.log(s1,s2);

//Bu şekilde yapınca array olarak göstermiyor
console.log(...sayilar);

// array olarak  gçstermesi için bu şekilde yazdım
console.log(Array(...sayilar));