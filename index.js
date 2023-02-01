#! /usr/bin/env node
import inquirer from "inquirer";
let todo = [];
let loop = true;
while (loop) {
    const answers = await inquirer.prompt([
        {
            type: "input",
            name: "TODO",
            message: "What do you want to add in your todo?"
        },
        {
            type: "confirm",
            name: "addmore",
            message: "What do you want to add in your todo?",
            default: false
        }
    ]);
    const { TODO, addmore } = answers;
    console.log(answers);
    loop = addmore;
    if (TODO) {
        todo.push(TODO);
    }
    else {
        console.log("Kindly add valid input");
    }
}
console.log(todo);
if (todo.length > 0) {
    console.log("Your todo list : /n");
    todo.forEach(todo => {
        console.log(todo);
    });
}
else {
    console.log("No todos found");
}
