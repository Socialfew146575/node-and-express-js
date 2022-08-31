const { readFile, read } = require("fs");

console.log("Started a first task");

// Check File Path

readFile("./content/first.txt","utf-8",function(err,result){

    if(err){
        console.log(err);
        return;
    }

    console.log(result);
    console.log("completed the first task");

})

console.log("starting the next task");
