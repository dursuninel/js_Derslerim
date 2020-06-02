// const konus= (function konus(name,text){
//     var konusan=’konusan’;
//     return konusan+&#39;&#39; + name+&#39;: &#39;+text;
//     })(“Ahmet”, “Merhaba”);

// Arrow Function
var konusan = "Konusan";
const konus =( (name,text) => konusan + " " + name + " : " + text);

console.log(konus("Ahmet","Merhaba"));

