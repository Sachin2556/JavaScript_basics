
const score=100
// console.log(score);

const balance=new Number(100);
// console.log(balance)

// console.log(balance.toString().length);
// console.log(balance.toFixed(1));   // decimal value add krne ke lyiye

const num2=123.896
// console.log(num2.toPrecision(3))

const num3=1000000;
// console.log(num3.toLocaleString('en-IN'))  // convert in indian order





// ******************    Maths     ******************


// console.log(Math)
// console.log(typeof(Math))
// console.log(Math.abs(-4));
// console.log(Math.round(4.9));   ///Generally used round function
// console.log(Math.ceil(4.2));   // Take always bigger value
// console.log(Math.floor(4.8))   //Take always smaller value
// console.log(Math.min(3,4,6,2));
// console.log(Math.max(2,4,1,6));

// console.log(Math.random()); // it always give value random 0 to 1
// console.log(Math.random()*10+1);

//  with random property we create random value 
//if we decide a range e.g.: in dice , random value comes 1 to 6 only

const min=10;
const max=20;

// console.log(Math.floor(Math.random()*(max-min+1))+min)   // here random value always generate within the range  (10-20)








// *********************        Dates and time         *********************
  
    let myDate= new Date();   // date is an object
    // console.log(typeof(myDate))
    // console.log(typeof(Date))
    // console.log(myDate);
    //  console.log(myDate.toString());
    // console.log(myDate.toDateString());
    // console.log(myDate.toISOString());
    // console.log(myDate.toJSON());
    // console.log(myDate.toLocaleDateString());
    // console.log(myDate.toLocaleString());
    // console.log(myDate.toLocaleTimeString());
    // console.log(myDate.toUTCString());
   
    let myCreatedDate= new Date(2024 ,2,20)  //month starts with 0
    // let myCreatedDate= new Date(2024 ,2,20,5,3)      // year,month,date,hour,minute
        //here month starts with 1
    //  let myCreatedDate2= new Date("2024-03-20")     // format: yy/mm/dd
    let myCreatedDate2= new Date("03-20-2024")        // format: mm/dd/yy
    // console.log(myCreatedDate.toLocaleString());
    // console.log(myCreatedDate2.toLocaleString());

    let newDate=new Date();
    console.log(newDate.toLocaleString());
    console.log(newDate.getDate());
    console.log(newDate.getMonth()+1);   //month start with 0 so lastly one add

    newDate.toLocaleString('default',{
        weekday: "narrow",
      
    })
    // console.log(newDate.toLocaleString())