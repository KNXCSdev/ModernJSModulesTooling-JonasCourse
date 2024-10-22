//Exporting module

console.log(`Exporting Module`);

//Blocking code
// console.log("Start Fetching users");
// await fetch("https://jsonplaceholder.typicode.com/users");
// console.log("Finish fetching users");

//NOTE Private SCOPED TO THE CURRENT MODULE
const shippingCost = 10;
const cart = [];

//NAMED EXPORT
export const addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
};

const totalPrice = 237;
const totalQuantity = 23;

//NOTE YOU CAN CHANGE NAME using as
export { totalPrice, totalQuantity as tq };

//DEFAULT EXPORT
export default function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
}
