/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/contact-page.js":
/*!*****************************!*\
  !*** ./src/contact-page.js ***!
  \*****************************/
/*! exports provided: loadContactPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loadContactPage\", function() { return loadContactPage; });\nfunction loadContactPage () {\n\tconst contact = document.createElement('section');\n\tcontact.setAttribute('id', 'contact');\n\n\tconst heading = document.createElement('h2');\n\theading.textContent = 'Contact Us';\n\n\tconst paragraph = document.createElement('p');\n\tparagraph.textContent = 'Contact us using these details';\n\n\tconst contactDetails = document.createElement('ul');\n\tconst email = document.createElement('li');\n\tconst phone = document.createElement('li');\n\tconst address = document.createElement('li');\n\n\temail.textContent = 'Email';\n\tphone.textContent = 'Phone number';\n\taddress.textContent = 'Address';\n\n\tcontactDetails.appendChild(email);\n\tcontactDetails.appendChild(phone);\n\tcontactDetails.appendChild(address);\n\n\tcontact.appendChild(heading);\n\tcontact.appendChild(paragraph);\n\tcontact.appendChild(contactDetails);\n\n\treturn contact;\n}\n\n\n\n//# sourceURL=webpack:///./src/contact-page.js?");

/***/ }),

/***/ "./src/home-page.js":
/*!**************************!*\
  !*** ./src/home-page.js ***!
  \**************************/
/*! exports provided: loadHomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loadHomePage\", function() { return loadHomePage; });\nfunction loadHomePage () {\n\tconst home = document.createElement('section');\n\thome.setAttribute('id', 'home');\n\n\tconst heading = document.createElement('h1');\n\theading.textContent = 'Welcome';\n\n\tconst paragraph = document.createElement('p');\n\tparagraph.textContent = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia harum provident at, id sapiente amet iure debitis? Id itaque dignissimos ut expedita repellat quas sequi non, recusandae cumque aliquid, laborum.';\n\n\tconst image = document.createElement('img');\n\timage.setAttribute('src', 'https://source.unsplash.com/600x400/?restaurant, food');\n\n\thome.appendChild(heading);\n\thome.appendChild(paragraph);\n\thome.appendChild(image);\n\n\treturn home;\n}\n\n\n\n//# sourceURL=webpack:///./src/home-page.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-page */ \"./src/home-page.js\");\n/* harmony import */ var _contact_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact-page */ \"./src/contact-page.js\");\n/* harmony import */ var _menu_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu-page */ \"./src/menu-page.js\");\n\n\n\n\nconst homePage = Object(_home_page__WEBPACK_IMPORTED_MODULE_0__[\"loadHomePage\"])();\nconst contactPage = Object(_contact_page__WEBPACK_IMPORTED_MODULE_1__[\"loadContactPage\"])();\nconst menuPage = Object(_menu_page__WEBPACK_IMPORTED_MODULE_2__[\"loadMenuPage\"])();\n\nconst tabs = document.createElement('ul');\ntabs.setAttribute('id', 'tabs');\n\nconst homeTab = document.createElement('li');\nconst contactTab = document.createElement('li');\nconst menuTab = document.createElement('li');\n\nhomeTab.style.color = contactTab.style.color = menuTab.style.color = 'blue';\nhomeTab.style.textDecoration = contactTab.style.textDecoration = menuTab.style.textDecoration = 'underline';\nhomeTab.style.cursor = contactTab.style.cursor = menuTab.style.cursor = 'pointer';\n\nhomeTab.textContent = 'Home';\ncontactTab.textContent = 'Contact';\nmenuTab.textContent = 'Menu';\n\nhomeTab.addEventListener('click', () => { \n\thomePage.style.display = 'block';\n\tcontactPage.style.display = 'none';\n\tmenuPage.style.display = 'none';\n\n});\ncontactTab.addEventListener('click', () => {\n\tcontactPage.style.display = 'block';\n\thomePage.style.display = 'none';\n\tmenuPage.style.display = 'none';\n\n});\nmenuTab.addEventListener('click', () => { \n\tmenuPage.style.display = 'block';\n\thomePage.style.display = 'none';\n\tcontactPage.style.display = 'none';\n\n});\n\ntabs.appendChild(homeTab);\ntabs.appendChild(contactTab);\ntabs.appendChild(menuTab);\n\nconst content = document.createElement('div');\ncontent.setAttribute('id', 'content');\n\nconst heading = document.createElement('h1');\nheading.textContent = 'Restaurant';\n\n\nhomeTab.click();\n\ncontent.appendChild(homePage);\ncontent.appendChild(contactPage);\ncontent.appendChild(menuPage);\n\nconst wrapper = document.createElement('div');\n\nwrapper.appendChild(heading);\nwrapper.appendChild(tabs);\nwrapper.appendChild(content);\n\ndocument.addEventListener('DOMContentLoaded', () => document.body.appendChild(wrapper));\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/menu-page.js":
/*!**************************!*\
  !*** ./src/menu-page.js ***!
  \**************************/
/*! exports provided: loadMenuPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loadMenuPage\", function() { return loadMenuPage; });\nfunction loadMenuPage () {\n\tconst menu = document.createElement('section');\n\tmenu.setAttribute('id', 'menu');\n\n\tconst heading = document.createElement('h2');\n\theading.textContent = 'Menu';\n\n\tconst paragraph = document.createElement('p');\n\tparagraph.textContent = 'Check out our menu';\n\n\tconst dishes = document.createElement('ul');\n\tconst dish1 = document.createElement('li');\n\tconst dish2 = document.createElement('li');\n\tconst dish3 = document.createElement('li');\n\n\tdish1.textContent = 'First dish';\n\tdish2.textContent = 'Second dish';\n\tdish3.textContent = 'Third dish';\n\n\tdishes.appendChild(dish1);\n\tdishes.appendChild(dish2);\n\tdishes.appendChild(dish3);\n\n\tmenu.appendChild(heading);\n\tmenu.appendChild(paragraph);\n\tmenu.appendChild(dishes);\n\n\treturn menu;\n}\n\n\n\n//# sourceURL=webpack:///./src/menu-page.js?");

/***/ })

/******/ });