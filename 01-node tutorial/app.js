const http=require('http');

const fs=require('fs');


const server=http.createServer();

server.on('request',function(req,res){

    // const text=fs.readFileSync('./content/big.txt','utf-8');
    // res.end(text);

const fileStream=fs.createReadStream('./content/big.txt','utf-8',{highWaterMark:1000});

fileStream.on('open',function(){
    fileStream.pipe(res)
}
)

fileStream.on('error',function(err){
    res.end(err);
})

})

server.listen(5000,function(){

    console.log("Server is running at port 5000");
})


