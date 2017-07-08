
import callsHandler from '../data/callsHandler';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const RECEIVE_PAGES = 'RECEIVE_PAGES';
export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES';
export const RECEIVE_TAGS = 'RECEIVE_TAGS';
export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';
export const ADD_POST_COMMENT = 'ADD_POST_COMMENT';


/*
    Define actions used in the app
 */

// receive posts
export const receivePosts = (posts, categories) => {
    return {
        type: RECEIVE_POSTS,
        posts,
        categories,
        receivedAt: Date.now()
    }
}

// receive categories
export const receiveCategories = (json) => {
    return {
        type: RECEIVE_CATEGORIES,
        categories: json,
        receivedAt: Date.now()
    }
}

// receive tags
export const receiveTags = (json) => {
    return {
        type: RECEIVE_TAGS,
        tags: json,
        receivedAt: Date.now()
    }
}

// receive comments
export const receiveComments = (json) => {
    return {
        type: RECEIVE_COMMENTS,
        comments: json,
        receivedAt: Date.now()
    }
}

// add comment
export const postComment = (json) => {
    return {
        type: ADD_POST_COMMENT,
        comment: json,
    }
}

// receive pages
export const receivePages = (json) => {
    return {
        type: RECEIVE_PAGES,
        pages: json,
        receivedAt: Date.now()
    }
}


// thunk action creator Posts
export function fetchPosts() {
    return function (dispatch) {
        return callsHandler.getData('posts').then((json) => {

            dispatch(receivePosts(json)) 

        }).catch(error => {
            throw(error);
        })
    }
}

// thunk action creator Categories
export function fetchCategories() {
    return function (dispatch) {
        return callsHandler.getData('categories').then(json => {

            dispatch(receiveCategories(json))

        }).catch(error => {
            throw(error);
        })
        
      }
}

// thunk action creator Categories
export function fetchTags() {
    return function (dispatch) {
        return callsHandler.getData('tags').then(json => {

            dispatch(receiveTags(json))

        }).catch(error => {
            throw(error);
        })
        
      }
}

// thunk action creator Comments
export function fetchComments() {
    return function (dispatch) {
        return callsHandler.getData('comments').then(json => {

            dispatch(receiveComments(json))

        }).catch(error => {
            throw(error);
        })
        
      }
}

// thunk action creator add Comments
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

// thunk action creator Pages
export function fetchPages() {
    return function (dispatch) {
        return callsHandler.getData('pages').then(json => {

            dispatch(receivePages(json))
            
        }).catch(error => {
            throw(error);
        })
        
      }
}



