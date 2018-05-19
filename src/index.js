import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {createSubStore} from '@boostbank/stateful/lib/substore';

createSubStore("test");

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
