# tail-recursion-benchmark

This repo with a benchmark of [Factorial](https://en.wikipedia.org/wiki/Factorial) with tail recursion optimisation.

## Run locally

```sh
npm install
npm bench
```

## Results

```sh
recoursive x 634 ops/sec ±6.28% (73 runs sampled)
tailRecoursive x 424,794 ops/sec ±6.42% (77 runs sampled)
loop x 1,880,282 ops/sec ±3.42% (77 runs sampled)
Fastest is loop
```