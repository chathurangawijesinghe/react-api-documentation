import React, { Component } from 'react';
import { Route, Redirect } from 'react-router';
import { Layout } from './components/Layout';
import Documentation from './components/Documentation';
import Intro from './components/Intro';
import Guide from './components/Guide';
import Reference from './components/Reference';

import './custom.css'



export default class App extends Component {
    static displayName = App.name;

    render() {
        return (
            <Layout>
                <Route exact path='/' render={() => <Redirect to="/developer/documentation" />} />
                <Route exact path='/developer/documentation' component={Documentation} />
                <Route exact path='/developer/en/api/dummy1/intro' component={Intro} />
                <Route exact path='/developer/en/api/dummy1/guide' component={Guide} />
                <Route exact path='/developer/en/api/dummy1/reference' component={Reference} />
            </Layout>
        );
    }
}
