import React from 'react';
import BlogList from './BlogList';
import Loader from './Loader';

const Blog = (props) => {
    // Loading
    if (props.posts.isFetching) {
        return  <Loader />;
    }

    // Network error
    if (props.posts.errors) {
        return (
            <div className="content">
                <h3>There was an error while fetching pages!</h3>
            </div>
        );
    }

    // No posts available
    if (!props.pages.isFetching && !props.pages.items.length) {
        return (
            <div className="content">
                <h3>There are no posts available!</h3>
            </div>
        );
    }

    // Render posts
    if (!props.posts.isFetching && props.posts.items.length) {
        function renderArticles() {
            const posts = props.posts.items;
            return (
                posts.map( (post, i) => {
                    return (
                        <BlogList
                            key={i}
                            postData={post}
                        />
                    );
                })
            );
        }

        return (
            <div className="content">
                <h2>- My Blog -</h2>
                { renderArticles() }
            </div>
        );
    } 
}

export default Blog;
