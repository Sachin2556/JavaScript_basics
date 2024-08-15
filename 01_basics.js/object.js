// Object literals

const mysym1=Symbol("key1");
const mysym2=Symbol("key2");
const JsUser={
    [mysym2]:"mykey2",   // exit in symbol datatypes
   mysym1:"mykey1",      // it change in string datatypes
   name: "Sachin",
   "Full name" : "Sachin Kumar",  // it can't be access by dot 
   age:20,
   email: "king@gmail.com",

}

// for object access 
//   console.log(JsUser.email);
//   console.log(JsUser["email"]);  //here email is in string form 
//   console.log(JsUser["Full name"]);
//   console.log(typeof JsUser.mysym1);
//   console.log( JsUser[mysym2]);

// changing the object arguments

JsUser.email="Sachin@gmail.com"
// Object.freeze(JsUser);  // freeze the all arguments 
JsUser.email="piyush@gmail.com"
// console.log(JsUser);

JsUser.greeting=function(){
    console.log("Hello Js user");
}
JsUser.greeting2=function(){
    console.log(`Hello Js user, ${this.name}`);
}

// console.log(JsUser.greeting());
// console.log(JsUser.greeting2());

//   nested objects

const  regularUser={
    name:"king",
   fullname:{
          userfullname:{
            fisrtname:"Sachin",
            lastname:"kumar",
          }
   }
}
// console.log(regularUser.fullname.userfullname.fisrtname)


// merge two objects

const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"};

// const obj3={obj1,obj2};
// const obj4=Object.assign(obj1,obj2)    // here all value of obj2 assign in obj1 
 
 // we add {} ->target object then all object assign values in target object
 
//  const obj3=Object.assign({},obj1,obj2);
// console.log(obj3)
// console.log(obj1)

// generally used spread operator

const obj3={...obj1,...obj2}; //here not any problem to assign anywhere
// console.log(obj3)
// console.log(obj1)


// console.log(JsUser)
// console.log(Object.keys(JsUser));
// console.log(Object.values(JsUser));
// console.log(Object.entries(JsUser));

console.log(JsUser.hasOwnProperty('Full name'))
console.log(JsUser.hasOwnProperty('Lovername'))

//   JSON Syntax like object:API 
//  key bhi string ke form m likha jatta hai
// {
//     "name": "Sachin",
//     "Coursename":"js in hindi",
//     "cost":"Free"
// }
