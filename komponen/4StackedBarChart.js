import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  Text,
} from 'react-native';
import {
  StackedBarChart,
} from "react-native-chart-kit";

class App extends Component {
  render(){
    return (
        <View style={styles.sectionContainer}>
            <Text>
                4. Stacked Bar Chart
            </Text>
            <StackedBarChart
                data={{
                  labels: ["Test1", "Test2"],
                  legend: ["L1", "L2", "L3"],
                  data: [[60, 60, 60], [30, 30, 60]],
                  barColors: ["#dfe4ea", "#ced6e0", "#a4b0be"]
                }}
                width={Dimensions.get("window").width - 50} // from react-native
                height={220}
                yAxisLabel={"Rp"}
                chartConfig={{
                backgroundColor: "green",
                backgroundGradientFrom: "green",
                backgroundGradientTo: "green",
                decimalPlaces: 2, // optional, defaults to 2dp
                color: (opacity = 1) => `white`,
                labelColor: (opacity = 1) => `white`,
                style: {
                    borderRadius: 16
                }
                }}
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