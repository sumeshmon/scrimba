/*
Challenge:
    1. Curry this function!
    Set up three partially applied functions called 'infoLogger', 
    'warnLogger', and 'errorLogger'. 
    The partially applied functions should have their level ('info', 
    'warn', 'error'). 
    You should be able to call these functions and pass in a message.
    E.g. console.log(warnLogger("Low disk space")) would log: "[WARN] Low disk space".
    🛟 hint.md for help.
*/
const createLogger = level => message =>  `[${level.toUpperCase()}] ${message}`

const infoLogger = createLogger('info');
const warnLogger = createLogger('warn')
const errorLogger = createLogger('error')

console.log(infoLogger("Server started"));
console.log(warnLogger("Low disk space"));
console.log(errorLogger(" Failed to save file"));
