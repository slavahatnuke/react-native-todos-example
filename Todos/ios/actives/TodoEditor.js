import React from 'react';
import {View, Text, TouchableHighlight} from 'react-native';

export default () => ({todo = {}, onSave = () => null}) => {
    return <View>
        <Text>Editor:</Text>

        <TouchableHighlight onPress={() => onSave(todo) }>
            <Text>save</Text>
        </TouchableHighlight>
    </View>;
}
