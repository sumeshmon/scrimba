const wishListArr = ['shoes', 'after shave', 'tesla', 'after shave', 'shoes']

// remove duplicates
// map() can't use 
const wishListSet = new Set(wishListArr)

// const wishListSet = Array.from(new Set(wishListArr))
// console.log(typeof wishListSet);
// wishListSet.map( (items)=>{
//     console.log(items); 
// })

wishListSet.add('shirt')
wishListSet.delete('shoes')
console.log(wishListSet.has('shoes'));
wishListSet.clear()
console.log(wishListSet);
