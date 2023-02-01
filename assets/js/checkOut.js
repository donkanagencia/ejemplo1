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


let price;
let product;
let description;

let id = this.id

	if (id != null && id != ""){

		


	const arrId=id.split("_");;

		switch (arrId[0])
		{
		case "sw":
			product = "Un sitio web";
			break;
		case "sm":
			product = "Un plan de social media";
			break;
		case "gmb":
			product = "Un plan de Google My Business";
			break;
		default:
			product = "Error en la seleccion de producto";
		}



	let plan;
	let tipo;
	
	switch (arrId[1]){
	case "i":
		tipo = "inicial";
		break;
	case "e":
		tipo = "emprendedor";
		break;
	case "d":
		tipo = "despegado";
		break;
	default:
		tipo = "error";
	}
	

	if (arrId[2]=== "m"){
		plan = "mensual";
	}
	else{
		plan = "anual";
	}

	description = " " + tipo + " de pago " + plan;




	let ptagId = "p_"+ id;
	let ptag = document.getElementById(ptagId);

	price = ptag.textContent.replace("/", " al ");




	}
	else{


	let parent = this.parentNode;
	let badge = parent.firstChild;
	let heading = badge.nextElementSibling;
	let pdesc = heading.nextElementSibling;
	let hprice =pdesc.nextElementSibling;


price = hprice.innerHTML;
product = heading.innerHTML;
description = pdesc.innerHTML;

}

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


