function activeToggle(element) {
	parent = element.parentElement;
	navLinks = parent.querySelector('.nav.links');
	element.classList.toggle('active');
	parent.querySelector('.nav.important').classList.toggle('active');
	navLinks.classList.toggle('active');
	navLinks.querySelector('.nav.gradient').classList.toggle('active');
	parent.querySelector('.nav.title').classList.toggle('active');
}