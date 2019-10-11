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
                      name: "Seoul",
                      population: 21500000,
                      color: "rgba(131, 167, 234, 1)",
                      legendFontColor: "white",
                      legendFontSize: 11
                    },
                    {
                      name: "Toronto",
                      population: 2800000,
                      color: "red",
                      legendFontColor: "white",
                      legendFontSize: 11
                    },
                    {
                      name: "Beijing",
                      population: 527612,
                      color: "yellow",
                      legendFontColor: "white",
                      legendFontSize: 11
                    },
                    {
                      name: "New York",
                      population: 8538000,
                      color: "orange",
                      legendFontColor: "white",
                      legendFontSize: 11
                    },
                    {
                      name: "Moscow",
                      population: 11920000,
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