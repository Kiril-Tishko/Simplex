// const inputElem = document.getElementsByTagName('input')[0]

// inputElem.addEventListener('keyup', function() {
// 	if(inputElem.value.length>0){
// 		var character = inputElem.value.charAt(0)
// 		if (character.value != inputElem.value.toUpperCase()) {
// 			character.value = character.toUpperCase()+character.substr(1);
// 		// character.value = character.value.toUpperCase();
// 		}
// 	}
// })

// show/hide mobile menu
const toggleElem = document.querySelector('.top-menu__toggle')
const inToggleElem = document.querySelector('.top-menu__toggle>*')
const mobileMenuElem = document.getElementById('top-menu__menu')

toggleElem.addEventListener('click', function() {
	mobileMenuElem.classList.toggle('top-menu__menu--block')
})

window.addEventListener('click', function(e) {
	if (e.target != toggleElem && e.target != inToggleElem) {
		mobileMenuElem.classList.remove('top-menu__menu--block')
	}
})