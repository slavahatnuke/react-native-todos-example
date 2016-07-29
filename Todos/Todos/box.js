import {Box} from 'actives';

import CounterService from './CounterService';
import TodoService from './TodoService';

let box = new Box;

// logic
box.add('CounterService', () => new CounterService());
box.add('TodoService', () => new TodoService);

// states
box.connect('CounterState', 'CounterService')
    .state(({CounterService}) => {
        return {
            counter: CounterService.get()
        }
    })
    .actions(({CounterService}) => {
        return {
            onUp: () => CounterService.up(),
            onDown: () => CounterService.down(),
            onToggle: () => CounterService.toggle()
        };
    });


box.connect('TodoEditorState', 'TodoService')
    .state(({TodoService}) => {
        return {
            todo: TodoService.getTodo()
        }
    })
    .actions(({TodoService}) => {
        return {
            onSave: (todo) => TodoService.save(todo)
        }
    });

box.connect('TodoListState', 'TodoService')
    .state(({TodoService}) => {
        return {
            todos: TodoService.getTodos()
        }
    });

box.connect('TodoState', 'TodoService')
    .actions(({TodoService}) => {
        return {
            onRemove: (id) => TodoService.remove(id),
            onToggle: (id) => TodoService.toggle(id)
        }
    });


console.log('box.TodoState', box.TodoState);

export default box;