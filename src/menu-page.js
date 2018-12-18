function loadMenuPage () {
	const menu = document.createElement('section');
	menu.setAttribute('id', 'menu');

	const heading = document.createElement('h2');
	heading.textContent = 'Menu';

	const paragraph = document.createElement('p');
	paragraph.textContent = 'Check out our menu';

	const dishes = document.createElement('ul');
	const dish1 = document.createElement('li');
	const dish2 = document.createElement('li');
	const dish3 = document.createElement('li');

	dish1.textContent = 'First dish';
	dish2.textContent = 'Second dish';
	dish3.textContent = 'Third dish';

	dishes.appendChild(dish1);
	dishes.appendChild(dish2);
	dishes.appendChild(dish3);

	menu.appendChild(heading);
	menu.appendChild(paragraph);
	menu.appendChild(dishes);

	return menu;
}

export {loadMenuPage};