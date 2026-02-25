export default function PlayGround() {
    const myArr = [1, 0, 2, 5, 0, 3, 0, 7]
    const withoutZero = myArr.filter(num => num !== 0)
    const withZero = myArr.filter(num => num == 0)
    const result = [...withZero, ...withoutZero]
    // console.log(result);


    const arr = [1, 2, [9, [5, 8]]]

    function flatten(array) {
        let result = []
        for (const item of array) {
            //console.log(1, Array.isArray(item));
            if (Array.isArray(item)) {
                //console.log(2, Array.isArray( item));
                result = result.concat(flatten(item))
            } else {
                result.push(item)
            }
        }
        return result
    }
    // console.log(flatten(arr))

//    console.log(Math.floor(Math.random() * 8));
   


    return (
        <>
            <h2 className="text-white">JS Play ground</h2>
        </>
    )
}