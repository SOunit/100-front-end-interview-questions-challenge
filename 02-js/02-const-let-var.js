function sample() {
  if (true) {
    var ex = 5;
  }
  return ex;
}

function sample2() {
  if (true) {
    const ex = 5;
  }
  return ex;
}

console.log(sample());
console.log(sample2());
