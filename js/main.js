const menuBtn = document.querySelector('.menu__btn')
const animateBtn = document.querySelector('.active')
const firstLine = document.querySelector('.menu__btn--line:nth-child(1)')
const secondLine = document.querySelector('.menu__btn--line:nth-child(2)')
const thirdLine = document.querySelector('.menu__btn--line:nth-child(3)')
const displayLinks = document.querySelector('.display')
const linksBox = document.querySelector('.menu__box')
const body = document.querySelector('body')
const disableScroll = document.querySelector('.overflow')
const menuLinks = document.querySelectorAll('.menu__box--links a')

menuBtn.addEventListener('click', () => {
	firstLine.classList.toggle('active')
	secondLine.classList.toggle('active')
	thirdLine.classList.toggle('active')
	linksBox.classList.toggle('display')
	body.classList.toggle('overflow')
})

menuLinks.forEach(links => {
	links.addEventListener('click', () => {
		firstLine.classList.toggle('active')
		secondLine.classList.toggle('active')
		thirdLine.classList.toggle('active')
		linksBox.classList.toggle('display')
		body.classList.toggle('overflow')
	})
})
