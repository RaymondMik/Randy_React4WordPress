import { call, put, takeEvery } from 'redux-saga/effects';
import { getData, postData } from '../data/callsHandler';
import * as actions from '../actions';

function* getPostsData() {
    try {
        yield put(actions.receivePosts());
        const posts = yield call(getData, 'posts?_embed');
        yield put(actions.receivePostsSuccess(posts));
    } catch(err) {
        yield put(actions.receivePostsFailure(err));
    }
}

function* getCategoriesData() {
    try {
        yield put(actions.receiveCategories());
        const categories  = yield call(getData, 'categories');
        yield put(actions.receiveCategoriesSuccess(categories));
    } catch(err) {
        yield put(actions.receiveCategoriesFailure(err));
    }
}

function* getTagsData() {
    try {
        yield put(actions.receiveTags());
        const tags = yield call(getData, 'tags');
        yield put(actions.receiveTagsSuccess(tags));
    } catch(err) {
        yield put(actions.receiveTagsFailure(err));
    }
}

function* getPages() {
    try {
        yield put(actions.receivePages())
        const pages = yield call(getData, 'pages?_embed');
        yield put(actions.receivePagesSuccess(pages))
    } catch(err) {
        yield put(actions.receivePagesFailure(err));
    }
}

function* getComments() {
    try {
        yield put(actions.receiveComments());
        const comments = yield call(getData, 'comments');
        yield put(actions.receiveCommentsSuccess(comments));
    } catch(err) {
        yield put(actions.receiveCommentsFailure(err));
    }
}

function* sendComment({postId, name, email, content}) {
    try {
        const comment = yield call(postData, 'comments', postId, name, email, content);
        yield put(actions.postCommentSuccess(comment));
        yield getComments();
    } catch(err) {
        yield put(actions.postCommentFailure(err));
    }   
}

function* watchSendComment() {
    yield takeEvery(actions.POST_COMMENT, sendComment);
}

// Sagas that will be called when the store is initialised
function* rootSaga() {
    yield getPostsData();
    yield getPages();
    yield getCategoriesData();
    yield getTagsData();
    yield getComments();
    yield watchSendComment();
}

export default rootSaga;