# Notes

## What is the meaning of the code written below? =>
 
```
import React from "react"

import ReactDOM from "react-dom"

ReactDOM.render(h1 tag "Hello World!" " h1 tag, document.getElementByID("root")) 
```

1. In the 1st line we are importing React from "react" libariry, in the 2nd line I am importing ReactDOM from "react-dom" libarry and the 3rd line I am just appending "Hello World!" on the DOM, but the `ReactDOM.render` methond takes two argument which are "what to show" and "where to show". So in this case my `what to show` is Hello World and `where to show is div (root)`.

## The above syntax is of React which browser doesn't understand, so Who complies this syantax (code) so that browser understands it?

1. Well that compliation process is done by `Babel`
2. And the above sytanx is ES6 syntax which babel converts into ES5 so that browser will get it.
3. But how does it looks at the backend once babel converts it? See the below code
```
ReactDOM.render(React.createElement("h1", null, "Hello World!"), document.getElementById("root"))
```
4. This is how react does the thing in just 1 line, but if the same thing I want to display using simple JS then how will I do it? `See the below code`

```
var h1 = document.createElement("h1");

h1.innerHTMML = "Hello World!";

document.getElementById("root").appendChild(h1)
 ```
## How to render multiple elements inside ReactDOM.render() ?
1. By default `ReactDOM.render()` method takes only 1 element inside it, like shown below
```
ReactDOM.render(h1 tag "Hello World!" " h1 tag, document.getElementByID("root")) 
```
2. But what if I want to givr more than 1 element?, then what I can do is I can wrap them inside an 1 element, as shown below
```
ReactDOM.render(
`div` 
 `h1` Hellow World `h1`
  `p` This is React notes `p`
  `h2` You can also learn react now `h2`
`div`,
document.getElementById("root")
) 
```
3. If you are using react version above v16.x.x, then you can use array as well to give multiple elements, but as you are passing the elements using an array then you will have to seprate the elements using `,`
```
ReactDOM.render(
[ 
 `h1` Hellow World `h1`,
  `p` This is React notes `p`,
  `h2` You can also learn react now `h2`,
],
document.getElementById("root")
) 
```
## React Fragment

1. In the above code I was passing multiple elements inside `div` or and `array`, but the problem with this is that while applying `CSS` on div or array it will be difficult and time consuming, but if want to write multiple elements without using `div` or `array` then the `React.Fragment` comes into picture.
2. How to pass multiple elements using react fragment? See below
```
ReactDOM.render(
<React.Fragment>
 `h1` Hellow World `h1`,
  `p` This is React notes `p`,
  `h2` You can also learn react now `h2`,
</React.Fragment>,
document.getElementById("root")
) 
```
3. But writting `React.Fragment` everytime is also time consuming and sometimes I may spell it wrong, so to make it simpler even if I don't write `React.Fragment` and pass multiple elements, still it works, the only thing is you will have to wrap the elements inside this `<>` `</>`
```
ReactDOM.render(
<>
 `h1` Hellow World `h1`,
  `p` This is React notes `p`,
  `h2` You can also learn react now `h2`,
</>,
document.getElementById("root")
) 
```
## Expressions in React
Expressions - are combination of operators and operands
1. In react whenver we want to write expressions we write them in `{}`
2. In `{}` we can only write expressions not statements (if, else, etc .) 
```
const firstname = "Mayur"

ReactDOM.render(
 <>
   <h1 tag> My name is {firstname} </h1 tag>
   
   <p tag> my lucky number us {2 + 3} </p tag>
 </>,
 document.getElementById("root")
)
```
## What is difference between `Internal` and `Inline` CSS?
1. If you are writting the CSS in the same file `JS` or `HTML` then its known as internal CSS
2. If you are writting CSS in `tag` then its known as inline CSS

## useEffect

`useEfect(() => { logic})`

The callback will be triggered everytime the component re-renders
The component will re-render in only 2 scenarios:-
1. When the state of the component changes.
2. When the props of the component changes.

`useEffect(() => {logic}, [])`

The logic inside the callback will be triggered only for the first time, the component mounts.

`useEffect(() => {logic}, [value])`

This callback will get triggered, for the first time when the component mounts, and then everytime when the value inside the array of dependency changes `(array dependency is nothing but the array which we passed in the above useEffect ([value]))`.

`Side-Effect` - things which we can't control or which are un-predictable

Ex - calling an API - while calling an API you can get responses like 200, 500, 404, etc  and these effects are not in our control.
Other ex - setTimeout, setInterval, web APIs, document, window...
