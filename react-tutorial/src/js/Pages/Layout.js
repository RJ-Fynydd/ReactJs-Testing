import React from 'react';
import { Link } from 'react-router';

import Footer from '../components/Footer';


export default class Layout extends React.Component {

    render() {
        return (
            <div>
                <h1>AmazingNews.net</h1>
                <Link to="archives"><button class="btn">Archives</button></Link>
                <Link to="/"><button class="btn">Featured</button></Link>
                <Link to="settings"><button class="btn">Settings</button></Link>
                {this.props.children}
                <Footer/>
            </div>
        );
    }
}
