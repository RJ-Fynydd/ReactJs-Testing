import React from 'react';


export default class Footer extends React.Component {

    render() {
        return (
            <footer style={{textAlign: "center"}}>Copyright Potato {new Date().getFullYear()}</footer>
        );
    }
}
