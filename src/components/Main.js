import React, { Component } from 'react';
import TopComment from './TopComment';
import DisplayComment from './PostComment';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux'
import { addComment } from '../redux/ActionCreators';

const mapStateToProps = state => {
    return {
        comments: state.comments
    }
};

const mapDispatchToProps = {
    addComment: (commentId, author, text) => (addComment(commentId,author,text))
}

class Main extends Component{
    render(){
        return(
            <div className="comment-box">
                <h1>Join the discussion!</h1>
                <TopComment/>
                <DisplayComment
                addComment = {this.props.addComment}
                />
            </div>
        )
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));