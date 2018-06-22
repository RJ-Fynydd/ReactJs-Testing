import { Component } from 'react'
import { HomeHeader } from './HomeHeader'
import { HomeContent } from './HomeContent'
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
                <HomeHeader headerText="Welcome!" />
                <HomeContent />
            </div>
        )
    }
}
