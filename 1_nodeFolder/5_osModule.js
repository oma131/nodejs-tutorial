const os = require('os')

const user = os.userInfo()
console.log(user);

console.log(`system uptime ${os.uptime}`);

const currentOS = {
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem(),
    version:os.version()
}

console.log(currentOS);