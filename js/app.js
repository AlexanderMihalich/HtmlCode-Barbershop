function addingClasses() {

	let paggingActive = document.querySelectorAll(".pagging__item");
	for (let i = 0; i < paggingActive.length; i++) {
		let pagging = paggingActive[i];
		pagging.addEventListener("click", function (e) {
			for (let i = 0; i < paggingActive.length; i++) {
				let paggingClick = paggingActive[i];
				paggingClick.classList.remove('_active');
			}
			pagging.classList.add('_active');
			e.preventDefault();
		});
	}
	let searchBody = document.querySelector("body");
	if (searchBody.classList.contains("arrowsCont")) {
		let catalogArrow = document.querySelector(".catalog__arrow");
		let catalogRow = document.querySelector(".catalog__row");
		catalogArrow.addEventListener("click", function (e) {
			catalogArrow.classList.toggle('_active');
			catalogRow.classList.toggle('_active');
		});
	}
	let namesMenu = document.querySelector('.menu__body');
	let nameLink = namesMenu.querySelectorAll(".menu__link");
	for (let i = 0; i < nameLink.length; i++) {
		let menuActive = nameLink[i];
		menuActive.addEventListener("click", function (e) {
			for (let i = 0; i < nameLink.length; i++) {
				let nameKlika = nameLink[i];
				nameKlika.classList.remove('_active');
			}
			menuActive.classList.add('_active');
		});
	}
	if (namesMenu.classList.contains("line")) {
		let searchLine = namesMenu.querySelector('.line');
		searchLine.classList.add('_line');
	}
}
addingClasses();

new WOW().init();

var ua = window.navigator.userAgent;
var msie = ua.indexOf("MSIE ");
var isMobile = { Android: function () { return navigator.userAgent.match(/Android/i); }, BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); }, iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); }, Opera: function () { return navigator.userAgent.match(/Opera Mini/i); }, Windows: function () { return navigator.userAgent.match(/IEMobile/i); }, any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); } };
function isIE() {
	ua = navigator.userAgent;
	var is_ie = ua.indexOf("MSIE ") > -1 || ua.indexOf("Trident/") > -1;
	return is_ie;
}
if (isIE()) {
	document.querySelector('body').classList.add('ie');
}
if (isMobile.any()) {
	document.querySelector('body').classList.add('_touch');
}
//=================
function testWebP(callback) {
	var webP = new Image();
	webP.onload = webP.onerror = function () {
		callback(webP.height == 2);
	};
	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
testWebP(function (support) {
	if (support == true) {
		document.querySelector('body').classList.add('_webp');
	} else {
		document.querySelector('body').classList.add('_no-webp');
	}
});
//=================
function ibg() {
	if (isIE()) {
		let ibg = document.querySelectorAll("._ibg");
		for (var i = 0; i < ibg.length; i++) {
			if (ibg[i].querySelector('img') && ibg[i].querySelector('img').getAttribute('src') != null) {
				ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
			}
		}
	}
}
ibg();
if (document.querySelector('.wrapper')) {
	document.querySelector('.wrapper').classList.add('_loaded');
}
let unlock = true;

//=================
let iconMenu = document.querySelector(".icon-menu");
if (iconMenu != null) {
	let delay = 500;
	let menuBody = document.querySelector(".menu__body");
	iconMenu.addEventListener("click", function (e) {
		if (unlock) {
			body_lock(delay);
			iconMenu.classList.toggle("_active");
			menuBody.classList.toggle("_active");
		}
	});
};
function menu_close() {
	let iconMenu = document.querySelector(".icon-menu");
	let menuBody = document.querySelector(".menu__body");
	iconMenu.classList.remove("_active");
	menuBody.classList.remove("_active");
}
//=================
function body_lock(delay) {
	let body = document.querySelector("body");
	if (body.classList.contains('_lock')) {
		body_lock_remove(delay);
	} else {
		body_lock_add(delay);
	}
}
function body_lock_remove(delay) {
	let body = document.querySelector("body");
	if (unlock) {
		let lock_padding = document.querySelectorAll("._lp");
		setTimeout(() => {
			for (let index = 0; index < lock_padding.length; index++) {
				const el = lock_padding[index];
				el.style.paddingRight = '0px';
			}
			body.style.paddingRight = '0px';
			body.classList.remove("_lock");
		}, delay);

		unlock = false;
		setTimeout(function () {
			unlock = true;
		}, delay);
	}
}
function body_lock_add(delay) {
	let body = document.querySelector("body");
	if (unlock) {
		let lock_padding = document.querySelectorAll("._lp");
		for (let index = 0; index < lock_padding.length; index++) {
			const el = lock_padding[index];
			el.style.paddingRight = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
		}
		body.style.paddingRight = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
		body.classList.add("_lock");

		unlock = false;
		setTimeout(function () {
			unlock = true;
		}, delay);
	}
}
//=================
let popup_link = document.querySelectorAll('._popup-link');
let popups = document.querySelectorAll('.popup');
for (let i = 0; i < popup_link.length; i++) {
	const el = popup_link[i];
	el.addEventListener('click', function (e) {
		if (unlock) {
			let item = el.getAttribute('href').replace('#', '');

			let video = el.getAttribute('data-video');
			//=================
			// popup_open(item, video);
			//=================
			for (let i = 0; i < popups.length; i++) {
				let searchPopup = popups[i];
				if (searchPopup.classList.contains('.popup-login')) {
					popup_open_login(item);
				} else {
					popup_open(item, video);
				}
			}
		}
		e.preventDefault();
	})
}
for (let i = 0; i < popups.length; i++) {
	const popup = popups[i];
	popup.addEventListener("click", function (e) {
		if (!e.target.closest('.popup__body')) {
			popup_close(e.target.closest('.popup'));
		}
	});

}
function popup_open_login(item) {
	let activePopup = document.querySelectorAll('.popup._active');
	if (activePopup.length > 0) {
		popup_close('', false);
	}
	let curent_popup = document.querySelector('#popup-login');
	let textForm = document.querySelector('.popup__form-login').innerHTML = item;

	if (curent_popup && unlock) {

		if (!document.querySelector('.menu__body._active')) {
			body_lock_add(500);
		}
		curent_popup.classList.add('_active');
		history.pushState('', '', '#' + item);
	}
}
function popup_open(item, video = '') {
	let activePopup = document.querySelectorAll('.popup._active');
	if (activePopup.length > 0) {
		popup_close('', false);
	}
	let curent_popup = document.querySelector('.popup');
	// let textForm = document.querySelector('.popup__form').innerHTML = item;

	if (curent_popup && unlock) {
		if (video != '' && video != null) {
			let popup_video = document.querySelector('.popup_video');
			popup_video.querySelector('.popup__video').innerHTML = '<iframe src="https://www.youtube.com/embed/' + video + '?autoplay=1"  allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		}
		if (!document.querySelector('.menu__body._active')) {
			body_lock_add(500);
		}
		curent_popup.classList.add('_active');
		history.pushState('', '', '#' + item);
	}
}
function popup_close(item, bodyUnlock = true) {
	if (unlock) {
		if (!item) {
			for (let i = 0; i < popups.length; i++) {
				const popup = popups[i];
				let video = popup.querySelector('.popup__video');
				if (video) {
					video.innerHTML = '';
				}
				popup.classList.remove('_active');
			}
		} else {
			let video = item.querySelector('.popup__video');
			if (video) {
				video.innerHTML = '';
			}
			item.classList.remove('_active');
		}
		if (!document.querySelector('.menu__body._active') && bodyUnlock) {
			body_lock_remove(500);
		}
		history.pushState('', '', window.location.href.split('#')[0]);
	}
}
let popup_close_icon = document.querySelectorAll('.popup__close,._popup-close');
if (popup_close_icon) {
	for (let index = 0; index < popup_close_icon.length; index++) {
		const el = popup_close_icon[index];
		el.addEventListener('click', function () {
			popup_close(el.closest('.popup'));
		})
	}
}
document.addEventListener('keydown', function (e) {
	if (e.which == 27) {
		popup_close();
	}
});
//=================
let _slideUp = (target, duration = 500) => {
	target.style.transitionProperty = 'height, margin, padding';
	target.style.transitionDuration = duration + 'ms';
	target.style.height = target.offsetHeight + 'px';
	target.offsetHeight;
	target.style.overflow = 'hidden';
	target.style.height = 0;
	target.style.paddingTop = 0;
	target.style.paddingBottom = 0;
	target.style.marginTop = 0;
	target.style.marginBottom = 0;
	window.setTimeout(() => {
		target.style.display = 'none';
		target.style.removeProperty('height');
		target.style.removeProperty('padding-top');
		target.style.removeProperty('padding-bottom');
		target.style.removeProperty('margin-top');
		target.style.removeProperty('margin-bottom');
		target.style.removeProperty('overflow');
		target.style.removeProperty('transition-duration');
		target.style.removeProperty('transition-property');
		target.classList.remove('_slide');
	}, duration);
}
let _slideDown = (target, duration = 500) => {
	target.style.removeProperty('display');
	let display = window.getComputedStyle(target).display;
	if (display === 'none')
		display = 'block';

	target.style.display = display;
	let height = target.offsetHeight;
	target.style.overflow = 'hidden';
	target.style.height = 0;
	target.style.paddingTop = 0;
	target.style.paddingBottom = 0;
	target.style.marginTop = 0;
	target.style.marginBottom = 0;
	target.offsetHeight;
	target.style.transitionProperty = "height, margin, padding";
	target.style.transitionDuration = duration + 'ms';
	target.style.height = height + 'px';
	target.style.removeProperty('padding-top');
	target.style.removeProperty('padding-bottom');
	target.style.removeProperty('margin-top');
	target.style.removeProperty('margin-bottom');
	window.setTimeout(() => {
		target.style.removeProperty('height');
		target.style.removeProperty('overflow');
		target.style.removeProperty('transition-duration');
		target.style.removeProperty('transition-property');
		target.classList.remove('_slide');
	}, duration);
}
let _slideToggle = (target, duration = 500) => {
	if (!target.classList.contains('_slide')) {
		target.classList.add('_slide');
		if (window.getComputedStyle(target).display === 'none') {
			return _slideDown(target, duration);
		} else {
			return _slideUp(target, duration);
		}
	}
}
//=================
(function () {
	if (!Element.prototype.closest) {
		Element.prototype.closest = function (css) {
			var node = this;
			while (node) {
				if (node.matches(css)) return node;
				else node = node.parentElement;
			}
			return null;
		};
	}
})();
(function () {
	if (!Element.prototype.matches) {
		Element.prototype.matches = Element.prototype.matchesSelector ||
			Element.prototype.webkitMatchesSelector ||
			Element.prototype.mozMatchesSelector ||
			Element.prototype.msMatchesSelector;
	}
})();
document.addEventListener('DOMContentLoaded', function () {
	let btn = document.querySelectorAll('button[type="submit"],input[type="submit"]');
	let forms = document.querySelectorAll('form');
	if (forms.length > 0) {
		for (let i = 0; i < forms.length; i++) {
			const el = forms[i];
			el.addEventListener('submit', formSend);
		}
	}
	async function formSend(e) {
		// e.preventDefault();
		let btn = e.target;
		let form = btn.closest('form');
		let message = form.getAttribute('data-message');
		let error = formValidate(form);

		if (error == 0) {
			formClean(form);
			if (message) {
				popup_open_login(message);
				e.preventDefault();
			}
			e.preventDefault();
		} else {
			let formError = form.querySelectorAll('._error');
			if (formError && form.classList.contains('_goto-error')) {
				_goto(formError[0], 1000, 50);
			}
			e.preventDefault();
		}
	}
	function formValidate(form) {
		let error = 0;
		let formReq = document.querySelectorAll('._req');
		if (formReq.length > 0) {
			for (let i = 0; i < formReq.length; i++) {
				const el = formReq[i];
				error += formValidateInput(el);
			}
		}
		
		return error;
	}
	function formValidateInput(input) {
		let error = 0;
		let input_g_value = input.getAttribute('data-value');
		
			if (input.value == '' || input.value == input_g_value) {
				formAddError(input);
				error++;
			} else {
				formRemoveError(input);
			}
		return error;
	}
	function formAddError(input) {
		input.parentElement.classList.add('_error');
		input.classList.add('_error');

		let inputError = input.parentElement.querySelector('.form__error');
		if (inputError) {
			input.parentElement.removeChild(inputError);
		}
		let inputErrorText = input.getAttribute('data-error');
		if (inputErrorText && inputErrorText != '') {
			input.parentElement.insertAdjacentHTML('beforeend', '<div class="form__error">' + inputErrorText + '</div>');
		}
	}
	function formRemoveError(input) {
		input.parentElement.classList.remove('_error');
		input.classList.remove('_error');
		
		let inputError = input.parentElement.querySelector('.form__error');
		if (inputError) {
			input.parentElement.removeChild(inputError);
		}
	}
	function formClean(form) {
		let inputs = form.querySelectorAll('input,textarea');
		
		for (let index = 0; index < inputs.length; index++) {
			const el = inputs[index];
			el.parentElement.classList.remove('_focus');
			el.classList.remove('_focus');
			el.value = el.getAttribute('data-value');
		}
		let checkboxes = form.querySelectorAll('.checkbox__input');
		if (checkboxes.length > 0) {
			for (let index = 0; index < checkboxes.length; index++) {
				const checkbox = checkboxes[index];
				checkbox.checked = false;
			}
		}
		let selects = form.querySelectorAll('select');
		if (selects.length > 0) {
			for (let index = 0; index < selects.length; index++) {
				const select = selects[index];
				const select_default_value = select.getAttribute('data-default');
				select.value = select_default_value;
				select_item(select);
			}
		}
	}

	let viewPass = document.querySelectorAll('.form__viewpass');
	for (let index = 0; index < viewPass.length; index++) {
		const element = viewPass[index];
		element.addEventListener("click", function (e) {
			if (element.classList.contains('_active')) {
				element.parentElement.querySelector('input').setAttribute("type", "password");
			} else {
				element.parentElement.querySelector('input').setAttribute("type", "text");
			}
			element.classList.toggle('_active');
		});
	}

	//==================
	let inputs = document.querySelectorAll('input[data-value],textarea[data-value]');
	inputs_init(inputs);

	function inputs_init(inputs) {
		if (inputs.length > 0) {
			for (let i = 0; i < inputs.length; i++) {
				const input = inputs[i];
				const input_g_value = input.getAttribute('data-value');
				input_placeholder_add(input);
				if (input.value != '' && input.value != input_g_value) {
					input_focus_add(input);
				}
				input.addEventListener('focus', function (e) {
					if (input.value == input_g_value) {
						input_focus_add(input);
						input.value = '';
					}
					if (input.getAttribute('data-type') === "pass") {
						input.setAttribute('type', 'password');
					}
					if (input.classList.contains('_date')) {
						/*
						input.classList.add('_mask');
						Inputmask("99.99.9999", {
							//"placeholder": '',
							clearIncomplete: true,
							clearMaskOnLostFocus: true,
							onincomplete: function () {
								input_clear_mask(input, input_g_value);
							}
						}).mask(input);
						*/
					}
					if (input.classList.contains('_phone')) {
						// '+7(999) 999 9999'
						//'+38(999) 999 9999'
						//'+375(99)999-99-99'
						input.classList.add('_mask');
						Inputmask("+7(999) 999 9999", {
							"placeholder": '',
							clearIncomplete: true,
							clearMaskOnLostFocus: true,
							onincomplete: function () {
								input_clear_mask(input, input_g_value);
							}
						}).mask(input);
					}
					if (input.classList.contains('_time')) {
						input.classList.add('_mask');
						Inputmask("99:99", {
							"placeholder": '',
							clearIncomplete: true,
							clearMaskOnLostFocus: true,
							onincomplete: function () {
								input_clear_mask(input, input_g_value);
							}
						}).mask(input);
					}
					if (input.classList.contains('_data')) {
						input.classList.add('_mask');
						Inputmask("99.99.9999", {
							"placeholder": '',
							clearIncomplete: true,
							clearMaskOnLostFocus: true,
							onincomplete: function () {
								input_clear_mask(input, input_g_value);
							}
						}).mask(input);
					}
					if (input.classList.contains('_digital')) {
						input.classList.add('_mask');
						Inputmask("9{1,}", {
							"placeholder": '',
							clearIncomplete: true,
							clearMaskOnLostFocus: true,
							onincomplete: function () {
								input_clear_mask(input, input_g_value);
							}
						}).mask(input);
						
					}
					formRemoveError(input);
				});
				input.addEventListener('blur', function (e) {
					if (input.value == '') {
						input.value = input_g_value;
						input_focus_remove(input);
						if (input.classList.contains('_mask')) {
							input_clear_mask(input, input_g_value);
						}
						if (input.getAttribute('data-type') === "pass") {
							input.setAttribute('type', 'text');
						}
					}
				});
				if (input.classList.contains('_date')) {
					datepicker(input, {
						customDays: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
						customMonths: ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"],
						formatter: (input, date, instance) => {
							const value = date.toLocaleDateString()
							input.value = value
						},
						onSelect: function (input, instance, date) {
							input_focus_add(input.el);
						}
					});
				}
			}
		}
	}
	function input_placeholder_add(input) {
		const input_g_value = input.getAttribute('data-value');
		if (input.value == '' && input_g_value != '') {
			input.value = input_g_value;
		}
	}
	function input_focus_add(input) {
		input.classList.add('_focus');
		input.parentElement.classList.add('_focus');
	}
	function input_focus_remove(input) {
		input.classList.remove('_focus');
		input.parentElement.classList.remove('_focus');
	}
	function input_clear_mask(input, input_g_value) {
		input.inputmask.remove();
		input.value = input_g_value;
		input_focus_remove(input);
	}
});
//BildSlider
let sliders = document.querySelectorAll('._swiper');
if (sliders) {
	for (let index = 0; index < sliders.length; index++) {
		let slider = sliders[index];
		if (!slider.classList.contains('swiper-bild')) {
			let slider_items = slider.children;
			if (slider_items) {
				for (let index = 0; index < slider_items.length; index++) {
					let el = slider_items[index];
					el.classList.add('swiper-slide');
				}
			}
			let slider_content = slider.innerHTML;
			let slider_wrapper = document.createElement('div');
			slider_wrapper.classList.add('swiper-wrapper');
			slider_wrapper.innerHTML = slider_content;
			slider.innerHTML = '';
			slider.appendChild(slider_wrapper);
			slider.classList.add('swiper-bild');
		}
	}
	sliders_bild_callback();
}

function sliders_bild_callback(params) { }

let slider_unit = new Swiper('.slider-unit ', {
	effect: 'coverflow',
	coverflowEffect: {
		rotate: 200,
		stretch: 1,
		slideShadows: false,
	},
	autoplay: {
		delay: 2000,
		disableOnInteraction: false,
	},
	loop: true,
	slidesPerView: 1,
	spaceBetween: 30,
	speed: 800,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});
let slider_product = new Swiper('.image-product__sliders', {
	effect: 'cube',
	cubeEffect: {
		slideShadows: true,
		shadow: true,
		shadowOffset: 15,
		shadowScale: 0.94
	},
	autoplay: {
		delay: 2000,
		disableOnInteraction: false,
	},
	loop: true,
	slidesPerView: 1,
	spaceBetween: 0,
	autoHeight: true,
	speed: 800,
});
let subslider_product = new Swiper('.image-product__subsliders', {
	effect: 'coverflow',
	coverflowEffect: {
		rotate: 20,
		stretch: 1,
		slideShadows: false,
	},
	loop: true,
	slidesPerView: 3,
	spaceBetween: 30,
	autoHeight: true,
	speed: 800,
});
let searchBody = document.querySelector("body");
if (searchBody.classList.contains("slider")) {
	slider_product.controller.control = subslider_product;
	subslider_product.controller.control = slider_product;
}

