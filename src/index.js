import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
//import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import './redux-wallet/css/itemslist.css';

import App from './redux-wallet/components/App';
import store from './redux-wallet/stores/store';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)

//ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
