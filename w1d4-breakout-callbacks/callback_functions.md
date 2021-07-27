# Callback functions & Higher Order Functions

# Callbacks

## Summary

A callback function is a function that is used as a parameter for another function and used inside it. A callback function doesn't have any special properties, it's the context that makes is a callback.

```jsx
  const printUppercased = function(value){
    console.log(value.toUpperCase())
  }

  const printLowercased = function(value){
    console.log(value.toLowerCase())
  }

  const listWordsAndDoSomething = function (listofWords, action){
    for(const word of listOfWords){
      action(word)
    }
  }
```

At this moment in the example above, there is no callback function. However, if we were to do the following:

```jsx
  listWordsAndDoSomething(['poulet','chicken','pollo'], printUppercased)
```

In the case above, the function refered by `printUppercased` is a callback function, since it was referenced inside `listNamesAndDoSomething`.

## Examples

Since any function can become a callback function, you can use any function as a callback. Some examples:

```jsx
  const sayHello = function(){
    console.log("Hello!")
  }

  const calculateValue = function(num1, num2){
    return num1 * num2
  }
```

# Higher Order Functions

## Summary

A Higher Order Function (HOF) is a function that has at least one of two characteristics:

- Takes in a function as a parameter and calls it during execution
- Return a function definition

For now, we will concentrate on the first characteristic, and talk about the second one later in the course of the bootcamp.

```jsx
  const listWordsAndDoSomething = function (listofWords, action){
    for(const word of listOfWords){
      action(word)
    }
  }
```

The function above is a HOF, since we take in a function as a parameter and call it.

## Why

The reason why callback functions are great is because of the flexibility of actions in a function that will use a callback, like other parameters of a function. Let's have a look about why flexibility is useful.

```jsx
  const add = function(){
    console.log(2 + 2)
  }

  add() // Prints 4 in the console
```

That is not flexible at all. We can make the two values we want to add as parameters of the function instead.

```jsx
  const add = function(num1, num2){
    console.log(num1 + num2)
  }

  add(2,2) // Prints 4 in the console
```

This is more flexible, but we can go one step further, making the action a parameter too.

```jsx
  const add = function(num1, num2, action){
    action(num1 + num2)
  }

  const printToConsole = value => console.log(value)
  const fancyPrintToConsole = value => console.log(`The result is ${value}`)

  add(2,2, printToConsole) // Prints 4 in the console
  add(2,2, fancyPrintToConsole) // Prints 'The result is 4' in the console
```

With this final version, our functions refered by `printToConsole` and `fancyPrintToConsole` are used as callbacks by the Higher Order Function refered by `add`.

# When

Should all functions be Higher Order Functions? No, since it would make our code a nightmare to read. What would the code below return?

```jsx
  const printToConsole = function(value){
    console.log(value)
  }

  const capitalizeAndDoSomething = function(value, action){
    action(value.toUpperCase())
  }

  const listAndDoSomething = function(list, action){
    for(const element of list){
      action(element)
    }
  }

  const someList = ['poulet','chicken','pollo']

  listAndDoSomething(someList, (value) => capitalizeAndDoSomething(value, printToConsole))
```

If you guessed that it would print an uppercase version of each word in the list, you would be right. Is it easier to read than the following?

```jsx
  const printCapitalizedToConsole = function(value) {
    console.log(value.toUpperCase())
  }

  const listAndDoSomething = function(list, action){
    for(const element of list){
      action(element)
    }
  }

  const someList = ['poulet','chicken','pollo']

  listAndDoSomething(someList, printCapitalizedToConsole)
```

The example above is a little bit less flexible, but much more easier to read and understand the flow of the operations.

So when should we use Higher Order Functions?

# Examples