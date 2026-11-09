# Type Aliases vs Interfaces in TypeScript

# Introduction

Both `type` and `interface` describe the shape of data.

# Core Differences

An `interface` is built for object shapes. A `type` alias can name anything: primitives, unions, tuples, and literals.

Example:
type ID = number;
type Role = "admin" | "member";
interface User {
name: string;
id: ID;
role: Role;
}

Interfaces extend others with `extends`, while types combine with the `&` intersection operator.

Example:
interface Animal {
species: string;
}
interface Cat extends Animal {
breed: string;
}

type Vehicle = { brand: string };
type Car = Vehicle & { model: string };

The difference is declaring the same interface twice merges the members, but a duplicate `type` is an error.

interface IEmployee {
name: string;
}
interface IEmployee {
id: number;
}

# When to Choose Which

Use `interface` for object shapes, class contracts, and public APIs that others may extend. Use `type` for unions, tuples, primitives and computed types.

# Conclusion

Use `interface` when describe objects, and use `type` for everything else, like unions, tuples, and simple values. Interfaces can merge, while types are better for combining different options.
