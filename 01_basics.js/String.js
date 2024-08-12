    const name = "Sachin";
    const RepoCount=15;
    console.log(name+RepoCount+"Value");   // Concatenate strings but this is not good pratice

    console.log(`Hello my name is ${name} and my repo count is ${RepoCount}`);  // using backstricks: Good practice
    
    const goodname=new String('Sahchin');   // Initialise a string

    console.log(goodname[0])
    console.log(goodname.__proto__)  // a lot of function we use with goodname.
    console.log(goodname.indexOf('h'));  //take first occurence
    console.log(goodname.charAt(4));
    console.log(goodname.toUpperCase());   // all letter convert in uppercase but it makes copy not reference
    
     const newName=goodname.substring(0,4);   // In substring ,it can't start with negative value if we start with a negative value then it automatically start with 0 index
    console.log(newName);
                                       // start_index , End_index
    const anotherName=goodname.slice(-6,4)   
    console.log(anotherName)
    
    const Stringname='    Sachin      '
    console.log(Stringname)
    console.log(Stringname.trim());
    
    const url = "https://king.com/sachin%20raj"
    console.log(url.replace('%20','_'))
    console.log(url.includes('sundar'))
    
