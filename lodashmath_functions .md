| math Function   | Description                                                                                                                                                                                                                   | Examples                                                                                                                                                                                                                              |
|-------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| _.add         | Adds two numbers.           | console.log(_.add(3, 5)); // Output: 8 |
| _.ceil        | Calculates the smallest integer greater than or equal to a given number.| console.log(_.ceil(4.006));
// Output: 5
console.log(_.ceil(6.004, 2));
 // Output: 6.01
console.log(_.ceil(6040, -2)); // Output: 6100
  |
| _.divide        | Divides the first number by the second number.                                                                                                                                     | console.log(_.divide(6, 4)); // Output: 1.5                                                                                                                                             |
| _.floor       | Calculates the largest integer less than or equal to a given number.                                                                                                            | console.log(_.floor(4.006));
 // Output: 4
console.log(_.floor(0.046, 2));
 // Output: 0.04
console.log(_.floor(4060, -2));
  // Output: 4000                                                                                                                            |
| _.max            |Returns the maximum value in an array.                      | console.log(_.max([4, 2, 8, 6])); // Output: 8                                                      |
| _.maxBy       | Returns the maximum value of a collection (array or object) when passed an iteratee function.                                                                                                            | const objects = [{ 'n': 1 }, { 'n': 2 }]; console.log(_.maxBy(objects, ({ n }) => n)); // Output: { 'n': 2 }                                                               |
| _.mean        | Computes the mean of the values in an array.                                                                                                                                                                             |   console.log(_.mean([4, 2, 8, 6])); // Output: 5                                                                                                                                                                              |
| _.meanBy        |Computes the mean of the values of a collection (array or object) when passed an iteratee function.                                                         | const objects = [{ 'n': 1 }, { 'n': 2 }]; console.log(_.meanBy(objects, ({ n }) => n)); // Output: 1.5                                                                                                                                  |
| _.min         | Returns the minimum value in an array.                                       |console.log(_.min([4, 2, 8, 6])); // Output: 2                                                                                                            |
| _.minBy | Returns the minimum value of a collection (array or object) when passed an iteratee function.

                                                  | const objects = [{ 'n': 1 }, { 'n': 2 }]; console.log(_.minBy(objects, ({ n }) => n)); // Output: { 'n': 1 }                                                                                                                    |
| _.multiply          | Multiplies two numbers.                                                                                                                                        | console.log(_.multiply(6, 4)); // Output: 24

                                                                                                               |
| _.round        | Rounds a number to the nearest integer or to the specified number of decimals.                                                                                                                  | console.log(_.round(4.006));
 // Output: 4
console.log(_.round(4.006, 2));
  // Output: 4.01
console.log(_.round(4060, -2)); // Output: 4100                                                                                                                      |
| _.subtract           | Subtracts the second number from the first number.                                                                                                                                                 |console.log(_.subtract(6, 4)); // Output: 2

                                                                                                                                              |
| _.sum      |Computes the sum of the values in an array.

                                                                                                                          | console.log(_.sum([4, 2, 8, 6])); // Output: 20

                                                                                                                                     |
| _.sumBy          |Computes the sum of the values of a collection (array or object) when passed an iteratee function.                                                                                                                                                                             | const objects = [{ 'n': 1 }, { 'n': 2 }]; console.log(_.sumBy(objects, ({ n }) => n)); // Output: 3                                                          