/**
 * Simple string generator
 * @param {string} str
 * @returns string in hyphen case
 */
const makeUniqueKeyStr = (str) => {
    if (!str) {
        return '';
    }
    return str.replace(/ /g, '-')
        .replace(/,/, '');
};

export default makeUniqueKeyStr;
