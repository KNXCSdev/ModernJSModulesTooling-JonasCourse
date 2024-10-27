// Importing module
import { addToCart, totalPrice as price, tq } from "./shoppingCart.js";

console.log(price, tq);
console.log("Importing Module");
addToCart("bread", 5);

import * as ShoppingCart from "./shoppingCart.js";

ShoppingCart.addToCart("bread", 5);

//NOTE IMPORTING THE DEFAULT EXPORT WITH NAME
import add from "./shoppingCart.js";

add("pizza", 2);

const res = fetch("https://jsonplaceholder.typicode.com/posts");
const data = res.json();

console.log(data);

console.log("Something");

// const getLastPost = async function () {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//   const data = await res.json();

//   return { title: data.at(-1).title, text: data.at(-1).body };
// };

// const lastPost = getLastPost();

// //NOT VERY CLEAN
// // lastPost.then((res) => console.log(res));

// const lastPost2 = await getLastPost();
// console.log(lastPost2);

//SECTION THE MODULE PATTERN
// const ShoppingCart2 = (function () {
//   const cart = [];
//   const shippingCost = 10;
//   const totalPrice = 237;
//   const totalQuantity = 23;

//   const addToCart = function (product, quantity) {
//     cart.push({ product, quantity });
//     console.log(`${quantity} ${product} added to cart`);
//   };

//   const orderStock = function (product, quantity) {
//     cart.push({ product, quantity });
//     console.log(`${quantity} ${product} Ordered from supplier`);
//   };

//   return {
//     addToCart,
//     cart,
//     totalPrice,
//     totalQuantity,
//   };
// })();

// ShoppingCart2.addToCart("apple", 4);
// ShoppingCart2.addToCart("pizza", 2);

//SECTION COMMONJS MODULES

// export.addToCart=function (product, quantity) {
//       cart.push({ product, quantity });
//       console.log(`${quantity} ${product} added to cart (shipping cost is ${shippingCost})`);
//     };

//SECTION INTRODUCTION TO NPM

// const state = {
//   cart: [
//     { product: "bread", quantity: 5 },
//     { product: "pizza", quantity: 5 },
//   ],
//   user: { loggedIn: true },
// };

// const stateDeepClone = cloneDeep(state);
// console.log(stateDeepClone);
