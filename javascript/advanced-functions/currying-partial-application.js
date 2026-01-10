const calculateVolume = width => length => height => width * length * height

// changing the height
const calculateBaseAreaVolume = calculateVolume(3)(6)

const volume1 = calculateBaseAreaVolume(5)
const volume2 = calculateBaseAreaVolume(2)
const volume3 = calculateBaseAreaVolume(3)


console.log(volume1)
console.log(volume2)
console.log(volume3)


