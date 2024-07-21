MyClass = function() {
    this.a =  'hello';
    this.b = 'world';
};

MyClass.prototype.a = 'john';
MyClass.prototype.c = 12;

obj = new MyClass();

// obj.a returns 'hello'
// obj.b returns 'world'
// obj.c returns 12

var x = "2", y = "10";
alert(x < y);

// false

const sentence = 'The quick brown jumps over the lazy dog.';

const word = 'fox';

console.log(
  `The word "${word}" ${
    sentence.includes(word) ? 'is' : 'is not'
  } in the sentence`,
);
// Expected output: "The word "fox" is in the sentence"

const paragraph = "I think Ruth's dog is cuter than your dog!";

const searchTerm = 'dog';
const indexOfFirst = paragraph.indexOf(searchTerm);

console.log(`The index of the first "${searchTerm}" is ${indexOfFirst}`);
// Expected output: "The index of the first "dog" is 15"

console.log(
  `The index of the second "${searchTerm}" is ${paragraph.indexOf(
    searchTerm,
    indexOfFirst + 1,
  )}`,
);
// Expected output: "The index of the second "dog" is 38"

let text = "Apple, Banana, Kiwi";
let part = text.slice(7, 13);
// expected "Banana"

function sum(a, b) {
  return a + b;
}

console.log(sum.toString());
// Expected output: "function sum(a, b) {
//                     return a + b;
//                   }"

console.log(Math.abs.toString());
// Expected output: "function abs() { [native code] }" and abs is absolute value

Math.abs(-Infinity); // Infinity
Math.abs(-1); // 1
Math.abs(-0); // 0
Math.abs(0); // 0
Math.abs(1); // 1
Math.abs(Infinity); // Infinity

for (let i = 0; i < 10; i++) {
  if (i === 3) { continue; } // break stops it before it gets to 10
  text += "The number is " + i + "<br>";
}
// skips 3

// Traditional anonymous function
(function (a, b) {
    return a + b + 100;
  });
  
  // Arrow function
  (a, b) => a + b + 100;
  
  const a = 4;
  const b = 2;
  
  // Traditional anonymous function (no parameters)
  (function () {
    return a + b + 100;
  });
  
  // Arrow function (no parameters)
  () => a + b + 100;

  // Traditional Function
function bob(a) {
    return a + 100;
  }
  
  // Arrow Function
  const bob2 = (a) => a + 100;


switch
(fruits) {
case
 "Banana":
    alert("Hello")
    break;
case
 "Apple":
    alert("Welcome")
    break;    
default:
    alert("Neither");
}

switch (pageid)
{
    case "listing-page":
    case "home-page":
        alert("hello");
        break;
    case "details-page":
        alert("goodbye");
        break;
}


function largest(arr) { 
    let i; 
   
    // Initialize maximum element 
    let max = arr[0]; 

    // Traverse array elements  
    // from second and compare 
    // every element with current max  
    for (i = 1; i < arr.length; i++) {
        if (arr[i] > max) 
            max = arr[i]; 
    } 
     
    return max; 
} 
 
// Driver code 
let arr = [10, 324, 45, 90, 9808];
document.write("Largest in given array is " + largest(arr));

const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return a - b});
// now points[0] contains the lowest value
// and points[points.length-1] contains the highest value


closures
spread and rest operators
classes and prototype
arrays and array methods
aggregating array items
concat
console log and errors
jquery selectors
object.entries
isNaN


import React from 'react';
import ReactDOM from 'react-dom/client';

class Car extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <h2>I am a {this.props.model}!</h2>;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Car model="Mustang"/>);

import React from 'react';
import ReactDOM from 'react-dom/client';

class Car extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      brand: "Ford",
      model: "Mustang",
      color: "red",
      year: 1964
    };
  }
  changeColor = () => {
    this.setState({color: "blue"});
  }
  render() {
    return (
      <div>
        <h1>My {this.state.brand}</h1>
        <p>
          It is a {this.state.color}
          {this.state.model}
          from {this.state.year}.
        </p>
        <button
          type="button"
          onClick={this.changeColor}
        >Change color</button>
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Car />);

              