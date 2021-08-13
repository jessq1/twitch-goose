import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'
import NavBar from '../../components/NavBar/NavBar'
import Signup from '../Signup/Signup'
import Login from '../Login/Login'
import Landing from '../Landing/Landing'
import * as authService from '../../services/authService'
import * as profileAPI from '../../services/profileService'
import ProfileList from '../ProfileList/ProfileList'
import ProfileDetails from '../ProfileDetails/ProfileDetails'

import {createTheme, ThemeProvider} from '@material-ui/core'
import { orange } from '@material-ui/core/colors'


const theme = createTheme({
	palette:{
		primary:{
			main:'#fafafa'
		},
		secondary: orange,
	}
})

class App extends Component {
	state = {
		user: authService.getUser(),
		userProfile: null
	}

	handleLogout = () => {
		authService.logout()
		this.setState({ user: null, userProfile: null })
		this.props.history.push('/')
	}

	handleSignupOrLogin = async () => {
		this.setState({ user: authService.getUser(), userProfile: await profileAPI.getUserProfile() })
	}

	handleAddFriend = async friendId => {
		const updatedProfile = await profileAPI.friend(friendId)
		this.setState({ userProfile: updatedProfile })
	}

	handleRemoveFriend = async friendId => {
		const updatedProfile = await profileAPI.unfriend(friendId)
		this.setState({ userProfile: updatedProfile })
	}

	async componentDidMount() {
		if (!this.state.userProfile){
			const userProfile = await profileAPI.getUserProfile()
			this.setState({ userProfile })
		}
	}

	render() {
		const { user } = this.state
		return (
			<>
			<ThemeProvider theme={theme}>
				<NavBar user={user} handleLogout={this.handleLogout} history={this.props.history} />
				<Route exact path='/'>
          			<Landing user={user} />
        		</Route>
				<Route exact path='/signup'>
          			<Signup history={this.props.history} handleSignupOrLogin={this.handleSignupOrLogin}/>
        		</Route>
				<Route exact path='/login'>
          			<Login handleSignupOrLogin={this.handleSignupOrLogin} history={this.props.history}/>
        		</Route>
				<Route 
					exact path='/profile'
					render={({ location })=> 
						authService.getUser() ?
						<ProfileDetails
							location={location}
							userProfile={this.userProfile}
						/> : <Redirect to='/login' />
					}
				/>
				
			</ThemeProvider>
			</>
		)
	}
}

export default App
