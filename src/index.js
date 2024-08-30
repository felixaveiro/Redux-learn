import {compose, pipe} from "lodash/fp";
// function sayHello(){
//   return "Hello world!";
// }
// let fn = sayHello();

// function greet (fn){
//   console.log(fn());
// }
// function sayHello(){
//   return function(){
//     return "Hello world!";
//   };
// }

let input = " javascript ";
let output = "<div>" + input.trim() + "</div>";
const trim = str => str.trim();
const wrapInDiv = str => `<div>${str}</div>`;
const toLowerCase = str => str.toLowerCase(); 

const transform = compose(wrapInDiv, toLowerCase, trim);
const transform2 = pipe(trim, toLowerCase, wrapInDiv);
transform(input);
transform2(input);

