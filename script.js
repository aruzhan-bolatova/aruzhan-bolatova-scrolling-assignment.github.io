// An array of stories as strings
let stories = [
	'The bear is a wild animal',
	'It can be found in black, brown and white colors',
	'It has sharp teeth and a lot of fur on its body',
	'It loves eating berries and honey'
];

let bearDiv = document.getElementById('storyteller-div');
let bearText = document.getElementById('storyteller-text');
let navButtons = document.getElementsByClassName('nav-btn');

// Add scroll event for the whole HTLM document and set changeText function as callback
document.addEventListener('scroll', changeText);

// changeText function runs whenever scroll happens on the web page
function changeText(){
	// Uncomment line below to see scrollY position change
	// console.log(window.scrollY);

	// pos saves current scrollY position
	let pos = window.scrollY;
	// width saves current web page width
	let width = window.innerWidth;
	// height saves current web page height
	let height = window.innerHeight;
	// Calculate which section the user has scrolled to
	// parseInt() function used to ignore decimals
	let sectionNum = parseInt(pos / height);

	// Set the text of cat-text element depending on which section the user has currently scrolled to
	bearText.innerHTML = stories[sectionNum];
	// Map vertical scroll position to the horizontal position of the cat
	bearDiv.style.left = pos / (height * 4) * width + 'px';

	// Fix color of navigation button
	// Set all button color to white
	for(let i = 0; i < navButtons.length; i++){
		navButtons[i].style.backgroundColor = 'white';
	}

	// Set color of current section button to black
	navButtons[sectionNum].style.backgroundColor = 'black';
}