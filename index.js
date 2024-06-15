const readline = require('node:readline');
const {toPostfix} = require('./parser');
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout,
})

rl.question('Pattern (?):' , (pattern) => {
    //match = createMatcher()
    console.log('check words:');

    rl.on('line' , (input) => {
        // console.log(match(input))
        console.log(toPostfix(input));

        if(input == 'exit'){
            rl.close();
        }
    })
})
