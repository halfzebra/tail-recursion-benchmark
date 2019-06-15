const { recoursive } = require('../recoursive');

const fib = [ 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765 ];

describe('recoursive', () => {
	it('should return correct fibonacci numbers', () => {
		const seq = fib.map((_, i) => recoursive(i));

		expect(seq).toStrictEqual(fib);
	});
});
