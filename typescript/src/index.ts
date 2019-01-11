function component(): HTMLElement {
	let element: HTMLElement = document.createElement('p');

	element.innerHTML =
		'What up from Webpack and TypeScript my glip glops!!';

	return element;
}

document.body.appendChild(component());
