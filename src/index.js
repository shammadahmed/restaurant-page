import {loadHomePage} from './home-page';
import {loadContactPage} from './contact-page';
import {loadMenuPage} from './menu-page';

const homePage = loadHomePage();
const contactPage = loadContactPage();
const menuPage = loadMenuPage();

const tabs = document.createElement('ul');
tabs.setAttribute('id', 'tabs');

const homeTab = document.createElement('li');
const contactTab = document.createElement('li');
const menuTab = document.createElement('li');

homeTab.style.color = contactTab.style.color = menuTab.style.color = 'blue';
homeTab.style.textDecoration = contactTab.style.textDecoration = menuTab.style.textDecoration = 'underline';
homeTab.style.cursor = contactTab.style.cursor = menuTab.style.cursor = 'pointer';

homeTab.textContent = 'Home';
contactTab.textContent = 'Contact';
menuTab.textContent = 'Menu';

homeTab.addEventListener('click', () => { 
	homePage.style.display = 'block';
	contactPage.style.display = 'none';
	menuPage.style.display = 'none';

});
contactTab.addEventListener('click', () => {
	contactPage.style.display = 'block';
	homePage.style.display = 'none';
	menuPage.style.display = 'none';

});
menuTab.addEventListener('click', () => { 
	menuPage.style.display = 'block';
	homePage.style.display = 'none';
	contactPage.style.display = 'none';

});

tabs.appendChild(homeTab);
tabs.appendChild(contactTab);
tabs.appendChild(menuTab);

const content = document.createElement('div');
content.setAttribute('id', 'content');

const heading = document.createElement('h1');
heading.textContent = 'Restaurant';


homeTab.click();

content.appendChild(homePage);
content.appendChild(contactPage);
content.appendChild(menuPage);

const wrapper = document.createElement('div');

wrapper.appendChild(heading);
wrapper.appendChild(tabs);
wrapper.appendChild(content);

document.addEventListener('DOMContentLoaded', () => document.body.appendChild(wrapper));
