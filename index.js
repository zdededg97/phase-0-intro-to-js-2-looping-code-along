function writeCards(namesArray, eventName) {
  const thankYouMessages = [];
  
  for (let i = 0; i < namesArray.length; i++) {
    thankYouMessages.push(`Thank you, ${namesArray[i]}, for the wonderful ${eventName} gift!`);
  }
  
  return thankYouMessages;
}
function countDown(num) {
  for (let i = num; i >= 0; i--) {
    console.log(i);
  }
}

