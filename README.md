### Background

So I was trying to refactor a portion of my lambda functions and I got this error.

My theory is since freakShow is in the same folder as the beforeIndex and beforeBeforeIndex, it sort
of creates a circular dependency if you use object destructuring to include them.

Based on this: https://medium.freecodecamp.org/requiring-modules-in-node-js-everything-you-need-to-know-e7fbd119be8

since requiring is synchronous, it might be not fully loaded yet when I do destructuring?

I think the solution is to put beforeIndex and beforeBeforeIndex in another folder so freakshow can include them without any
'timing' issues.

### Running the example

To get the error, simply run:

```
node functions/poop.js
```

and you will get this error:

```
console.log('freakshow', beforeBeforeIndex(), beforeIndex())
                           ^

TypeError: beforeBeforeIndex is not a function
```
