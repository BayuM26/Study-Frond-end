const UNCOMPLETED_LIST_TODO_ID = "todos";
const COMPLETED_LIST_TODO_ID = "completed-todos"; 
const TODO_ITEMID = "itemId"

function addTodo(){
    const uncompletedListTodoId = document.getElementById(UNCOMPLETED_LIST_TODO_ID);

    const title = document.getElementById('title').value;
    const date = document.getElementById('date').value;

    console.log("todo " +title);
    console.log("timelipes " +date);

    const todo = makeTodo(title ,date);
    const todoObject = composeTodoObject(title, date, false);

    todo[TODO_ITEMID] = todoObject.id;
    todos.push(todoObject);

    uncompletedListTodoId.append(todo);
    updateDataToStorage();
    
}

// membuat tag html dan isinya
    function makeTodo(judul, date, isComplete){
        // membuat tag h2 
            const texttitle = document.createElement("h2");
        // end membuat tag h2
        texttitle.innerText = judul;

        const tanggal = document.createElement("p");
        tanggal.innerText = date;

        // membuat tag div sebagai isi container
        const textConteiner = document.createElement("div");
        textConteiner.classList.add("inner");
        textConteiner.append(texttitle,tanggal);
        // end membuat tag div sebagai isi container

        const container = document.createElement("div");
        container.classList.add("item","shadow");
        if(isComplete){
            container.append(textConteiner,UndoButton(),CreateButtonTrash());
        }else{
            container.append(textConteiner,createCheckButton());
        }

        return container;
    }
// end membuat tag html dan isisnya

function createButton(buttonTypeClass, eventListener){
    const button = document.createElement("button");

    button.classList.add(buttonTypeClass);
    button.addEventListener("click", function(event){
        eventListener(event);
    });

    return button;
}

function addtasktocompleted(taskElement){
    const listComplete = document.getElementById(COMPLETED_LIST_TODO_ID);
    const texttitle = document.querySelector(".inner > h2").innerText;
    const texttimelapst = document.querySelector(".inner > p").innerText;

    const newTodo = makeTodo(texttitle,texttimelapst,true);
    const todo = findTodo(taskElement[TODO_ITEMID]);
    todo.isCompleted = true;
    newTodo[TODO_ITEMID] = todo.id;
    
    listComplete.append(newTodo);
    taskElement.remove();

    updateDataToStorage();
}

function createCheckButton(){
    return createButton("check-button", function(event){
        addtasktocompleted(event.target.parentElement);
    });
}

function taskElementComplete(taskElement){
    const todoPosition = findTodoIndex(taskElement[TODO_ITEMID]);
    todos.splice(todoPosition, 1);

    taskElement.remove();
    updateDataToStorage();
}

function CreateButtonTrash(){
    return createButton("trash-button", function(event){
        taskElementComplete(event.target.parentElement);
    });
}

function undotasktocompleted(taskElement){
    const listunComplete = document.getElementById(UNCOMPLETED_LIST_TODO_ID);
    const texttitle = document.querySelector(".inner > h2").innerText;
    const texttimelapst = document.querySelector(".inner > p").innerText;

    const newTodo = makeTodo(texttitle,texttimelapst,false);
    
    const todo = findTodo(taskElement[TODO_ITEMID]);
    todo.isCompleted = false;
    newTodo[TODO_ITEMID] = todo.id;

    listunComplete.append(newTodo);
    taskElement.remove();

    updateDataToStorage();
}

function UndoButton(){
    return createButton("undo-button", function(event){
        undotasktocompleted(event.target.parentElement);
    });
}