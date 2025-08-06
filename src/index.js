module.exports = function reverse(n) {
  let res;
  if (n < 0) {
    res = -n;
  } else {
    res = n;
  }
  res = `${res}`.split('').reverse().join('');
  return res;
};
