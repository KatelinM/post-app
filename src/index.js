import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {createStore} from "redux";

import './index.sass';
import App from './components/app/App';
import rootReducer from "./components/redux/reducer";

const store = createStore(rootReducer);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
 