console.log("\n--------Install modules without built-in type declarations--------\n")

// Some modules does not have built-in type declarations
// See this example:
// https://www.npmjs.com/package/supertest
// Icon DefinitelyTyped is indicating that this package has TypeScript declarations provided by the separate @types/supertest package

// on page you see that command to install module supertest is:
// npm i supertest

// after executing that command on console you will see:

// added 33 packages, and audited 53 packages in 2s
// 8 packages are looking for funding
//   run `npm fund` for details
// found 0 vulnerabilities

// But this is not enough

// Below code will return an error cause supertest type is unknown:
// import * as supertest from "supertest" // this will return error ⛔

// Could not find a declaration file for module 'supertest'. 'ts-base/node_modules/supertest/index.js' implicitly has an 'any' type.
//   Try `npm i --save-dev @types/supertest` if it exists or add a new declaration (.d.ts) file containing `declare module 'supertest';`ts(7016)

// this error also give us hint how to install types
// Just to use following command:
// `npm i --save-dev @types/supertest`

// or just:
// npm i @types/supertest

// 💡TIP: More info about type you can find here:
// https://www.npmjs.com/package/@types/supertest

// import * as supertest from "supertest" // this is ok ✅ after installing types

console.log("\n--------Uninstall modules--------\n")

// 🧹to uninstall supertest we have to uninstall module and its types:
// npm uninstall supertest
// npm uninstall @types/supertest
