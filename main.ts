import inquirer from "inquirer"

let todos = [];

while(true) {
    let input = await inquirer.prompt([
        {
            name:"todoItems",
            message:"Add tasks",
            type:"input",
        },
        
        {
            name:"addMore",
            type:"list",
            choices:["Yes","No"]

        }
     ]);
     const{todoItems,addMore}=input;
     todos.push(todoItems);
     if (addMore == "No"){
         console.log("Todolist:");
     for(let i=0;i<todos.length; i++)
         {console.log(todos[i])}
     
    
     
break;
};

}
