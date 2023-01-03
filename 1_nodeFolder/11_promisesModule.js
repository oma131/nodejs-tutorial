const { readFile, writeFile } = require('fs').promises

const start = async () => {
    try {
        const first = await readFile('./content/subfolder/test.txt', 'utf8')
        await writeFile('./content/fifth.txt', `I just created another file Awesome!!: ${first}`, {flag: 'a'})
        console.log(first);
    } catch (error) {
        console.log(error);
    }
}
start()