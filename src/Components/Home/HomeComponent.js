import React, { Component } from 'react';

import Header from '../../shared/Header';
import Footer from '../../shared/Footer';

class HomeComponent extends Component {

    render() {
        return (
            <h1>HomeComponent</h1>
            // <div className="container">
            //     <div className="row">
            //         <div className="col-md-10">
            //             <Header />
            //         </div>
            //         <div className="row">
            //             <div className="col-md-12">
            //                 {this.props.children}
            //             </div>
            //         </div>
            //     </div>
            //     <Footer />
            // </div>
        );
    }

}

export default HomeComponent;