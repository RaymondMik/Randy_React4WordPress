class Utils {

    /**
     * Formats date to a readable human form
     */
    static formatDate(date) {
        let parseDate = date ? date.indexOf('T') : 0;
        let formatedDate = date ? date.substring(0, parseDate) : '';

        return formatedDate;
    }

    static isDataFetched(data) {
        return new Promise(function(resolve) {
            if (data) {
                resolve(data);
            } 
        });
    };

    // dataParser(postData, data, parsedData, parsedItems) {
    //     Object.keys(postData).map( (index) => {
    //         let post = postData[index];

    //         for (let index in postData) {
    //             let item = postData[index];

    //             for (let i in data) {
    //                 if (data[i].id === item) {
    //                     parsedItems.push(data[i]);
    //                 }
    //             }

    //             var parsedData = {...post, parsedItems};
    //         }
    //         parsedData.push(parsedPost);
    //     });

    //     return parsedData;
    // };

    static processData(state, posts, categories, tags) {
        let parsedPosts = [];

        Object.keys(posts).map( (index) => {
            let post = posts[index];

            let parsedCategories = [];
            let parsedTags = [];
            let parsedComments = [];

            // parse Categories
            for (let index in post.categories) {
                let category = post.categories[index];

                for (let i in categories) {
                    if (categories[i].id === category) {
                        parsedCategories.push(categories[i]);
                    }
                }
            }

            // parse tags
            for (let index in post.tags) {
                let tag = post.tags[index];

                for (let i in tags) {
                    if (tags[i].id === tag) {
                        parsedTags.push(tags[i]);
                    }
                }
            }

            let parsedPost = {...post, parsedCategories, parsedTags};

            parsedPosts.push(parsedPost);

        });
        
        state.posts.items = parsedPosts;
    }

}

export default Utils;