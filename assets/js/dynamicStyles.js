let butt = document.getElementById("butt");

butt.addEventListener("click",function(){

let nav = document.getElementById("mainNav");


	nav.classList.toggle('deployNav');


});

let oLinks = document.getElementsByClassName('oLink');
let popUp = document.getElementsByClassName('popUp');

for (let oli of oLinks){
	oli.addEventListener("click",goOut);
}

function goOut (){
let id = this.id;
var dest;

switch (id)

{
case 'fb':
	dest = "https://www.facebook.com/donkanagencia";
	break;

case 'ig':
	dest = "https://www.instagram.com/donkanagencia";
	break;
case 'ln':
	dest = "https://www.linkedin.com/in/donkanagencia";
	break;
default:
	dest = "https://www.donkanagencia.com";


}

let ncol = document.getElementById("navcol-1");
let nav = document.getElementById("mainNav");
if (nav.classList.contains('deployNav')){
	ncol.classList.toggle('show');
	nav.classList.remove('deployNav');
}



window.open(dest);



}
