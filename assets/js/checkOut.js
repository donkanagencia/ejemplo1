let btnL = document.getElementsByClassName('btnLoQ');
let btnClose = document.getElementById("close");

btnClose.addEventListener("click", function(){
$('#checkIt').modal('toggle');
});

const currProd = {
	id: 0,
	name: "",
	desc: "",
	price: "",
	cat: "",
};



for (let btn of btnL){
	btn.addEventListener('click', loQuiero);
}


let btnChkOut = document.getElementsByClassName('btnChk');

for (let btn of btnChkOut){
	btn.addEventListener('click', chkOut);
}



function loQuiero(){

	let parent = this.parentNode;
	let badge = parent.firstChild;
	let heading = badge.nextElementSibling;
	let pdesc = heading.nextElementSibling;
	let hprice =pdesc.nextElementSibling;


	let price = hprice.innerHTML;
	let product = heading.innerHTML;
	let description = pdesc.innerHTML;


let chkIt = document.getElementById('mLabel');
let descrIt = document.getElementById('descIt');
let priceT = document.getElementById('mPrice');


chkIt.innerHTML = product;
descrIt.innerHTML = description; 
priceT.innerHTML = price;

currProd.name = product;
currProd.desc = description;
currProd.price = price;


$('#checkIt').modal('toggle');


}

function chkOut(){

	let message = "Hola, me interesa adquirir "+ currProd.name + " que " + currProd.desc + " por " + currProd.price + "";
	let encoded = encodeURI(message);
	let dest = "https://donkanagencia.com";


	if (this.id === "whatsapp"){

		
		dest = "https://wa.me/59892336953?text="+encoded;
	}
	else {

		let subject = encodeURI(currProd.name);
		dest = "mailto:donkanagencia@gmail.com?subject="+ subject + "&body=" + encoded;
	}

	window.open(dest);
}


