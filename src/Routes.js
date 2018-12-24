import React from 'react';
import { Route, IndexRedirect, browserHistory } from 'react-router';
import App from './App';
import Login from './Components/Login/LoginComponent';
import Home from './Components/Home/HomeComponent';
import TimeTable from './Components/TimeTable/TimeTableComponent';

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
            </Route>
            {/* <Route path="*" exact="true" component={PageNotFound} /> */}
        </Route>
    </div>
);


// <div>
//     <Route path="/" history={browserHistory} component={App}>
//         <IndexRedirect to="/lead" component={LeadManagement} />
//         <Route path="lead" component={LeadManagement}>
//             <IndexRedirect to="/lead/dashboard" component={LeadDashboard} />
//             <Route path="dashboard" component={LeadDashboard}>
//                 <IndexRedirect to="/lead/dashboard/all" component={AllLeads} />
//                 <Route path="all" component={AllLeads} />
//                 <Route path="new" component={NewLeads} />
//                 <Route path="follow-ups" component={FollowUps} />
//                 <Route path="pending" component={PendingLeads} />
//             </Route>
//             <Route path="campaign" component={CampaignsComponent} />
//             <Route path="stats" component={StatisticsComponent} />
//         </Route>
//         <Route path="employee" component={EmployeeComponent} />
//         <Route path="register" component={RegistrationComponent} />
//     </Route>
//     <Route path="*" exact="true" component={PageNotFoundComponent} />
// </div>