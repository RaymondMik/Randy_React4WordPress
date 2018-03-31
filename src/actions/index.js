export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const RECEIVE_POSTS_SUCCESS = 'RECEIVE_POSTS_SUCCESS';
export const RECEIVE_POSTS_FAILURE = 'RECEIVE_POSTS_FAILURE';
export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES';
export const RECEIVE_CATEGORIES_SUCCESS = 'RECEIVE_CATEGORIES_SUCCESS';
export const RECEIVE_CATEGORIES_FAILURE = 'RECEIVE_CATEGORIES_FAILURE';
export const RECEIVE_TAGS = 'RECEIVE_TAGS';
export const RECEIVE_TAGS_SUCCESS = 'RECEIVE_TAGS_SUCCESS';
export const RECEIVE_TAGS_FAILURE = 'RECEIVE_TAGS_FAILURE';
export const RECEIVE_PAGES = 'RECEIVE_PAGES';
export const RECEIVE_PAGES_SUCCESS = 'RECEIVE_PAGES_SUCCESS';
export const RECEIVE_PAGES_FAILURE = 'RECEIVE_PAGES_FAILURE';
export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';
export const RECEIVE_COMMENTS_SUCCESS = 'RECEIVE_COMMENTS_SUCCESS';
export const RECEIVE_COMMENTS_FAILURE = 'RECEIVE_COMMENTS_FAILURE';
export const POST_COMMENT = 'POST_COMMENT';
export const POST_COMMENT_SUCCESS = 'POST_COMMENT_SUCCESS';
export const POST_COMMENT_FAILURE = 'POST_COMMENT_FAILURE';

/**
 * Receive posts.
 * 
 * @returns {Object} action.
 */
export const receivePosts = () => {
    return {
        type: RECEIVE_POSTS,
        sentAt: new Date()
    }
};

/**
 * Posts successfully received.
 * 
 * @param {Array} posts.
 * @returns {Object} action.
 */
export const receivePostsSuccess = (posts) => {
    return {
        type: RECEIVE_POSTS_SUCCESS,
        posts,
        receivedAt: new Date()
    }
};

/**
 * Failed to fetch posts.
 * 
 * @param {Object} errors.
 * @returns {Object} action.
 */
export const receivePostsFailure = (errors) => {
    return {
        type: RECEIVE_POSTS_FAILURE,
        errors,
        receivedAt: new Date()
    }
};

/**
 * Receive categories.
 * 
 * @returns {Object} action.
 */
export const receiveCategories = () => {
    return {
        type: RECEIVE_CATEGORIES,
        receivedAt: new Date()
    }
};

/**
 * Categories successfully received.
 * 
 * @param {Array} categories.
 * @returns {Object} action.
 */
export const receiveCategoriesSuccess = (categories) => {
    return {
        type: RECEIVE_CATEGORIES_SUCCESS,
        categories,
        receivedAt: new Date()
    }
};

/**
 * Failed to fetch categories.
 * 
 * @param {Object} errors.
 * @returns {Object} action.
 */
export const receiveCategoriesFailure = (errors) => {
    return {
        type: RECEIVE_CATEGORIES_FAILURE,
        errors,
        receivedAt: new Date()
    }
};

/**
 * Receive tags.
 * 
 * @returns {Object} action.
 */
export const receiveTags = () => {
    return {
        type: RECEIVE_TAGS,
        receivedAt: new Date()
    }
};

/**
 * Tags successfully received.
 * 
 * @param {Array} tags.
 * @returns {Object} action.
 */
export const receiveTagsSuccess = (tags) => {
    return {
        type: RECEIVE_TAGS_SUCCESS,
        tags,
        receivedAt: new Date()
    }
};

/**
 * Failed to fetch categories.
 * 
 * @param {Object} errors.
 * @returns {Object} action.
 */
export const receiveTagsFailure = (errors) => {
    return {
        type: RECEIVE_TAGS_FAILURE,
        errors,
        receivedAt: new Date()
    }
};

/**
 * Receive comments.
 * 
 * @returns {Object} action.
 */
export const receiveComments = () => {
    return {
        type: RECEIVE_COMMENTS,
        receivedAt: new Date()
    }
};

/**
 * Comments successfully received.
 * 
 * @param {Array} comments.
 * @returns {Object} action.
 */
export const receiveCommentsSuccess = (comments) => {
    return {
        type: RECEIVE_COMMENTS_SUCCESS,
        comments,
        receivedAt: new Date()
    }
};

/**
 * Failed to fetch comments.
 * 
 * @param {Object} errors.
 * @returns {Object} action.
 */
export const receiveCommentsFailure = (errors) => {
    return {
        type: RECEIVE_COMMENTS_FAILURE,
        errors,
        receivedAt: new Date()
    }
};

/**
 * Post a comment. Dispatched in the UI, is watched by Sagas.
 * 
 * @param {number} postId.
 * @param {string} name.
 * @param {string} email.
 * @param {string} content.
 * @returns {Object} action.
 */
export const postComment = (postId, name, email, content) => {
    return {
        type: POST_COMMENT,
        postId, 
        name, 
        email, 
        content
    }
};

/**
 * Comment posted successfully.
 * 
 * @param {Object} response.
 * @returns {Object} action.
 */
export const postCommentSuccess = (response) => {
    return {
        type: POST_COMMENT_SUCCESS,
        response
    }
};

/**
 * Failed to post comment.
 * 
 * @returns {Object} action.
 */
export const postCommentFailure = (error) => {
    return {
        type: POST_COMMENT_FAILURE,
        error
    }
};

/**
 * Receive pages.
 * 
 * @returns {Object} action.
 */
export const receivePages = () => {
    return {
        type: RECEIVE_PAGES,
        receivedAt: new Date()
    }
};

/**
 * Pages successfully received.
 * 
 * @param {Array} pages.
 * @returns {Object} action.
 */
export const receivePagesSuccess = (pages) => {
    return {
        type: RECEIVE_PAGES_SUCCESS,
        pages,
        receivedAt: new Date()
    }
};

/**
 * Failed to fetch pages.
 * 
 * @param {Object} errors.
 * @returns {Object} action.
 */
export const receivePagesFailure = (errors) => {
    return {
        type: RECEIVE_PAGES_FAILURE,
        errors,
        receivedAt: new Date()
    }
};