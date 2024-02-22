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

// start ubah navigasi di titik scroll tertentu

const navigasi = document.querySelector('.nav');

window.addEventListener('scroll', () => {
	let value = window.scrollY;

	if ( value >= 612 ) {
		navigasi.classList.add('light');
		navigasi.classList.remove('dark');
	} else {
		navigasi.classList.add('dark');
		navigasi.classList.remove('light');
	}
});

// akhir ubah navigasi