const { insertExplicitConcatOperator, toPostfix } = require('./parser');
const { toNFA, recognize } = require('./nfa');

function createMatcher(exp) {
    // Generates an NFA using a stack
    const expWithConcatenationOperator = insertExplicitConcatOperator(exp);
    const postfixExp = toPostfix(expWithConcatenationOperator);
    const nfa = toNFA(postfixExp);

    return word => recognize(nfa, word);
}

module.exports = { createMatcher };

