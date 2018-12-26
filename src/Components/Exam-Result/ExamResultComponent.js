import React, { Component } from 'react';

class ExamResultComponent extends Component {

    render() {
        return (

            <div className="container">
                <div className="row mx-auto">
                    <div className="col-md-3 mx-auto">
                        <form>
                            <div className="form-group">
                                <select className="form-control" required>
                                    <option selected disabled>Select Class</option>
                                    <option value="8th">8th</option>
                                    <option value="9th">9th</option>
                                    <option value="SSC">SSC</option>
                                </select>
                            </div>
                            <button className="btn btn-danger">Show</button>
                        </form>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-md-10 mx-auto">
                        <table className=" table table-striped">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Position</th>
                                    <th>Office</th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Tiger Nixon</td>
                                    <td>System Architect</td>
                                    <td>Edinburgh</td>

                                </tr>
                                <tr>
                                    <td>Garrett Winters</td>
                                    <td>Accountant</td>
                                    <td>Tokyo</td>

                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }

}

export default ExamResultComponent;