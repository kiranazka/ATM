#!/usr/bin/env node
import inquirer from "inquirer";
let myBalance = 100000;
let myPin = 6677;
let account = await inquirer.prompt([
    {
        name: "account",
        type: "number",
        message: "Enter your pin number:",
    }
]);
if (account.account === myPin) {
    console.log("Correct pin Enter!");
}
else {
    console.log("wrong pin code");
}
let transaction = await inquirer.prompt([
    {
        name: "operation",
        type: "list",
        message: "Enter your transaction:",
        choices: ["withdraw cash", "deposit funds", "transfer funds", "check account balances", "fastcash"]
    },
]);
if (transaction.operation === "withdraw cash") {
    let amountAnswers = await inquirer.prompt([
        {
            name: "amount",
            type: "number",
            message: "Enter Your Amount",
        }
    ]);
    myBalance -= amountAnswers.amount;
    console.log("your remaing Balance is:" + myBalance);
}
else if (transaction.operation === "check account balances") {
    console.log("your remaing Balance is:" + myBalance);
}
// the project is compelate next step
let depositfunds = await inquirer.prompt([
    {
        name: "funds",
        type: "list",
        message: "Enter your transaction:",
        choices: ["1000", "5000", "10000", "50000"]
    },
]);
if (depositfunds.funds === "myBalance") {
    myBalance -= depositfunds.amount;
    console.log("your remaing Balance is:" + myBalance);
}
// fastcash  
let fastcash = await inquirer.prompt([
    {
        name: "cash",
        type: "list",
        message: "Enter your transaction is fast:",
        choices: ["10000", "5000", "50000", "100000"]
    },
]);
