const _ = require('lodash');

// Example order JSON
const order=[
  {
    "orderItemId": "48",
    "description": "Garam Masala - 100g",
    "currency": "USD",
    "quantity": 1,
    "price": 2.99,
    "maxRetailPrice": 2.99
  },
  {
    "orderItemId": "41",
    "description": "Finger Millet ladoo - 12pcs",
    "currency": "USD",
    "quantity": 2,
    "price": 4.99,
    "maxRetailPrice": 9.98
  },
  {
    "orderItemId": "46",
    "description": "Coffee - 200g",
    "currency": "USD",
    "quantity": 2,
    "price": 5.99,
    "maxRetailPrice": 11.98
  }
]
function getOrderItemPrices(order) {
    return _.map(order, 'price');
}

// Function to calculate the total quantity of all items
function getTotalQuantity(order) {
    return _.sumBy(order, 'quantity');
}

// Function to calculate the total amount of the order
function getTotalAmount(order) {
    return _.sumBy(order, item => item.price * item.quantity);
}

// Function to find unique items in the order
function findUniqueItems(order) {
    return _.uniqBy(order, 'description');
}

// Function to calculate tax (assuming tax rate is 10%)
function calculateTax(order) {
    const totalAmount = getTotalAmount(order);
    const taxRate = 0.1; // 10%
    return totalAmount * taxRate;
}

// Usage examples
console.log("Order Item Prices:", getOrderItemPrices(order));
console.log("Total Quantity:", getTotalQuantity(order));
console.log("Total Amount:", getTotalAmount(order));
console.log("Unique Items:", findUniqueItems(order));
console.log("Tax:", calculateTax(order));
