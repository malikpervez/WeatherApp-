import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

// component renders forecast based on zip code
class Forecast extends Component {
    render(){
        return(
            <View style = {styles.container}>
                <Text style = {styles.bigText}>
                    {this.props.main}
                </Text>
                <Text style = {styles.mainText}>
                    Current condition:
                    {this.props.description}
                </Text>
                <Text style = {styles.bigText}>
                    {this.props.temp}
                </Text>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: { height: 130 },
    bigText: {
        flex: 2,
        fontSize: 20,
        textAlign: "center",
        margin: 10,
        color: "#FFFFFF"
    },
    mainText: {
        flex: 1,
        fontSize: 16,
        textAlign: "center",
        color: "#FFFFFF"
    }
});

export default Forecast;