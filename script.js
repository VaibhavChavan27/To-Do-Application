const todoInput = document.getElementById("my-input");
const inputContainer = document.querySelector(".todos");

function addTodo() {
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    const todopara = document.createElement("p");
    todopara.innerText = todoInput.value;

    const deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "Delete";
    deleteBtn.setAttribute("onclick", "deleteTodo(this)");


    todoDiv.append(todopara, deleteBtn);
    inputContainer.append(todoDiv);

    todoInput.value = "";
}
function deleteTodo(btn){
    const todoDiv = btn.parentElement;
    inputContainer.removeChild(todoDiv);
}