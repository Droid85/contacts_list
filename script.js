const buttonEl = document.querySelector('#add-contact-btn');
const inputFirstNameEl = document.querySelector('#input-first-name');
const inputLastNameEl = document.querySelector('#input-last-name');
const inputPhoneEl = document.querySelector('#input-phone');
const contactBlockEl = document.querySelector('#contacts-block');
//const contactArr = [inputFirstNameEl.value, inputLastNameEl.value, inputPhoneEl.value];

buttonEl.addEventListener('click', onClick);

function onClick() {
	let blockElementEl = document.createElement('p');
	blockElementEl.textContent = inputFirstNameEl.value + ' ' + inputLastNameEl.value + ' ' + inputPhoneEl.value;
	contactBlockEl.append(blockElementEl);
	inputFirstNameEl.value = '';
	inputLastNameEl.value = '';
	inputPhoneEl.value = '';
}
