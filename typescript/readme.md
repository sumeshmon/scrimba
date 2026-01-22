# obligatory types
In TypeScript, properties are obligatory by default unless marked optional with ?

# typing an array
In TypeScript, typing an array means telling the compiler what kind of values the array can contain.
Note: Type[] is shorthand for Array<Type>

# Literal types
Literal types allow variables to hold only one exact value
refer typing-an-array.ts

# Explicit means:
You clearly write and specify something yourself, instead of letting TypeScript guess (infer) it.

# void
the function return anything.

# any
turning off the type checking

# partial type
Make all properties of a type optional.
const updateUser: Partial<User>

# Object.assign
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);
Object.assign(target, source);

# Omit type
Omit<T, K> is a utility type that lets you remove specific properties from a type.



