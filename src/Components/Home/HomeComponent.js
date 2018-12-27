import React, { Component } from 'react';
import './HomeComponent.css';
import axios from 'axios';
import Constants from '../../ServerConstants';
import HttpService from '../../Services/HTTPService';

class HomeComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }
        this.onLoadHandler = this.onLoadHandler.bind(this);
        this.onLoadHandler();
        // window.addEventListener('load', this.onLoadHandler);
    }

    componentDidMount() {
        window.addEventListener('load', this.onLoadHandler);
    }

    // componentWillMount() {
    //     window.addEventListener('load', this.onLoadHandler);
    // }

    // componentDidUpdate() {
    //     window.addEventListener('load', this.onLoadHandler);
    // }

    onLoadHandler() {

        const body = {
            "direction": "next",
            "page_size": "10",
            "post_id": "1",
            "role": "parent",
            "school_id": "1",
            "timestamp": "1545887413",
            "user_id": "GR343343"
        }

        axios.defaults.headers.common['Authorization'] = localStorage.getItem('idToken');
        const url = Constants.fetchPosts;
        HttpService.postRequest(url, body)
            .then(response => {
                if (response.status !== 200) {
                    alert('Error: ' + response);
                } else {
                    this.setState(
                        {
                            posts: response.data.posts
                        }
                    )
                }
                // console.log("STATE: ", this.state);
            })
            .catch(function (error) {
                console.log(error);
            })

    }

    render() {
        return (
            <div className="row">
                <div className="col-md-7 mx-auto">

                    {
                        this.state.posts.length > 0 ?
                            <div>
                                {this.state.posts.map((post) =>
                                    <div className="card m-2 ">

                                        {/* <li key={post.postId.toString()}>
                                            {post.postId}    {post.date}
                                        </li> */}
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col-md-2 my-auto">
                                                    <img src={post.postOwner.profilePicture} width="100px" height="100px" alt="Unable to load image" className="p-2" />
                                                </div>
                                                <div className="col-md-8 h4 text-left my-auto">
                                                    {post.postOwner.name} <small className="small">{post.postOwner.role} ({post.postOwner.class})</small><br></br>
                                                    <p className="d-inline border-warning vsmall" id="groupName">Group: {post.postedGroup[0].name}</p><p className="vsmall d-inline"> {post.date}, {post.time}</p>
                                                </div>
                                            </div>
                                            <p className="row text text-justify p-4">
                                                {post.text.trim()}
                                            </p>
                                            {/* {
                                                <p className="d-inine">
                                                    <p className="d-inline">
                                                        {
                                                            (post.likes.length > 0) ? <p className="text-left small">{post.likes.length} Likes
                                                                <p className="d-inline">
                                                                    {
                                                                        (post.comments.length > 0) ? <p className="text-left ">{post.comments.length} Comments
                                                                        <p className="d-inline">
                                                                                {
                                                                                    (post.likes.length > 0) ? <p className="text-left ">{post.likes.length} Likes
                                                                                </p> : null
                                                                                }
                                                                            </p>

                                                                        </p> : null
                                                                    }
                                                                </p>
                                                            </p> : null
                                                        }
                                                    </p>
                                                </p>
                                            } */}
                                            <hr></hr>
                                            <div className="row">
                                                <div className="col-md-8 mx-auto">
                                                    <div className="row">
                                                        <div className="col-md-4">
                                                            {
                                                                (post.likes.length > 0) ?
                                                                    <button className="btn  btn-primary">{post.likes.length} Likes</button> :
                                                                    <button className="btn btn-light">Like</button>
                                                            }
                                                        </div>
                                                        <div className="col-md-4">
                                                            {
                                                                (post.comments.length > 0) ?
                                                                    <button className="btn  btn-secondary">{post.comments.length} Comments</button>
                                                                    // add comment text-area
                                                                    : <button className="btn  btn-light">Comment</button>
                                                            }
                                                        </div>
                                                        <div className="col-md-4">
                                                            {
                                                                (post.postReportAbuse.hasReported == true) ?
                                                                    <button className="btn btn-block btn-warning">Reported</button> :
                                                                    <button className="btn btn-block btn-light">Report</button>
                                                            }
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {
                                                (post.comments.length > 0) ?
                                                    <div className="row">
                                                        <div className="col-md-12 mx-auto comm">
                                                            <span className="small text-left">{post.comments["0"].owner.name}</span>
                                                            <br></br>
                                                            <textarea readOnly name={post.comments["0"].comment} className="rounded">
                                                                {/* <script>
                                                                    document.querySelector('comments').innerHTML = ({post.comments["0"].owner.name} + {post.comments["0"].owner.comment}).toString();
                                                                </script> */}
                                                            </textarea>
                                                        </div>
                                                    </div>
                                                    : null
                                            }
                                        </div>
                                    </div>
                                )}

                            </div>
                            : null
                    }
                </div>

            </div>
        );
    }

}

export default HomeComponent;

{/* <div className="card-body">
    <div className="row">
        <div className="col-md-2">
            <img src={logo} width="50px" height="50px" alt="Unable to load image" />
        </div>
        <div className="col-md-8 h5 text-left my-auto">
            Student Name
                                </div>
        <p className="m-3 text-justify">
            <b>#Goodreview #welldone</b>
            <br></br>
            ./src/shared/Footer.js
              Line 10:  Using target="_blank" without rel="noopener noreferrer" is a security risk: see https://mathiasbynens.github.io/rel-noopener  react/jsx-no-target-blank
            ./src/shared/Header.js
              Line 11:  Redundant alt attribute. Screen-readers already announce `img` tags as an image. You don’t need to use the words `image`, `photo,` or `picture` (or any specified custom words) in the alt prop  jsx-a11y/img-redundant-alt
                                </p>
    </div>
</div> */}