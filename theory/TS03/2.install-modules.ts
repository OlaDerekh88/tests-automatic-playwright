console.log("\n--------Install modules--------\n")

// Imports in TypeScript works the same way as in JavaScript.

// Lets quickly revise this topic...

// to install new module you have to use command:
// npm i <package-name>
// or:
// npm install <package-name>

// how to find modules and <package-name>?
// modules are available at https://www.npmjs.com/

// lets find module: faker-js
// This module is used to generate random data
// and can be used in tests to generate random names, dates, texts etc.

// https://www.npmjs.com/package/@faker-js/faker

// on page you see that command to install module faker is:
// npm i @faker-js/faker

// 💡TIP: Look at TypeScript icon next to module name.
// TypeScript icon, indicating that this package has built-in type declarations

// after executing that command on console you will see:

// added 1 package, and audited 3 packages in 14s
// 1 high severity vulnerability
// To address all issues (including breaking changes), run:
//   npm audit fix --force

// Run `npm audit` for details.
// 💡TIP: you can run "npm audit fix --force" to fix problems like "1 high severity vulnerability"

// after installation new directory will be created:
// node_modules
// where all downloaded data and modules will be stored

// also new entry will be added to package.json:
// "dependencies": {
//     "@faker-js/faker": "^7.1.0"
// }

// so after installing new module in project, it will be added to package.json with information about its version.
// to check in terminal all installed modules with versions, you can use command:

// npm list

// it should return:

// jt-base@1.0.0 E:\Projects\jt-api\js-base
// └── @faker-js/faker@7.1.0

// how to use installed modules?
// it is also described on modules page:
// https://www.npmjs.com/package/@faker-js/faker

import { faker } from "@faker-js/faker" // TODO: without running "npm i @faker-js/faker", this will return error ⛔

// this will generate random names:
let fullName: string

fullName = faker.person.fullName()

console.log(fullName)

console.log("\n--------Uninstall modules--------\n")

// 🧹how to uninstall/remove modules?
// npm uninstall <package-name>

// so we have to replace <package-name> with package name

// for example, to uninstall @faker-js/faker:
// npm uninstall @faker-js/faker
