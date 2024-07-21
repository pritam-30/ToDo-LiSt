
const Array = [];
  let   a ;
  let   c ;

  document.addEventListener("DOMContentLoaded", load);

function load() {
  const t = JSON.parse(localStorage.getItem("save"));
  if (t) {
      Array.push(...t);
      render();
  }
}
function Add() { 
 a = document.querySelector(".text").value;
 c = document.querySelector(".tex").value;
if (a != "" && c != "") {  
  a += "  " +" --  " + c
    Array.push(a); 
 render();  
}
else{
  alert("Please enter a Todo and Due Date");
}

}

function render() {
  let html = "";
  for (let i = 0; i < Array.length; i++) {
    const element = Array[i];
    html += `<p class = "put">${element} 
    <button onclick = "{
    Array.splice(${i},1);
    render();
    }">Delete</button> 
    </p>`; 
} 
localStorage.setItem("save" ,JSON.stringify(Array));   
document.querySelector('.items').innerHTML = html; 
   document.querySelector(".text").value = "";
   document.querySelector(".tex").value = "";
}
