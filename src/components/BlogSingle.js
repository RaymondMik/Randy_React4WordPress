import React from 'react';
import {Link} from 'react-router';
import Loader from './Loader';
import Comments from './Comments';
import Utils from '../Utils';
import Parser from 'html-react-parser';

const BlogSingle = (props) => {

    if (props.posts.isFetching || !props.posts.items) {
        return (
            <div className="content">
                <Loader />
            </div>
        );

    } else {
        let getSlugFromUrl = props.location.pathname.split('blog/');
        let posts = props.posts.items;
        let postIndex;
        let imgHtmlTag = '';

        for (let i in posts) {
            if (getSlugFromUrl[1] === posts[i].slug) {
                postIndex = i;
            }
        }

        const post = posts[postIndex];
        let content = post.content.rendered;
        let date = Utils.formatDate(post.date);

        if (post.better_featured_image) {
            imgHtmlTag = <img src={post.better_featured_image.media_details.sizes.medium.source_url} alt="Blog" role="presentation" />
        }

        return (
            <div className="row blog-article-list-element">
                <div className="col">
                    <article>
                        <h3>{post.title.rendered}</h3>
                        <header>
                            {imgHtmlTag}
                        </header>
                        <h4>Published on: {date}</h4>
                        <section id="article-excerpt" className="article-content">
                            { Parser(content) }
                        </section>

                        <Comments
                            commentsData={props.comments}
                            postData={post}
                            postComment={props.fetchAddComment}
                            lastCommentAdded={props.lastCommentAdded}
                        />

                        <footer>
                            <Link to="/"><button type="button" className="btn btn-outline-primary btn-lg">Take me Home</button></Link>
                        </footer>
                    </article>
                </div>
            </div>
        );
    }
    
}

export default BlogSingle;
