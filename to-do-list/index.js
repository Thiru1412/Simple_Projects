var task_list = document.querySelector(".tasks");

addTask = () =>{
    var task_name = document.querySelector(".input-box").value;
    if(task_name.toString().trim().length==0){
        clearBox();
        return;
    }
    var task_div = document.createElement("div");
    var node = document.createElement("h3");
    node.append(task_name.toUpperCase());
    var remove_button = document.createElement("button");
    remove_button.append("Remove");
    remove_button.className = "task-remove-button";
    task_div.className = "task";
    task_div.appendChild(node);
    task_div.appendChild(remove_button);
    task_list.append(task_div);
    clearBox();
    removeFunction();
};

clearBox = () =>{
    document.querySelector(".input-box").value = "";
};

remove = (parent) =>{
    var task_list = document.querySelector(".tasks");
    task_list.removeChild(parent);
};

removeFunction = () =>{
    var remove_buttons = document.querySelectorAll(".task-remove-button");
    remove_buttons.forEach((element)=>{
        element.onclick = () =>{
            remove(element.parentNode);
        }
    });
}




removeFunction();

