function getRandomId(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;

}

export function getTodoList(owner) {
    if (localStorage.getItem(owner) != undefined) {
        let response = JSON.parse(localStorage.getItem(owner));
        return response;
    }
}

export function createTodoItem({ owner, name }) {
    let arr = [];
    if (localStorage.getItem(owner) != null) {
        arr = JSON.parse(localStorage.getItem(owner));
    }
    let id = getRandomId(1000000000000, 9999999999999);
    const obj = { owner, name, done: false, id };
    arr.push(obj)
    localStorage.setItem(owner, JSON.stringify(arr));
    location.reload();
}

export function switchTodoItemDone({ todoItem }) {
    todoItem.done = !todoItem.done;
    const response = getTodoList(todoItem.owner);
    let item = response.find(items => items.id == todoItem.id);
    item.done = !item.done;
    localStorage.setItem(todoItem.owner, JSON.stringify(response));
}

export function deleteTodoItem({ element, todoItem }) {
    if (confirm('Вы уверены?')) {
        element.remove();
    }
    element.remove();
    console.log(todoItem.id)

    const response = getTodoList(todoItem.owner);
    let newArray = response.filter(
        items => items.id != todoItem.id);
    localStorage.setItem(todoItem.owner, JSON.stringify(newArray));
}