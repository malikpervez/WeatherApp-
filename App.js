import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native';
import Forecast from './components/Forecast';
import Weather from './components/Weather'

class WeatherApp extends Component {
  constructor(props){
    super(props);
    this.state = { 
    //setting the state to an empty string while keeping the forecast null 
      zip: "",
      forecast: null
    };
  }
  _handleTextChange = event => {
    //this function handles the text change when typing in a zip
    let zip = event.nativeEvent.text;
    Weather.fetchForecast(zip).then(forecast => {
      this.setState({forecast: forecast})
    })
  }
  render() {
    let content = null;
    if(this.state.forecast !== null) {
      content = (
        <Forecast 
          main = {this.state.forecast.main}
          description = {this.state.forecast.description}
          temp = {this.state.forecast.temp}
        />
      )
    }
  return (
    <View style = {styles.container}>
      <Text style = {styles.welcome}>
        Please Input {this.state.zip}
      </Text>
      <TextInput
        style = {styles.input}
        onSubmitEditing={this._handleTextChange}
      />
    </View>
    )
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  input: {
    fontSize: 20,
    borderWidth: 2,
    padding: 2,
    height: 40,
    width: 100,
    textAlign: 'center'
  },
});

export default WeatherApp;