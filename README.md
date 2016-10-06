`hoonicode` is a simple function that randomly sprinkles a string with non-ASCII
unicode characters. Its purpose is to aid in the automated testing of systems
whose unicode support is questionable.

# Example

``` js
const hoonicode = require('hoonicode')
    , result = hoonicode('Hello, World!')

// Result will be something like:
// 'Heĺľő, Ŵoŗļd!'
```
