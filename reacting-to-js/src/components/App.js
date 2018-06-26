import { Component } from 'react'
import { HomeHeader } from './HomeHeader'
import { HomeContent } from './HomeContent'
import Data from '../data/data.json'
import '../stylesheets/style.scss'

export class App extends Component {


    constructor(props) {
        super(props)
        console.log(this.props)
        this.state = { PageData: Data }
    }



    render() {
        return (
            <div className="app">
                <HomeHeader headerText="Welcome!" />
                <HomeContent contentData={this.state.PageData}/>
            </div>
        )
    }
}
