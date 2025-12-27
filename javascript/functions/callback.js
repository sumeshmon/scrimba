/* Quiz: list some times that we have passed functions as arguments to other functions.
1. Array methods: map, forEach, reduce
2. setTimeout and setInterval
3. Event Listeners
*/

function notifyUser (notificationFn){
    notificationFn ()
}
const emailNotification = () => console.log('Email send')
const smsNotification = () => console.log('SMS send');


notifyUser (emailNotification)
notifyUser (smsNotification)