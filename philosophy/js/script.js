const containsSlide1 = document.querySelectorAll(".satu .wadah");

// layer dua

const containsSlide2 = document.querySelectorAll(".dua .wadah");

// layer tiga 

const containsSlide3 = document.querySelectorAll(".tiga .wadah");



// btn layer satu
const btnSlide1 = document.querySelectorAll(".btnSlide.satu span");


// btn layer dua 

const btnSlide2 = document.querySelectorAll(".btnSlide.dua span");


// btn layer tiga

const btnSlide3 = document.querySelectorAll(".btnSlide.tiga span");


const right = document.querySelector(".right");
const left = document.querySelector(".left");

let slideIndex = 1;
	showImg(slideIndex);

	function nextSlide(e){
		showImg(slideIndex += e);
	}

	function dotSlide(e){
		showImg(slideIndex = e)
	}


function showImg(e) {
	let i;

	// layer satu

	if(e > containsSlide1.length) {
		slideIndex = 1;
	}

	if(e < 1 ) {
		slideIndex = containsSlide1.length;
	}

	for(i=0; i<containsSlide1.length; i++){
		containsSlide1[i].classList.remove("active");
	}

	containsSlide1[slideIndex - 1].classList.add('active');



	// layer dua

	if(e > containsSlide2.length) {
		slideIndex = 1;
	}

	if(e < 1 ) {
		slideIndex = containsSlide2.length;
	}

	for(i=0; i<containsSlide2.length; i++){
		containsSlide2[i].classList.remove("active");
	}

	containsSlide2[slideIndex - 1].classList.add('active');

	// layer tiga

	if(e > containsSlide3.length) {
		slideIndex = 1;
	}

	if(e < 1 ) {
		slideIndex = containsSlide3.length;
	}

	for(i=0; i<containsSlide3.length; i++){
		containsSlide3[i].classList.remove("active");
	}

	containsSlide3[slideIndex - 1].classList.add('active');




	// button layer 1


	for(i=0; i<btnSlide1.length; i++){
		btnSlide1[i].classList.remove("active");
	}
	btnSlide1[slideIndex - 1].classList.add('active');

	// btn layer 2

	for(i=0; i<btnSlide2.length; i++){
		btnSlide2[i].classList.remove("active");
	}
	btnSlide2[slideIndex - 1].classList.add('active');

	// btn layer 3

	for(i=0; i<btnSlide3.length; i++){
	btnSlide3[i].classList.remove("active");
	}
	btnSlide3[slideIndex - 1].classList.add('active');


}






