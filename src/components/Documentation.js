import React, { Component } from 'react';
import { Container, Row, CardDeck } from 'reactstrap';
import { ApiDocumentation } from './ApiDocumentation';
import jsondata from './data/data.json';

export default class Documentation extends Component {
    static displayName = Documentation.name;

    constructor(props) {
        super(props);
        this.state = { apis: [], loading: true };
    }

    componentDidMount() {
        this.getAllVideos();
    }

    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <h2>APIs & Services</h2>
                    </Row>
                    <Row>
                        <h4>Access Information on how to use Forge APIs and Services</h4>
                    </Row>
                    {this.state.apis.map((value, index) => {
                        return <ApiDocumentation key={index} data={value} />
                    })}
                </Container>
            </div>
        );
    }

    async getAllVideos() {
        this.setState({ apis: jsondata, loading: false });
    }
}