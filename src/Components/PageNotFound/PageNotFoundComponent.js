import React, { Component } from 'react';
import './PageNotFoundComponent.css';

class PageNotFoundComponent extends Component {

    render() {
        return (
            <div className="row">
                <div className="col-md-10">
                    <div className="card">
                        <div className="card-body">
                            <div className="text-left pl-5">
                                <p className="big">404</p>
                                <p className="normal text-left">
                                    Page Not Found
                            </p>
                            </div>
                            <div className="text-justify p-3">
                                ./src/shared/Header.js
                                Line 4:    'axios' is defined but never used
                                                                   no-unused-vars
                                Line 5:    'Constants' is defined but never used
                                      no-unused-vars
                                Line 6:    'HttpService' is defined but never used
                                no-unused-vars
                                Line 54:  Redundant alt attribute. Screen-readers already announce `img` tags as an image. You don
                                't need to use the words `image`, `photo,` or `picture` (or any specified custom words) in the alt p
                                rop  jsx-a11y/img-redundant-alt
                                ./src/Components/Profile/ProfileComponent.js
                                Line 5:  'browserHistory' is defined but never used  no-unused-vars
                                ./src/index.js
                                Line 7:  'Link' is defined but never used   no-unused-vars
                                Line 10:  'Login' is defined but never used  no-unused-vars
                                ./src/Components/Home/HomeComponent.js
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PageNotFoundComponent;