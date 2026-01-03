const user1 = {
  username: "rpchan",
  subscriptionLevel: "bronze",
  accessPremiumFeature: false
}

const user2 = {
  username: "bcstevens",
  subscriptionLevel: "silver",
  accessPremiumFeature: true
}
const user3 = Object.create(null)
user3.username = 'Sumesh'
// will throw error
// console.log(user3.hasOwnProperty('username')); 
console.log(Object.hasOwn(user3, 'username'));



function canAccessPremiumFeature(userObj, prop) {
    // return  userObj.hasOwnProperty(prop) && userObj[prop]
    return Object.hasOwn(userObj,prop) && userObj[prop]
/*
Challenge:
1. Write logic to check if the object has the property. 
   Do this challenge twice, once with hasOwn and once 
   with hasOwnProperty. All the function need do is return
   a boolean. 
   Bonus: use short circuiting to only return true if 
   'accessPremiumFeature' both exists AND is true.
*/ 
}

console.log(canAccessPremiumFeature(user1, 'accessPremiumFeature'))
console.log(canAccessPremiumFeature(user2, 'accessPremiumFeature')) 

