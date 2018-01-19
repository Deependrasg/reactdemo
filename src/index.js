import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

let object={
	fname:'Client3',
	lname:'Client5'
}

class Deep extends React.Component{
	render(){
		return (<h1> hi {object.fname},{object.lname}</h1>);
	}
}

 let name= 'Deeepndra singh'
class Deep1 extends React.Component{
	render(){
		return (<h1>Heeeld {name}</h1>);
	}
}


class Deepsingh extends React.Component{
	render(){
		return (<h4> <Deep/> <Deep1/> </h4>);
	}
}


ReactDOM.render(<Deepsingh/>, document.getElementById('root'));
registerServiceWorker();
