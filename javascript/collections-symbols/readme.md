# What is Map()?
Map is a built-in JavaScript object used to store key–value pairs.

# Why Map is special
Keys can be any data type (object, function, number, string) <br>
Maintains insertion order <br>
Better performance for frequent add/remove operations <br>

const myMap = new Map([
  ["name", "Sumesh"],
  ["age", 28]
]);

# set(key, value)
myMap.set("city", "Kochi");

# get(key)
console.log(myMap.get("city"));   // Kochi

# size
console.log(myMap.size);

# has(key)
myMap.has("skill"); // true <br>
myMap.has("email"); // false

# delete(key)
myMap.delete("age"); // true if deleted

# clear()
myMap.clear(); <br>
console.log(myMap.size); // 0

# for...of
for (let [key, value] of myMap) {
  console.log(key, value);
}

# forEach()
myMap.forEach((value, key) => {
  console.log(key, value);
});

