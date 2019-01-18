import { excitementLevel } from './excitementLevel';

function component(): HTMLElement {
	let element: HTMLElement = document.createElement('p');

	const exclamation: string = excitementLevel(3);

	element.innerHTML = `What up from Webpack and TypeScript my glip glops${exclamation}`;

	return element;
}

document.body.appendChild(component());
