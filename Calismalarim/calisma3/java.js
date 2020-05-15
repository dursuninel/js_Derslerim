const  nextBtn  =  document.getElementById('nextBtn');
const  bullets  =  [...document.querySelectorAll('.bullet')];

const MAX_STEPS = 3;
let currentStep = 1;

nextBtn.addEventListener('click',  ()  =>  {
	bullets[currentStep  -  1].classList.add('completed');
	currentStep  +=  1;
	if  (currentStep  ===  MAX_STEPS)  {
		nextBtn.disabled  =  true;
    }
});


var sayac = 0 ;
var input = document.getElementsByTagName("input");
var label = document.getElementsByTagName("label");
var form = document.querySelector("#form");
var degis = document.querySelector("#form").children[2].children[1];
nextBtn.onclick=function()
{
    sayac = sayac + 1;
    if (sayac == 1) 
    {
        label[0].textContent="E-posta";

        input[1].type="password";
        label[1].textContent="Şifre";

        label[2].textContent="Cinsiyet";
        
        var in3 = document.querySelector("in3");
        var select = document.createElement("select");
        select.className="form-control col-xl-3 col-lg-3";
        var option = document.createElement("option");
        option.appendChild(document.createTextNode("Bay"));
        select.appendChild(option);
        option = document.createElement("option");
        option.appendChild(document.createTextNode("Bayan"));
        select.appendChild(option);
        
        degis.remove();
        form.insertBefore(select,form.children[2])
        
    }
    else if (sayac == 2)
    {
        label[0].textContent="Mail";
        label[1].textContent="Telefon";
    }
    else if (sayac == 3)
    {
        label[0].textContent="Mail";
        label[1].textContent="Telefon";
    }
}