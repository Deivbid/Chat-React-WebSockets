import React, {Component} from 'react'
import Messenger from './Messenger'
import Store from '../store'

export default class App extends Component{

	constructor(props){
		super(props)
		this.state = {
			store:Store
		}
	}

	render(){
		const {store} = this.state
		return(
			<div className="app-wrapper">
				<Messenger store={store}/>
			</div>
		)
	}
}