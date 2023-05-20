import React,{Component} from 'react'
import './App.css';
import axios from 'axios'
class App extends Component{
  state={
    advice:""
  }
  componentDidMount(){
    this.fetchQuote();
  }
  fetchQuote=()=>{
    axios.get('https://api.adviceslip.com/advice')
    .then(response=>{
      const {advice} = response.data.slip;
      this.setState({advice})
    }).catch(error=>{
      console.log(error);
    })
  }
  render(){
    return (
      <div className="App">
          <p>
            Random <code>Quote</code> Generator
          </p>
          <button className="btn" onClick={this.fetchQuote}>Generate</button>
          <p className="quote">{this.state.advice}</p>

          <div className='footer'>Made by Feviliya❤️</div>
      </div>
    );
  }
}

export default App;
