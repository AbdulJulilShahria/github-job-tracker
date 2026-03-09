### Q. What is the difference between var, let, and const?

## Ans. In JavaScript, var, let, and const are used to declare variables, but they behave differently. var is function-scoped and can be redeclared and reassigned, which sometimes causes unexpected bugs, so it is mostly avoided in modern JavaScript. let is block-scoped, meaning it only exists inside the block {} where it is defined, and it can be reassigned but cannot be redeclared in the same scope. const is also block-scoped but its value cannot be reassigned after it is declared. Because of their predictable behavior, let and const are preferred in modern JavaScript development.


### Q. What is the spread operator (...)?

## Ans.  The spread operator (...) in JavaScript is used to expand or "spread" elements of an array or properties of an object into another array or object. It is commonly used to copy arrays or objects, merge multiple arrays or objects, and pass multiple arguments to functions. For example, using [...array] creates a shallow copy of an array, while {...object} copies the properties of an object into a new object. This operator helps write cleaner and more concise code when working with collections of data.



###  Q.   What is the difference between map(), filter(), and forEach()?


## Ans.  map(), filter(), and forEach() are array methods used to process elements in an array. map() creates a new array by applying a function to every element of the original array, usually to transform the data. filter() also returns a new array but only includes elements that satisfy a specific condition. On the other hand, forEach() simply executes a function for each element in the array and does not return a new array. Therefore, map() and filter() are used when you want a new array as a result, while forEach() is mainly used for performing actions like logging or updating values.



###   Q.   What is an arrow function?

##  Ans.   An arrow function is a shorter and more modern way of writing functions in JavaScript using the => syntax. It allows developers to write functions in a more concise form compared to traditional function expressions. Arrow functions automatically inherit the this value from their surrounding scope, which helps avoid issues related to this binding in regular functions. They are commonly used in callbacks, array methods like map() or filter(), and modern JavaScript frameworks because they make the code cleaner and easier to read.



###  Q.  What are template literals?

## Ans.  Template literals are a feature in JavaScript that allow developers to create strings more easily using backticks (`) instead of single or double quotes. They support string interpolation, which means variables and expressions can be inserted directly into a string using ${}. Template literals also allow multi-line strings without using special characters like \n. Because of these advantages, template literals are widely used for creating dynamic strings, generating HTML templates, and improving code readability.