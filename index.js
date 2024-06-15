const readline = require('node:readline');
const { createMatcher } = require('./regex');
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout,
})

rl.question('Pattern (?):' , (pattern) => {
    const match = createMatcher(pattern);
    console.log('check words:');

    rl.on('line' , (input) => {
        console.log(`Match? ${match(input)}`);

        if(input == 'exit'){
            rl.close();
        }
    })
})
