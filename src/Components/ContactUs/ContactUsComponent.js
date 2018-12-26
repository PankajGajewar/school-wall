import React, { Component } from 'react';
import logo from '../../contact_us.jpg';

class ContactUsComponent extends Component {

    render() {
        return (

            // <div className="row p-5">
                <div className="col-md-12">
                    <div className="row">
                    <div className="offset-md-2 col-md-5 my-auto">
                            <img className="img-fluid" src={logo}  alt="Unable to load image" />
                        </div>
                        <div className="col-md-4 text-left my-auto">
                            <h5 className="text-secondary">Vikhe Patil Memorial School,</h5>
                            <p>
                                Off Senapati Bapat Road,<br></br>
                                Near Patrakar Nagar,<br></br>
                                Pune – 411 016<br></br>
                                Maharashtra (India)<br></br>
                                <br></br>
                                Tel: (020) 25658170<br></br>
                                Fax: (020) 25667190<br></br>
                                Email: admission@vpmspune.org,<br></br>
                                contact@vpmspune.org
                            </p>
                        </div>
                        
                    </div>
                </div>
            // </div>
        );
    }

}

export default ContactUsComponent;