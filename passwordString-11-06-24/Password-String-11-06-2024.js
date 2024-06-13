const fs = require('fs')
fs.readFile("password.txt", (err, data) => {
    if (err) throw err;
    let Data = data.toString();
    let lines = Data.split('\n');
    lines.map((element) => {
        let n = element.split(':')
        if (n[3] >= 500) {
            console.log(`User: ${n[0]}, Command interpreter ${n[6]}, UserID: ${n[3]}`)
        } else if (n[3] < 500) {
            console.log(`"User:" ${n[0]},  Command interpreter ${n[6]}`)
        } else {
            console.log("No user found")
        }
    })
})