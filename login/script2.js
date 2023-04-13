const email= document.getElementById("email").value;
const fname= document.getElementById("fname").value;
const phone= document.getElementById("telphone").value;
const pwd = document.getElementById("pwd").value;
const btn = document.querySelector('button');

 window.addEventListener("scroll" , () =>   {btn.addEventListener("click" , () =>{
    if ((email=="") ||(fname=="") ||(phone=="")|| (pwd=="")){
    alert("fill the fields correctly")};
    return false})
})