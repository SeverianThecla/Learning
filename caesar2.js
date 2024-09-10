// Declare Alphabet
const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

let shiftValue = 3

// Unencrypted Message
let unencryptedMessage = "Hello World"

console.log(unencryptedMessage);

// Process Message Function
function processMessage(message, alphabet, shift) {
let result = '';
    for (let letter of message) {

        let upperLetter = letter.toUpperCase();
        let position = alphabet.indexOf(upperLetter); 

        if (position !== -1) {
            newPosition = (position + shift) %alphabet.length;
          result += alphabet[newPosition]
        } else {
            result += letter + ' ';
        }
    }
    return result.trim();

}

// Call the function to process message

let processedMessage = processMessage(unencryptedMessage, alphabet, shiftValue);
console.log(processedMessage);