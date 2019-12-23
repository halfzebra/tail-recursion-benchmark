const Benchmark = require('benchmark');
const { recursive, tailRecursive, loop } = require('../src');

const suite = new Benchmark.Suite();

// add tests
suite
  .add('recursive', function() {
    for (let i = 0; i < 25; i++) {
      recursive(i);
    }
  })
  .add('tailRecursive', function() {
    for (let i = 0; i < 25; i++) {
      tailRecursive(i);
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
// recursive x 822 ops/sec ±0.47% (90 runs sampled)
// tailRecursive x 526,496 ops/sec ±1.02% (90 runs sampled)
// Fastest is tailRecursive
