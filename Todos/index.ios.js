import React from 'react';
import {AppRegistry, StyleSheet} from 'react-native';
import box from './ios/actives/box';

import {View} from 'react-native';

let TodosApp = () => {
    return (
        <View style={styles.app}>
            <box.Counter/>
            <box.TodoList/>
        </View>
    );
};

const styles = StyleSheet.create({
    app: {
        margin: 30
    }
});

AppRegistry.registerComponent('Todos', () => TodosApp);
