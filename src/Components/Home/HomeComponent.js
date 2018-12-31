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
        this.onLikeHandler = this.onLikeHandler.bind(this);
        this.onUnLikeHandler = this.onUnLikeHandler.bind(this);
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
            "page_size": "20",
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

    onLikeHandler(e) {
        console.log("Liked Post: ", e.target.value);
    }

    onUnLikeHandler(e) {
        console.log("UnLiked Post: ", e.target.value);
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-7 mx-auto">

                    {
                        this.state.posts.length > 0 ?
                            <div>
                                {this.state.posts.map((post, index) =>
                                    <div className="card m-2" key={index}>

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
                                            {
                                                post.media.map((media, index) =>
                                                    // <p key={index}>URL {m.url}</p>
                                                    <div key={index}>
                                                    TYPE: {media.type}
                                                        {
                                                            (media.type === "video") ?
                                                                <div className="row">
                                                                    <div className="col-md-11 mx-auto">
                                                                        <video width="450" controls>
                                                                            <source src={media.url} type="video/mp4" poster={media.thumbnailUrl} />
                                                                            {/* <source src="mov_bbb.ogg" type="video/ogg" /> */}
                                                                            Video does not supported.
                                                                        </video>
                                                                    </div>
                                                                </div>
                                                            : null
                                                            (media.type === "image") ?
                                                                <div className="row">
                                                                    <div className="col-md-11 mx-auto">
                                                                        <img src={media.url} width="100px" height="100px"
                                                                            alt="Unable to load image" className="p-2" />
                                                                        Image does not supported.
                                                                    </div>
                                                                </div>
                                                            : null
                                                        }
                                                    </div>
                                                )
                                            }
                                            {
                                                <p className="d-left">
                                                    <span className="d-inline">
                                                        {
                                                            (post.likes.length > 0) ? <p className="text-left small">{post.likes.length} Likes</p> : null
                                                        }
                                                    </span>
                                                    <span className="d-inline">
                                                        {
                                                            (post.comments.length > 0) ? <p className="text-left small"> {post.comments.length} Comments</p> : null
                                                        }
                                                    </span>
                                                    <span className="d-inline">
                                                        {
                                                            (post.postReportAbuse.hasReported == true) ? <p className="text-left small">Reported</p> : null
                                                        }
                                                    </span>
                                                </p>
                                            }
                                            <hr></hr>
                                            <div className="row">
                                                <div className="col-md-8 mx-auto">
                                                    <div className="row">
                                                        <div className="col-md-4">
                                                            {
                                                                (post.hasLiked == true) ?
                                                                    <button type="button" className="btn  btn-primary" value={index} onClick={this.onUnLikeHandler}>Like</button> :
                                                                    <button type="button" className="btn  btn-light" value={index} onClick={this.onLikeHandler}>Like</button>
                                                            }
                                                        </div>
                                                        <div className="col-md-4">
                                                            {
                                                                (post.comments.length > 0) ?
                                                                    <button className="btn  btn-secondary">{post.comments.length} Comment</button>
                                                                    // add comment text-area
                                                                    : <button className="btn  btn-light">Comment</button>
                                                            }
                                                        </div>
                                                        <div className="col-md-4">
                                                            {
                                                                // (post.postReportAbuse.hasReported == true) ?
                                                                (post.likes.length > 0) ?
                                                                    <button className="btn btn-block btn-warning">Reported</button> :
                                                                    <button className="btn btn-block btn-light">Report</button>
                                                            }
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                {
                                                    (post.comments.length > 0) ?
                                                        <div className="row text-left mt-2 mb-2">
                                                            <div className="col-md-11 mx-auto comm">
                                                                <div className="row text">
                                                                    <span className="text-left">{post.comments["0"].owner.name}</span>
                                                                </div>
                                                                {
                                                                    (post.comments.length > 1) ?
                                                                        <div className="row card card-body bg-white border-0 p-0">
                                                                            <div className="row">
                                                                                <div className="col-md-12 mx-auto">
                                                                                    <input className="form-control m-0" value={post.comments["0"].comment} readOnly />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        : null
                                                                }
                                                            </div>
                                                        </div>
                                                        : null
                                                }

                                                {
                                                    (post.comments.length == 0) ?
                                                        <div className="row card card-body bg-white border-0 p-0  mt-2 mb-2">
                                                            <div className="col-md-12 mx-auto">
                                                                <div className="row">
                                                                    <div className="col-md-10 mx-auto">
                                                                        <input className="form-control m-0" />
                                                                    </div>
                                                                    <div className="col-md-2 p-0">
                                                                        <div className="row pl-1">
                                                                            <button className="btn btn-primary">Comment</button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div> : null
                                                }
                                            </div>
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
