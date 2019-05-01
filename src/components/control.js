import React from 'react';
import Floor from './floor/floor'
import FloorNo from './floorNo';
import Panel from './panel';


 class Control extends React.Component {
     state ={
         user_floor: 0,
         direction: "Direction",
         floorno:0,
         currentposflr:Math.floor(Math.random() * 11)
     }


     handleChange(event) {
        this.setState({user_floor: event.target.value})
      }

      handleFloor(event) {
        this.setState({floorno: event.target.value})
      }
     
    
      changeUpward = () => {
        this.setState({ direction: "UPWARD" });
     };
  
     changeDownward = () => {
      this.setState({ direction: "DOWNWARD" });
   };
     
  


    render() {
      return (
      <div >
        <h1>Control For The User</h1>
        <h1>Current floor:{this.state.user_floor}</h1>
        <h1>Please Input The Floor You Are In Right Now</h1>
        <input type="number" name="floor" value={this.state.user_floor} 
             onChange={this.handleChange.bind(this)}
        />
        
        <Floor floor={this.state.user_floor}/>

        <button onClick={this.changeUpward}>UPWARD</button>
        <br/>
        <button onClick={this.changeDownward}>DOWNWARD</button>
        <h1>Direction:{this.state.direction}</h1>
        <h1>Select the floor you want to go</h1>
        <input type="number" name="floorno" value={this.state.floorno} 
             onChange={this.handleFloor.bind(this)}
        />
        
        <FloorNo floornoo={this.state.floorno}/>


        <br/>
        <br/>
        <br/>
        <h1>Display Panel</h1>
        <Panel
         stattus={this.state.direction}
         pozi={this.state.floorno}
         crntpofl={this.state.currentposflr}
        />

      </div>
      );
    }
  }

  export default Control;