import React, { Component } from 'react';
import { Button, Card, CardBody, CardTitle, CardText } from 'reactstrap';
import { Control, Form, Errors, actions} from 'react-redux-form';
import {increment } from '../redux/actions/ActionCreators'
import { useDispatch } from 'react-redux';

// will check validation
const required = val => val && val.length;
const maxLength = len => val => !val || (val.length <= len);
const minLength = len => val => val && (val.length >= len);



// will display comment when posted
function RenderComments({comments}) {
    const dispatch = useDispatch()

    if (comments) {
        return (
            <div className="col-sm-12">
                <h4>Comments</h4>
                    {
                        comments.map(comment => {
                            return (
                                <div className="container">
                                <div className="row">
                                    <div className="col">
                                        <Card style={{ 
                                            backgroundColor: '#2b2d42',
                                            borderColor: '#fff',
                                            borderRadius: '0.25rem',
                                            padding: '0.5rem 0.5rem 0.5rem',
                                            marginBottom: '20px'
                                            }}
                                            className="container"
                                            >
                                            <CardBody className="row">
                                                <img src="./images/user1.jpg" alt="random" className="col-sm-6"
                                                style ={{
                                                    borderRadius: "50%"
                                                }}
                                                />
                                                <div className="col-sm-6">
                                                <CardTitle tag="h3">{comment.author}</CardTitle>
                                                <CardText className='col'>{comment.text}, <br/>
                                                <p><a onClick={() => dispatch(increment(comment.id))}><i className="fa fa-lg fa-thumbs-o-up zoom" style={{ color: "#16DB93"}}/></a>: {comment.count}</p>
                                                {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}
                                                </CardText> <br/>
                                                </div>
                                            </CardBody>
                                        </Card>
                                    </div>
                                </div>
                            </div>
                            );
                        })
                    }
            </div>
        );
    }
    return <div />;
}



class PostComment extends Component {

    handleSubmit(values) {
        this.props.addComment(this.props.commentId, values.author, values.text, values.date)
        this.props.resetForm()
    }

    render(){
        return(
            <div>
                <Form model="blankForm" className="comment-form" onSubmit={ values => this.handleSubmit(values) } >
                    <div className="form-group">
                        <Control.text
                        model=".author"
                        className="form-control" 
                        placeholder="name"
                        validators={{
                            required, 
                            minLength: minLength(2),
                            maxLength: maxLength(15)
                        }}
                        style={{
                                backgroundColor: "#212d40",
                                color: "white" 
                        }}
                        />
                        <Errors
                        className="text-danger"
                        model=".author"
                        show="touched"
                        component="div"
                        messages={{
                            required: 'Required',
                            minLength: 'Must be at least 2 characters',
                            maxLength: 'Must be 15 characters or less'
                        }}
                        />
                    </div>
                    <div className="form-group">
                        <Control.text
                        model=".text"
                        className="form-control"
                        placeholder="comment" 
                        style={{
                            backgroundColor: "#212d40",
                            color: "white" 
                        }}
                        />
                    </div>
                    <Button className="btn-color"  color="danger" type="submit"><i className="fa fa-envelope-o fa-lg"/> </Button >
                </Form>
            </div>
        )
    }
}

function DisplayComment(props){
    return(
        <div>
            <div className="col">
            <RenderComments
            addComment = {props.addComment}
            comments = {props.comments}
            />
            </div>
            <div className="col">
            <PostComment
            addComment = {props.addComment}
            comments = {props.comments}
            resetForm = {props.resetForm}
            />
            </div>
        </div>
    )
}

export default DisplayComment