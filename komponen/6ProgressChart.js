import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  Text,
} from 'react-native';
import {
  ProgressChart,
} from "react-native-chart-kit";

class App extends Component {
  render(){
    return (
        <View style={styles.sectionContainer}>
            <Text>
                6. Progress Chart
            </Text>
            <ProgressChart
                data={
                  {
                    labels: ["Andi", "Budi", "Caca"],
                    data: [0.3, 0.6, 0.9]
                  }
                }
                width={Dimensions.get("window").width - 50} // from react-native
                height={220}
                chartConfig={
                  {
                    backgroundGradientFrom: 'purple',
                    backgroundGradientFromOpacity: 1,
                    backgroundGradientTo: 'purple',
                    backgroundGradientToOpacity: 0.5,
                    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
                    strokeWidth: 2, // optional, default 3
                  }
                }
                backgroundColor="green"
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