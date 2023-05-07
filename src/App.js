import logo from './logo.svg';
import './App.css';
import Coursesales from './Coursesales';
import React,{Component} from 'react';

class App extends Component {
  render(){

  var courses = [{sub: 'DSA', price: 150},{sub: 'OS',price: 160},{sub: 'DBMS',price: 170}]
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       <h2>Welcome to course purchase page</h2>
      </div>
      <Coursesales items={courses}/>
    </div>
  );
}

}

export default App;
