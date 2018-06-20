import React, {Component} from 'react'
import Avatar from '../images/profile-default.jpg'

export default class Messenger extends Component{

	constructor(props){
		super(props)

		this.state 				= {
			height: window.innerHeight,
			messages: []
		}

		this._onResize 			= this._onResize.bind(this)
		this.addTestMessages 	= this.addTestMessages.bind(this)
	}

	addTestMessages(){
		let {messages}			= this.state


		for(let i = 0; i < 100; i++)
		{
			let isMe 				= false
			if(i % 2 == 0)
			{
				isMe 				= true
			}			
			const newMsg 			= {
				author: `Author ${i}`,
				body: `The body of message ${i}`,
				avatar: Avatar,
				me: isMe 
			}


			messages.push(newMsg)
		}

		this.setState({messages: messages})
	}

	_onResize(){
		this.setState({
			height: window.innerHeight
		})
	}

	componentWillUnmount(){
		window.removeEventListener('resize', this._onResize)
	}

	componentDidMount(){
		window.addEventListener('resize', this._onResize)
		this.addTestMessages()
	}
	render(){
		const { height, messages } 		= this.state
		const style 			= {
			height: height,

		}
		return(
			<div style={style} className="app-messenger">
				<div className="header">
					<div className="left">
						<div className="actions">
							<button>New Message</button>
						</div>
					</div>
					<div className="content"><h2>Title</h2></div>
					<div className="right">
						<div className="user-bar">
							<div className="profile-name"> David Aparicio </div>
							<div className="profile-image">
								<img src={Avatar} alt="profile" />
							</div>
						</div>
					</div>
				</div>
				
				<div className="main">
					<div className="sidebar-left">
						Left
					</div>

					<div className="content">
						<div className="messages">

							{messages.map((message, index) => {
								return (
									<div key={index} className="message">
										<div className="message-user-image">
											<img src={Avatar} alt="profile" />
										</div>
										
										<div className="message-body">
											<div className="message-author"> David says: </div>
											<div className="message-text">
												<p>Hello There...</p>
											</div>
										</div>
									</div>
								)
							})}
						</div>
					</div>

					<div className="sidebar-right">
						Right
					</div>
				</div>

			</div>
		)
	}
}