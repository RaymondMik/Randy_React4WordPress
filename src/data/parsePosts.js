class getPosts {

    constructor() {
        this.posts = [];

        request({
            method: 'GET',
            headers: {  },
            url: `http://www.ramonmiklus.com/restapi/wp-json/wp/v2/posts`,
            json: true
        }, (req, res) => {
            if (res.status === 200) {
                let posts = JSON.parse(res.response);
                console.log(typeof posts);
                this.parsePostData(posts);
            } else {
                console.log('there was an error while fetching posts');
            }
        });

    }

    parsePostData(postsData) {

        if (postsData) {
            Object.keys(postsData).map( (postData) => {

                let post = postsData[postData];

                // Get taxonomies associated to each post
                let taxonomiesData = postsData[postData]._links['wp:term'];

                let taxonomies = Object.keys(taxonomiesData).map( (taxonomyData) => {
                    let parsedTaxonomies = {};

                    // Get categories and add them parsedTaxonomies array
                    if (taxonomiesData[taxonomyData].taxonomy === 'category') {
                        request({
                            method: 'GET',
                            headers: {},
                            url: taxonomiesData[taxonomyData].href,
                            json: true
                        }, (req, res) => {
                            if (res.status === 200) {
                                let categories = JSON.parse(res.response);
                                parsedTaxonomies.categories = categories;
                            } else {
                                console.log('there was an error while fetching categories');
                            }
                        });
                    }

                    // Get tags and add them parsedTaxonomies array
                    if (taxonomiesData[taxonomyData].taxonomy === 'post_tag') {
                        request({
                            method: 'GET',
                            headers: {},
                            url: taxonomiesData[taxonomyData].href,
                            json: true
                        }, (req, res) => {
                            if (res.status === 200) {
                                let tags = JSON.parse(res.response);
                                parsedTaxonomies.tags = tags;
                            } else {
                                console.log('there was an error while fetching tags');
                            }
                        })
                    }

                    return parsedTaxonomies;

                });

                let commentsData = postsData[postData]._links.replies;
                let comments = Object.keys(commentsData).map( (commentData, index) => {
                    let parsedComments = [];

                    request({
                        method: 'GET',
                        headers: {},
                        url: commentsData[commentData].href,
                        json: true
                    }, (req, res) => {
                        if (res.status === 200) {
                            let comments = JSON.parse(res.response);
                            parsedComments.push(comments);
                        } else {
                            console.log('there was an error while fetching tags');
                        }
                    })

                    return parsedComments;
                });

                // Assign categories, tags and comments to post
                post = {...post, parsedCategories: taxonomies[0].categories};
                post = {...post, parsedTags: taxonomies[1].tags};
                post = {...post, parsedComments: comments[0]};

                // Add post to posts array
                this.posts.push(post);

            });
        }
    }

}

export default getPosts;

