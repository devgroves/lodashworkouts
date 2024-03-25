const _ = require('lodash');

// Example product and product category JSON
const products= [
  {
    "id": 1,
    "productId": 46,
    "productName": "Coffee - 200g",
    "shortDesc": "Coffee - 200g",
    "fieldDesc": null,
    "maxRetailPrice": 7,
    "salesPrice": 5.99,
    "discountPercentage": 14,
    "purchasePrice": 1.86,
    "brandName": null,
    "gstRate": 0,
    "minQty": null,
    "maxQty": 80,
    "location": null,
    "isStockAvailable": true,
    "isVisible": true,
    "skuId": 46,
    "productType": "GOODS",
    "inventoryType": "FIFO",
    "orderItems": null,
    "productCategory": {
      "id": 2,
      "categoryId": 2,
      "categoryName": "General",
      "categorySubClass": ""
    }
  },
  {
    "id": 3,
    "productId": 41,
    "productName": "Finger Millet ladoo - 12pcs",
    "shortDesc": "Finger Millet ladoo - 12pcs",
    "fieldDesc": null,
    "maxRetailPrice": 6,
    "salesPrice": 4.99,
    "discountPercentage": 16,
    "purchasePrice": 3,
    "brandName": null,
    "gstRate": 0,
    "minQty": null,
    "maxQty": 22,
    "location": null,
    "isStockAvailable": true,
    "isVisible": true,
    "skuId": 41,
    "productType": "GOODS",
    "inventoryType": "FIFO",
    "orderItems": null,
    "productCategory": {
      "id": 3,
      "categoryId": 3,
      "categoryName": "Cereals",
      "categorySubClass": ""
    }
  },
  {
    "id": 4,
    "productId": 48,
    "productName": "Garam Masala - 100g",
    "shortDesc": "Garam Masala - 100g",
    "fieldDesc": null,
    "maxRetailPrice": 4,
    "salesPrice": 2.99,
    "discountPercentage": 25,
    "purchasePrice": 1.04,
    "brandName": null,
    "gstRate": 0,
    "minQty": null,
    "maxQty": 100,
    "location": null,
    "isStockAvailable": true,
    "isVisible": true,
    "skuId": 48,
    "productType": "GOODS",
    "inventoryType": "FIFO",
    "orderItems": null,
    "productCategory": {
      "id": 4,
      "categoryId": 4,
      "categoryName": "Spices",
      "categorySubClass": ""
    }
  }
]

// Function to get products by category
const getProductsByCategory = (products, categoryId) => {
  return products.filter(product => product.productCategory.id === categoryId);
};

// Function to search product by name or description with or without category
const searchProduct = (products, query, categoryId = null) => {
  if (categoryId) {
    return products.filter(product => 
      (product.productName.toLowerCase().includes(query.toLowerCase()) || 
      product.shortDesc.toLowerCase().includes(query.toLowerCase())) &&
      product.productCategory.id === categoryId
    );
  } else {
    return products.filter(product => 
      product.productName.toLowerCase().includes(query.toLowerCase()) || 
      product.shortDesc.toLowerCase().includes(query.toLowerCase())
    );
  }
};

// Function to order products by price, product name, or category
const orderBy = (products, key, order) => {
  return _.orderBy(products, [key], [order]);
};
console.log("Products in 'General' category:");
console.log(getProductsByCategory(products, 2));

console.log("\nProducts containing 'Coffee':");
console.log(searchProduct(products, 'Coffee'));

console.log("\nProducts containing 'ladoo' in 'Cereals' category:");
console.log(searchProduct(products, 'ladoo', 3));

console.log("\nProducts ordered by price (ascending):");
console.log(orderBy(products, 'salesPrice', 'asc'));

console.log("\nProducts ordered by product name (descending):");
console.log(orderBy(products, 'productName', 'desc'));

console.log("\nProducts ordered by category (ascending):");
console.log(orderBy(products, 'productCategory.categoryName', 'asc'));
