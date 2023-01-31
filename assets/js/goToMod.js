

const orig = document.getElementsByClassName('btnOr'); //Class para los botones

for (let but of orig){

	but.addEventListener('click', goTo);

}



function goTo(){

let width = window.innerWidth;
let oSet = 50;

if (width <= 750){
	oSet = 300;
}


let id = this.id + "Dest";
let wTo = document.getElementById(id);
var scrollDiv = wTo.offsetTop - oSet;
window.scrollTo({ top: scrollDiv, behavior: 'smooth'});

let ncol = document.getElementById("navcol-1");
let nav = document.getElementById("mainNav");
ncol.classList.toggle('show');
nav.classList.remove('deployNav');

}
