function addTodoItem(event) {
  event.preventDefault();
  let fieldValue = document.getElementById("todo-input").value;
  if (fieldValue) {
    // save to array in local storage
    let todoItems = JSON.parse(localStorage.getItem("todoItems")) || [];
    todoItems.push(fieldValue);
    localStorage.setItem("todoItems", JSON.stringify(todoItems));
    // clear input field
    document.getElementById("todo-input").value = "";
  }
  getAllTodoItems();
}

function getAllTodoItems() {
  let todoItems = JSON.parse(localStorage.getItem("todoItems")) || [];
  let todoItemsList = document.getElementById("todo-item-list");
  todoItemsList.innerHTML = "";
  todoItems.map((item, index) => {
    // add item to list and functionallity to delete item
    let li = document.createElement("li");
    li.innerHTML = item;
    li.setAttribute("id", index);
    li.setAttribute("onclick", "deleteTodoItem(this.id)");
    todoItemsList.appendChild(li);
  });
}

function deleteTodoItem(id) {
  let todoItems = JSON.parse(localStorage.getItem("todoItems")) || [];
  todoItems.splice(id, 1);
  localStorage.setItem("todoItems", JSON.stringify(todoItems));
  getAllTodoItems();
}

setTimeout(() => {
  getAllTodoItems();
}, 100);
