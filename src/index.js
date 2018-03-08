import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import FilterableProductTable from './FilterableProductTable';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<FilterableProductTable />, document.getElementById('root'));
registerServiceWorker();
