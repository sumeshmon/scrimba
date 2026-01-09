/* 
Challenge: 
    1. Write a function that simulates a simple bank account. 
       The function should store the balance and enable users  
       to deposit money, withdraw money, and check the balance.

Requirements:

- The account balance should start at zero.

- The function should return an object containing 
  3 functions. One for depositing money, one for 
  withdrawing money, and a getBalance function which 
  logs the balance and the account holder's name.

- Deposits should add to the balance, and withdrawals should subtract 
  from it. 
*/
function createBankAccount(accountHolderName) {
    let balance = 0
    return {
        deposit: function (amount) {
            balance += amount;
            
        },
        withdraw: function (amount) {
           balance -= amount;
            
        },
        getBalance: function () {
           console.log(`${accountHolderName}'s balance is ${balance}`);
            
        }
    }
}

const daveAccount = createBankAccount('Dave')
const wendyAccount = createBankAccount('Sumesh')

daveAccount.deposit(1000)
daveAccount.withdraw(500)
daveAccount.getBalance()
wendyAccount.deposit(200)
wendyAccount.deposit(200)
wendyAccount.withdraw(200)
wendyAccount.withdraw(10)
wendyAccount.getBalance()



// Test your code by calling the functions.