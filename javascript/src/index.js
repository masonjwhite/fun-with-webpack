import { excitementLevel } from './add';

function component() {
	const element = document.createElement('p');

	// Check that the exclamation points function is being bundled properly
	const exclamation = excitementLevel(3);

	element.innerHTML = `What up from Webpack and JavaScript my glip glops${exclamation}`;

	return element;
}

document.body.appendChild(component());
