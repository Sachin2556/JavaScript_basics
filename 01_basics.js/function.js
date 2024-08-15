function sayname(){
    console.log('S');
    console.log('a');
    console.log('c');
    console.log('h');
    console.log('i');
    console.log('n');
}

// sayname;
// sayname() ;
// const anothername = sayname;  // this tells about it make reference only
// anothername();

function addTwonumbers(number1,number2){
     let result=number1+number2;
     return result;
     console.log("king");  // not print anything
     
}
const result = addTwonumbers(5,3);
console.log("Result :", result)
    

function loginusername(username){
    if(username===undefined){  // (!username)
        console.log("Please enter a username")
    }
    else{
        return `${username} just logged in`;
    } 
     
}

// console.log(loginusername("Sachin"));
// console.log(loginusername());

function calculate(val1,val2,...num){   //... means rest operator 
    return num;
}

console.log(calculate(100,200,300,400));


const user={
     name:"Sachin",
     age: 21
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.name} and age is ${anyObject.age}`);
}

handleObject(user);
handleObject({
    name:"Piyush",
    age:20
})


const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));