import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';
// import Home from './Components/Home/HomeComponent';
// import TimeTable from './Components/TimeTable/TimeTableComponent';
import Routes from './Routes';


ReactDOM.render(<Router history = {browserHistory} routes={Routes}>
    {/* <Route path = "/" component = {App}>
       <IndexRoute component = {Home} />
       <Route path = "home" component = {Home} />
       <Route path = "time-table" component = {TimeTable} />
    </Route> */}
 </Router>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
