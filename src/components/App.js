import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Utils from '../Utils.js';
import * as actionCreators from '../actions/index';

import Main from './Main';

// Get State
const mapStateToProps = (state) => {
    Utils.isDataFetched(state.posts.items).then( () => {
        return Utils.isDataFetched(state.categories.items);
    }).then( () => {
        return Utils.isDataFetched(state.tags.items);
    }).then( () => {
        return Utils.processPostData(
                state.posts.items, 
                state.categories.items,
                state.tags.items,
            );
    });

    return {
        posts: state.posts,
        categories: state.categories,
        tags: state.tags,
        comments: state.comments,
        pages: state.pages,
        lastCommentAdded: state.lastCommentAdded
    }

}

// Dispatch state via props using actionCreators
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(actionCreators, dispatch);
}

// Connect App component with Main component
const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;