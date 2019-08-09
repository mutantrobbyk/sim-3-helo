import React, {Component} from 'react'
import axios from 'axios'
import {setUser} from '../../ducks/reducer'
import {connect} from 'react-redux'

class Auth extends Component {
    state = {
        username: '',
        password: '',
        profilePic: 'https://images.freeart.com/comp/art-print/fa5579975/old-man-with-a-funny-face.jpg'
    }
    handleChange = e => {
        this.setState({
            [e.target.placeholder]: e.target.value
        })
    }
    register = () => {
        const {username, password, profilePic} = this.state
        axios.post('/auth/register', {username, password, profilePic}).then(res => {
            // console.log(res.data)
            const {username, profilePic} = res.data
            this.props.setUser({username, profilePic})
            this.props.history.push('/dashboard')
        })
        .catch(err => {
            alert('username already in use')
        })
    }
    login = () => {
        const {username, password} = this.state
        // console.log(this.state)
        axios.post('/auth/login', {username, password}).then(res => {
            // console.log(res.data)
            const {username, profile_pic} = res.data
            this.props.setUser({username, profile_pic})
            this.props.history.push('/dashboard')
        })
        // .catch(err => {
        //     alert('Try Again')
        // })
    }
    render () {
        return (
            <div>
                Auth
                <input onChange={e => {this.handleChange(e)}} type="text" placeholder='username' value={this.state.username}/>
                <input onChange={e => {this.handleChange(e)}} type="text" placeholder='password' value={this.state.password}/>
                <button onClick={this.login}>Login</button>
                <button onClick={this.register}>Register</button>
            </div>
        )
    }
}
export default connect(null, {setUser})(Auth)