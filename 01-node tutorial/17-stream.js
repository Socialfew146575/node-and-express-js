const {createReadStream} = require('fs');


// Stream is also used to read file like readFile method of fs module but it can divide the data into small chunks so that memory retrieval can be faster...




// const stream=createReadStream('./content/big.txt');


// default 64kb
//last buffer - remainder
//highWaterMark - control size



// By highWaterMark we can select the size of buffer we want so that it can be divided into chunk on the basis of size provided


const stream = createReadStream('./content/big.txt',{highWaterMark:9000000})



// const stream=createReadStream('./content/big.txt',{encoding:'utf-8'});











stream.on('data',function(result){

    console.log(result);
})

