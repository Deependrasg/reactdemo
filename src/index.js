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
		return (<div> <Deep/> <Deep1/> </div>);
	}
}


ReactDOM.render(<Deepsingh/>, document.getElementById('root'));
registerServiceWorker();
// 

function first(name="picachu",data="3000"){
	return <div>
			<h1 className='h1'> "working with function and with {name},{data} is and showing function and data "</h1>
	       <h2>heelll</h2> 
			</div>
	
}




ReactDOM.render(
	first('heee','hadsfadsfl'),
	document.getElementById('root1')
	
)