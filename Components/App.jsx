import React from 'react';
import {connect} from 'react-redux';
import Title from './Title.jsx';
import Card from './card.jsx';
import CardForm from './CardForm.jsx';
import {addCard,deleteCard,getAllData} from'../Actions/appAction';

 class App extends React.Component{
	constructor(props){
		super(props);
		
	}
	componentDidMount() {
		this.props.dispatch(getAllData());
	}
	render(){
	
		var cardList=this.props.cards.map((item,index)=>{
			return (<Card deleteCard={()=>{
				this.props.dispatch(deleteCard(index))
			}} siteName={item.SiteName} UVI={item.UVI}></Card>);
		})
		return (<div>
			<CardForm submit={(item)=>{
			 	this.props.dispatch(addCard(item))
				}}></CardForm>
			 
				<Title text="Hi">
				</Title>
				<div className="cards">
				{cardList}
			    </div>
				</div>
			);
	}
}

export default connect(function(state){
	return{
		cards:state.cards
	}
})(App)