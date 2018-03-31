import React, {Component} from 'react';
import Utils from '../Utils';
import {Alert} from 'reactstrap';
import DOMPurify from 'dompurify';
import Parser from 'html-react-parser';

class Comments extends Component {
    constructor() {
        super()
        this.renderComments = this.renderComments.bind(this);
        this.state = {
            formSubmissionError: false,
            renderNotification: false,
            needModeration: false
        }
    }

    componentWillReceiveProps(nextProps) {
        const currentPostedComments = this.props.postedComments.items;
        const nextPostedComments = nextProps.postedComments.items;
        
        if (nextPostedComments.length > currentPostedComments.length) {
            const lastPostedComment = nextPostedComments[nextPostedComments.length - 1];

            if (lastPostedComment.status === 'hold' ) {
                this.setState({
                    needModeration: true,
                    renderNotification: true
                })
                setTimeout(() => {
                    this.setState({
                        needModeration: false,
                        renderNotification: false
                    })
                }, 4000);
            }
        }

        if (nextProps.postedComments.error) {
            this.setState({
                formSubmissionError: true,
                renderNotification: true
            })
            setTimeout(() => {
                this.setState({
                    formSubmissionError: false,
                    renderNotification: false
                })
            }, 4000);
        }
              
    }

    renderComments() {
        // No comments available
        if (!this.props.commentsData.isFetching && !this.props.commentsData.items.length) {
            return (
                <div className="content">
                    <h4>Be the first to leave a comment!</h4>
                </div>
            );
        }

        // Render comments
        if (!this.props.commentsData.isFetching && this.props.commentsData.items.length) {
            const commentsData = this.props.commentsData.items;
            const date = Utils.formatDate(commentsData.date);

            let renderHtml = Object.keys(commentsData).map( (index) => {
                let comment = commentsData[index];

                if (comment.post === this.props.postData.id) {
                    return (
                        <div className="comment" key={index}>
                            <span className="comment-avatar-container"><img src={comment.author_avatar_urls[48]} className="comment-avatar" role="presentation"/></span>
                            <span className="comment-author">{comment.author_name}</span>
                            <span className="comment-date">{date}</span>
                            <span className="comment-text">
                                { Parser(comment.content.rendered) }
                            </span>
                        </div>
                    );
                } 

                return '';
            });

            return renderHtml;
        } 
    }

    submitCommentForm(e) {
        e.preventDefault();
        const postId = this.props.postData.id;
        const name = DOMPurify.sanitize(this.refs.name.value);
        const email = DOMPurify.sanitize(this.refs.email.value);
        const content = DOMPurify.sanitize(this.refs.content.value);
        // make network call to post comment
        this.props.postComment(postId, name, email, content);
            
        this.refs.commentForm.reset();
    }

    render() {
        const renderNotification = () => {
            let message = this.state.needModeration ? 'Your comment is awaiting for approval!' : 'There was an error, try again';
            let color = this.state.needModeration ? 'info' : 'danger';
            let displayClass = this.state.renderNotification ? 'show' : '';
      
            return (
                    <Alert className={`comment-notification ${displayClass}`} color={color}>
                        <strong>{message}</strong>
                    </Alert>
                ); 
        }

        return (
            <div className="comments-container">
                <h4> - Discussion - </h4>
                { this.renderComments() }
                { renderNotification() }
                <h4> Leave a comment! </h4>
                <form className="form-group" ref="commentForm" onSubmit={this.submitCommentForm.bind(this)}>
                    <div className="form-group">
                        <input type="text"  ref="name" placeholder="name" className="form-control" ></input>
                    </div>
                    <div className="form-group">
                        <input type="email"  ref="email" placeholder="email" className="form-control" ></input>
                    </div>
                    <div className="form-group">
                        <input type="text"  ref="content" placeholder="comment" className="form-control" ></input>
                    </div>
                    <button type="submit" className="btn btn-outline-primary pull-right">Submit</button>
                </form>
            </div>
        )
    }
}

export default Comments;