
 var a = document.querySelector("#a");
 var b = document.querySelector("#b");
 var c = document.querySelector("#c");
 var d = document.querySelector("#d");
 var f = document.querySelector("#f");
 var g = document.querySelector("#g");
 var sonuc1;
 var head;
 

  var dizi = JSON.parse(localStorage.getItem("diziler"));
  var dizi1 = JSON.parse(localStorage.getItem("diziler1"));
  var dizi2 = JSON.parse(localStorage.getItem("diziler2"));

  var sayi =dizi.length;
  var sayi1 =dizi1.length;
  var sayi2 =dizi2.length;

  var sayia = 0;
        var sayib = 0;

    a.onclick=function(){
        
        dizi.push(a.id);
        localStorage.setItem("diziler",JSON.stringify(dizi));
        for (let index = 0; index < dizi.length; index++) {
            if (dizi[index] == "a") 
            {
                sayia = sayia + 1;
            }
            if (dizi[index] == "b") 
            {
                sayib = sayib + 1;
            }
        }
        var sonuc = Number((sayia * 100) / dizi.length);
        a.remove();
        b.remove();
        head = document.querySelector("#baslika");
        head.style.visibility = "visible";
        sonuc1 = document.querySelector("#sonuca");
        sonuc1.style.cssText = "width:"+ Math.round(sonuc) +"%";
        sonuc1.textContent= "%"+ Math.round(sonuc);

        var sonuc = Number((sayib * 100) / dizi.length);
        head = document.querySelector("#baslikb");
        head.style.visibility = "visible";
        head.className="progress mt-2 mb-3";
        sonuc1 = document.querySelector("#sonucb");
        sonuc1.style.cssText = "width:"+ Math.round(sonuc) +"%";
        sonuc1.textContent= "%"+ Math.round(sonuc);
    }
    b.onclick=function(){

        dizi.push(b.id);
        localStorage.setItem("diziler",JSON.stringify(dizi));
        for (let index = 0; index < dizi.length; index++) {
            if (dizi[index] == "a") 
            {
                sayia = sayia + 1;
            }
            if (dizi[index] == "b") 
            {
                sayib = sayib + 1;
            }
        }
        var sonuc = Number((sayia * 100) / dizi.length);
        a.remove();
        b.remove();
        head = document.querySelector("#baslika");
        head.style.visibility = "visible";
        sonuc1 = document.querySelector("#sonuca");
        sonuc1.style.cssText = "width:"+ Math.round(sonuc) +"%";
        sonuc1.textContent= "%"+ Math.round(sonuc);

        var sonuc = Number((sayib * 100) / dizi.length);
        head = document.querySelector("#baslikb");
        head.style.visibility = "visible";
        head.className="progress mt-2 mb-3";
        sonuc1 = document.querySelector("#sonucb");
        sonuc1.style.cssText = "width:"+ Math.round(sonuc) +"%";
        sonuc1.textContent= "%"+ Math.round(sonuc);
    }

    

    c.onclick=function(){
        sayia = 0;
    sayib = 0;
    
        dizi1.push(c.id);
        localStorage.setItem("diziler1",JSON.stringify(dizi1));
        for (let index = 0; index < dizi1.length; index++) {
            if (dizi1[index] == "c") 
            {
                sayia = sayia + 1;
            }
            if (dizi1[index] == "d") 
            {
                sayib = sayib + 1;
            }
        }
        var sonuc = Number((sayia * 100) / dizi1.length);
        c.remove();
        d.remove();
        head = document.querySelector("#baslikc");
        head.style.visibility = "visible";
        sonuc1 = document.querySelector("#sonucc");
        sonuc1.style.cssText = "width:"+ Math.round(sonuc) +"%";
        sonuc1.textContent= "%"+ Math.round(sonuc);

        var sonuc = Number((sayib * 100) / dizi1.length);
        head = document.querySelector("#baslikd");
        head.style.visibility = "visible";
        head.className="progress mt-2 mb-3";
        sonuc1 = document.querySelector("#sonucd");
        sonuc1.style.cssText = "width:"+ Math.round(sonuc) +"%";
        sonuc1.textContent= "%"+ Math.round(sonuc);
    }
    d.onclick=function(){
        sayia = 0;
    sayib = 0;

        dizi1.push(d.id);
        localStorage.setItem("diziler1",JSON.stringify(dizi1));
        for (let index = 0; index < dizi1.length; index++) {
            if (dizi1[index] == "c") 
            {
                sayia = sayia + 1;
            }
            if (dizi1[index] == "d") 
            {
                sayib = sayib + 1;
            }
        }
        var sonuc = Number((sayia * 100) / dizi1.length);
        c.remove();
        d.remove();
        head = document.querySelector("#baslikc");
        head.style.visibility = "visible";
        sonuc1 = document.querySelector("#sonucc");
        sonuc1.style.cssText = "width:"+ Math.round(sonuc) +"%";
        sonuc1.textContent= "%"+ Math.round(sonuc);

        var sonuc = Number((sayib * 100) / dizi1.length);
        head = document.querySelector("#baslikd");
        head.style.visibility = "visible";
        head.className="progress mt-2 mb-3";
        sonuc1 = document.querySelector("#sonucd");
        sonuc1.style.cssText = "width:"+ Math.round(sonuc) +"%";
        sonuc1.textContent= "%"+ Math.round(sonuc);
    }
    e.onclick=function(){
        sayia = 0;
    sayib = 0;

        dizi2.push(e.id);
        localStorage.setItem("diziler2",JSON.stringify(dizi2));
        for (let index = 0; index < dizi2.length; index++) {
            if (dizi2[index] == "e") 
            {
                sayia = sayia + 1;
            }
            if (dizi2[index] == "f") 
            {
                sayib = sayib + 1;
            }
        }
        var sonuc = Number((sayia * 100) / dizi2.length);
        e.remove();
        f.remove();
        head = document.querySelector("#baslike");
        head.style.visibility = "visible";
        sonuc1 = document.querySelector("#sonuce");
        sonuc1.style.cssText = "width:"+ Math.round(sonuc) +"%";
        sonuc1.textContent= "%"+ Math.round(sonuc);

        var sonuc = Number((sayib * 100) / dizi2.length);
        head = document.querySelector("#baslikf");
        head.style.visibility = "visible";
        head.className="progress mt-2 mb-3";
        sonuc1 = document.querySelector("#sonucf");
        sonuc1.style.cssText = "width:"+ Math.round(sonuc) +"%";
        sonuc1.textContent= "%"+ Math.round(sonuc);
    }
    f.onclick=function(){
        sayia = 0;
    sayib = 0;

        dizi2.push(f.id);
        localStorage.setItem("diziler2",JSON.stringify(dizi2));
        for (let index = 0; index < dizi2.length; index++) {
            if (dizi2[index] == "e") 
            {
                sayia = sayia + 1;
            }
            if (dizi2[index] == "f") 
            {
                sayib = sayib + 1;
            }
        }
        var sonuc = Number((sayia * 100) / dizi2.length);
        e.remove();
        f.remove();
        head = document.querySelector("#baslike");
        head.style.visibility = "visible";
        sonuc1 = document.querySelector("#sonuce");
        sonuc1.style.cssText = "width:"+ Math.round(sonuc) +"%";
        sonuc1.textContent= "%"+ Math.round(sonuc);

        var sonuc = Number((sayib * 100) / dizi2.length);
        head = document.querySelector("#baslikf");
        head.style.visibility = "visible";
        head.className="progress mt-2 mb-3";
        sonuc1 = document.querySelector("#sonucf");
        sonuc1.style.cssText = "width:"+ Math.round(sonuc) +"%";
        sonuc1.textContent= "%"+ Math.round(sonuc);
    }






