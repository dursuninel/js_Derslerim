// Constructor Deneme

function Kayit(firstname,lastname,age,country){

    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
    this.country = country;

    this.info = () => console.log(firstname,lastname,age,country);
}

const firstName = document.querySelector("#firstname");
const lastName = document.querySelector("#lastname");
const age = document.querySelector("#age");
const country = document.querySelector("#country");
const button = document.querySelector("#button");

var option;
for (let index = 13; index <= 30; index++) {
    option = document.createElement("option");
    option.textContent = index;
    document.forms[0].children[2].children[1].appendChild(option);
}

let countryList = ["Turkey","ABD","Germany","Japan","China","Greece","Iran","Italy","Kenya","New Zealand"];
countryList.sort();
for (let index = 0; index < countryList.length; index++) {
    option = document.createElement("option");
    option.textContent = countryList[index];
    document.forms[0].children[3].children[1].appendChild(option);
}

let player;
button.onclick = () => 
{
    player = new Kayit(firstName.value,lastName.value,age.value,country.value);
    player.info();
}