const {readFile, writeFile} = require('fs')

console.log("start");
readFile('./content/subfolder/test.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err);
        return
    }
    const first = result
    readFile('./content/first.txt', 'utf8', (err, result) => {
        if (err) {
            console.log(err);
            return
        }

        const second = result
        writeFile(
            './content/fourth.txt', `Here is the fourth test file result : ${first} ${second}`, (err, result) => {
                if (err) {
                    console.log(err);
                }
                console.log("the end");
            }
        )
    })
})

console.log("done with this task");