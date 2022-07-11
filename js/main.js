const menuBtn = document.querySelector('.menu__btn')
const animateBtn = document.querySelector('.active')
const firstLine = document.querySelector('.menu__btn--line:nth-child(1)')
const secondLine = document.querySelector('.menu__btn--line:nth-child(2)')
const thirdLine = document.querySelector('.menu__btn--line:nth-child(3)')

menuBtn.addEventListener('click', () => {
	// menuBtn.classList.toggle('active')
	firstLine.classList.toggle('active')
	secondLine.classList.toggle('active')
	thirdLine.classList.toggle('active')
	// showLinks.classList.toggle('active')
})
