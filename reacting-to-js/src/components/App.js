import { Component } from 'react'
import { JaleeDateCount } from './JaleeDateCount'
import '../stylesheets/style.scss'


export class App extends Component {


    constructor(props) {
        super(props)

        this.state = {

        }
    }


    render() {
        return (
            <div className="app">
                <JaleeDateCount />
            </div>
        )
    }
}
