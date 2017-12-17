// Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

function titleCase(str) {
    str = split(' ').toLowerCase;
    // iterate separated words into an array
    for(var i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); // uppercases the current item of the array and slices the first index that is lowercased and concatenates them together.
    }
    return str.join(' '); // joins the item array into a full phrase.
}

titleCase("I'm such a lucky monkey AND I love BANANAS!");