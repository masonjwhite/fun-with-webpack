// This is just to test that modules work and make bundle properly
export const excitementLevel = (x: number): string => {
	const exclamationPoints: string[] = [];

	for (let i = 0; i < x; i++) {
		exclamationPoints.push('!');
	}

	return exclamationPoints.join('');
};
