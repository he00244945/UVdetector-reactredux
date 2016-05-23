export function addCard(item) {
	return{
		type:'ADD_CARD',
		payload:item
	}
}

export function deleteCard(index) {
	return{
		type:'DELETE_CARD',
		payload:index
	}
}
export function getAllData(){
	return function(dispatch){
		fetch('http://opendata.epa.gov.tw/ws/Data/UV/?format=json')
		.then(res=>{
			return res.json()
		})
		.then(json=>{
			dispatch({
				type:'RECEIVE_DATA',
				payload:json
			})
		})
	}
}