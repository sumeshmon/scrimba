export default function PlayGround() {
    const myArr = [1, 0, 2, 5, 0, 3, 0, 7]
    const withoutZero = myArr.filter(num => num !== 0)
    const withZero = myArr.filter(num => num == 0)
    const result = [...withZero, ...withoutZero]
    // console.log(result);


    const arr = [1, 2, [1, [2, 3]]]
    function flatten(array) {
        let result = []

        for (const item of array) {
            console.log(Array.isArray(item));
            
        }

        return result
    }

    console.log(flatten(arr))

    
    return (
        <>
            <h2 className="text-white">JS Play ground</h2>
        </>
    )
}