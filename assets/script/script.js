const 
	 headerNav = document.querySelector('.header__nav');
	 headerBurger = document.querySelector('.header__burger');

headerBurger.addEventListener('click', function(e) {
	document.body.classList.toggle('lock');
	headerBurger.classList.toggle('active');
	headerNav.classList.toggle('active');
});
