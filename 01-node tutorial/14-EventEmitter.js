// get back the class
// if want custom extend from class
// otherwise just for emitting and handling events create instance
const EventEmitter =require('events');

const customEmitter= new EventEmitter();



// get back the class
// if want custom extend from class
// otherwise just for emitting and handling events create instance



customEmitter.on('response',function(name,id){

    console.log(`data received user ${name} with id:${id} `);
})

customEmitter.on('response',function(){

    console.log(`Some other logic is here.`);
})

customEmitter.emit('response','john',34);