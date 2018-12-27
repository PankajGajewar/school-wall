import React, { Component } from 'react';
import './App.css';
import Header from './shared/Header';
import Footer from './shared/Footer';

class App extends Component {

  render() {
    return (
      <div className="App">

        <div className="col-md-12">
          <Header />
        </div>
        <div className="row pt-5">
          <div className="col-md-12">
            {this.props.children}
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <Footer />
          </div>
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
