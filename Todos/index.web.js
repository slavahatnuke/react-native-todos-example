import React from 'react';
import {render} from 'react-dom';
import box from './web/views/box';

let TodosApp = () => {
    return (
        <div>
            <box.Counter/>
            <box.TodoApp/>
        </div>
    );
};


render(<TodosApp/>, document.getElementById('app'));
