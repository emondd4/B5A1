## Difference between `any`, `unknown`, and `never` types in TypeScript

**Description:**
`any`, `unknown` and `never` are types that used for checking data types so that programmer can easily develop functions without facing error in an efficient way.

`any` is a type that disables type checking and allows variables to hold values of any type. it provides flexiblility but sacrifices type safety.
For Example 
```ts
let value1: any = "Hello";
```

`unknow` is a top-level type that represents all possible values, this ensures type safety by forcing developers to perform checks before operating on values of unknown type.
unlike `any`, which bypasses thpe checking, `unknown` enforces it.
For Example
```ts
let value2: unknown = "Hello";
```

`never` is a type that represents values that wil lnever occur. it is mainly used to denote the return type of functions that always throw an error.
For Example
```ts
function throwError(message: string): never {
      throw new Error(message);
    }
```

| any       | unknown |  never  |
| --------- | ------- | ------- |
|      ![any](https://github.com/user-attachments/assets/dbf1e934-ea68-4df1-82c5-4dd33e5cb934) |    ![unknown](https://github.com/user-attachments/assets/26f6eba1-ab86-48e0-ab9d-6dd0bec57a86) |   ![never](https://github.com/user-attachments/assets/e42cc6ea-3ebd-4eae-b4b4-535d06ea71b2) |


## Union and Intersection types in TypeScript
Union and Intersection types are most powerful tools in TypeScript that allows developers to create complex types from existing ones. Union types let us declear a type that could be one of several types, while intersection types allow us to combine multiple types into one.

For Example

`Union`
```js
type Dog = { type: "dog"; weight: number };
type Cat = { type: "cat"; brokenGlass: number };
type Pet = Dog | Cat;

function describePet(pet: Pet) {
  if (pet.type === "dog") {
    return `Dog Weight is: ${pet.weight}`;
  } else {
    return `Has Broken ${pet.brokenGlass} Glass`;
  }
}
```

`Intersection`
```js
interface Admin {
  adminLevel: number;
}

interface User {
  name: string;
  email: string;
}

type AdminUser = Admin & User;

function describeAdmin(user: AdminUser): string {
  return `${user.name} (${user.email}) is an admin level ${user.adminLevel}`;
}
```

