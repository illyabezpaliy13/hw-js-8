let product = 1;
for (let i = 3; i <= 9; i += 1) {
  if (i % 2 !== 0) {
    product *= i;
    console.log(product);
  }
}