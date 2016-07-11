JavaScript Fix this
---

## Objectives

1. Practice using `this`
2. Practice changing a function's context
3. Practice writing modular code

## Introduction

In this lab, we're going to put your knowledge of `this`, `call`,
`apply`, and `bind` to the test while we make some tasty treats in a
virtual bakery.

You'll have to fix some problems with the existing code (there may be some bugs!) and add some new code of your own
to get the tests passing and get those desserts made!

![cake make](http://i.giphy.com/YniPMwzcXtt6g.gif)

## Instructions

We want to get our bakery up and running, but there are problems with
making sure that the right things are getting baked the right way.

If you run `index.html` in your browser and click either of the "make"
links, it should go through all the right steps to make the right
dessert, and update the status for each step as it goes.

Right now, all our baking functions are mixed up and can't figure out
their `this`. We've got some work to do before we can open our bakery.

* Inside the `makePie` function, "borrow" the `decorate` function from `cake` and make it available
  to `pie` through `pie.decorate()` so it can be executed later.

* For the `bake`, `mix`, and `cool` functions, make
sure that the function for the next step is being called with the
correct context, and that the proper `updateFunction` is being called to
update the status. You'll need to use `call` inside these functions to
get the tests to pass. **Hint:** Remember that the `function` argument to `setTimeout` *also*
needs to be bound to the proper context! Think about using [arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions) with your `setTimeout` calls.

* Write your own code for the `makeDessert` function
that will decide based on which link was clicked whether to `makePie` or
`makeCake`. **Hint:** You shouldn't need to alter the code in the
`document.addEventListener` block, but remember that events also set
`this` when they are triggered from the DOM.

* Create a version of `updateStatus` inside of `makePie` and `makeCake` with a correct `this` context, representing either the `pie` or `cake` `<div>` respectively, that you can pass around to the other functions so that each one can execute it and ensure that the right DOM elements are getting updated at each step. You shouldn't need to change `updateStatus` at all.

* There's also some bugs in the code, so make sure the tests are passing and run the page to see it in action and make sure it works! Some tests already pass. Part of your job is to make sure they still pass at the end!

Each step of the way, you should be using what you know about `call`,
`bind`, and `apply` to make each function set the context for the next
function.

## Resources

- [MDN: this](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this)
- [StackOverflow: How does the "this" keyword work?](http://stackoverflow.com/questions/3127429/how-does-the-this-keyword-work)
- [QuirksMode: The `this` keyword](http://www.quirksmode.org/js/this.html)
- [JavaScript is Sexy: this](http://javascriptissexy.com/understand-javascripts-this-with-clarity-and-master-it/)
- [MDN: apply](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply)
- [MDN: bind](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind)
- [MDN: call](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call)
- [MDN: Arrow Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
