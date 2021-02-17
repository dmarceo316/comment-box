import React, { Component } from 'react';
import TopComment from './TopComment';
import DisplayComment from './PostComment';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { actions } from 'react-redux-form';
import { addComment} from '../redux/actions/ActionCreators';

const mapStateToProps = state => {
    return {
        comments: state.comments
    }
};


const mapDispatchToProps = ( dispatch ) => {
    return {
    addComment: (id, author, text, date, count) => dispatch(addComment(id, author, text,  date, count)),
    resetForm: () => dispatch((actions.reset('blankForm')))
    }
}

class Main extends Component{
    render(){
        return(
            <div className="comment-box">
                <h1 className="title">Kourier</h1>
                <TopComment/>
                <DisplayComment
                addComment = {this.props.addComment}
                comments = {this.props.comments}
                resetForm = {this.props.resetForm}
                />
            </div>
        )
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));