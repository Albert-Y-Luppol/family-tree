module.exports = (sql) => `BEGIN;\n\n${sql}\n\nCOMMIT;`;