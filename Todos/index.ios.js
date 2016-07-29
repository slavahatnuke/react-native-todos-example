import React from 'react';
import {AppRegistry, StyleSheet} from 'react-native';
import box from './ios/views/box';

import {View} from 'react-native';

let TodosApp = () => {
    return (
        <View style={styles.app}>
            <box.Counter/>
            <box.TodoApp/>
        </View>
    );
};

const styles = StyleSheet.create({
    app: {
        margin: 30
    }
});

AppRegistry.registerComponent('Todos', () => TodosApp);
