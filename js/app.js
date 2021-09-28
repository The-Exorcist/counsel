'use strict'

const header = document.querySelector('.header')
const language = document.getElementById('language')

language.addEventListener('click', (e) => {
	e.preventDefault()
})

window.addEventListener('scroll', () => {
	if (pageYOffset == 0) {
		header.classList.remove('scrolled')
	} else {
		header.classList.add('scrolled')
	}
})

const menuLinks = document.querySelectorAll('.nav__link[data-goto]')

if (menuLinks.length > 0) {
	menuLinks.forEach(menuLink => {
		menuLink.addEventListener("click", onMenuLinkClick)
	});

	function onMenuLinkClick(e) {

		const menuLink = e.target
		if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
			const gotoBlock = document.querySelector(menuLink.dataset.goto)
			const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight

			window.scrollTo({
				top: gotoBlockValue,
				behavior: "smooth"
			})
			e.preventDefault()
		}
	}
}