import React, {Component} from 'react';
import './App.css';
import {connect} from 'react-redux'

class App extends Component { 
  render() {
    return (  
    <div className="App">
    {console.log("insode Render")}
      <div className="col">
       <div><span>A:</span><span>{this.props.a}</span></div>
       <button onClick= {() => this.props.updateA(this.props.b)}>Update A</button>
      </div>
      <div className="col">
      <div><span>B:</span><span>{this.props.b}</span></div>
      <button onClick={() => this.props.updateB(this.props.a)}>Update B</button>
      </div>
    </div>
    )
}
}

const mapStateToProps = (state) => {
  console.log("state", state)
  return {
    a: state.rA.a,
    b: state.rB.b
}
}

const mapDispatchToProps =(dispatch) => {
  return {
    updateA: (b) => dispatch({type:'UPDATE_A', b:b}),
     updateB: (a) => dispatch({type:'UPDATE_B', a:a})
  }
}
export default connect(mapStateToProps, mapDispatchToProps) (App); 
