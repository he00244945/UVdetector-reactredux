import React, { Component } from 'react';

export default class CardForm extends Component {
	constructor(props){
		super(props)
		this.state={
			SiteName:'',
			UVI:0
		}
	}
	render() {
		return (
			<form>
			<input type="text" value={this.state.SiteName} onChange={(event)=>{
				console.log(event.target.value)
				this.setState({SiteName:event.target.value})
			}}/>
			<input type="number" value={this.state.UVI}  onChange={(event)=>{
				console.log(event.target.value)
				this.setState({UVI:event.target.value})
			}}/>
			<button onClick={(event)=>{
				event.preventDefault()
				this.props.submit(this.state);}}>送出</button>
			</form>
		);
	}
}
