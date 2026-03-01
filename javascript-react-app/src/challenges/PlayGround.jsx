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
    console.log(result2);
    
    return (
        <>
            <h2 className="text-white">JS Play ground</h2>
        </>
    )
}