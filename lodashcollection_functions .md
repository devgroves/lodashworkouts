| Lodash collections Function | Description                                                                                                                                                                                                          | Example                                                                                                                                                                                                                                      |
|-----------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| .countBy          | Creates an object composed of keys generated from the results of running each element of the collection through the given iteratee. The corresponding value of each key is the number of times the key was returned by the iteratee.                                                                                                                             | const numbers = [1, 2, 3, 4, 5];
const countByResult = _.countBy(numbers, (num) => num % 2 === 0 ? 'even' : 'odd'); console.log(countByResult); // Logs { 'odd': 3, 'even': 2 }                       |
| _.each -> forEach           | Iterates over elements of a collection, invoking a provided function iteratee for each element. The iteratee is invoked with three arguments: (value, index,key, collection). | const colors = ['red', 'green', 'blue'];
_.forEach(colors, (color, index) => {
  console.log(`Color at index ${index}: ${color}`);
});
// Output:
// Color at index 0: red
// Color at index 1: green
// Color at index 2: blue
 |
| _.eachRight -> forEachRight         | This method is like _.forEach except that it iterates over elements of collection from right to left.                                                | const numbers = [1, 2, 3];
 _.forEachRight(numbers, (num) => { console.log(num); }); // Logs 3, 2, 1
                                                                 |
| _.every          | Checks if predicate returns truthy for all elements of collection. Iteration is stopped once predicate returns falsey.                                                | const numbers = [2, 4, 6]; const isEven = (num) => num % 2 === 0;
console.log(_.every(numbers, isEven)); // Logs  true                                                                |
| _.filter          | iterates over elements of collection, returning an array of all elements predicate returns truthy for.                                                | const numbers = [1, 2, 3, 4, 5]; const isEven = (num) => num % 2 === 0; const evenNumbers = _.filter(numbers, isEven); console.log(evenNumbers); // Logs [2, 4]                                                                |
| _.find          | Iterates over elements of collection, returning the first element predicate returns truthy for.                                               | const numbers = [1, 2, 3, 4, 5];
 const isEven = (num) => num % 2 === 0;
 const firstEvenNumber = _.find(numbers, isEven); console.log(firstEvenNumber); // Logs 2                                                              |
| _.findLast          | This method is like _.find except that it iterates over elements of collection from right to left.                                               | const numbers = [1, 2, 3, 4, 5];
const isEven = (num) => num % 2 === 0;
const lastEvenNumber = _.findLast(numbers, isEven); console.log(lastEvenNumber); // Logs 4                                                                |
| _.flatMap          | Creates a flattened array of values by running each element in collection through iteratee and flattening the mapped results. The iteratee is invoked with three arguments: (value, index,key, collection).

                                                | const numbers = [1, 2, 3]; const doubledAndSquared = _.flatMap(numbers, (num) => [num * 2, num * num]); console.log(doubledAndSquared); // Logs [2, 1, 4, 2, 6, 3]                |
| _.flatMapDeep          | This method is like _.flatMap except that it recursively flattens the mapped results up to depth times.                                             | const numbers = [1, 2, 3];
  const nested = (num) => [[num, num]];
 const flattened = _.flatMapDepth(numbers, nested, 1); console.log(flattened); // Logs [[1, 1], [2, 2], [3, 3]]
                                                             |
| _.groupBy          | Creates an object composed of keys generated from the results of running each element of collection through iteratee. The order of grouped values is determined by the order they occur in collection. The corresponding value of each key is an array of elements responsible for generating the key.                                                | const numbers = [1, 2, 3, 4, 5];
 const groupByResult = _.groupBy(numbers, (num) => num % 2 === 0 ? 'even' : 'odd'); console.log(groupByResult); // Logs { 'odd': [1, 3, 5], 'even': [2, 4] }                                                             |
| _.includes          | Checks if value is in collection. If collection is a string, it's checked for a substring of value, otherwise SameValueZero is used for equality comparisons. If fromIndex is negative, it's used as the offset from the end of collection.                                             | const numbers = [1, 2, 3, 4, 5]; console.log(_.includes(numbers, 3)); // Logs true
                                                               |
| _.invokeMap          | Invokes the method at path of each element in collection, returning an array of the results of each invoked method. Any additional arguments are provided to each invoked method.                                               |  const objects = [{ 'a': 1 }, { 'a': 2 }]; console.log(_.invokeMap(objects, 'a'));
  // Logs [1, 2]                                                                |
| _.keyBy          | Creates an object composed of keys generated from the results of running each element of collection through iteratee. The corresponding value of each key is the last element responsible for generating the key. The iteratee is invoked with one argument: (value).                                                | onst users = [{ 'id': 'user1', 'name': 'Alice' }, { 'id': 'user2', 'name': 'Bob' }]; const keyByResult = _.keyBy(users, 'id'); console.log(keyByResult); // Logs { 'user1': { 'id': 'user1', 'name': 'Alice' }, 'user2': { 'id': 'user2', 'name': 'Bob' } }
                                                              |
| _.map          | Creates an array of values by running each element in collection through iteratee. The iteratee is invoked with three arguments: (value, index,key, collection).                                                | const numbers = [1, 2, 3];
const squaredNumbers = _.map(numbers, (num) => num * num);
console.log(squaredNumbers); // Output: [1, 4, 9]                                                                |
| _.orderBy          |Creates an array of elements sorted in ascending order by the results of running each element in a collection through iteratees. Iteratees can also be strings that correspond to properties. The sort order of each iteratee is ascending.                                                |const users = [{ 'name': 'Alice', 'age': 30 }, { 'name': 'Bob', 'age': 25 }];
 const sortedUsers = _.orderBy(users, ['age'], ['asc']);
 console.log(sortedUsers); // Logs [{ 'name': 'Bob', 'age': 25 }, { 'name': 'Alice', 'age': 30 }]                                                            |
| _.partition          | Creates an array of elements split into two groups, the first of which contains elements predicate returns truthy for, the second of which contains elements predicate returns falsey for. The predicate is invoked with one argument: (value).                                               | const numbers = [1, 2, 3, 4, 5];
const isEven = (num) => num % 2 === 0;
const [evenNumbers, oddNumbers] = _.partition(numbers, isEven);
console.log(evenNumbers);
// Logs [2,4]
console.log(oddNumbers);
 // Logs [1, 3, 5]                                                           |
| _.reduce          | Reduces collection to a value which is the accumulated result of running each element in collection thru iteratee, where each successive invocation is supplied the return value of the previous. If accumulator is not provided, the first element of collection is used as the initial value                                              | const numbers = [1, 2, 3, 4, 5];
 const sum = _.reduce(numbers, (acc, num) => acc + num, 0); console.log(sum); // Logs 15                                                           |
| _.reduceRight          | This method is like _.reduce except that it iterates over elements of collection from right to left.                                                | const numbers = [1, 2, 3, 4, 5];
 const subtract = _.reduceRight(numbers, (acc, num) => acc - num);
 console.log(subtract); // Logs -5
                                                                |
| _.reject          | The opposite of _.filter; this method returns the elements of collection that predicate does not return truthy for.                                                | const numbers = [1, 2, 3, 4, 5]; const isEven = (num) => num % 2 === 0; const oddNumbers = _.reject(numbers, isEven); console.log(oddNumbers); // Logs [1, 3, 5]                                                                |
| _.sample          | Gets a random element from collection.                                               | const numbers = [1, 2, 3, 4, 5];
console.log(_.sample(numbers)); // Logs a random number between 1 and 5                                                            |
| _.sampleSize          |Gets n random elements at unique keys from collection up to the size of collection.                                               | const numbers = [1, 2, 3, 4, 5];
console.log(_.sampleSize(numbers, 2)); // Logs an array with 2 random numbers from the original array                                                             |
| _.shuffle          |Creates an array of shuffled values, using a version of the Fisher-Yates shuffle to randomize the order of elements.
                                              |  const numbers = [1, 2, 3, 4, 5];
console.log(_.shuffle(numbers)); // Logs a shuffled version of the original array                                                                 |
| _.size          | Gets the size of collection by returning its length for array-like values or the number of own enumerable string keyed properties for objects.                                               |const numbers = [1, 2, 3];
console.log(_.size(numbers)); // Logs 3                                                                  |
| _.some          |Checks if predicate returns truthy for any element of collection. Iteration is stopped once predicate returns truthy.                                                | const numbers = [1, 2, 3]; const isEven = (num) => num % 2 === 0; console.log(_.some(numbers, isEven)); // Logs true
                                                            |
| _.sortBy          | Creates an array of elements, sorted in ascending order by the results of running each element in a collection through each iteratee. This method performs a stable sort, that is, it preserves the original sort order of equal elements. The iteratees are invoked with one argument: (value).                                                | const users = [{ 'name': 'Alice', 'age': 30 }, { 'name': 'Bob', 'age': 25 }];
  const sortedUsers = _.sortBy(users, ['age']);
  console.log(sortedUsers); // Logs [{ 'name': 'Bob', 'age': 25 }, { 'name': 'Alice', 'age': 30 }]

                                                            |