import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { Globalstyle } from './style'
import { Iconfont } from './static/iconfont/iconfont'


ReactDOM.render(
    <div>
        <Globalstyle/>
        <Iconfont/>
        <App />
    </div>,
    document.getElementById('root')
);

