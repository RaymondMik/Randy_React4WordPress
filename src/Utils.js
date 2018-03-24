class Utils {
    /**
     * Formats date to a readable human form
     */
    static formatDate(date) {
        let parseDate = date ? date.indexOf('T') : 0;
        let formatedDate = date ? date.substring(0, parseDate) : '';

        return formatedDate;
    }

    /**
     * Formats date to a readable human form
     * 
     * @param data.
     * @returns {Promise}.
     */
    static isDataFetched(data) {
        return new Promise(function(resolve) {
            if (data) {
                resolve(data);
            } 
        });
    };

    /**
     * Assign categories and tags to related posts.
     * 
     * @param {Array} posts.
     * @param {Array} categories.
     * @param {Array} tags.
     * @returns {Array} posts.
    */
    static processPostData(posts, categories, tags) {
        const orderedCategories = {};
        const orderedTags = {};

        // map categories
        categories.forEach((category) => {
            orderedCategories[category.id] = category;
        });

        // map tags
        tags.forEach((tag) => {
            orderedTags[tag.id] = tag;
        });

        // map posts with categories and tags
        posts.forEach( (post, index) => {
            post.parsedCategories = [];
            post.categories.forEach((postCategory) => {
                if (orderedCategories[postCategory]) {
                    post.parsedCategories.push(orderedCategories[postCategory]);
                }
            });

            post.parsedTags = [];
            post.tags.forEach((postTag) => {
                if (orderedTags[postTag]) {
                    post.parsedTags.push(orderedTags[postTag]);
                }
            });
        });
        
        return posts;
    }
}

export default Utils;