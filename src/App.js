import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import Cardlist from './components/Cardlist'
import Searchbox from './components/Searchbox'

class App extends Component{
  constructor(props) {
    super(props)
  
    this.state = {
       monsters:[],
       Searchfield:''
    }
  }
  
  componentDidMount(){
    fetch('http://jsonplaceholder.typicode.com/users').then(response=>response.json())
    .then(users=>{
      this.setState({
        monsters:users
      })
    })
  }
 handlechange=(e)=>this.setState( { Searchfield:e.target.value } )
  render(){
    const {monsters , Searchfield} = this.state
    const Filteredmonsters=monsters.filter(monster => monster.name.toLowerCase().includes(Searchfield.toLowerCase()))
    return(
      <div className="App">
    <h1>Monster Search</h1>
    <Searchbox placeholder={'seach monseter'} handlechange={this.handlechange} ></Searchbox>
    <Cardlist monsters={Filteredmonsters}></Cardlist>


    </div>
    );
  }
}

export default App;
