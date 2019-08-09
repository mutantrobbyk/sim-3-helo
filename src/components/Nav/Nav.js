import React, {Component} from 'react'
import { Link } from "react-router-dom"
import {connect} from 'react-redux'

class Nav extends Component {
    render () {
        // console.log(this.props)
        return (
            <div>
                Nav
                <img src={this.props.profilePic} alt=""/>
                <h5>{this.props.username}</h5>
                <Link to='/dashboard'>
                <button>Home</button>
                </Link>
                <Link to='/post/:postid'>
                <button>New Post</button>
                </Link>
                <Link to='/'>
                <button>Logout</button>
                </Link>
            </div>
        )
    }
}
function mapStateToProps(reduxState) {
    const {username, profilePic} = reduxState
    return {
        username,
        profilePic
    }
}
export default connect(mapStateToProps)(Nav)