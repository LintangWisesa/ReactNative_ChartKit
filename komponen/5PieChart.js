import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  Text,
} from 'react-native';
import {
  PieChart,
} from "react-native-chart-kit";

class App extends Component {
  render(){
    return (
        <View style={styles.sectionContainer}>
            <Text>
                5. Pie Chart
            </Text>
            <PieChart
                data={
                  [
                    {
                      name: "Jawa Barat",
                      population: 48.0,
                      color: "rgba(131, 167, 234, 1)",
                      legendFontColor: "white",
                      legendFontSize: 11
                    },
                    {
                      name: "Jawa Timur",
                      population: 39.2,
                      color: "red",
                      legendFontColor: "white",
                      legendFontSize: 11
                    },
                    {
                      name: "Jawa Tengah",
                      population: 34.2,
                      color: "yellow",
                      legendFontColor: "white",
                      legendFontSize: 11
                    },
                    {
                      name: "Sumatera Utara",
                      population: 14.2,
                      color: "orange",
                      legendFontColor: "white",
                      legendFontSize: 11
                    },
                    {
                      name: "Banten",
                      population: 12.4,
                      color: "green",
                      legendFontColor: "white",
                      legendFontSize: 11
                    }
                  ]
                }
                width={Dimensions.get("window").width - 50} // from react-native
                height={220}
                chartConfig={{
                  color: (opacity = 1) => `white`,
                  labelColor: (opacity = 1) => `white`,
                  style: {
                      borderRadius: 16
                  }
                }}
                backgroundColor="blue"
                accessor="population"
                paddingLeft="15"
                absolute
                style={{
                  marginVertical: 8,
                  borderRadius: 16
                }}
            />
        </View>
    );
  };
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
});

export default App;