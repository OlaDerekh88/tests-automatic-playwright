// your task:
//
// There are some application setting hidden in module async.helpers
// You can access them ONLY with async functions loadProjectSettings and saveProjectSettings
//
// 1. Use function saveProjectSettings to add setting value:
// -- this function need 2 parameters - key and value - use 'Firefox' and '1'
// -- You can use cheatAndPeekProjectSettings() to check if value was properly added
// -- get return value and display it on console in format: 'Result after save:', result
// 2. Use function loadProjectSettings to read all settings:
// -- load all setting and display them on console (using console.log())
// 3. Write a function with name 'loadValue' to load specific settings value:
// -- loadValue should have one parameter - key
// -- loadValue should return value of that key from settings (from loadProjectSettings)
// 4. Use function 'loadValue' to display value of key 'headless' from settings
// 5. Use function 'loadValue' to display value of key 'Chrome' from settings

// TIP: Use cheatAndPeekProjectSettings to check

// to test your solution in terminal you can run following command:
// npm run ex3-2

import { cheatAndPeekProjectSettings, loadProjectSettings, saveProjectSettings } from "./helpers/async.helpers"

//// TODO:
//// -----------------------HERE PLACE YOUR SOLUTION:-------------------------

// 1:
console.log("1:")
cheatAndPeekProjectSettings()

// 2:
console.log("2:")

// 3:

// 4:
console.log("4:")

// 5:
console.log("5:")

//// -----------------------DON'T MODIFY CODE BELOW!-------------------------
// Here you will find expected result of exercise

// Expected output:
// On console 👀 you should see:

// 1:
// > Peaking Project settings: { headless: '1' }
// > saveProjectSettings...
// Result after save: true
// > Peaking Project settings: { headless: '1', Firefox: '1' }
// 2:
// > loadProjectSettings...
// Result after load: { headless: '1', Firefox: '1' }
// 4:
// > loadProjectSettings...
// headless value: 1
// 5:
// > loadProjectSettings...
// Chrome value: undefined

// Ignore this line - used to be able to redeclare variables in this project
export {}
