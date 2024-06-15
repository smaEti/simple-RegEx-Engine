const readline = require('node:readline');

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout,
})

rl.question('Pattern (?):' , (pattern) => {
    //match = createMatcher()
    console.log('check words:');

    rl.on('line' , (input) => {
        // console.log(match(input))

        if(input == 'exit'){
            rl.close();
        }
    })
})