import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {

    render() {
        return (
            // <footer className="footer pt-3 pb-1">
            <footer>
                <div className="col-md-12">
                    <hr></hr>
                    <a className="h5" href="https://vikhepatil.org/vpmspune/" target="_blank" >&copy; Vikhe Patil Memorial School</a>
                    <br />
                    <p>
                        Making Life Meaningful
                    </p>
                </div>
            </footer>
        );
    }

}

export default Footer;