import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay"

class App extends React.Component {

        state = { lat: null, errorMessage: '' };

        componentDidMount(){
            // data loading in here, API JSON
            window.navigator.geolocation.getCurrentPosition(
                (position) => {
                    this.setState({ lat: position.coords.latitude})
                },
                (err) => {
                    this.setState({ errorMessage: err.message })
                }
            );
    }
    
 

    componentDidUpdate(){
        console.log('component did update')
    }

    render() {
      
            if(this.state.errorMessage && !this.state.lat){
                return <div>return Error: {this.state.errorMessage}</div>
            }
          
            else if(!this.state.errorMessage && this.state.lat){
                // return <div>latitude: {this.state.lat}</div>
                return <SeasonDisplay lat={this.state.lat} />
            }else{
            return <div>Loading</div>
            }
    }
}

ReactDOM.render( <
    App / > ,
    document.querySelector('#root')
)