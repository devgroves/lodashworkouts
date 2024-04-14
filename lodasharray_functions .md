| lodash Array   | Description                                                                                                                                                                                                                   | Examples                                                                                                                                                                                                                              |
|-------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| _.chunk         |Splits an array into smaller arrays of a specified size.                    |  _.chunk([1, 2, 3, 4, 5], 2) returns [[1, 2], [3, 4], [5]]
 |
| _.compact        |Creates a new array with all falsy values removed. Falsey values include false, null, 0, "", undefined, and NaN.
 | _.compact([0, 1, false, 2, '', 3]) returns [1, 2, 3]                         |
| _.concat        | Creates a new array by concatenating one or more arrays with any additional elements provided.                                                            | _.concat([1], [2, 3], [[4]]) returns [1, 2, 3, [4]]                                            |
| _.difference       | Creates an array of values not present in the other given arrays.                                                                                                             | _.difference([2, 1], [2, 3]) returns [1]                                            |
| _.differenceBy            |Similar to _.difference, but accepts an iteratee function which is invoked for each element of the arrays to generate the criterion by which they're compared.       | _.differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor) returns [1.2]                                                                 |
| _.differenceWith       |Similar to _.difference, but accepts a comparator function to compare values.                                            | _.differenceWith([{'x': 1, 'y': 2}, {'x': 2, 'y': 1}], [{'x': 1, 'y': 2}], _.isEqual) returns [{'x': 2, 'y': 1}]                                                           |
| _.drop        |Creates a slice of an array with n elements dropped from the beginning.                                                                             |   _.drop([1, 2, 3]) returns [2, 3]
                                           |
| _.dropRight        |Creates a slice of an array with n elements dropped from the end.                                                      | _.dropRight([1, 2, 3]) returns [1, 2]                                                                                                                   |
| _.dropRightWhile         | Creates a slice of an array excluding elements dropped from the end until the predicate returns falsey.
                               | _.dropRightWhile([1, 2, 3, 4], n => n > 2) returns [1, 2]                                  |
| _.dropWhile | Creates a slice of an array excluding elements dropped from the beginning until the predicate returns falsey.                                                 | _.dropWhile([1, 2, 3, 4], n => n < 3) returns [3, 4]                                                                      |
| _.fill          | Fills elements of an array with a specified value from a start index to an end index.                                               | _.fill(Array(3), 2) returns [2, 2, 2]                                               |
| _.findIndex        | Iterates over elements of an array, returning the index of the first element predicate returns truthy for.                                                    |_.findIndex([{'user': 'barney', 'active': true}, {'user': 'fred', 'active': false}], {'user': 'fred', 'active': false}) returns 1
                                                                                                   |
| _.findLastIndex           | Similar to _.findIndex, but iterates from right to left.                                                 |  .findLastIndex([{'user': 'barney', 'active': true}, {'user': 'fred', 'active': false}], {'user': 'barney', 'active': true}) returns 0       |
| _.first (or _.head)      | Gets the first element of an array.                                                  |  _.first([1, 2, 3]) returns 1                                                                                    |
| _.flatten          | Flattens a nested array structure                                         | _.flatten([1, [2, [3, [4]], 5]]) returns [1, 2, [3, [4]], 5]                                            |
| _.flattenDeep            | Recursively flattens a nested array.                                             |_.flattenDeep([1, [2, [3, [4]], 5]]) returns [1, 2, 3, 4, 5]
                                                                 |
| _.flattenDepth       | Flattens a nested array up to the specified depth.                                                 | _.flattenDepth([1, [2, [3, [4]], 5]], 1) returns [1, 2, [3, [4]], 5]                                         |
| _.fromPairs        | Creates an object composed from key-value pairs.                                                |_.fromPairs([['a', 1], ['b', 2]]) returns {'a': 1, 'b': 2}                                    |
| _.head        |Gets the first element of an array.                                    | _.head([1, 2, 3]) returns 1

     |
| _.indexOf      | Gets the index at which the first occurrence of a value is found in an array.
            |_.indexOf([1, 2, 1, 2], 2) returns 1                                                                      |
| _.initial           |Gets all but the last element of an array.                                                 |_.initial([1, 2, 3]) returns [1, 2]

     |
| _.intersection      |Creates an array of unique values present in all given arrays.
                                              | _.intersection([2, 1], [2, 3]) returns [2]           |
| _.intersectionBy    | Similar to _.intersection, but accepts an iteratee function.
               |_.intersectionBy([2.1, 1.2], [2.3, 3.4], Math.floor) returns [2.1]              |
| _.intersectionWith    | Similar to _.intersection, but accepts a comparator function.
               |_.intersectionWith([{'x': 1, 'y': 2}, {'x': 2, 'y': 1}], [{'x': 1, 'y': 2}], _.isEqual) returns [{'x': 1, 'y': 2}]            |
| _.join    | Joins elements of an array into a string using a specified separator.ac
               |_.join(['a', 'b', 'c'], '~') returns 'a~b~c'             |
| _.last    | Gets the last element of an array.
               |_.last([1, 2, 3]) returns 3
            |
| _.lastIndexOf    | Gets the index at which the last occurrence of a value is found in an array. |_.lastIndexOf([1, 2, 1, 2], 2) returns 3            |
| _.nth    |Gets the element at index n of an array. If n is negative, it returns the nth element from the end.
               |_.nth(['a', 'b', 'c', 'd'], 1) returns 'b'             |
| _.pull    |Removes all given values from an array.
               |_.pull(['a', 'b', 'c', 'a', 'b', 'c'], 'a', 'c') returns ['b', 'b']             |
| _.pullAll    |Similar to _.pull, but accepts an array of values to remove.
               |_.pullAll(['a', 'b', 'c', 'a', 'b', 'c'], ['a', 'c']) returns ['b', 'b']            |
| _.pullAllBy    |Similar to _.pullAll, but accepts an iteratee function.
               |_.pullAllBy([{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }, { 'x': 1 }], [{ 'x': 1 }, { 'x': 3 }], 'x') returns [{ 'x': 2 }]            |
 | _.pullAllWith    |Similar to _.pullAll, but accepts a comparator function.
               |_.pullAllWith([{ 'x': 1, 'y': 1 }, { 'x': 2, 'y': 2 }, { 'x': 3, 'y': 3 }], [{ 'x': 1, 'y': 1 }, { 'x': 3, 'y': 3 }], _.isEqual) returns [{ 'x': 2, 'y': 2 }]             |
| _.pullAt    |Removes elements from an array corresponding to the given indexes and returns an array of removed elements.
               |const array = ['a', 'b', 'c', 'd']; const pulled = _.pullAt(array, [1, 3]); console.log(array); will log ['a', 'c'] and the array will be ['b', 'd']           |
 | _.remove    |Removes elements from an array based on a predicate function and returns an array of removed elements.

               |const array = [1, 2, 3, 4]; _.remove(array, n => n % 2 === 0); console.log(array); will log [1, 3]

           |
 | _.reverse    |Reverses the elements of an array.
               |_.reverse([1, 2, 3]) returns [3, 2, 1]           |
 | _.slice    |Creates a slice of an array from start up to, but not including, end.
               |_.slice([1, 2, 3, 4], 1, 3) returns [2, 3]             |
 | _.sortedIndex    |Uses a binary search to determine the lowest index at which a value should be inserted into a sorted array to maintain its sort order.
               |_.sortedIndex([30, 50], 40) returns 1            |
| _.sortedIndexBy    |Similar to _.sortedIndex, but accepts an iteratee function
               |_.sortedIndexBy([{ 'x': 4 }, { 'x': 5 }], { 'x': 4 }, o => o.x) returns 0

            |
 | _.sortedIndexOf    |Uses binary search to determine the index of the first occurrence of a value in a sorted array.
               |.sortedIndexOf([4, 5, 5, 5, 6], 5) returns 1            |              | _.sortedLastIndex    |Similar to _.sortedIndex, but returns the highest index at which a value should be inserted into a sorted array.
               |_.sortedLastIndex([4, 5, 5, 5, 6], 5) returns 4           |             
                | _.sortedLastIndexBy    |Similar to _.sortedLastIndex, but accepts an iteratee function.
               |_.sortedLastIndexBy([{ 'x': 4 }, { 'x': 5 }], { 'x': 4 }, o => o.x) returns 1            |
               | _.sortedLastIndexOf    |Uses binary search to determine the index of the last occurrence of a value in a sorted array.
               |_.sortedLastIndexOf([4, 5, 5, 5, 6], 5) returns 3            |
               | _.sortedUniq    |Creates a duplicate-free version of an array, which is sorted in ascending order.
               |_.sortedUniq([1, 1, 2]) returns [1, 2]            |
               | _.sortedUniqBy    |Similar to _.sortedUniq, but accepts an iteratee function.
               |_.sortedUniqBy([1.1, 1.2, 2.3, 2.4], Math.floor) returns [1.1, 2.3]            |
               | _.tail    |Gets all but the first element of an array.


               |_.tail([1, 2, 3]) returns [2, 3]

           |                                                                                 
               | _.take    |Creates a slice of an array with n elements taken from the beginning.
               |_.take([1, 2, 3]) returns [1]            |
               | _.takeRight    |Creates a slice of an array with n elements taken from the end
               |_.takeRight([1, 2, 3], 2) returns [2, 3]            |
               | _.takeRightWhile    |Creates a slice of an array with elements taken from the end until the predicate returns falsey.
               |_.takeRightWhile([1, 2, 3, 4], n => n > 2) returns [3, 4]          |
               | _.takeWhile    |Creates a slice of an array with elements taken from the beginning until the predicate returns falsey.
               |_.takeWhile([1, 2, 3, 4], n => n < 3) returns [1, 2]            |
               | _.union    |Creates an array of unique values, in order, from all given arrays.
               |_.union([2], [1, 2]) returns [2, 1]             |
               | _.unionBy    |Similar to _.union, but accepts an iteratee function.
               |_.unionBy([2.1], [1.2, 2.3], Math.floor) returns [2.1, 1.2]             |
               | _.unionWith    |Similar to _.union, but accepts a comparator function.
               |_.unionWith([{'x': 1, 'y': 2}], [{'x': 1, 'y': 1}], _.isEqual) returns [{'x': 1, 'y': 2}, {'x': 1, 'y': 1}]           |
               | _.uniq    |Creates a duplicate-free version of an array.
               |_.uniq([1, 1, 2]) returns [1, 2]
             |
               | _.uniqBy    |Similar to _.uniq, but accepts an iteratee function.
               |_.uniqBy([2.1, 1.2, 2.3], Math.floor) returns [2.1, 1.2]             |
               | _.uniqWith    |Similar to _.uniq, but accepts a comparator function.
               |_.uniqWith([1, 1, 2], _.isEqual) returns [1, 2]            |
               | _.unzip    |Transposes the elements of an array, swapping rows and columns.
               |_.unzip([['a', 1, true], ['b', 2, false]]) returns [['a', 'b'], [1, 2], [true, false]]             |
               | _.unzipWith    |Similar to _.unzip, but accepts a custom function for combining values.
               |_.unzipWith([[1, 10, 100], [2, 20, 200]], _.add) returns [3, 30, 300]

             |
               | _.without    |Creates an array excluding all given values.
               |_.without([2, 1, 2, 3], 1, 2) returns [3]           |
               | _.xor    |Creates an array of unique values that is the symmetric difference of the given arrays.
               |_.xor([2, 1], [2, 3]) returns [1, 3]            |
               | _.xorBy    |Similar to _.xor, but accepts an iterate function.
               |_.xorBy([2.1, 1.2], [2.3, 3.4], Math.floor) returns [1.2, 3.4]            |
               | _.xorWith    |Similar to _.xor, but accepts a comparator function.
               |_.xorWith([{'x': 1, 'y': 2}, {'x': 2, 'y': 1}], [{'x': 1, 'y': 2}], _.isEqual) returns [{'x': 2, 'y': 1}]           |
               | _.zip    |Creates an array of grouped elements, where the first element of each group contains the first elements of the given arrays, and so on.
               |_.zip(['a', 'b'], [1, 2], [true, false]) returns [['a', 1, true], ['b', 2, false]]           |
               | _.zipObject    |Creates an object composed from arrays of keys and values.
               |_.zipObject(['a', 'b'], [1, 2]) returns {'a': 1, 'b': 2}           |
               | _.zipObjectDeep    |Similar to _.zipObject, but supports nested keys.       |
               | _.zipObjectDeep(['a.b[0].c', 'a.b[1].d'], [1, 2]) returns {'a': {'b': [{'c': 1}, {'d': 2}]}}            |
               | _.zipWith(array1, array2, ..., iterate)    | It takes multiple arrays as arguments, pairs up corresponding elements from each array, and applies a custom function to those pairs. The result is a new array containing the outcomes of applying the custom function to each group of corresponding elements
               |_.zipWith([1, 2], [10, 20], [100, 200], _.add) returns [111, 222]            |

