
// <table class="table">
//   <thead>
//     <tr>
//       <th scope="col">#</th>
//       <th scope="col">First</th>
//       <th scope="col">Last</th>
//       <th scope="col">Handle</th>
//     </tr>
//   </thead>
//   <tbody>
//     <tr>
//       <th scope="row">1</th>
//       <td>Mark</td>
//       <td>Otto</td>
//       <td>@mdo</td>
//     </tr>
var marka = document.querySelector("#marka");
var ekran_karti = document.querySelector("#ekran_kart");
var ram = document.querySelector("#ram");
var islemci = document.querySelector("#islemci");
var anakart = document.querySelector("#anakart");

var table = document.createElement("table");
var thead = document.createElement("thead");
var tbody = document.createElement("tbody");
var th;
var tr;
var td;
var sayac=0;
var yer = document.querySelector(".container");

gonder.onclick=function()
{  
    sayac = sayac + 1;
    if (sayac == 1)
    {
    table.className = "table table-dark mt-3";
    table.appendChild(thead);
    

    tr = document.createElement("tr");
    thead.appendChild(tr);

    th = document.createElement("th");
    tr.appendChild(th);
    th.scope ="col";
    th.appendChild(document.createTextNode(""));

    th = document.createElement("th");
    tr.appendChild(th);
    th.scope ="col";
    th.appendChild(document.createTextNode("Marka"));

    th = document.createElement("th");
    tr.appendChild(th);
    th.scope="col";
    th.appendChild(document.createTextNode("Ekran Kartı"));
    
    th = document.createElement("th");
    tr.appendChild(th);
    th.scope="col";
    th.appendChild(document.createTextNode("RAM"));

    th = document.createElement("th");
    tr.appendChild(th);
    th.scope="col";
    th.appendChild(document.createTextNode("İşlemci"));

    th = document.createElement("th");
    tr.appendChild(th);
    th.scope="col";
    th.appendChild(document.createTextNode("Anakart"));

    table.appendChild(tbody);
    }
    tr = document.createElement("tr");
    tbody.appendChild(tr);

    th = document.createElement("th");
    tr.appendChild(th);
    th.scope="row";
    th.appendChild(document.createTextNode(sayac));
    
    td = document.createElement("td");
    tr.appendChild(td);
    td.appendChild(document.createTextNode(marka.value));

    td = document.createElement("td");
    tr.appendChild(td);
    td.appendChild(document.createTextNode(ekran_kart.value));

    td = document.createElement("td");
    tr.appendChild(td);
    td.appendChild(document.createTextNode(ram.value));

    td = document.createElement("td");
    tr.appendChild(td);
    td.appendChild(document.createTextNode(islemci.value));

    td = document.createElement("td");
    tr.appendChild(td);
    td.appendChild(document.createTextNode(anakart.value));

    if (sayac == 4)
   {
       console.log(table);
   }

   yer.appendChild(table);
}