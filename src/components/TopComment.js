import React, {Component} from 'react';
import { Card, CardBody, CardTitle, CardText} from 'reactstrap';




export default class TopComment extends Component{

    render(){
        return(
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
                                <CardTitle tag="h3">Adam Arceo</CardTitle>
                                <CardText>What is your guy's favorite food?</CardText>
                            </CardBody>
                        </Card>
                    </div>
                </div>
            </div>
        )
    }
}