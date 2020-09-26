//Element Seçme
const todo = document.querySelector("#todo");
const addTodo = document.querySelector("#todo-form").children[1];
const form = document.querySelector("#todo-form");
const filter = document.querySelector("#filter");
const todoList = document.querySelector(".list-group");
const clearTodos = document.querySelector("#clear-todos");

// Task ekleme
addTodo.addEventListener("click",function(e){
    let element;
    element = document.createElement("li");
    element.classList = "list-group-item d-flex justify-content-between";
    element.textContent = todo.value;
    var icElement = document.createElement("a");
    icElement.href = "#";
    icElement.classList = "delete-item";
    element.appendChild(icElement);
    icElement = document.createElement("i");
    icElement.classList = "fa fa-remove";
    element.children[0].appendChild(icElement);
    todoList.appendChild(element);
    e.preventDefault();
});
// Seçili taskı silme
todoList.addEventListener("click",function(e){
    if (e.target.classList == "fa fa-remove") 
    {
        e.target.parentElement.parentElement.remove();
        console.log("Silindi");    
        e.preventDefault();
    }
});
// Tüm taskları Silme
clearTodos.addEventListener("click",function(e){
    todoList.textContent = "";

    e.preventDefault();
});

filter.addEventListener("keyup",function(e){
    const filterValue = e.target.value.toLowerCase();
    const listItems = document.querySelectorAll(".list-group-item");
    
    listItems.forEach(function(listItem){
        const text = listItem.textContent.toLowerCase();
        if(text.indexOf(filterValue) === -1)
        {
            listItem.setAttribute("style","display : none !Important")
        }
        else {
            listItem.setAttribute("style","display : block");
        }
    });

});
