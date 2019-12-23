// Reference:
// a = 0 b = 1
// a = 1 b = 1
// a = 1 b = 2
// a = 2 b = 3
// a = 3 b = 5
// a = 5 b = 8
// a = 8 b = 13

function loop(n) {
  if (n === 0) {
    return 0;
  }

  if (n === 1 || n === 2) {
    return 1;
  }
  let i = 0;
  let a = 0;
  let b = 1;
  let tmp;

  while (i < n - 1) {
    tmp = b;
    b = a + b;
    a = tmp;
    i++;
  }
  return b;
}

module.exports = { loop };
