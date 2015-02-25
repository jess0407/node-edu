function checkUsersValid(goodUsers) {
  return function(submittedUsers) {
    // SOLUTION GOES HERE
    return submittedUsers.every(function(obj){
      return goodUsers.some(function(user){
        return user.id === obj.id;
      });
    });
  };
}

module.exports = checkUsersValid
