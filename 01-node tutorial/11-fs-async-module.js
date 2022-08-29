const { readFile, writeFile, read } = require("fs")
console.log("start");
readFile("./content/first.txt", "utf-8", function (err, result) {
    if (err) {
        console.log(err);
        return
    }


    const first = result;
    readFile('./content/second.txt', 'utf-8', function (err, result) {
        if (err) {
            throw err;
            return;
        }

        const second = result;

        writeFile('./content/result-async.txt',
            `This is the result of writeFile(Async) method of the fs module.\n
        Here is the result : ${first} ${second} `, function (err, result) {
            if (err) {
                throw err;
                return;
            }
            console.log("done with the task");

        }

        );
    })

})

console.log("starting the next task");