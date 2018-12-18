function loadHomePage () {
	const home = document.createElement('section');
	home.setAttribute('id', 'home');

	const heading = document.createElement('h1');
	heading.textContent = 'Welcome';

	const paragraph = document.createElement('p');
	paragraph.textContent = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia harum provident at, id sapiente amet iure debitis? Id itaque dignissimos ut expedita repellat quas sequi non, recusandae cumque aliquid, laborum.';

	const image = document.createElement('img');
	image.setAttribute('src', 'https://source.unsplash.com/600x400/?restaurant, food');

	home.appendChild(heading);
	home.appendChild(paragraph);
	home.appendChild(image);

	return home;
}

export {loadHomePage};