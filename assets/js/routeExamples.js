let imgEx = document.getElementsByClassName('ejemplo');

for (let img of imgEx){
	img.addEventListener('click', openEx);
}

function openEx(){
	let id;
	id = this.id;

	let url;
	url = "http://ejemplo"+ id + ".donkanagencia.com"

	window.open(url);


}