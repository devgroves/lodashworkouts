| number Function   | Description                                                                                                                                                                                                                   | Examples                                                                                                                                                                                                                              |
|-------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| _.clamp         | Clamps number within the inclusive lower and upper bounds.                          | console.log(_.clamp(-10, -5, 5)); // Output: -5
 console.log(_.clamp(10, -5, 5));
 // Output: 5
 console.log(_.clamp(0, -5, 5)); // Output: 0 |
| _.inRange        | Checks if number is between start and up to, but not including, end. If end is not specified, it's set to start with start then set to 0. If start is greater than end, the params are swapped to support negative ranges. | console.log(_.inRange(3, 2, 4));
// Output: true
console.log(_.inRange(4, 8));
 // Output: true
console.log(_.inRange(4, 2));
 // Output: false
 console.log(_.inRange(2, 2)); // Output: false               |
| _.random        | Produces a random number between the inclusive lower and upper bounds. If only one argument is provided, the number will be between 0 and the provided number.                                                                                                          |console.log(_.random(0, 5));
 //Output: a random number between 0 and 5 console.log(_.random(5));
 // Output: a random number between 0 and 5 console.log(_.random(1.2, 5.2));
 // Output: a random number between 1.2 and 5.2       |
