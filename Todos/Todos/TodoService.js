export default class TodoService {
    constructor() {
        // this.todos = [{
        //     id: 1,
        //     title: 1,
        //     status: false
        // }];

        this.todos = [];

        this.todo = null;
        this.nextId = 1;
    }

    getTodo() {
        return this.todo || {title: '', status: false};
    }

    save(todo) {
        if (todo.id) {
            // nothing
        } else {
            todo.id = this.nextId++;
            todo.title = 'todo-' + todo.id;
            this.add(todo);
            this.todo = null;
        }
    }

    getTodos() {
        return this.todos;
    }

    add(todo) {
        this.todos.push(todo)
    }

    remove(id) {
        let todo = this.get(id);
        todo && this.todos.splice(this.todos.indexOf(todo), 1)
    }

    toggle(id) {
        let todo = this.get(id);
        todo.status = !todo.status;
    }

    get(id) {
        return this.todos.find((todo) => todo.id === id)
    }
}