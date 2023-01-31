/*
This module is used to show only a given element from a whole class
containing multiple DOM objects


It supports mapping multiple buttons to the same amount of divs in a 
one to one proportion.

When the page loads, it hides all divs belogning to the class 'divsTogg'

When an element belogning to the class 'btnTogg' is clicked, the scripts
shows ONLY the div with a matching ID composed ussing the rule explained 
in the next section.   


The parameters used are 

---> The button's ID to select the target to show (it can be any valid ID)
			
			i.e 'test'

---> The target div's ID. It must follow this rule
		First the button_ID   			then the suffix 'Show'
							'buttonShow'
			
			i.e 'buttonShow' being 'Show' the suffix that links both elements

---> The button(s) must have the class 'btnTogg' assigned to it(them).

---> The target div(s) must have the class 'divsTogg' assigned to it(them).


If you want to show multiple items when a single button is pressed thats 
another script. You can modify this or check my github.

Cheers.


*/
const butts = document.getElementsByClassName('btnTogg'); //Class para los botones
const divs = document.getElementsByClassName('divsTogg'); //Class para los divs


for (let but of butts){

	but.addEventListener('click', toggler);

}
for (let div of divs){

	div.style.display = "none";

}

function toggler(){

let id = this.id + "Show";

for (let div of divs) {
		if (div.style.display != "none"){
			div.style.display = "none";
		}
		
}

let toShow = document.getElementById(id);

if (toShow.style.display === "none"){

		toShow.style.display = "block";
		var scrollDiv = toShow.offsetTop - 50;
		window.scrollTo({ top: scrollDiv, behavior: 'smooth'});
	}
else
{
	toShow.style.display === "none";
}
}

