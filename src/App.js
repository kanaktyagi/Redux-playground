import React, {Component} from 'react';
import './App.css';
import {connect} from 'react-redux'

class App extends Component { 
  render() {
    return(
      <div className="App">
      <div className="age "><span>Age:{this.props.age}</span></div> 
      <button onClick={this.props.onAgeUp}> Age Up:</button>
      <button onClick={this.props.onAgeDown}> Age Down:</button>
      <div> History:</div>
      <ul>
      {
        this.props.history.map((his) => {
         return( <li key={his.id} onClick={() => this.props.onDelItem(his.id)}>{his.age}</li>)
        })
      }
      </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log("state", state)
  return {
    age: state.age,
    history: state.history,
    delete: state.delete
}
}

const mapDispatchToProps =(dispatch) => {
  return {
    onAgeUp: () => dispatch({type:'AGE_UP', value: 1}),
    onAgeDown: () => dispatch({type:'AGE_DOWN', value:1 }),
    onDelItem: (id) => dispatch({type:'DEL_ITEM', key: id})
  }
}
export default connect(mapStateToProps, mapDispatchToProps) (App); 
