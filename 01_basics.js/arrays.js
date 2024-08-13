
const array1=[1,2,3,4,5];
// console.log(array1[0]);

//operations
 array1.push(6);
 array1.pop();
//  console.log(array1[2]);

 array1.unshift(9)  // it means add array value in first index
//  console.log(array1);

 array1.shift();    // it means remove array value from first index
//  console.log(array1);

 let myarray=array1.join();
//  console.log(myarray)
//  console.log(typeof(array1))
//  console.log(typeof(myarray))


// Slice and Splice

// console.log("A :",array1)

const myn1=array1.slice(1,3);   ///here 3 index not included and after slice main array will no changed

// console.log(myn1);
// console.log("B",array1);

const myn2=array1.splice(1,3);      ///here 3 index included and after splice main array will be changed

// console.log(myn2);
// console.log("C : ", array1)



// ***********************    arrays 2 *****************


const marvel_heroes=["Thor","SpiderMan","Ironman"];
const Dc_heroes=["Flash","Superman","batman"];

// marvel_heroes.push(Dc_heroes);

// console.log(marvel_heroes)   // This is not good pratice
// console.log(marvel_heroes[3][1])

// const allheroes=marvel_heroes.concat(Dc_heroes);  // Store in another array then print .. this is a good pratice
// console.log(allheroes)

// Spread Operator 

const allnewheroes=[...marvel_heroes,...Dc_heroes];
// console.log(allnewheroes)         // spread all elements and then store in new array

const another_array=[1,2,3,[4,5],6,[7,[8,9],0]]
const array=another_array.flat(Infinity);   // here infinity takes means depth of arrays
console.log(array);

console.log(Array.isArray("Sachin"))  // check given input is array or not
console.log(Array.from("Sachin"))    // it convert in array 
console.log(Array.from({name:"Sachin"}))  //interesting

let score1=100;
let score2=200;
let score3=300;
console.log(Array.of(score1,score2,score3));

const map = new Map([
    [1, 2],
    [2, 4],
    [4, 8],
  ]);
  console.log(Array.from(map));
  // [[1, 2], [2, 4], [4, 8]]
  
  const mapper = new Map([
    ["1", "a"],
    ["2", "b"],
  ]);
 console.log( Array.from(mapper.values()));
  // ['a', 'b'];
  
  console.log(Array.from(mapper.keys()));
  // ['1', '2'];
  
