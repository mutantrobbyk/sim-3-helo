import React, {Component} from 'react'

export default class Dashboard extends Component {
    render () {
        return (
            <div>
                Dashboard
                <input type="text" placeholder='search'/>
                <button>Search</button>
                <button>Reset</button>
                
            </div>
        )
    }
}