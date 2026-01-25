# obligatory types
In TypeScript, properties are obligatory by default unless marked optional with ?

# type narrowing
Reducing a broad type into a more specific one so TypeScript knows exactly what operations are safe.
You start with something wide like string | number and narrow it down at runtime.

# typing an array
In TypeScript, typing an array means telling the compiler what kind of values the array can contain.
Note: Type[] is shorthand for Array<Type>

# Literal types
Literal types allow variables to hold only one exact value
refer typing-an-array.ts

# utility types
In TypeScript, utility types are built-in helpers that let you transform existing types instead of rewriting them.
type User = {
  id: number
  name: string
  email: string
}
type UpdateUser = Partial<User>


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
https://www.typescriptlang.org/docs/handbook/utility-types.html#omittype-keys

# Generics
Generics let you write reusable, type-safe code that works with different types without using any.
It is a placeholder for a real type.
https://www.typescriptlang.org/docs/handbook/2/generics.html

function identity(value: any) {
  return value
}
to
function identity<T>(value: T): T {
  return value
}

# 