var in1=document.querySelector("#ad");
var in2=document.querySelector("#soyad");
var in3=document.querySelector("#cins");
var form = document.querySelector("#form");
var kontrol=document.createElement("button");




var next = document.querySelector("#next");
var pre = document.querySelector("#pre");
var kayıt = document.querySelector("#kayıt");
var deger1;
var deger2;
var deger3;

        pre.disabled = true;
        kayıt.disabled = true;
        var sayac = 0;
        var kSayac = 0;
        next.onclick=function(e){
            if(sayac <= 2)
            {
                sayac = sayac + 1;
            }  
            if(sayac == 1)
            {
                deger1 = in1.value;
                deger2 = in2.value;
                deger3 = in3.value;

                form.children[1].children[0].textContent="Email";
                in1=document.createElement("input");
                in1.type="email";
                in1.className="form-control";
                in1.id="email";

                form.children[2].children[0].textContent="Şifre";
                in2=document.createElement("input");
                in2.type="password";
                in2.className="form-control";
                in2.id="sifre";

                form.children[3].children[0].textContent="Tekrar Şifre";
                in3=document.createElement("input");
                in3.type="password";
                in3.className="form-control";
                in3.id="tsifre";

                kontrol.className="btn btn-success mt-2";
                kontrol.textContent="Şifre Kontrol";
                kontrol.id="kontol";

                form.children[1].children[1].remove();
                form.children[2].children[1].remove();
                form.children[3].children[1].remove();
                form.children[1].appendChild(in1);
                form.children[2].appendChild(in2);
                form.children[3].appendChild(in3);
                form.children[3].appendChild(kontrol);
            }
            kontrol.onclick=function(e)
                {
                    kSayac = kSayac + 1;
                    if (kSayac != 1) 
                    {
                        form.children[3].children[2].remove();
                    }
                    if (sifre.value != tsifre.value) 
                    {
                        var uyari =document.createElement("small");
                        uyari.id = "uyari";
                        uyari.className="form-text";
                        uyari.style.color="red";
                        in2.style.borderColor="red";
                        in3.style.borderColor="red";
                        uyari.appendChild(document.createTextNode("Şifreler Eşleşmiyor"));
                        form.children[3].insertBefore(uyari,kontrol); 
                    }
                    else
                    {
                        var uyari =document.createElement("small");
                        uyari.id = "uyari";
                        uyari.className="form-text";
                        uyari.style.color="green";
                        in2.style.borderColor="green";
                        in3.style.borderColor="green";
                        uyari.appendChild(document.createTextNode("Şifreler Eşleşiyor"));
                        form.children[3].insertBefore(uyari,kontrol);   
                    }
                    e.preventDefault();
                }
          
            if(sayac == 1)
            {
                next.disabled = true;
                kayıt.disabled = false;
            }            
            
            pre.disabled = false;
            e.preventDefault();
        }


        pre.onclick=function(e)
        {
            kontrol.remove();

            sayac = sayac - 1;
            if(sayac == 0)
            {
                pre.disabled=true;
                next.disabled=false;
                kayıt.disabled=true;

                form.children[1].children[0].textContent="Ad";
                in1=document.createElement("input");
                in1.type="text";
                in1.className="form-control";
                in1.id="ad";

                form.children[2].children[0].textContent="Soyad";
                in2=document.createElement("input");
                in2.type="text";
                in2.className="form-control";
                in2.id="soyad";

                form.children[3].children[0].textContent="Cinsiyet";
                in3=document.createElement("Select");
                in3.className="form-control";
                in3.id="cins";
                let icElement = document.createElement("option")
                icElement.textContent="Erkek";
                in3.appendChild(icElement);
                icElement = document.createElement("option");
                icElement.textContent="Kadın";
                in3.appendChild(icElement);

                form.children[1].children[1].remove();
                form.children[2].children[1].remove();
                form.children[3].children[1].remove();
                
                form.children[1].appendChild(in1);
                form.children[2].appendChild(in2);
                form.children[3].appendChild(in3);
            }
            
            
            e.preventDefault();
        }

        kayıt.onclick=function(e){
            if (deger1!="" && deger2!="" && deger3!="" && in1.value!="" & in2.value!="" && in3.value!="" && in2.value == in3.value) 
            {
                localStorage.setItem("ad",deger1);
                localStorage.setItem("soyad",deger2);
                localStorage.setItem("cinsiyet",deger3);
                localStorage.setItem("email",in1.value);
                localStorage.setItem("sifre",in3.value);
    
                var alert = document.createElement("div");
                alert.className="alert alert-success mt-2";
                alert.textContent="Kayıt Başarılı";
                form.appendChild(alert);

                setTimeout(function(){   
                    alert.remove();
                }, 2000);
            }
            else
            {
                alert = document.createElement("div");
                alert.className="alert alert-danger mt-2";
                alert.textContent="Kayıt Başarısız";
                form.appendChild(alert);

                setTimeout(function()
                {   
                    alert.remove();
                }, 2000);
            }

            
            e.preventDefault();
        }


