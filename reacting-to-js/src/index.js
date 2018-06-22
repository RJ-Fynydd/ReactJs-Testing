import React from 'react'
import { render } from 'react-dom'
import { JaleeDateCount } from './components/JaleeDateCount'

window.React = React

render(
    <div>
        {
        (function () {
            var data = [];
        for (var i = 0; i < 20; i++) {
            data.push(<JaleeDateCount index={i} />);
        }
        return data;
    }())
}
    </div>,
    document.getElementById('root')
)
