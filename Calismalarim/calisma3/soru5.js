let text = document.querySelector("#yazi");

text.addEventListener("keyup", KarakterSinir);

    function KarakterSinir() 
    {
        var sinir = 100 - document.getElementById("yazi").value.length;
        if (sinir >= 0) 
        {
           document.getElementById("sinir").innerHTML = sinir;
        }
        else 
        { 
           text.value = text.value.substring(0, 100);
           document.getElementById("sinir").innerHTML = 0; 
        } 
   }