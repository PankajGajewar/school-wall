import React from 'react';
import { Route, browserHistory } from 'react-router';
import App from './App';
import Login from './Components/Login/LoginComponent';
import Home from './Components/Home/HomeComponent';
import TimeTable from './Components/TimeTable/TimeTableComponent';

import PageNotFound from './Components/PageNotFound/PageNotFoundComponent';

export default (
    <div>
        <Route path="/" history={browserHistory} component={App}>
            <Route path="home" component={Home} />
            <Route path="time-table" component={TimeTable} />
            {/* <Route path="login" component={Login} /> */}
            {/* <Route path="contact" component={ContactUsComponent} />
            <Route path="employee" component={EmployeeComponent} />
            <Route path="register" component={RegistrationComponent} />*/}
            <Route path="*" exact="true" component={PageNotFound} />
        </Route>
    </div>
);
