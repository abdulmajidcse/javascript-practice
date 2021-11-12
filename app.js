let todoList = [
    {
        id: 1,
        title: "My Todo 1",
        note: "Welcome to my new todo 1",
    },
    {
        id: 2,
        title: "My Todo 2",
        note: "Welcome to my new todo 2",
    },
    {
        id: 3,
        title: "My Todo 3",
        note: "Welcome to my new todo 3",
    }
];

function storeTodo() {
    let todoTitle = prompt("Todo Title");
    let todoNote = prompt("Todo Note");
    let message = 'Todo Added!';
    let storeTodoId = 1;
    
    if (todoList.length > 0) {
        let lastTodoItem = todoList[todoList.length - 1];
        storeTodoId = lastTodoItem.id + 1;
    }

    todoList.push({
        id: storeTodoId,
        title: todoTitle,
        note: todoNote
    });

    getTodos();
    alert(message);
}

function editTodo(todoId) {
    let todoTitle = prompt("Todo Title");
    let todoNote = prompt("Todo Note");
    let message = 'Something went wrong to Edit!';
    todoList = todoList.map((todo) => {
        if (todo.id == todoId) {
            todo = {
                id: todoId,
                title: todoTitle ? todoTitle : todo.title,
                note: todoNote ? todoNote : todo.note
            };
            message = 'Todo Edited!';
        }
        return todo;
    });
    getTodos();
    alert(message);
}

function deleteTodo(todoId) {
    if (confirm("Are you sure?")) {
        todoList = todoList.filter((todo) => todo.id != todoId);
        getTodos();
        alert("Todo Deleted!");
    }
}

function getTodos() {
    let todoListDiv = document.querySelector("#todoList");

    if (todoList.length > 0) {
        let todoListOutput = todoList
            .map(
                (todo) =>
                    `<li class="list-group-item">
            <h4>${todo.title}</h4>
            <p>${todo.note}</p>
            <button class="btn btn-sm btn-primary" onclick="editTodo(${todo.id})">Edit</button>
            <button class="btn btn-sm btn-danger" onclick="deleteTodo(${todo.id})">Delete</button>
        </li>`
            )
            .join("");
        todoListDiv.innerHTML = todoListOutput;
    } else {
        todoListDiv.innerHTML = `<li class="list-group-item">No Todo Available!</li>`;
    }
}

getTodos();
