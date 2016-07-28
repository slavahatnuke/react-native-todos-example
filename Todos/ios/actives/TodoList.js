import React from 'react';
import {View, Text, TouchableHighlight} from 'react-native';

export default ({Todo}) => ({todos = []}) => {
    return <View>
        <Text>Todos:</Text>
        <View>
            {todos.map((todo) => <Todo key={todo.id} todo={todo}/>)}
        </View>
    </View>;
}