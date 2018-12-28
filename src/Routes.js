import React from 'react';
import { Route, IndexRedirect, browserHistory } from 'react-router';
import App from './App';
import Login from './Components/Login/LoginComponent';
import Home from './Components/Home/HomeComponent';
import TimeTable from './Components/TimeTable/TimeTableComponent';
import ContactUs from './Components/ContactUs/ContactUsComponent';
import ChangePassword from './Components/ChangePassword/ChangePasswordComponent';
import Profile from './Components/Profile/ProfileComponent';
import Leaves from './Components/Leaves/LeavesComponent';
import ExamResult from './Components/Exam-Result/ExamResultComponent';

import Payment from './Components/Payment/PaymentComponent';

import PageNotFound from './Components/PageNotFound/PageNotFoundComponent';

export default (
    <div>
        <Route path="/">
            <IndexRedirect to="login" component={Login} />
            <Route path="login" component={Login} />
            <Route path="home" component={App} />
            <Route path="/" history={browserHistory} component={App}>
                <Route path="dashboard" component={Home} />
                <Route path="time-table" component={TimeTable} />
                <Route path="contact-us" component={ContactUs} />
                <Route path="change-password" component={ChangePassword} />
                <Route path="profile" component={Profile} />
                <Route path="leaves" component={Leaves} />
                <Route path="exam-result" component={ExamResult} />
                <Route path="payment" component={Payment} />
                <Route path="*" exact="true" component={PageNotFound} />
            </Route>
        </Route>
    </div>
);
