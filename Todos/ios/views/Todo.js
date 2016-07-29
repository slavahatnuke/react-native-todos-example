import React from 'react';
import {View, Text, TouchableHighlight} from 'react-native';

export default () => ({todo, onToggle, onRemove}) => {
    return <View>
        <Text>{todo.title} [{todo.status ? 'done' : 'wip'}]</Text>

        <TouchableHighlight onPress={() => onRemove(todo.id) }>
            <Text>remove</Text>
        </TouchableHighlight>

        <TouchableHighlight onPress={() => onToggle(todo.id) }>
            <Text>toggle</Text>
        </TouchableHighlight>

        <Text>-----</Text>
    </View>;
}