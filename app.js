//Selectors
const todoInput = document.querySelector(".todo__input");
const todoBtn = document.querySelector(".todo__btn");
const todoList = document.querySelector(".todo__list");
const filterOptions = document.querySelector(".filter")
//Event Listeners

todoBtn.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
filterOptions.addEventListener("click", filterTodo);


//functions

function addTodo(event){
    //Prevent Form Submit
    event.preventDefault();
    //ToDo Wrapper
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo__wrapper");
    //create li
    const newToDo = document.createElement("li");
    newToDo.innerText = todoInput.value;
    newToDo.classList.add("todo__wrapper--item");
    todoDiv.appendChild(newToDo);
    //create checked button
    const checkedBtn = document.createElement("button");
    checkedBtn.innerHTML = '<i class="fas fa-check"></i>';
    checkedBtn.classList.add("todo__wrapper--check");
    todoDiv.appendChild(checkedBtn);
    //create delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = '<i class="fas fa-trash"></i>';
    deleteBtn.classList.add("todo__wrapper--del");
    todoDiv.appendChild(deleteBtn);
    //Append to the list
    todoList.appendChild(todoDiv);
    //clear input value
    todoInput.value = "";
}

function deleteCheck(event){
    const item = event.target;
    //Delete
    if(item.classList[0] === "todo__wrapper--del"){
        const todo = item.parentElement;
        //Animation
        todo.classList.add("fall");
        todo.addEventListener("transitionend", function(){
            todo.remove();
        })
    }
    //Check
    if(item.classList[0]=== "todo__wrapper--check"){
        const todo = item.parentElement;
        todo.classList.toggle("completed")
    }
}

function filterTodo(e){
    const todos = todoList.childNodes;
    todos.forEach(function(todo){
        console.log(todo);
        switch(e.target.value){
            case "all":
                todo.style.display = "flex";
                break;
            case "completed":
                if(todo.classList.contains("completed")){
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                }
                break;
            case "uncompleted":
                if(todo.classList.contains("completed")){
                    todo.style.display = "none";
                } else {
                    todo.style.display = "flex";
                }
                break;
        }
    });
}