var sepet = document.querySelector("#sepet");
sepet.textContent=localStorage.getItem("sepetUrun");

function arttir()
{
    sepet.textContent = Number(sepet.textContent) + 1; 
    localStorage.setItem("sepetUrun",sepet.textContent);
}


document.addEventListener("click",ss);

var div=document.createElement("div");
var div1 ;


var dizi = [];


function ss(e)
{
    if (e.target.id == "btn1") 
    {
        div1 = document.createElement("div");
        div1.className="card col-xl-4";
        var img = document.createElement("img");
        img.src="telefon.jpg";
        img.className="card-img-top";

        div1.appendChild(img);
        var div2 = document.createElement("div");
        div2.className="card-body";
        div1.appendChild(div2);
        var h5 = document.createElement("h5");
        h5.className="card-title";
        h5.appendChild(document.createTextNode(document.getElementsByClassName("card-title")[0].textContent));
        div2.appendChild(h5);
        var p = document.createElement("p");
        p.className="card-text";
        p.appendChild(document.createTextNode(document.getElementsByClassName("card-text")[0].textContent));
        div2.appendChild(p);
        div.appendChild(div1);
        dizi.push(div.innerHTML);
        localStorage.setItem("sepettekiUrun",JSON.stringify(dizi));
        console.log(div1);
    }
    if (e.target.id == "btn2") 
    {
        div1 = document.createElement("div");
        div1.className="card col-xl-4";
        var img = document.createElement("img");
        img.src="telefon.jpg";
        img.className="card-img-top";

        div1.appendChild(img);
        var div2 = document.createElement("div");
        div2.className="card-body";
        div1.appendChild(div2);
        var h5 = document.createElement("h5");
        h5.className="card-title";
        h5.appendChild(document.createTextNode(document.getElementsByClassName("card-title")[1].textContent));
        div2.appendChild(h5);
        var p = document.createElement("p");
        p.className="card-text";
        p.appendChild(document.createTextNode(document.getElementsByClassName("card-text")[1].textContent));
        div2.appendChild(p);
        div.appendChild(div1);
        dizi.push(div.innerHTML);
        localStorage.setItem("sepettekiUrun",JSON.stringify(dizi));
        console.log(div1);
    }
    if (e.target.id == "btn3") 
    {
        div1 = document.createElement("div");
        div1.className="card col-xl-4";
        var img = document.createElement("img");
        img.src="telefon.jpg";
        img.className="card-img-top";

        div1.appendChild(img);
        var div2 = document.createElement("div");
        div2.className="card-body";
        div1.appendChild(div2);
        var h5 = document.createElement("h5");
        h5.className="card-title";
        h5.appendChild(document.createTextNode(document.getElementsByClassName("card-title")[2].textContent));
        div2.appendChild(h5);
        var p = document.createElement("p");
        p.className="card-text";
        p.appendChild(document.createTextNode(document.getElementsByClassName("card-text")[2].textContent));
        div2.appendChild(p);
        div.appendChild(div1);
        dizi.push(div.innerHTML);
        localStorage.setItem("sepettekiUrun",JSON.stringify(dizi));        
        console.log(div1);
    }
}
