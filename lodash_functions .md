| lodash Function   | Description                                                                                                                                                                                                                   | Examples                                                                                                                                                                                                                              |
|-------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| _.after         | Creates a function that invokes func only after it has been called n times.                          |  const greet = () =>
  { console.log('Hello!'); };
  const greetAfter3Times = _.after(3, greet); greetAfter3Times(); // Nothing Happens Yet    
greetAfter3Times();// Nothing happens yet
greetAfter3Times();// Logs 'Hello!' |
| _.ary        | Creates a function that invokes func, with n arguments, ignoring any additional arguments. | const sum = (a, b) => a + b;
 const sumOnlyFirstTwoArgs = _.ary(sum, 2);
 // Logs 3 (ignores third argument)
console.log(sumOnlyFirstTwoArgs(1, 2, 3));                          |
| _.before        | CCreates a function that invokes func only before it has been called n times.                                                                                                                      | const greet = () => { console.log('Hello!'); };
  const greetBefore3Times = _.before(3, greet); greetBefore3Times(); // Logs 'Hello!'
  greetBefore3Times();
   // Logs 'Hello!'
   greetBefore3Times();
   // Logs 'Hello!'
   greetBefore3Times(); // Nothing happens after the third call                                                                                        |
| _.bind       | Creates a function that invokes func with the this binding of thisArg and prepends any additional bound arguments to those passed to the bound function.                                                                                                                         | const greet = function(greeting) {
    console.log(`${greeting}, ${this.name}`); };
    const user = { name: 'Alice' };
    const boundGreet = _.bind(greet, user, 'Hello'); boundGreet(); // Logs 'Hello, Alice'                                                                                                                                  |
| _.bindKey            | Creates a function that invokes the method at object[key] with this binding of object.                  | const user = { name: 'Bob', greet: function(greeting) { console.log(`${greeting}, ${this.name}`); } };
   const boundGreet = _.bindKey(user, 'greet', 'Hi'); boundGreet(); // Logs 'Hi, Bob'                                                                      |
| _.curry       | Creates a curried function with the specified arity.                                                                                                 |   const sum = (a, b, c) => a + b + c;
   const curriedSum = _.curry(sum);
   // Logs 6     console.log(curriedSum(1)(2)(3));                                                           |
| _.curryRight        |This method is like _.curry except that arguments are applied to func in the manner of _.partialRight instead of _.partial.                                                                                                                                   |   const greet = (greeting, name) => `${greeting}, ${name}!`;
   const curriedGreet = _.curryRight(greet); const greetHi = curriedGreet('Hi');
    // Logs 'Hi, Alice!'
console.log(greetHi('Alice'));                                                                                                                                                                               |
| _.debounce        | Creates a debounced function that delays invoking func until after wait milliseconds have elapsed since the last time the debounced function was invoked.                                                                  | const saveChanges = () => { console.log('Changes saved!'); }; const debouncedSave = _.debounce(saveChanges, 1000); debouncedSave(); // Waits 1 second and logs 'Changes saved!'
  debouncedSave();
   // Nothing happens (debounced) for another 1 second
   debouncedSave(); // Nothing happens (debounced) for another 1 second
                                                                                                                                       |
| _.defer         | Invokes func after wait milliseconds. Any additional arguments are provided to func when it's invoked.

                               | const greet = (name) => {
    console.log(`Hello, ${name}!`); };
    _.defer(greet, 2000, 'Alice'); // Logs 'Hello, Alice!' after 2 seconds                                                                                                           |
| _.defer | Invokes func after wait milliseconds. Any additional arguments are provided to func when it's invoked.                                                      | const greet = (name) => {
    console.log(`Hello, ${name}!`); };
    _.defer(greet, 2000, 'Alice'); // Logs 'Hello, Alice!' after 2 seconds                                                                                                                 |
| _.flip          | Creates a function that invokes func with arguments reversed.                                                                                                     | const subtract = (a, b) => a - b; const flippedSubtract = _.flip(subtract); console.log(flippedSubtract(5, 3)); // Logs -2
                                                                                                       |
| _.memoize        | Creates a function that memoizes the result of func. If resolver is provided, it determines the cache key for storing the result based on the arguments provided to the memoized function.                                                        |const fibonacci = (n) => {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
};
                                                                                                    |
| _.negate           | Creates a function that negates the result of the predicate func. The created function returns true for elements where the original function would return false, and vice versa.                                                                                                |  const isEven = (num) => num % 2 === 0;
 const isOdd = _.negate(isEven);
 console.log(isOdd(3)); // Logs true                                                                                                                                                  |
| _.once      | Creates a function that invokes func only once. Subsequent calls to the created function return the result of the initial invocation.                                                                                                                             |  const greet = () => {
     console.log('Hello!');
     };
  const greetOnce = _.once(greet);
  greetOnce(); // Logs 'Hello!'
   greetOnce(); // Nothing happens (function already invoked)                                                                                                                                   |
| _.overArgs          | Creates a function that invokes func with transformed arguments. The transformations are specified by an array of functions.                                                                        | const join = (str1, str2) => str1 + ' ' + str2;
  const overArgsJoin = _.overArgs(join, [_.toUpper, _.toLower]);
   console.log(overArgsJoin('Hello', 'WORLD')); // Logs 'HELLO world'

                                                  |
| _.partial            | Creates a partially applied function by filling in any number of its arguments, without changing its dynamic this context.                                               |const greet = (greeting, name) => console.log(`${greeting}, ${name}!`);
const sayHello = _.partial(greet, 'Hello'); sayHello('Alice'); // Logs 'Hello, Alice!'
                                                                                     |
| _.partialRight       | This method is like _.partial except that arguments are applied to func in the manner of _.partialRight instead of _.partial.                                                       | const greet = (greeting, name) => console.log(`${greeting}, ${name}!`);
 const sayHello = _.partialRight(greet, 'Alice');
 sayHello('Hello'); // Logs 'Hello, Alice!'                                                                                      |
| _.rearg        | Creates a function that invokes func with arguments arranged according to the specified indexes.                                                                                                    |const greet = (greeting, name) => console.log(`${greeting}, ${name}!`);
  const reargGreet = _.rearg(greet, [1, 0]); reargGreet('Alice', 'Hello'); // Logs 'Hello, Alice!'
                                               |
| _.rest        | Creates a function that invokes func with the arguments it receives and additional arguments tailing it. This method is like _.bind except it does not alter the this binding.                                      | const sum = (...args) => args.reduce((acc, val) => acc + val, 0);
const sumRest = _.rest(sum, 3);
 console.log(sumRest(1, 2)); // Logs 6
                                                                                  |
| _.spread      | Creates a function that invokes func with the this binding of the created function and an array of arguments much like Function#apply.                                                                                 |const greet = (greeting, name) => console.log(`${greeting}, ${name}!`);
const spreadGreet = _.spread(greet); spreadGreet(['Hello', 'Alice']); // Logs 'Hello, Alice!'                                                                             |
| _.throttle           |Creates a throttled function that only invokes func at most once per every wait milliseconds. The throttled function comes with a cancel method to cancel delayed invocations.                                                    |const saveChanges = () => console.log('Changes saved!');
const throttledSave = _.throttle(saveChanges, 1000); throttledSave(); // Logs 'Changes saved!' (only once per second)      |
| _.unary      |Creates a function that accepts up to one argument, ignoring any additional arguments.
                                              | const greet = (name) => console.log(`Hello, ${name}!`);
const unaryGreet = _.unary(greet);
unaryGreet('Alice', 'Bob'); // Logs 'Hello, Alice!' (ignores extra arguments)            |
| _.wrap    | Creates a function that provides value to the wrapper function as its first argument. Any additional arguments provided to the function are appended to those provided to the wrapper function.

               |const wrapGreet = _.wrap('Hello',
                (greeting, name) => console.log(`${greeting},
${name}!`)); wrapGreet('Alice'); // Logs 'Hello, Alice!'

                                     |

