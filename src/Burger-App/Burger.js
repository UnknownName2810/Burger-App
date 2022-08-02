import React, { Component } from 'react'
import {connect} from "react-redux";
class Burger extends Component {
  render() {
    return (
      <div className='container mt-5 text-center'>
        <h1 className="text-success">Your Burger</h1>
        <div className="breadTop"></div>
        <div className="breadBottom"></div>

      </div>
    )
  }
}

const mapStateToProps = state => {
  return({

  });
}
export default connect(mapStateToProps)(Burger);