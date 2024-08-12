
 // Primitive datatypes: 7 types
   // Number, String, Boolean,null,undefined,Symbol, BigInt(bahut bhre value ke liye used hota h)

 // Reference (Non-Primitive)
   //  Arrays, Objects, Functions


   const id1=Symbol('123');
   const id2=Symbol('123');
   console.log(id1===id2);

     //  symbols give unique id always

   let id3=Symbol('123');
   let id4=Symbol('123');
   console.log(id3===id4);
   
   const BigNumber=39493434349332999321n;  // afterr add n it convert in bigint

   const myfunction=function(){
      console.log("Hello World");
   }


//    *************************************     Memory    ****************************************

// Two types of memory: Heap(Used for Non-Primitive Data Types) and Stack (Used for Primitive Data Types)
                            // Call by reference                and    Call by value

 let myYoutubeChannel="King@123.com"
 let anotherChannel=myYoutubeChannel
// here copy of myyoutbechannel formed not reference so it can't changed
 anotherChannel="sachinraj123.com"
 console.log(myYoutubeChannel);
 console.log(anotherChannel);
 

 let user1={
      email:"sachinraj2556@gmail.com",
      upi: "user@ybl"
 }

 let user2=user1;
 user2.email="king@google.com"
// Here reference of user1 formed , so if i can change in user2 then it shold be changed in user1
 console.log(user1.email)
 console.log(user2.email);
 
 

      