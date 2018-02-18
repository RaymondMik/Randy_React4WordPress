import callsHandler from '../data/callsHandler';

/**
 * Receive posts.
 * 
 * @param {Array} posts.
 * @param {Array} categories.
 * @returns {Object} action.
 */
export const receivePosts = (posts, categories) => {
    return {
        type: RECEIVE_POSTS,
        posts,
        categories,
        receivedAt: Date.now()
    }
}

/**
 * Receive categories.
 * 
 * @param {Array} categories.
 * @returns {Object} action.
 */
export const receiveCategories = (categories) => {
    return {
        type: RECEIVE_CATEGORIES,
        categories,
        receivedAt: Date.now()
    }
}

/**
 * Receive tags.
 * 
 * @param {Array} tags.
 * @returns {Object} action.
 */
export const receiveTags = (tags) => {
    return {
        type: RECEIVE_TAGS,
        tags,
        receivedAt: Date.now()
    }
}

/**
 * Receive comments.
 * 
 * @param {Array} comments.
 * @returns {Object} action.
 */
export const receiveComments = (comments) => {
    return {
        type: RECEIVE_COMMENTS,
        comments,
        receivedAt: Date.now()
    }
}

/**
 * Post a comment.
 * 
 * @param {Object} comment.
 * @returns {Object} action.
 */
export const postComment = (comment) => {
    return {
        type: ADD_POST_COMMENT,
        comment,
    }
}

/**
 * Receive pages.
 * 
 * @param {Array} pages.
 * @returns {Object} action.
 */
export const receivePages = (pages) => {
    return {
        type: RECEIVE_PAGES,
        pages,
        receivedAt: Date.now()
    }
}

// thunk action creator fetchPosts
export function fetchPosts() {
    return function (dispatch) {
        return callsHandler.getData('posts').then((json) => {

            dispatch(receivePosts(json)) 

        }).catch(error => {
            throw(error);
        })
    }
}

// thunk action creator fetchCategories
export function fetchCategories() {
    return function (dispatch) {
        return callsHandler.getData('categories').then(json => {

            dispatch(receiveCategories(json))

        }).catch(error => {
            throw(error);
        })
        
      }
}

// thunk action creator fetchTags
export function fetchTags() {
    return function (dispatch) {
        return callsHandler.getData('tags').then(json => {

            dispatch(receiveTags(json))

        }).catch(error => {
            throw(error);
        })
        
      }
}

// thunk action creator fetchComments
export function fetchComments() {
    return function (dispatch) {
        return callsHandler.getData('comments').then(json => {

            dispatch(receiveComments(json))

        }).catch(error => {
            throw(error);
        })
        
      }
}

// thunk action creator fetchAddComment
export function fetchAddComment(postId, name, email, content) {
    return function (dispatch) {
        return callsHandler.postData('comments', postId, name, email, content).then(json => {
        
            dispatch(postComment(json))

        }).then( () => {
            return callsHandler.getData('comments').then(json => {

                dispatch(receiveComments(json))

            })
        }).catch(error => {
            throw(error);
        })
        
      }
}

// thunk action creator fetchPages
export function fetchPages() {
    return function (dispatch) {
        return callsHandler.getData('pages').then(json => {

            dispatch(receivePages(json))
            
        }).catch(error => {
            throw(error);
        })
        
      }
}

// export actions
export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const RECEIVE_PAGES = 'RECEIVE_PAGES';
export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES';
export const RECEIVE_TAGS = 'RECEIVE_TAGS';
export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';
export const ADD_POST_COMMENT = 'ADD_POST_COMMENT';