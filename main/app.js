function addTokens(input, tokens){
    //At this validation in the todo it says that we should throw 'Input should be a string' but in the test is 'Invalid input'
    if (typeof input != 'string') {
        throw new Error('Invalid input')
    }
    if (input.length < 6) {
        throw new Error('Input should have at least 6 characters')
    }
    tokens.forEach(element => {
        if((typeof element.tokenName !== 'string')) {
            throw new Error('Invalid array format')
        }
    });

    if(!input.includes('...')) {
        return input;
    } else {
        tokens.forEach(element => {
            input = input.replace('...', '${' + `${element.tokenName}` + '}')
        });
        return input
    }
}

const app = {
    addTokens: addTokens
}

module.exports = app;