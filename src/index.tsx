import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import './styles/typeface.css';
import 'react-simple-flex-grid/lib/main.css';
import { App } from 'components';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('ui'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
