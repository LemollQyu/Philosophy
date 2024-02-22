// Toggle humberger menu
const navbarNav = document.querySelector('.box-menu');

// humbergermenu diclick
document.querySelector('#humberger-menu').onclick = () => {

 navbarNav.classList.add('active');
}; 

// Toggle close menu 

const close = document.getElementById('close');

close.onclick = () => {

	navbarNav.classList.remove('active');
};

// slides
const slideS = document.querySelectorAll('.slides');


// toggle btn slide

const btnS = document.querySelectorAll('span');

var btnSlide = function(m){
	btnS.forEach( (btn) => {
		btn.classList.remove('focus');
	} );

	slideS.forEach((slide) => {
		slide.classList.remove('focus');
	})

	btnS[m].classList.add('focus');

	slideS[m].classList.add('focus');

};



btnS.forEach( (btn, i) => {
	btn.addEventListener("click", () => {
		btnSlide(i);
	});
})


// toggle slide 


// automatic slider

var repeat = function(activeClass){
	let focus = document.getElementsByClassName('focus');
	let i = 1;

	var repeater = () => {
		setTimeout(function(){

			[...focus].forEach((activeSlide) => {
				activeSlide.classList.remove('focus');
			});

			slideS[i].classList.add('focus');
			btnS[i].classList.add('focus');
			i++;

			if(slideS.length == i){
				i = 0;
			}

			if(i >= slideS.length){
				return;
			}
			repeater();
		}, 7000);
	}
	repeater();
}
repeat();

// akhir slide

// start ubah navigasi di titik scroll tertentu

const navigasi = document.querySelector('.nav');
const linkNavPhilosophy = document.querySelector('.link-philosophy');

window.addEventListener('scroll', () => {
	let value = window.scrollY;

	if ( value >= 612 ) {
		// linkNavPhilosophy.classList.add('light');
		linkNavPhilosophy.style.backgroundColor = "rgba(255, 255, 255, 0.5)"
		navigasi.classList.add('light');
		navigasi.classList.remove('dark');
	} else {
		linkNavPhilosophy.style.backgroundColor = "rgba(0, 0, 0, 0.3)" 
		navigasi.classList.add('dark');
		navigasi.classList.remove('light');
	}
});

// akhir ubah navigasi



// akhir animation




