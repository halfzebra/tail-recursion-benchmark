function recursive(n) {
  if (n === 0) {
    return 0;
  }

  if (n === 1 || n === 2) {
    return 1;
  }

  return recursive(n - 1) + recursive(n - 2);
}

module.exports = { recursive };
