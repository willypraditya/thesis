// Regex for Lowercase and Uppercase Alphabets and Space
const regexAlphabets = /^[a-zA-Z ]*$/;

// Regex for Lowercase and Uppercase Alphabets only
const regexCurrency = /^[a-zA-Z]*$/;

// Regex for Numbers only
const regexNumbers = /^[0-9]*$/;

const regexUuid = /^[0-9a-fA-F]{8}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{12}/;

export { 
    regexAlphabets, 
    regexCurrency, 
    regexNumbers,
    regexUuid
};
