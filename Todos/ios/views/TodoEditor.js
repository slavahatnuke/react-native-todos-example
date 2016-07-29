import React, {Component} from 'react';
import {View, Text, TouchableHighlight, TextInput} from 'react-native';

export default () => class TodoEditor extends Component {
    constructor({todo = {}, onSave = () => null}) {
        super({todo});
        this.state = {todo, onSave, edit: Object.assign({}, todo)};
    }

    render() {

        let save = (aTodo) => {
            this.state.onSave(Object.assign({}, this.state.todo, aTodo));
            this.state.edit.title = '';
            this.setState(this.state);
        };

        return (<View>
            <Text>Editor:</Text>

            <TextInput
                style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                onChangeText={(text) => {
                    this.state.edit.title = text;
                    this.setState(this.state);
                }}
                value={this.state.edit.title}
            />

            <TouchableHighlight onPress={() => save(this.state.edit) }>
                <Text>save</Text>
            </TouchableHighlight>
        </View>);
    }
}