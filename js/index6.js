const goods = 8;
let totalPrice = 0;
let price = 0;

for (let i = 1; i <= goods; i += 1) {
  price = Math.round(Math.random() * (5000 - 500) + 500);
  console.log(` Цена товара ${i} всего ${price}`);
  totalPrice += price;
  console.log(`Общая цена ${totalPrice}`);
}