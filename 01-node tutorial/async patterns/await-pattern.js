
// *******Yet another method instead of promisify of the util module is adding .promises with the require('fs') command which perform the same task********


const { readFile, writeFile } = require('fs').promises;




// *********Creating a function with promise to reduce the complexity of fs-async*********** 

// const getText = function (path) {


//   return new Promise(function (resolve, reject) {

//     readFile(path, 'utf8', function (err, data) {

//       if (err) {
//         reject(err)
//       }
//       else {
//         resolve(data);
//       }
//     })
//   })

// }

  // getText('./content/first.txt').then(function(result){
  //   console.log(result);
  // }).catch(function(err){
  //   console.log(err);
  // })














// ************INstead of the promise used in the gettext function , promisify function of the util module can be used to reduce the further complexities***************

// const util = require('util');

// const readFilePromise = util.promisify(readFile);

// const writeFilePromise= util.promisify(writeFile);












const start = async function () {

  try {

    // *********Using promisify to read and wirte the file*******



  //   const first = await readFilePromise('./content/first.txt','utf-8');
    

    

  //   const second = await readFilePromise('./content/second.txt','utf-8');

  //  await writeFilePromise('./content/result-async-promisify.txt',`This is the result of write File async which is made easier using promisify.`);

  //   const r_result = await readFilePromise('./content/result-async-promisify.txt','utf-8');


  const first = await readFile('./content/first.txt','utf-8');
    

    

  const second = await readFile('./content/second.txt','utf-8');

 await writeFile('./content/result-async-promisify.txt',`This is the result of write File async which is made easier using promisify.`);

  const r_result = await readFile('./content/result-async-promisify.txt','utf-8');

    console.log(first, second,r_result);
  }
  catch (error) {
    console.log(error);

  }


}

start();

