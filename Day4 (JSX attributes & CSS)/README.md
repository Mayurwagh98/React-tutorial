There is a minor difference between React(JSX) and HTML attributes. Like for example, the HTML attribute like class and for are replaced with className and htmlFor in React. There are a number of attributes that work differently between React and HTML. Grammar in JSX is mostly the same as in HTML, but there are subtle differences to watch out for. 

We can’t use the attributes with the same name in both React and HTML because when the code is rendered in React, JSX gets translated into JavaScript, and the attributes like class and for are reserved words in JavaScript, so we can’t use the same attribute name in React.

1. className: In HTML, it’s common to use the class as an attribute name as shown below:

