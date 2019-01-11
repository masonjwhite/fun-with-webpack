function component() {
	const element = document.createElement('p');

	element.innerHTML =
		'What up from Webpack and JavaScript my glip glops!!';

	return element;
}

document.body.appendChild(component());
