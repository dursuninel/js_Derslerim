var todo; 

var todoEkle = document.querySelector(".btn.btn-danger");
var listGroup = document.querySelector(".list-group");
{/* <li class="list-group-item d-flex justify-content-between">
          Todo 4
     <a href = "#" class ="delete-item">
      <i class = "fa fa-remove"></i>
     </a>
        
</li> */}


// Todo Oluşturma

var newElement;
var a;
var i;
todoEkle.onclick = function(e){
    console.log("Todo Eklendi");
    
    newElement=document.createElement("li");
    newElement.className="list-group-item d-flex justify-content-between";
    
    a = document.createElement("a");
    a.href = "#";
    a.className = "delete-item";

    
    i = document.createElement("i");
    i.className = "fa fa-remove";
    a.appendChild(i);
    todo = document.querySelector("#todo").value;

    if (todo != "")
    {
        newElement.appendChild(document.createTextNode(todo));
        newElement.appendChild(a);
        a.appendChild(i);
        listGroup.appendChild(newElement);
    }
    
    console.log(newElement);
    e.preventDefault();
}

// Todo Silme

listGroup.addEventListener("mousedown",sil);

function sil(e)
{  
    if (e.target.className == "fa fa-remove") 
    {
     e.target.parentElement.parentElement.remove();
    } 
}

// 

