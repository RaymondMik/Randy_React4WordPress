import React from 'react';
import Loader from './Loader';
import NotFound from './NotFound';
import Parser from 'html-react-parser';

const Page = (props) => {
    // Loading
    if (props.pages.isFetching) {
        return <Loader />;
    }

    // Network error
    if (props.pages.errors) {
        return (
            <div className="content">
                <h3>There was an error while fetching pages!</h3>
            </div>
        );
    }

    // No pages available
    if (!props.pages.isFetching && !props.pages.items.length) {
        return (
            <div className="content">
                <h3>There are no pages available!</h3>
            </div>
        );
    }

    // Render page
    if (!props.pages.isFetching && props.pages.items.length) {
        const renderPage = () => {
            // get page name [1] from url
            const getPageFromUrl = props.location.pathname.split('pages/');
            const pages = props.pages.items;
            let index;

            // get page content according to url
            Object.keys(pages).map(key => { 
                if (pages[key].slug === getPageFromUrl[1]) {
                    index = key;
                    return index
                } else {
                    return null;
                }
            });

            // If page does not exist
            if (!index) {
                return <NotFound />;
            }
            
            // If page exists
            const pageContent = pages[index].content.rendered;
            let imgHtmlTag = '';
            
            // display page featured image
            if (pages[index]._embedded['wp:featuredmedia'] && pages[index]._embedded['wp:featuredmedia'][0].media_details.sizes.medium) {
                imgHtmlTag = <img src={pages[index]._embedded['wp:featuredmedia'][0].media_details.sizes.medium.source_url} alt="Blog" />
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
        };

        return (
            <div className="content">
                { renderPage() }
            </div>
        ) 
    }
}

export default Page;
