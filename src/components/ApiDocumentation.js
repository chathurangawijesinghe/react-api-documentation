import React, { Component } from 'react';
import {
    Card, CardImg, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle
} from 'reactstrap';

import { ListGroup, ListGroupItem } from 'reactstrap';
import { FaBeer } from 'react-icons/fa';

const CardStyle = {
    width: '320px',
    display: 'inline-block',
    margin: '0 20px 20px 0'
}

const IconStyle = {
    paddingLeft: '10px'
};

export class ApiDocumentation extends Component {
    static displayName = ApiDocumentation.name;

    render() {
        return (
            <Card style={CardStyle}>
                <FaBeer style={IconStyle} />
                <CardBody>
                    <CardTitle>{this.props.data.title}</CardTitle>
                    <CardSubtitle>{this.props.data.subtitle}</CardSubtitle>
                </CardBody>
                <CardBody>
                    <CardText>{this.props.data.description}</CardText>
                    <ListGroup>
                        {this.props.data.links.map((value, index) => {
                            debugger;
                            return <ListGroupItem><CardLink key={index} href="#">{value}</CardLink></ListGroupItem>
                        })}
                    </ListGroup>
                </CardBody>
            </Card>
        );
    }
}
