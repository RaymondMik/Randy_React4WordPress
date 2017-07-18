import React from 'react';
import {Link} from 'react-router';
import Parser from 'html-react-parser';

const BlogList = (props) => {
    let imgHtmlTag = '';
    let excerpt = props.postData.excerpt.rendered;
    let parseExcerpt = excerpt ? excerpt.indexOf('<p class="link-more">') : 0;
    let formatedExcerpt = excerpt ? excerpt.substring(0, parseExcerpt) : '';
    let date = props.postData.date;
    let parseDate = date ? date.indexOf('T') : 0;
    let formatedDate = date ? date.substring(0, parseDate) : '';

    if (props.postData.better_featured_image) {
        imgHtmlTag = <img src={props.postData.better_featured_image.media_details.sizes.medium.source_url} alt="Blog" />
    }

    return (
        <div className="row blog-article-list-element">
            <div className="col">
                <article>
                    <h3>{props.postData.title.rendered}</h3>
                    <header>
                        {imgHtmlTag}
                    </header>
                    <h4>Published on: {formatedDate}</h4>
                    <section id="article-excerpt" className="article-content">
                        { Parser(formatedExcerpt) }
                    </section>
                    <footer>
                        <Link to={`blog/${props.postData.slug}`}><button type="button" className="btn btn-outline-primary btn-lg">Read More</button></Link>
                    </footer>
                </article>
            </div>
        </div>
    );
}

export default BlogList;
