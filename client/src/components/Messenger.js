import React, {Component} from 'react'
import classNames from 'classnames'
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
			if(i % 2 === 0)
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
		
		const {store} = this.props
		const { height } 		= this.state
		const style 			= {
			height: height,

		}
		console.log(store)
		const messages = store.getMessages
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
						<div className="channels">
							<div className="channel">
								<div className="user-image">
									<img src={Avatar} alt="channel-profile" />
								</div>

								<div className="channel-info">
									<h2> Toan, Alexander </h2>
									<p>Hello There....</p>
								</div>
							</div>
						</div>
					</div>

					<div className="content">
						<div className="messages">

							{messages.map((message, index) => {
								return (
									<div key={index} className={classNames('message', {'me': message.me})}>
										<div className="message-user-image">
											<img src={Avatar} alt="profile" />
										</div>
										
										<div className="message-body">
											<div className="message-author"> {message.author} says: </div>
											<div className="message-text">
												<p>{message.body}</p>
											</div>
										</div>
									</div>
								)
							})}
						</div>

						<div className="messenger-input">
							<div className="text-input">
								<textarea placeholder="Write your message here..."/>
							</div>
							<div className="action">
								<button className="send"> Send </button>	
							</div>
						</div>
					</div>

					<div className="sidebar-right">
						<h2 className="title">Members</h2>
						<div className="members">
							<div className="member">
								<div className="user-image">
									<img src={Avatar} alt="image-right" />
								</div>

								<div className="member-info">
									<h2>Toan Nguyen Dinh</h2>
									<p>Joined: 3 days ago.</p>
								</div>
							</div>

							<div className="member">
								<div className="user-image">
									<img src={Avatar} alt="image-right" />
								</div>

								<div className="member-info">
									<h2>Toan Nguyen Dinh</h2>
									<p>Joined: 3 days ago.</p>
								</div>
							</div>							
						</div>
					</div>
				</div>

			</div>
		)
	}
}