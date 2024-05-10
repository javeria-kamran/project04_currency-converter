import inquirer from "inquirer";
let conversion = {
  PKR: {
    USD: 0.0036,
    GBP: 0.0028,
    PKR: 1,
  },
  GBP: {
    USD: 1.21,
    PKR: 271.79,
    GBP: 1,
  },
  USD: {
    PKR: 225.5,
    GBP: 0.83,
    USD: 1,
  },
};

let answer: {
  from: "PKR" | "USD" | "GBP";
  to: "PKR" | "USD" | "GBP";
  amount: number;
} = await inquirer.prompt([
  {
    type: "list",
    name: "from",
    message: "Enter your currency",
    choices: ["PKR", "USD", "GBP"],
  },
  {
    type: "list",
    name: "to",
    message: "Enter your conversion currency",
    choices: ["PKR", "USD", "GBP"],
  },
  {
    type: "number",
    name: "amount",
    message: "Enter your amount",
  },
]);
let { from, to, amount } = answer;
if (from && to && amount) {
  let result = conversion[from][to] * amount;
  console.log(`Your conversion from ${from} to ${to} = ${result}`);
}
