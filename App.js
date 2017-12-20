import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Image
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
      <Image 
        source={require('./images/tree.jpg')}
        resizeMode='cover'
        style={styles.backdrop}
      >
       </Image>
      <View style={styles.overlay}>
        <View style={styles.row}>
          <Text style = {styles.mainText}>
          Current Weather For
          </Text>
          <View style={styles.zipContainer}>
            <TextInput
              style={[styles.zipcode, styles.mainText]}
              onSubmitEditing={event => this._handleTextChange(event)}
            />
          </View>
        </View>
          {content}
        </View>
     
    </View>
  
    )
  }
}

const baseFontSize = 16;

const styles = StyleSheet.create({ 
  container: { 
    flex: 1, 
    alignItems: "center",
     paddingTop: 30
    
    }, 
    backdrop: { 
      flex: 1, 
      flexDirection: "column" 
    }, 
    overlay: { 
      paddingTop: 5,
      backgroundColor: "#000000", 
      opacity: 0.5, 
      flexDirection: "column", 
      alignItems: "center" 
    
      }, 
    row: { 
      flexDirection: "row", 
      flexWrap: "nowrap", 
      alignItems: "flex-start",
      padding: 30 
      }, 
    zipContainer: {
       height: baseFontSize + 10, 
       borderBottomColor: "#DDDDDD",
       borderBottomWidth: 1, 
       marginLeft: 5,
       marginTop: 3 
      
      }, 
    zipCode: { 
      flex: 1, 
      flexBasis: 1, 
      width: 50, 
      height: baseFontSize,
    },
    mainText: { 
      fontSize: baseFontSize,
      color: "#FFFFFF" 
    }
  });
    
export default WeatherApp;