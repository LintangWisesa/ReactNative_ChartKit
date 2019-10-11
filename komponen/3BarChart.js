import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  Text,
} from 'react-native';
import {
  BarChart,
} from "react-native-chart-kit";

class App extends Component {
  render(){
    return (
        <View style={styles.sectionContainer}>
            <Text>
                3. Bar Chart
            </Text>
            <BarChart
                data={{
                labels: ["Januari", "Februari", "Maret", "April", "Mei", "Juni"],
                datasets: [
                    {
                    data: [
                        Math.random() * 100,
                        Math.random() * 100,
                        Math.random() * 100,
                        Math.random() * 100,
                        Math.random() * 100,
                        Math.random() * 100
                    ]
                    }
                ]
                }}
                width={Dimensions.get("window").width - 50} // from react-native
                height={220}
                yAxisLabel={"Rp"}
                chartConfig={{
                backgroundColor: "yellow",
                backgroundGradientFrom: "yellow",
                backgroundGradientTo: "yellow",
                decimalPlaces: 2, // optional, defaults to 2dp
                color: (opacity = 1) => `black`,
                labelColor: (opacity = 1) => `black`,
                style: {
                    borderRadius: 16
                }
                }}
                bezier
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