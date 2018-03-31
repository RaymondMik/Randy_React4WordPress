import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { postComment } from '../actions/index';
import * as selectors from '../reducers';
import Main from './Main';

// Get State
const mapStateToProps = (state) => {
    return {
        posts: selectors.selectPosts(state),
        categories: selectors.selectCategories(state),
        tags: selectors.selectTags(state),
        comments: selectors.selectComments(state),
        pages: selectors.selectPages(state),
        apod: selectors.selectApod(state),
        postedComments: selectors.selectPostedComments(state)
    }
}

// Dispatch state via props using actionCreators
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ postComment }, dispatch);
}

// Connect App component with Main component
const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;