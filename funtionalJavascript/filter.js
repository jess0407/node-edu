function getShortMessages(messages) {
  // SOLUTION GOES HERE
  return messages.filter(function(obj){
    return obj.message.length <50;
  }).map(function(obj){return obj.message});
}

module.exports = getShortMessages
