# What is TypeScript?
TypeScript is a statically typed superset of JavaScript. It adds compile-time type checking, better
IDE support, and modern language features while compiling to plain Java

Interview Notes
Explain that TypeScript catches many errors before runtime, improves maintainability, and scales
well for large application

# Type Inference
TypeScript automatically infers(അനുമാനിക്കുന്നു) types when possible.

Interview Notes
Use inference when obvious. Add explicit(വ്യക്തമായ) types for public APIs, exported functions, and complex
objects

# any vs unknown vs never
'any' disables type checking. 'unknown' requires type narrowing. 'never' represents values that
never occur.

Interview Notes
'unknown' is safer than 'any'. 'never' is used for functions that never return or exhaustive switch
checks.

#  Interface vs Type
An interface defines the shape (structure) of an object."Any object that follows this interface must have these properties."


Interview Notes
Prefer interfaces for object contracts. Use type aliases for unions, intersections, tuples, and
mapped types.

# What is a Type Alias (അപരനാമം)?
A type alias creates another name for a type.
1. Union Types

# So why use type?
Because type can do much more