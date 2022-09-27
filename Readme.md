# Notes

## What is the meaning of the code written below? =>
 
`import React from "react"

import ReactDOM from "react-dom"

ReactDOM.render(h1 tag "Hello World!" " h1 tag, document.getElementByID("root")) `

1. In the 1st line we are importing React from "react" libariry, in the 2nd line I am importing ReactDOM from "react-dom" libarry and the 3rd line I am just appending "Hello World!" on the DOM, but the `ReactDOM.render` methond takes two argument which are "what to show" and "where to show". So in this case my `what to show` is Hello World and `where to show is div (root)`.

## The above syntax is of React which browser doesn't understand, so Who complies this syantax (code) so that browser understands it?

1. Well that compliation process is done by `Babel`
2. And the above sytanx is ES6 syntax which babel converts into ES5 so that browser will get it.
3. But how does it looks at the backend once babel converts it? See the below code
`ReactDOM.render(React.createElement("h1", null, "Hello World!"), document.getElementById("root"))`
4. This is how react does the thing in just 1 line, but if the same thing I want to display using simple JS then will I do it? `See the below code`

```var h1 = document.createElement("h1");

 h1.innerHTMML = "Hello World!";

 document.getElementById("root").appendChild(h1)```
