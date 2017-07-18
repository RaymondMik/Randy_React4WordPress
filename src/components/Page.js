import React from 'react';
import Loader from './Loader';
import NotFound from './NotFound';
import Parser from 'html-react-parser';

const Page = (props) => {
 
    if (props.pages.items) {
        const pages = props.pages.items;

        let renderPage = () => {
            if (pages.length > 0) {
                let getPageFromUrl = props.location.pathname.split('pages/');
                let index;
                Object.keys(pages).map(key => { 
                    if (pages[key].slug === getPageFromUrl[1]) {
                        index = key;
                        return index
                    }
                });

                if (index) {
                    let imgHtmlTag = '';
                    let pageContent = pages[index].content.rendered;

                    if (pages[index].better_featured_image) {
                        imgHtmlTag = <img src={pages[index].better_featured_image.media_details.sizes.large.source_url} className="about-page-image" role="presentation" />
                    }

                    return (
                        <article key={index}>
                            <h2 className="page-title">- {pages[index].title.rendered} -</h2>
                            <header>
                                {imgHtmlTag}
                            </header>
                            <section id="article-excerpt" className="page-content">
                                { Parser(pageContent) }
                            </section>
                            <footer>
                            </footer>
                        </article>
                    )
                } else {
                    return (
                        <NotFound />
                    )
                }

            } else {
                return (
                    <h3>There are no pages available!</h3>
                )
            }
        }
        return (
            <div className="content">
                { renderPage() }
            </div>
        ) 
    } else {
        return (
            <div className="content">
                <Loader />
            </div>
        );
    }

}

export default Page;
