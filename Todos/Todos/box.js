import {Box} from 'actives';
import connect from 'actives-react';

import Counter from './Counter';
import CounterView from './CounterView';

let box = new Box;

box.add('counter', () => new Counter());

box.add('CounterView', ({counterState}) => connect(counterState)(CounterView()));

box.connect('counterState', 'counter')
    .state(({counter}) => {
        return {
            counter: counter.get()
        }
    })
    .actions(({counter}) => {
        return {
            onUp: () => counter.up(),
            onDown: () => counter.down(),
            onToggle: () => counter.toggle()
        };
    });

export default box;