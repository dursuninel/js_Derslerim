var sepet = document.querySelector("#sepet");
sepet.textContent=localStorage.getItem("sepetUrun");

function arttir()
{
    sepet.textContent = Number(sepet.textContent) + 1; 
    localStorage.setItem("sepetUrun",sepet.textContent);
}


