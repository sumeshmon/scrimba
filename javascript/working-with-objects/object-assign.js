const studentDetails = {
    firstName: 'janaka',
    gender:{
        male: false,
        female: true
    },
    lastName: 'siriwardena',
    age: 28,
    country: 'sri lanka',
    email: 'j.siri@totalinternet.com',
    discordUsername: 'JS1',
    }  
    
const studentDetailsCopy = {}

Object.assign(studentDetailsCopy, studentDetails)
studentDetailsCopy.gender.male = true

console.log(studentDetails.gender.male === studentDetailsCopy.gender.male)
console.log(studentDetails,studentDetailsCopy);

/*
Challenge:
    1. Prove that what we have created here is a shallow copy.
*/