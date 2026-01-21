let name1: 'bob' = 'bob'
const name2: 'jim' = 'jim'

// example
function setTheme(theme: 'light' | 'dark') {}
setTheme('dark')
// setTheme('blue')

// exaple
type Status = 'pending' | 'completed' | 'cancelled'
let orderStatus : Status
orderStatus = 'pending'
// orderStatus = 'done'
