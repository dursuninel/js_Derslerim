var card = document.querySelector("#card");
card.innerHTML=JSON.parse(localStorage.getItem("sepettekiUrun"));
console.log(card);