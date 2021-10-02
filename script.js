const buttonEl = document.querySelector('#add-contact-btn');
const inputFirstNameEl = document.querySelector('#input-first-name');
const inputLastNameEl = document.querySelector('#input-last-name');
const inputPhoneEl = document.querySelector('#input-phone');
const contactTableEl = document.querySelector('#contacts-table');

buttonEl.addEventListener('click', onClick);

function onClick() {
	const firstNameData = inputFirstNameEl.value.trim();
	const lastNameData = inputLastNameEl.value.trim();
	const phoneData = inputPhoneEl.value.trim();
	if (firstNameData && lastNameData && phoneData.match(/^\d+$/)) {
		contactTableEl.insertAdjacentHTML('beforeend', `<tr>
			<td>${firstNameData}</td><td>${lastNameData}</td>
			<td>${phoneData}</td></tr>`);
	} else {
		alert('Please, fill all fealds');
	}
	inputFirstNameEl.value = '';
	inputLastNameEl.value = '';
	inputPhoneEl.value = '';
}
