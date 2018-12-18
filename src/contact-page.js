function loadContactPage () {
	const contact = document.createElement('section');
	contact.setAttribute('id', 'contact');

	const heading = document.createElement('h2');
	heading.textContent = 'Contact Us';

	const paragraph = document.createElement('p');
	paragraph.textContent = 'Contact us using these details';

	const contactDetails = document.createElement('ul');
	const email = document.createElement('li');
	const phone = document.createElement('li');
	const address = document.createElement('li');

	email.textContent = 'Email';
	phone.textContent = 'Phone number';
	address.textContent = 'Address';

	contactDetails.appendChild(email);
	contactDetails.appendChild(phone);
	contactDetails.appendChild(address);

	contact.appendChild(heading);
	contact.appendChild(paragraph);
	contact.appendChild(contactDetails);

	return contact;
}

export {loadContactPage};