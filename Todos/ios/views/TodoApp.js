import React from 'react';
import {View} from 'react-native';

export default ({TodoEditor, TodoList}) => () => {
    return <View>
        <TodoEditor/>
        <TodoList/>
    </View>;
}
