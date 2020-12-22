import React, { Component } from 'react';
import { Button, Card, CardBody, CardTitle, CardText } from 'reactstrap';
import { Control, LocalForm } from 'react-redux-form';

function RenderComments({comments, addComment, commentId}) {
    if (comments) {
        return (
            <div className="col-sm-12">
                <h4>Comments</h4>
                    {
                        comments.map(comment => {
                            return (
                                <div className="container">
                                <div className="row">
                                    <div className="col-sm-12 ">
                                        <Card style={{ 
                                            backgroundColor: '#1982C4',
                                            borderColor: '#fff',
                                            borderRadius: '0.75rem',
                                            padding: '0.5rem 0.5rem 0.5rem',
                                            marginBottom: '20px'
                                            }}>
                                            <CardBody>
                                                <img src="./images/random.jpeg" alt="random" height="50px" />
                                                <CardTitle tag="h3">{comment.author}</CardTitle>
                                                <CardText>{comment.text}</CardText>
                                            </CardBody>
                                        </Card>
                                    </div>
                                </div>
                            </div>
                            );
                        })
                    }
                {/* <PostComment  addComment={addComment} /> */}
            </div>
        );
    }
    return <div />;
}

class PostComment extends Component {

    handleSubmit(values) {
        this.props.addComment(this.props.commentId, values.author, values.text);
        // alert('Current values is: ' + JSON.stringify(values))
    }

    render(){
        return(
            <div>
                <LocalForm className="comment-form" onSubmit={ values => this.handleSubmit(values) }>
                    <div className="form-group">
                        <Control.text
                        model=".author"
                        className="form-control" 
                        placeholder="name" 
                        bsSize="lg" 
                        id="name"/>
                    </div>
                    <div className="form-group">
                        <Control.text
                        model=".text"
                        className="form-control"
                        name="comment" 
                        id="text" 
                        rows= "5"
                        placeholder="comment" 
                        bsSize="lg" />
                    </div>
                    <Button color="primary" type="submit">Submit</Button >
                </LocalForm>
            </div>
        )
    }
}

function DisplayComment(props){
    return(
        <div>
            <div className="row">
            <RenderComments 
            addComment = {props.addComment}
            comments = {props.comments}
            />
            </div>
            <div className="col">
            <PostComment
            addComment = {props.addComment}
            comments = {props.comments}
            />
            </div>
        </div>
    )
}

export default DisplayComment