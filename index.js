// Code your solutions in this file
function writeCards(names, eventName) {
    let thankYouMessages = []; // Create an empty array to hold the messages
  
    for (let i = 0; i < names.length; i++) {
      // Iterate through the input array
      let message = `Thank you, ${names[i]}, for the wonderful ${eventName} gift!`; // Build the 'thank you' message for each name
      thankYouMessages.push(message); // Add the message to the new array
    }
  
    return thankYouMessages; // Return the new array containing all the messages
  }
  
  // Example usage:
  let messages = writeCards(["Charlie", "Samip", "Ali"], "birthday");
  console.log(messages);
  
  // index.js

function countDown(number) {
    while (number >= 0) {
      console.log(number);
      number--;
    }
  }
  
  module.exports = { countDown }; // Export the countDown function
  