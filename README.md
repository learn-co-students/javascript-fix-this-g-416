JavaScript Fix this
---

## Objectives

1. Practice using `this`
2. Practice changing a function's context
3. Practice writing modular code

## Introduction

Again, I guess part of the struggle here is finding a good example to frame the problem.

Going with the food theme, maybe something like baking cakes, where different functions need to be called with different contexts to make sure the cake ends up correct?

## Implementation

Be sure to test students' knowledge of `bind()`, `call()`, and `apply()`.

A simple place to start might be a `setInterval()` whose callback needs to be bound to the current context to work correctly:

``` javascript
function makeCake(ingredients) {
  setTimeout(function() {
    return `Made a cake with ${this.type} as the base and ${ingredients}.`
  }, 1000)
}

// should be

function makeCake(ingredients) {
  setTimeout(function() {
    return `Made a cake with ${this.type} as the base and ${ingredients}.`
  }.bind(this), 1000)
}

// so that it can be called like

makeCake.call({ type: 'chocolate' }, "strawberries, cherries, and cinnamon")
```

This example obviously has less punch now that arrow functions are available. (Perhaps mention in the intro that students can avoid a lot of `bind()` by using arrow functions?)

Another potential test manipulates things in the DOM, but messes up the `this` in the callback

## Resources

- [MDN: this](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this)
- [StackOverflow: How does the "this" keyword work?](http://stackoverflow.com/questions/3127429/how-does-the-this-keyword-work)
- [QuirksMode: The `this` keyword](http://www.quirksmode.org/js/this.html)
- [JavaScript is Sexy: this](http://javascriptissexy.com/understand-javascripts-this-with-clarity-and-master-it/)
