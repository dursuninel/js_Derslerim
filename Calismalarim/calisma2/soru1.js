var ad = document.querySelector("#ad");
var soyad = document.querySelector("#soyad");
var mail = document.querySelector("#mail");
var gonder = document.querySelector("#gonder");
var form = document.querySelector("#form");
    
var sayac = 0;

gonder.onclick=function()
{
    var newelement;
    var yer;
    sayac = sayac + 1;

    if (sayac == 1) 
    {
        if (ad.value == "") 
        {
        yer = form.children[0];
        newelement=document.createElement("small");
        newelement.id = "uyari";
        newelement.className="form-text";
        newelement.style.color="red";
        ad.style.borderColor="red";
        newelement.appendChild(document.createTextNode("Ad boş bırakılamaz"));
        yer.appendChild(newelement);        
        }
        else
        {
            newelemen.remove();
            sayac = 0;
        }
    } 
    
    if (soyad.value == "")
    {
        yer = form.children[1];
        newelement=document.createElement("small");
        newelement.id = "uyari";
        newelement.className="form-text";
        newelement.style.color="red";
        soyad.style.borderColor="red";
        newelement.appendChild(document.createTextNode("Soyad boş bırakılamaz"));
        yer.appendChild(newelement);
    }
    if (mail.value == "") 
    {
        yer = form.children[2];
        newelement=document.createElement("small");
        newelement.id = "uyari";
        newelement.className="form-text";
        newelement.style.color="red";
        mail.style.borderColor="red";
        newelement.appendChild(document.createTextNode("Mail boş bırakılamaz"));
        yer.appendChild(newelement);
    }
   
}