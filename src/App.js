import React, { Component } from 'react';
import './App.css';

import Header from './shared/Header';
import Footer from './shared/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="row">
            <div className="col-md-10">
              <Header />
            </div>
            <div className="row">
              <div className="col-md-12">
                {this.props.children}
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;

// export default (
//   <div>
//     <Router history={browserHistory} routes={Routes}>
//       <Route path="/" component={App}>
//         <IndexRoute component={Home} />
//         <Route path="home" component={Home} />
//         <Route path="time-table" component={TimeTable} />
//       </Route>
//     </Router>
//   </div>
// );
