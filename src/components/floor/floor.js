import React from 'react';


 class floor extends React.Component {
     state ={
         user_floor: 0
     }
    render() {
      return (
      <div>
        <h1>{this.props.floor}</h1>
        
      </div>
      );
    }
  }

  export default floor;