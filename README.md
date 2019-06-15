# tail-recursion-benchmark

This repo with a benchmark of [Factorial](https://en.wikipedia.org/wiki/Factorial) with tail recursion optimisation.

## Run locally

```sh
npm install
npm bench
```

## Results

```sh
recoursive x 814 ops/sec ±1.07% (91 runs sampled)
tailRecoursive x 531,334 ops/sec ±1.08% (88 runs sampled)
Fastest is tailRecoursive
```