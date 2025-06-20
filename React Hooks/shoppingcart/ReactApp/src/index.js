// Please do not make any changes in the given template


import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import ShoppingCart from './ShoppingCart';

ReactDOM.render(<ShoppingCart/>, document.getElementById('root'));
serviceWorker.unregister();
