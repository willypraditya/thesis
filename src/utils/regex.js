// Regex for Lowercase and Uppercase Alphabets and Space
//eslint-disable-next-line
const regexAlphabets = /^[a-zA-Z ]*$/;

// Regex for Lowercase and Uppercase Alphabets only
//eslint-disable-next-line
const regexCurrency = /^[a-zA-Z]*$/;

// Regex for Numbers only
//eslint-disable-next-line
const regexNumbers = /^[0-9]*$/;

//eslint-disable-next-line
const regexUuid = /^[0-9a-fA-F]{8}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{12}/;

export { regexAlphabets, regexCurrency, regexNumbers, regexUuid };
