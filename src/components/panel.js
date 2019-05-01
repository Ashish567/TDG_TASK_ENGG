import React, { Component } from 'react'

export default class Panel extends Component {
    
    render() {
        return (
            <div>
               <h1>Current Position Of Elevator:{this.props.crntpofl}</h1> 
               <h1>Status of elevator:{this.props.stattus}</h1>
               {this.props.pozi > 0 ?
        <h2>
          CLOSE
        </h2>:<h1>OPEN</h1>
      }
               
               
            </div>
        )
    }
}
