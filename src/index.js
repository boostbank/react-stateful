import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {createPartition, createStore, getStore} from '@boostbank/stateful';
import uuid from 'uuid/v4';

const id = uuid();

if(createPartition(id)){
    const store = createStore.onPartition(id);
    console.log(store);
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
