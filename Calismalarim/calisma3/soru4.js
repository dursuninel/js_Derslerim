var text = document.getElementById("email").value;
var btn = document.getElementById("btn");

btn.onclick = function () 
{
    var filtre = /^([\w\-\.])+\@([\w\-\.])+\.([\w]{2,})$/; 
    while (filtre.test(text) == false) 
    { 
     alert("Hatalı giriş yaptınız."); 
     return false; 
    } 
    alert("Doğru giriş yaptınız."); 
}