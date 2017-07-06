import React, { Component } from 'react';
import BlogList from './BlogList';
import Loader from './Loader';

const Blog = (props) => {
    if (props.posts.items) {
        const posts = props.posts.items;

        function renderArticles() {
            if (posts.length > 0) {
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
            } else {
                return (
                    <h3>There are no posts available!</h3>
                )
            }
        }
        return (
            <div>
                <h2 className="page-title">- My Blog -</h2>
                { renderArticles() }
            </div>
        );
        
    } else {
        return (
            <div>
                <Loader />
            </div>
        )
    }

}

export default Blog;
