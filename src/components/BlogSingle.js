import React from 'react';
import {Link} from 'react-router';
import Loader from './Loader';
import Comments from './Comments';
import NotFound from './NotFound';
import Utils from '../Utils';
import Parser from 'html-react-parser';

const BlogSingle = (props) => {
    // Loading
    if (props.posts.isFetching) {
        return <Loader />;
    }

    // Network error
    if (props.posts.errors) {
        return (
            <div className="content">
                <h3>There was an error while fetching this post!</h3>
            </div>
        );
    }

    // Render post
    if (!props.posts.isFetching && props.posts.items.length) {
        let getSlugFromUrl = props.location.pathname.split('blog/');
        let posts = props.posts.items;
        let post;

        for (let i in posts) {
            if (getSlugFromUrl[1] === posts[i].slug) {
                post = posts[i];
            }
        }

        // If post does not exist
        if (!post) {
            return <NotFound />;
        }

        // if post exists
        const content = post.content.rendered;
        const date = Utils.formatDate(post.date);
        let imgHtmlTag = '';

        // display post featured image
        if (post._embedded['wp:featuredmedia'] && post._embedded['wp:featuredmedia'][0].media_details.sizes.medium) {
            imgHtmlTag = <img src={post._embedded['wp:featuredmedia'][0].media_details.sizes.medium.source_url} alt="Blog" />
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
                            postComment={props.postComment}
                            postedComments={props.postedComments}
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
