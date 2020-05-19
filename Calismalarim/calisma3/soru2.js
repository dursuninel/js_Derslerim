
 var ab = document.querySelector("#ab");
 var abc = document.querySelector("#abc");
 
  let dizi = [];
  
           

    ab.onclick=function(){

            dizi.push(ab.textContent);
        localStorage.setItem("diziler",JSON.stringify(dizi));

        

    }
ab.pare

var a =JSON.parse(localStorage.getItem("diziler"));
    console.log(a);





