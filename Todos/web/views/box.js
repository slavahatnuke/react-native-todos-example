import box from '../../Todos/box';
import connect from 'actives-react';

import Counter from './Counter';
import Todo from './Todo';
import TodoList from './TodoList';
import TodoEditor from './TodoEditor';
import TodoApp from './TodoApp';

box.add('Counter', ({CounterState}) => connect(CounterState)(Counter()));

box.add('TodoApp', TodoApp);

box.add('Todo', ({TodoState}) => connect(TodoState)(Todo()));
box.add('TodoList', ({TodoListState, Todo}) => connect(TodoListState)(TodoList({Todo})));
box.add('TodoEditor', ({TodoEditorState}) => connect(TodoEditorState)(TodoEditor()));

export default box;