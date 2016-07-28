import box from '../../Todos/box';
import connect from 'actives-react';

import Counter from './Counter';
import Todo from './Todo';
import TodoList from './TodoList';

box.add('Counter', ({CounterState}) => connect(CounterState)(Counter()));

box.add('Todo', ({TodoState}) => connect(TodoState)(Todo()));
box.add('TodoList', ({TodoListState, Todo}) => connect(TodoListState)(TodoList({Todo})));

export default box;