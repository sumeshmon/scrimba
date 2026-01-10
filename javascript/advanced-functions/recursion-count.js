function sumToN(n){
   if (n <= 0){
    return 0
   } else {
    return n + sumToN(n - 1)
   }
}
console.log(sumToN(5));
