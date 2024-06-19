let userinput=prompt("Enter your choice");
console.log(userinput);
const list=["asd","asdaf"];
console.log(list);

while (userinput!=="quit" && userinput!=="q") {
    if (userinput==='new') {
        let newtask=prompt("Enter the name of your new task");
        list.push(newtask);
        console.log(newtask+" is added to the list");
    }
    else if (userinput==='list') {
        console.log("*********************");
        for (let i=0;i<list.length;i++){
            console.log(`${i}: ${list[i]}`);
        }
        console.log("*********************");
    }
    else if (userinput==='delete') {
        let idx= parseInt(prompt("enter the index of the task that you want to delete"));
        if(!Number.isNaN(idx)){
        const deletedItem= list.splice(idx,1)
        console.log(`${deletedItem} successfully deleted from the list.`);
        }
        else
        console.log("invalid index");
    }
    userinput=prompt("Enter your choice");
}
console.log("Ok ,You have Quit the App. Bye");
