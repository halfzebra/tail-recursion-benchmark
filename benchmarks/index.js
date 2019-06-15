const Benchmark = require('benchmark');
const { recoursive, tailRecoursive, loop } = require('../src');

const suite = new Benchmark.Suite();

// add tests
suite
	.add('recoursive', function() {
		for (let i = 0; i < 25; i++) {
			recoursive(i);
		}
	})
	.add('tailRecoursive', function() {
		for (let i = 0; i < 25; i++) {
			tailRecoursive(i);
		}
	})
	.add('loop', function() {
		for (let i = 0; i < 25; i++) {
			loop(i);
		}
	})
	// add listeners
	.on('cycle', function(event) {
		console.log(String(event.target));
	})
	.on('complete', function() {
		console.log('Fastest is ' + this.filter('fastest').map('name'));
	})
	// run async
	.run({ async: true });

// logs:
// recoursive x 822 ops/sec ±0.47% (90 runs sampled)
// tailRecoursive x 526,496 ops/sec ±1.02% (90 runs sampled)
// Fastest is tailRecoursive
