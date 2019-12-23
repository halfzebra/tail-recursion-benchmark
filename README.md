# tail-recursion-benchmark

This repo with a benchmark of [Factorial](https://en.wikipedia.org/wiki/Factorial) with tail recursion optimisation.

I wanted to see how fast tail-recursive functions are compared to the implementation using loops in JavaScript.

## Run locally

```sh
npm install
npm bench
```

## Results

```sh
recursive x 1,164 ops/sec ±0.89% (89 runs sampled)
tailRecursive x 707,965 ops/sec ±0.60% (91 runs sampled)
loop x 3,503,258 ops/sec ±0.62% (89 runs sampled)
Fastest is loop
```
