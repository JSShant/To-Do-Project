//Selectors
const todoInput = document.querySelector(".todo__input");
const todoBtn = document.querySelector(".todo__btn");
const todoList = document.querySelector(".todo__list");

//Event Listeners

todoBtn.addEventListener("click", addTodo);


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