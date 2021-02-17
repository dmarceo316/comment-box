import React, {Component} from 'react';
import { Card, CardBody, CardTitle, CardText} from 'reactstrap';

export default class TopComment extends Component{

    render(){
        return(
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
                            <img src="./images/Adam.jpg" alt="random" height="100px" className="col-sm-6"
                            style ={{
                                borderRadius: "48%",
                                marginTop: "70px"
                            }}
                            />
                            <div className="col-sm-6">
                            <CardTitle tag="h3">Adam Arceo</CardTitle>
                            <CardText>Hi, this app is demonstrating the use of Redux with state management. Feel free to
                                fill out the form below! When submitted, Redux will add a comment to its store, and display the data in a card. The user can 
                                press the like button to increment that particular comment's state. 
                            </CardText>
                            </div>
                        </CardBody>
                    </Card>
                </div>
            </div>
        </div>
        )
    }
}