import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay"
import Spinner from "./Spinner"

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

    renderContent(){
        if(this.state.errorMessage && !this.state.lat){
            return <div>return Error: {this.state.errorMessage}</div>
        }
      
        else if(!this.state.errorMessage && this.state.lat){
            // return <div>latitude: {this.state.lat}</div>
            return <SeasonDisplay lat={this.state.lat} />
        }else{
        return <Spinner message="Please accept location request"/>
        }
    }

    render() {
      return (
          <div className="border red">
              {this.renderContent()}
          </div>
      );
    }
}

ReactDOM.render( <
    App / > ,
    document.querySelector('#root')
)