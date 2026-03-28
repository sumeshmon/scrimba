export default function PlayGround() {
    const myArr = [1, 0, 2, 5, 0, 3, 0, 7]
    const withoutZero = myArr.filter(num => num !== 0)
    const withZero = myArr.filter(num => num == 0)
    const result = [...withZero, ...withoutZero]
    // console.log(result);

    // nested array to normal array
    const arr = [1, 2, [9, [5, 8]]]
    function flatArr(arr) {
        let result = []
        for (let n of arr) {
            if (Array.isArray(n)) {
                // console.log(result.concat(flatArr(n)));   
            } else {
                result.push(n);
            }
        }
        return result
    }
    // console.log(flatArr(arr));

    // shift 0 to end of begine
    const myArr1 = [1, 0, 2, 5, 0, 3, 0, 7]
    const result1 = myArr1.reduce ( (acc, curr) =>{
        // console.log(`acc ${acc} - curr ${curr}`);
        if ( curr === 0){
            acc.push(curr)
        } else {
            acc.unshift(curr);
        }

        return acc
        
    },[])
    // console.log(result1);
    

    // remove duplicate
    const myArr2 = [1, 0, 2, 5, 0, 3, 0, 7]
    const result2 = new Set( myArr2)
    // console.log(result2);


    // var vs let call stack
    // for (let i = 0; i < 3; i++){
    //     setTimeout( ()=>{
    //         console.log(i)
    //     }, 100)
    // }

    // interview tips
    console.log([] == []);
    // console.log({} == !{});
    // console.log('sumesh' - 100);

    
    // console.log(a);
    let  a = 10

    let testArr = [3,1,7,8,9,5,67,3]
    const res = testArr.filter( (item ) => item > 5)
    // console.log(res);
    
    function currying(a){
        return function (b){
            return function (c){
                return a+b+c
                
            }
        }
    }
    currying(2)(3)(4)
    

    return (
        <>
            <h2 className="text-white">JS Play ground</h2>
        </>
    )
}