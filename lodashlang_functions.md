| Lodash  language Function | Description                                                                                                                                                                                                          | Example                                                                                                                                                                                                                                      |
|-----------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| .castArray          | Converts value to an array. If value is already an array, it will be returned unchanged. If value is null or undefined, an empty array is returned. Otherwise, a new array containing value as its single element is returned.                                                                                                                             | console.log(_.castArray(123)); // Output: [123]
console.log(_.castArray([1, 2, 3]));
// Output: [1, 2, 3]
console.log(_.castArray(null));
// Output: []
console.log(_.castArray(undefined));
// Output: []
console.log(_.castArray()); // Output: []

                                                                  |
| _.clone           | Creates a shallow copy of value, where any object references are copied, but not the objects themselves. | const obj = { 'a': 1 };
 const clonedObj = _.clone(obj);
console.log(clonedObj); // Output: { 'a': 1 } |
| _.cloneDeep          | Creates a deep copy of value, recursively copying all nested objects and arrays.                                                | const obj = { 'a': { 'b': 2 } }; const clonedObj = _.cloneDeep(obj);
console.log(clonedObj); // Output: { 'a': { 'b': 2 } }                                                               |
| _.cloneDeepWith          | This method is like _.cloneDeep except that it accepts a customizer which is invoked to produce the cloned values. The customizer is invoked with the value to be cloned and the key of the value.                                                | const obj = { 'a': { 'b': 2 } };
const customizer = (value) => _.isPlainObject(value) ? _.clone(value) : value;
 const clonedObj = _.cloneDeepWith(obj, customizer); console.log(clonedObj);
 // Output: { 'a': { 'b': 2 } }                                                           |
| _.cloneWith          | This method is like _.clone except that it accepts a customizer which is invoked to produce the cloned value. The customizer is invoked with the value to be cloned.                                                | const obj = { 'a': 1 }; const customizer = (value) => _.isNumber(value) ? value * 2 : undefined;
const clonedObj = _.cloneWith(obj, customizer); console.log(clonedObj);
 // Output: { 'a': 2 }                                                           |
| _.conformsTo          |Checks if object conforms to source by invoking the predicate properties of source with the corresponding property values of object. Returns true if all predicates return truthy, else false.                                                | const object = { 'a': 1, 'b': 2 }; console.log(_.conformsTo(object, { 'b': (val) => val > 1 })); // Output: true
console.log(_.conformsTo(object,
    { 'b': (val) => val > 2 }));
    // Output: false                                                               |
| _.eq          |Performs a SameValueZero comparison between two values to determine if they are equivalent.                                                |  console.log(_.eq(1, 1));
 // Output: true
  console.log(_.eq(1, '1'));
  // Output: false
  console.log(_.eq(NaN, NaN)); // Output: true

                                                          |
 | _.gt          |Checks if value is greater than other.                                                |  console.log(_.gt(3, 2));
// Output: true
console.log(_.gt(2, 3));
// Output: false
 console.log(_.gt(2, 2));
  // Output: false

                                                          |
 | _.isArguments          |Checks if value is classified as an Arguments object.                                                |  console.log(_.isArguments(function() { return arguments; }())); // Output: true
console.log(_.isArguments([1, 2, 3]));
 // Output: falsee

                                                          |
 | _.isArray          | Checks if value is classified as an array object.                                               |  console.log(_.isArray([1, 2, 3]));
 // Output: true
console.log(_.isArray('123'));
  // Output: false
                                                          |
| _.isArrayBuffer          |Checks if value is classified as an ArrayBuffer object                                                | console.log(_.isArrayBuffer(new ArrayBuffer(2))); // Output: true
console.log(_.isArrayBuffer(new Array(2))); // Output: false

                                                          |
 | _.isArrayLike          |Checks if value is array-like, meaning it is not null and has a length property that is a non-negative integer.                                               |console.log(_.isArrayLike([1, 2, 3]));
 // Output: true
console.log(_.isArrayLike('abc'));
  // Output: true
console.log(_.isArrayLike({ 'length': 3 })); // Output: true
console.log(_.isArrayLike(null));
    // Output: false

                                                          |
 | _.isArrayLikeObject          |This method is like _.isArrayLike except that it also checks if value is an object.                                                |console.log(_.isArrayLikeObject([1, 2, 3])); // Output: true
console.log(_.isArrayLikeObject('abc'));
 // Output: false
console.log(_.isArrayLikeObject({ 'length': 3 })); // Output: true
console.log(_.isArrayLikeObject(null));
   // Output: false

                                                          |
 | _.isBoolean          |Checks if value is a boolean primitive or object.                                               | console.log(_.isBoolean(true));
// Output: true
console.log(_.isBoolean(false));
  // Output: true
console.log(_.isBoolean(null));
  // Output: false

                                                          |
  | _.isBuffer          |Checks if value is a buffer.                                                | console.log(_.isBuffer(Buffer.from([1, 2, 3]))); // Output: true
console.log(_.isBuffer(new Uint8Array(3))); // Output: false

                                                          |
  | _.isDate          |Checks if value is classified as a Date object.                                               | console.log(_.isDate(new Date()));
 // Output: true
console.log(_.isDate('2022-01-01'));
   // Output: false

                                                          |  
  | _.isElement          |Checks if value is likely a DOM element.                                                | console.log(_.isElement(document.body));
// Output: true
console.log(_.isElement('<body>'));
 // Output: false



    |
    | _.isEmpty          |Checks if value is an empty object, collection, map, or set.                                                | console.log(_.isEmpty(null));
// Output: true
console.log(_.isEmpty([]));
// Output: true console.log(_.isEmpty({}));
 // Output: true
console.log(_.isEmpty(''));
 // Output: true
console.log(_.isEmpty(new Map()));
 // Output: true
console.log(_.isEmpty(new Set()));
 // Output: true
                                                   |  
                                                | _.isEqual          |Performs a deep comparison between two values to determine if they are equivalent.
                                                |const obj1 = { 'a': 1 }; const obj2 = { 'a': 1 };
console.log(_.isEqual(obj1, obj2));
 // Output: true
                                                          |  
                                              | _.isError          |Checks if value is classified as an Error object.                                                | console.log(_.isError(new Error()));
// Output: true
console.log(_.isError(Error));
 // Output: false

   | 
 | _.isFinite          |Checks if value is a finite primitive number.                                                |console.log(_.isFinite(3));
// Output: true
console.log(_.isFinite(Number.MIN_VALUE));
// Output: true
console.log(_.isFinite(Infinity));
// Output: false
console.log(_.isFinite('3'));
// Output: false
console.log(_.isFinite(null)); // Output: false                                               | 
 | _.isFunction          |
 Checks if value is classified as a function object.
          | console.log(_.isFunction(() => {}));
// Output: true
console.log(_.isFunction(function() {}));
  // Output: true
console.log(_.isFunction('abc'));
  // Output: false
                                                          | 
 | _.isInteger          |Checks if value is a finite integer.                                               | console.log(_.isInteger(3));
 // Output: true
console.log(_.isInteger(3.1));
 // Output: false
console.log(_.isInteger('3'));
  // Output: false
console.log(_.isInteger(null));
   // Output: false                                       | 
   | _.isLength          |Checks if value is a valid array-like length.                                                | console.log(_.isLength(3));
// Output: true
console.log(_.isLength(-1));
// Output: false
console.log(_.isLength('3'));
  // Output: false
console.log(_.isLength(null));
  // Output: false
        |  
 | _.isMap          |Checks if value is classified as a Map object.                                              | console.log(_.isMap(new Map()));
 // Output: true
 console.log(_.isMap(new WeakMap()));
 // Output: false                                               | 
  | _.isMatch          |Performs a partial deep comparison between object and source to determine if object contains equivalent property values.                                             | const object = { 'a': 1, 'b': 2 };
console.log(_.isMatch(object, { 'b': 2 })); // Output: true
console.log(_.isMatch(object, { 'b': 1 })); // Output: false
                                                 |
 | _.isNative          |Checks if value is a native function.                                                | Checks if value is a native function.
console.log(_.isNative(Array.prototype.push)); // Output: true
console.log(_.isNative(_)); // Output: false


                                                          |
  | _.isNil          |Checks if value is ‘null’ or ‘undefined’.                                                | console.log(_.isNil(null));
 // Output: true
console.log(_.isNil(undefined));
  // Output: true
console.log(_.isNil(0)); // Output: false

                                                          |
 | _.isNull          |Checks if ‘value’ is ‘null’.                                                | console.log(_.isNull(null));
// Output: true
console.log(_.isNull(undefined));
 // Output: false
console.log(_.isNull(0)); // Output: false


                                                          | 
 | _.isNumber          |Checks if value is classified as a number primitive or object.                                               | console.log(_.isNumber(123));
 // Output: true
  console.log(_.isNumber('123'));
   // Output: false
   console.log(_.isNumber(NaN)); // Output: true

                                                          |  
 | _.isObject          |Checks if value is a plain object, that is, an object created by the Object constructor or one with a [[Prototype]] of null.
 | console.log(_.isObject({}));
 // Output: true console.log(_.isObject([]));
  // Output: false
console.log(_.isObject(null)); // Output: false
                                                          |
                                                | _.isPlainObject          |Checks if value is a plain object, that is, an object created by the Object constructor or one with a [[Prototype]] of Object.prototype.                                                | console.log(_.isPlainObject({}));
  // Output: true
console.log(_.isPlainObject([])); // Output: false
console.log(_.isPlainObject(null)); // Output: false
                                                          |
    | _.isSet          |Checks if value is classified as a Set object.                                               | console.log(_.isSet(new Set()));
  // Output: true
 console.log(_.isSet(new WeakSet())); // Output: false


                                                          | 
    | _.isRegExp          |Checks if value is classified as a RegExp object.                                              | console.log(_.isRegExp(/abc/));
// Output: true
console.log(_.isRegExp('/abc/')); // Output: false

                                                          |  
   | _.toArray          |Converts value to an array. If value is already an array, it will be returned unchanged. If value is null or undefined, an empty array is returned. Otherwise, a new array containing value as its single element is returned.                                                | console.log(_.toArray(123));
// Output: [123]
console.log(_.toArray([1, 2, 3]));
// Output: [1, 2, 3]
console.log(_.toArray(null));
// Output: []
console.log(_.toArray(undefined));
// Output: []
console.log(_.toArray()); // Output: []                                               |
  | _.toFinite          |Converts value to a finite number.                                                | console.log(_.toFinite(3));
 // Output: 3
 console.log(_.toFinite(Number.MIN_VALUE));
 // Output: 5e-324
 console.log(_.toFinite(Infinity));
  // Output: 1.7976931348623157e+308
   console.log(_.toFinite('3'));
   // Output: 3
   console.log(_.toFinite(null)); // Output: 0
                                                     | 
                                                | _.toInteger          |Converts value to an integer.                                            |console.log(_.toInteger(3));
   // Output: 3
console.log(_.toInteger(3.2));
   // Output: 3
console.log(_.toInteger('3'));
    // Output: 3   console.log(_.toInteger(null)); // Output: 0
                                                          | 
    | _.toLength          |Converts value to an integer.                                              | console.log(_.toLength(3));
 // Output: 3
console.log(_.toLength(-1));
 // Output: 0
console.log(_.toLength('3'));
 // Output: 3
console.log(_.toLength(null));
 // Output: 0

     | 
   | _.toNumber          |Converts value to a number.                                                | console.log(_.toNumber(3));
// Output: 3
console.log(_.toNumber('3'));
// Output: 3
console.log(_.toNumber(null));
// Output: 0
console.log(_.toNumber(undefined));
// Output: NaN
console.log(_.toNumber('abc')); // Output: NaN
                                                          | 
   | _.toPlainObject          |Converts value to a plain object flattening inherited enumerable string keyed properties of value to own properties of the plain object. 
   | function Foo() { this.b = 2; } Foo.prototype.c = 3; console.log(_.toPlainObject(new Foo())); // Output: { 'b': 2 }
                                                     |  
                                                 | _.toString          |Converts value to a string.                                               | console.log(_.toString(123));
// Output: '123'
console.log(_.toString(null));
// Output: ''
console.log(_.toString(undefined));
 // Output: ''
 console.log(_.toString([1, 2, 3]));
  // Output: '1,2,3'
   console.log(_.toString({ 'a': 1 }));
    // Output: '[object Object]'
                                                |
  | _.toSafeInteger          |Converts value to a safe integer. A safe integer can be represented exactly as a double-precision floating-point value.                                               | console.log(_.toSafeInteger(3));
// Output: 3
console.log(_.toSafeInteger(Math.pow(2, 53))); // Output: 9007199254740992
console.log(_.toSafeInteger(Infinity));
// Output: 9007199254740991
 console.log(_.toSafeInteger('3')); // Output: 3
 console.log(_.toSafeInteger(null)); // Output: 0

                                                          |                                