module.exports = function multiply(first, second) {
  let res = [];
  first = first.split("");
  second = second.split("");
  first = first.reverse();
  second = second.reverse();


  for (let i = 0; first[i] >= 0; i++) {
    for (let j = 0; second[j] >= 0; j++) {
      let multipl = first[i] * second[j];
      res[i + j] = (res[i + j]) ? res[i + j] + multipl : multipl;
    }
  }

  for (let i = 0; res[i] >= 0; i++) {
    let one = res[i] % 10;
    let ten = Math.floor(res[i] / 10);
    res[i] = one;



    if (res[i + 1]) { res[i + 1] += ten; }
    else if (ten != 0) {
      res[i + 1] = ten;
    }
  }

  return (res.reverse().join(''));
}
