// // Import vendor jQuery plugin example
// import '~/app/libs/mmenu/dist/mmenu.js'

document.addEventListener('DOMContentLoaded', () => {

	// menu
	let menuList = document.querySelector('.menu__list');
	let burger = document.querySelector('.header__burger');
	let close = document.querySelector('.menu__close');
	let menu = document.querySelector('.menu');
	let body = document.querySelector('body');
	let html = document.querySelector('html');
	burger.onclick = function(){
		menu.classList.add('menu--open');
		body.classList.add('overflow-hidden');
		html.classList.add('overflow-hidden');
	}
	close.onclick = function(){
		menu.classList.remove('menu--open');
		body.classList.remove('overflow-hidden');
		html.classList.remove('overflow-hidden');
	}
	menuList.onclick = function(){
		menu.classList.remove('menu--open');
		body.classList.remove('overflow-hidden');
		html.classList.remove('overflow-hidden');
	}



	// simplebar
	document.querySelectorAll('.merch__box-wrap').forEach(el => {
		new SimpleBar(el)
	});


	document.querySelectorAll('.amedia__box-wrap').forEach(el => {
		new SimpleBar(el)
	});


	document.querySelectorAll('.join__text').forEach(el => {
		let simpleBar = new SimpleBar(el)
	});




	// swiper
	const swiper = new Swiper('.ablogers-slider', {
		// Optional parameters
		loop: false,
		slidesPerView: 'auto',
		centeredSlides: true,
		initialSlide: 3,

		scrollbar: {
			draggable: true,
		},
	});

	var mySwiper = new Swiper('.amedia__slider', {
		// slidesPerView: 3,
		centeredSlides: true,
		initialSlide: 3,
		slidesPerView: 'auto',
		
		scrollbar: {
		  el: '.amedia__scrollbar',
		  draggable: true,
		},
	});



	if (document.documentElement.clientWidth < 500) {

		function wrapEveryTwoElements(selector) {
			const elements = document.querySelectorAll(selector);
			for (let i = 0; i < elements.length; i += 2) {
			  const wrapper = document.createElement('div');
			  wrapper.classList.add('swiper-slide');
			  elements[i].parentNode.insertBefore(wrapper, elements[i]);
			  wrapper.appendChild(elements[i]);
			  if (elements[i + 1]) {
				wrapper.appendChild(elements[i + 1]);
			  }
			}
		}
		wrapEveryTwoElements('.pops__item');


		var popsSwiper = new Swiper('.pops__slider', {
			slidesPerView: 1,
			centeredSlides: true,
			navigation: {
				nextEl: '.pops-button-next',
				prevEl: '.pops-button-prev',
			},
		});

	}



	// swiper
	const swiper2 = new Swiper('.youtube__slider', {
		// Optional parameters
		loop: false,
		slidesPerView: 'auto',
		centeredSlides: false,
		spaceBetween: 40,
		// Navigation arrows
		navigation: {
			nextEl: '.youtube-button-next',
			prevEl: '.youtube-button-prev',
		},
	});




	// swiper
	const joinSlider = new Swiper('.join__slider', {
		// Optional parameters
		direction: 'vertical',
		loop: false,
		slidesPerView: 1,
		centeredSlides: false,
		touchRatio: false,
		// Navigation arrows
		navigation: {
			nextEl: '#join__scrollbuts-bottom',
			prevEl: '#join__scrollbuts-top',
		},
	});



	window.onload = function() {
		// preloader
		document.querySelector('#preloader').style.display = 'none';
		document.querySelector('.main__girl-img').classList.add('animate__fadeInBottomRight');
		document.querySelector('.main__video-icon').classList.add('animate__backInLeft');
		document.querySelector('.main__pac-icon').classList.add('animate__backInRight');
		document.querySelector('.main__arrow-icon').classList.add('animate__backInRight');
		document.querySelector('.main__ice-cube-icon').classList.add('animate__jello');
		document.querySelector('.main__ice-cube-icon2').classList.add('animate__jello');
	}


	// modals
	const modals = document.querySelectorAll('[data-modal]');
	modals.forEach(function (trigger) {
		trigger.addEventListener('click', function (event) {
			event.preventDefault();
			const modal = document.getElementById(trigger.dataset.modal);
			modal.classList.add('open');
			const exits = modal.querySelectorAll('.modal-exit');
			exits.forEach(function (exit) {
			exit.addEventListener('click', function (event) {
				event.preventDefault();
				modal.classList.remove('open');
			});
			});
		});
	});

    
})