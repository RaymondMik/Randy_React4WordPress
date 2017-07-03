import React, {Component} from 'react';
import Utils from '../Utils';
import Loader from './Loader';

class Comments extends Component {
    
    constructor() {
        super()
        this.renderComments = this.renderComments.bind(this);
        this.state = {
            formSubmissionError: false,
            renderNotification: false,
            needModeration: false,
            addCommentError: false
        }
    }

    componentWillReceiveProps() {
        if (this.props.lastCommentAdded.item) {
       
            if (!this.props.lastCommentAdded.error && this.props.lastCommentAdded.item.status === 'hold' ) {
                this.setState({
                    needModeration: true,
                    renderNotification: true
                })
                setTimeout(() => {
                    this.setState({
                        needModeration: false,
                        renderNotification: false
                    })
                }, 1000);
            }

            if (this.props.lastCommentAdded.error) {
                this.setState({
                    formSubmissionError: true,
                    renderNotification: true
                })
                setTimeout(() => {
                    this.setState({
                        formSubmissionError: false,
                        renderNotification: false
                    })
                }, 1000);
            }

        }
              
    }

    renderComments(index) {
        if (this.props.commentsData.items) {
            const commentsData = this.props.commentsData.items;
            const date = Utils.formatDate(commentsData.date);

            let renderHtml = Object.keys(commentsData).map( (index) => {
                let comment = commentsData[index];

                if (comment.post === this.props.postData.id) {
                    return (
                        <div className="comment" key={index}>
                            <span className="comment-avatar-container"><img src={comment.author_avatar_urls[48]} className="comment-avatar"/></span>
                            <span className="comment-author">{comment.author_name}</span>
                            <span className="comment-date">{date}</span>
                            <span
                                className="comment-text"
                                dangerouslySetInnerHTML={{ __html: comment.content.rendered }}
                            />
                        </div>
                    )
                }
            });
            return renderHtml;
        } else {
            return (
                <div className="content">
                    <Loader />
                </div>
            )
        }

    }

    submitCommentForm(e) {
        e.preventDefault();
        
        const postId = this.props.postData.id;
        const name = this.refs.name.value;
        const email = this.refs.email.value;
        const content = this.refs.content.value;

        this.props.postComment(postId, name, email, content);
            
        this.refs.commentForm.reset();

    }

    render() {

        const renderNotification = () => {
            let notificationMsg = '';
            if (this.state.needModeration) { notificationMsg = 'Your comment is awaiting for approval!' }  
            if (this.state.formSubmissionError) { notificationMsg = 'There was an error, try again'; }

            if (this.state.renderNotification) {
                return (
                    <div>
                        <h4>{notificationMsg}</h4>
                    </div>
                ); 
            }
        }

        return (
            <div className="comments-container">

                { this.renderComments() }
                { renderNotification() }

                <form className="commentForm" ref="commentForm" onSubmit={this.submitCommentForm.bind(this)}>
                    <input type="text"  ref="name" placeholder="name" ></input>
                    <input type="email"  ref="email" placeholder="email" ></input>
                    <input type="text"  ref="content" placeholder="comment" ></input>
                    <input type="submit"  hidden></input>
                </form>
            </div>
        )
    }
}

export default Comments;