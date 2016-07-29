import React from 'react';
import {View, Text, TouchableHighlight} from 'react-native';

export default ({Todo}) => ({todos = []}) => {
    return <View>
        <Text>{todos.length ? 'Todos:' : 'No todos'}</Text>
        <View>
            {todos.map((todo) => <Todo key={todo.id} todo={todo}/>)}
        </View>
    </View>;
}