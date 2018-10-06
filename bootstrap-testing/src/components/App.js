import React, { Component } from 'react';
import $ from 'jquery';
import '../styles/app.scss';

import Header from '../components/Header';

export default class App extends Component {

    constructor() {
        super();

        this.toggleText = this.toggleText.bind(this)
    }

    toggleText(e) {
        //$('#text').toggle(1000);
    }

    render() {
        return(
            <div>
                <Header />
            </div>
        )
    }
}