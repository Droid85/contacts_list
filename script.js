const buttonEl = document.querySelector('#add-contact-btn');
const inputFirstNameEl = document.querySelector('#input-first-name');
const inputLastNameEl = document.querySelector('#input-last-name');
const inputPhoneEl = document.querySelector('#input-phone');
const contactBlockEl = document.querySelector('#contacts-block');
//const contactArr = [inputFirstNameEl.value, inputLastNameEl.value, inputPhoneEl.value];

buttonEl.addEventListener('click', onClick);

function onClick() {
	const firstNameData = inputFirstNameEl.value.trim();
	const lastNameData = inputLastNameEl.value.trim();
	const phoneData = inputPhoneEl.value.trim();
	if (firstNameData && lastNameData && inputPhoneEl.value) {
		let blockElementEl = document.createElement('p');
		blockElementEl.textContent = firstNameData + ' ' + lastNameData + ' ' + phoneData;
		contactBlockEl.append(blockElementEl);
		inputFirstNameEl.value = '';
		inputLastNameEl.value = '';
		inputPhoneEl.value = '';
	} else {
		inputFirstNameEl.value = '';
		inputLastNameEl.value = '';
		inputPhoneEl.value = '';
		alert('Please, fill all fealds');
	}
}
