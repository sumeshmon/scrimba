const expensesAndRefunds = [
    { description: 'Groceries', amount: 50, year: 2023 },
    { description: 'Electronics', amount: -30, year: 2023 },
    { description: 'Dinner', amount: 40, year: 2023 },
    { description: 'Clothing', amount: 60, year: 2023 },
    { description: 'Entertainment', amount: 25, year: 2023 },
    { description: 'Rent', amount: -500, year: 2024 },
    { description: 'Utilities', amount: 100, year: 2024 },
    { description: 'Books', amount: 20, year: 2024 },
    { description: 'Fitness', amount: 30, year: 2024 },
    { description: 'Gifts', amount: 15, year: 2024 },
]

let totalSpent = 0
const cutoffDate = 2024

for (let i=0; i < expensesAndRefunds.length; i++){
   const expensesAndRefund = expensesAndRefunds[i]
   
   if (expensesAndRefund.year >= cutoffDate){
        console.log(`Reached cutoff date, exiting loop`)
        break
   }

   if (expensesAndRefund.amount < 0){
    console.log(`Skipping ${expensesAndRefund.description} due to refund`)
    continue
   }
   totalSpent += expensesAndRefund.amount 
    
}
console.log(totalSpent);


