import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';


class App extends React.Component {
  
  state = {lat: null , errorMessage: ''};

// This funciton gets called only one time when the App component gets rendered for the first time.
  componentDidMount(){
    navigator.geolocation.getCurrentPosition((loc) => this.setState({lat: loc.coords.latitude}),
    (err)=> this.setState({errorMessage: err.message})
    );
  }

  // React says we have to define render!!
  render(){
    if (this.state.lat && !this.state.errorMessage){
      return <SeasonDisplay lat={this.state.lat} />;
    }
    if (!this.state.lat && this.state.errorMessage){
      return <div>Error: {this.state.errorMessage}</div>;
    }
    return <Spinner message='Please allow access to your location'/>;
  }
}

ReactDOM.render(<App/>, document.querySelector('#root'));
