# `map`

The `map()` method creates a new array populated with the results of calling a provided function on every element in the calling array.

```
let new_array = arr.map(function callback( currentValue[, index[, array]]) {
    // return element for new_array
}[, thisArg])
```   

## Parameters

`callback`
Function that is called for every element of `arr`. Each time `callback` executes, the returned value is added to `new_array`.

The `callback` function accepts the following arguments:

- `currentValue`: The current element being processed in the array.
- `index` (Optional): The index of the current element being processed in the array.
- `array` (Optional): The array map was called upon.

`thisArg` (Optional): Value to use as this when executing callback.

## Return value

A new array with each element being the result of the callback function.

[Visit MDN](//developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) to learn more about `map()` function.