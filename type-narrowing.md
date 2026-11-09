# Type Narrowing in TypeScript

# Introduction

Type narrowing means checking a value's type so TypeScript knows exactly what it is. Once it knows, we can safely use that type's properties.

# Narrowing with 'typeof'

Use `typeof` for primitives such as `string` and `number`

Example:
const print = (value: string | number) => {
if (typeof value === "string") {
return value.toUpperCase();
}
return value;
};

Inside the `if`, `value` is a `string`, it is a `number`

# Narrowing with 'instanceof'

Use `instanceof` to check whether a value was created from a class

Example:
const showDate = (x: Date | string) => {
if (x instanceof Date) {
return x.toISOString();
}
return new Date(x).toISOString();
};

This is ideal for `Date`, `Error`, and custom classes.

# Narrowing with 'in'

The `in` operator checks whether a property exists on an object, which separates object types in a union.

Example:
type Bird = { fly: () => void };
type Fish = { swim: () => void };

const move = (animal: Bird | Fish) => {
if ("fly" in animal) {
animal.fly();
return;
}
animal.swim();
};

# Conclusion

Narrowing removes the need for risky type assertions, Combine `typeof`, `instanceof`,`in` to write code that is safe and readable
