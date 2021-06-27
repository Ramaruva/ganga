var load=document.getElementById("btn")
function create()
{

    var num=document.getElementById("ram");
    num.removeAttribute("class");
    load.removeEventListener("click",create);
    load.setAttribute("class","displayr");



}
load.addEventListener("click",create)