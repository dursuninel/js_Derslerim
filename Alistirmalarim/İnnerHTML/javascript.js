
// İnnerHTML ile id'si seçili elamana yeni etiket ekleme 

var value;

let elem = document.querySelector("#clear-todos");

value = elem;

value = elem.innerHTML = "<button class='btn btn-primary text-white'>  Gönder </button>";
value = elem.innerHTML = "<button class='btn btn-primary text-white'>  gönder </button>"

value = elem.innerHTML = "<textarea> </textarea>";

console.log(value);