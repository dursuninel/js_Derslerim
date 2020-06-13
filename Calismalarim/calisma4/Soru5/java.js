let maaslar = {
    "Ali" : 100,
    "Ayşe" : 300,
    "Ahmet" : 250
};

const dizi = [];

// maaslar objesindeki değerleri bir diziye attım
for(let value in maaslar)
{
   dizi.push(maaslar[value]);
}

console.log(dizi);

// Destructin ile dizinin ilk değerini max a eşitledim

var [max] = dizi;

// dizi içindeki en yüksek sayıyı buldum
for (let index = 0; index < dizi.length; index++)
{
    if (max < dizi[index])  
    {
        max = dizi[index]; 
    }
}
console.log(max);

// en yüksek sayıya sahip olan kişinin adını buldum

for(let value in maaslar)
{
    if(maaslar[value] == max)
    {
        console.log(value);
    }
}

