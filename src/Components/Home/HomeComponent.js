import React, { Component } from 'react';
import './HomeComponent.css';
import axios from 'axios';
import Constants from '../../ServerConstants';
import HttpService from '../../Services/HTTPService';

class HomeComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            comment: '',
            newPost: ''
        }

        this.onLoadHandler = this.onLoadHandler.bind(this);
        this.onLikeHandler = this.onLikeHandler.bind(this);
        this.onUnLikeHandler = this.onUnLikeHandler.bind(this);
        this.onComment = this.onComment.bind(this);
        this.onCommentHandler = this.onCommentHandler.bind(this);
        this.onNewPost = this.onNewPost.bind(this);
        this.onPostHandler = this.onPostHandler.bind(this);
        this.onLoadHandler();
    }

    componentDidMount() {
        window.addEventListener('load', this.onLoadHandler);
    }

    onLoadHandler() {

        const body = {
            "direction": "next",
            "page_size": "15",
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
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    btnComment = (e) => {
        var x = document.getElementById(e.target.value);
        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }
    }

    onLikeHandler(e) {
        const postId = e.target.value;
        const body = {
            "role": "parent",
            "school_id": "1",
            "user_id": "GR343343",
            "post_id": postId,
            "liked": "true"
            // "hasLiked": "true"
        }
        axios.defaults.headers.common['Authorization'] = localStorage.getItem('idToken');
        const url = Constants.likePost;
        HttpService.postRequest(url, body)
            .then(response => {
                if (response.status !== 200) {
                    alert('Error: ' + response);
                } else {
                    console.log("Like ID: ", response.data.id);
                    console.log("Like Message: ", response.data.message);
                    this.onLoadHandler();
                }
            })
            .catch(function (error) {
                console.log(error);
            })
        e.preventDefault();
    }

    onUnLikeHandler(e) {
        const postId = e.target.value;
        const body = {
            "role": "parent",
            "school_id": "1",
            "user_id": "GR343343",
            "post_id": postId,
            "liked": "false"
        }
        axios.defaults.headers.common['Authorization'] = localStorage.getItem('idToken');
        const url = Constants.likePost;
        HttpService.postRequest(url, body)
            .then(response => {
                if (response.status !== 200) {
                    alert('Error: ' + response);
                } else {
                    console.log("Un Like ID: ", response.data.id);
                    console.log("Un Like Message: ", response.data.message);
                    this.onLoadHandler();
                }
            })
            .catch(function (error) {
                console.log(error);
            })
        e.preventDefault();
    }

    onComment = (event) => {
        this.setState({
            comment: event.target.value
        });
    }

    onCommentHandler(e) {
        const postId = e.target.value;
        if (this.state.comment == '') {
            alert('Ennter comment');
        }
        else {
            const body = {
                "role": "parent",
                "school_id": "1",
                "comment": this.state.comment,
                "userId": "GR343343",
                "postId": postId
            }
            console.log("postId: ", postId);
            console.log("comment: ", this.state.comment);
            axios.defaults.headers.common['Authorization'] = localStorage.getItem('idToken');
            const url = Constants.addComment;
            HttpService.postRequest(url, body)
                .then(response => {
                    if (response.status !== 200) {
                        alert('Error: ' + response);
                    } else {
                        this.setState({
                            comment: ''
                        });
                        this.onLoadHandler();
                    }
                })
                .catch(function (error) {
                    console.log(error);
                })
        }
    }

    onNewPost = (e) => {
        this.setState({
            newPost: e.target.value
        });
    }

    onPostHandler() {
        if (this.state.newPost == '') {
            alert('Ennter message for new POst');
        }
        else {
            const body = {
                "commentsDisabled": "false",
                "media": [],
                "postOwnerId": "GR343343",
                "postedGroupId": "1",
                "role": "parent",
                "school_id": "1",
                "text": this.state.newPost,
                "timestamp": ""
            }

            axios.defaults.headers.common['Authorization'] = localStorage.getItem('idToken');
            const url = Constants.createPost;
            HttpService.postRequest(url, body)
                .then(response => {
                    if (response.status !== 200) {
                        alert('Error: ' + response);
                    } else {
                        console.log("New Post Message: ", response.data.message);
                        this.setState({
                            newPost: ''
                        });
                        this.onLoadHandler();
                    }
                })
                .catch(function (error) {
                    console.log(error);
                })
        }
    }

    render() {
        var style = {
            display: "none"
        }
        return (
            <div className="row">
                <div className="col-md-7 mx-auto">
                    <div className="card card-body m-2">
                        {/* <form> */}
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <textarea className="form-control" defaultValue={this.state.newPost} onChange={this.onNewPost} placeholder="Write something here.."></textarea>
                                    </div>
                                </div>
                            </div>
                            <div className="row ml-1">
                                <button className="btn btn-info" onClick={this.onPostHandler}>Post</button>
                            </div>
                        {/* </form> */}
                    </div>
                    {
                        this.state.posts.length > 0 ?
                            <div>
                                {this.state.posts.map((post, index) =>
                                    <div className="card m-2" key={index}>
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
                                            <div className="row text text-justify p-4">
                                                {post.text.trim()}
                                                {/* <br></br>{(post.hasLiked == true) ? <p><br></br>Liked</p> : <p><br></br>Not-Liked</p>} */}
                                            </div>
                                            {
                                                post.media.map((media, index) =>
                                                    <div key={index}>
                                                        {
                                                            (media.type === "video") ?
                                                                <div className="row">
                                                                    <div className="col-md-11 mx-auto">
                                                                        <video width="450" controls>
                                                                            <source src={media.url} type="video/mp4" poster={media.thumbnailUrl} />
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
                                                <div className="d-left">
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
                                                </div>
                                            }
                                            <hr></hr>
                                            <div className="row">
                                                <div className="col-md-8 mx-auto">
                                                    <div className="row">
                                                        <div className="col-md-4">
                                                            {
                                                                (post.hasLiked == true) ?
                                                                    <button type="button" className="btn btn-primary" value={post.postId} onClick={this.onUnLikeHandler}>Like</button> :
                                                                    <button type="button" className="btn btn-light" value={post.postId} onClick={this.onLikeHandler}>Like</button>
                                                            }
                                                        </div>
                                                        <div className="col-md-4">
                                                            <button className="btn  btn-light" value={index} onClick={this.btnComment}>Comment</button>
                                                        </div>
                                                        <div className="col-md-4">
                                                            {
                                                                (post.postReportAbuse.hadReported == true) ?
                                                                    <button className="btn btn-block btn-warning">Reported</button> :
                                                                    <button className="btn btn-block btn-light">Report</button>
                                                            }
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div id={index} style={style}>
                                                <div>
                                                    {
                                                        post.comments.map((comments, index) =>
                                                            <div key={index}>
                                                                {
                                                                    <div className="row text-left mt-2 mb-2">
                                                                        <div className="col-md-11 mx-auto comm">
                                                                            <div className="row text">
                                                                                <span className="text-left">{comments.owner.name}</span>
                                                                            </div>
                                                                            {
                                                                                (post.comments.length > 0) ?
                                                                                    <div className="row card card-body bg-white border-0 p-0">
                                                                                        <div className="row">
                                                                                            <div className="col-md-12 mx-auto">
                                                                                                <input className="form-control m-0" value={comments.comment} readOnly />
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    : null
                                                                            }
                                                                        </div>
                                                                    </div>
                                                                }
                                                            </div>
                                                        )
                                                    }
                                                </div>
                                                {
                                                    (post.comments.length >= 0) ?
                                                        <div className="row card card-body bg-white border-0 p-0  mt-2 mb-2">
                                                            <div className="col-md-12 mx-auto">
                                                                <div className="row">
                                                                    <div className="col-md-10 pl-4 mx-auto">
                                                                        <input className="form-control m-0" id="commentBox" value={this.state.comment} onChange={this.onComment} />
                                                                    </div>
                                                                    <div className="col-md-2 p-0">
                                                                        <div className="row pl-1">
                                                                            <button className="btn btn-primary" value={post.postId} onClick={this.onCommentHandler}>Comment</button>
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
