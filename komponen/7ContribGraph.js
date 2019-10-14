import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  Text,
} from 'react-native';
import {
  ContributionGraph,
} from "react-native-chart-kit";

class App extends Component {
  render(){
    return (
        <View style={styles.sectionContainer}>
            <Text>
                7. Contribution Graph
            </Text>
            <ContributionGraph
                values={
                  [
                    { date: "2017-01-02", count: 1 },
                    { date: "2017-01-03", count: 2 },
                    { date: "2017-01-04", count: 3 },
                    { date: "2017-01-05", count: 4 },
                    { date: "2017-01-06", count: 5 },
                    { date: "2017-01-30", count: 2 },
                    { date: "2017-01-31", count: 3 },
                    { date: "2017-03-01", count: 2 },
                    { date: "2017-04-02", count: 4 },
                    { date: "2017-03-05", count: 2 },
                    { date: "2017-02-30", count: 4 }
                  ]
                }
                endDate={new Date('2017-04-01')}
                numDays={105}
                width={Dimensions.get("window").width - 50} // from react-native
                height={220}
                chartConfig={
                  {
                    backgroundGradientFrom: 'pink',
                    backgroundGradientFromOpacity: 0.5,
                    backgroundGradientTo: 'red',
                    backgroundGradientToOpacity: 0.5,
                    color: (opacity = 1) => `rgba(255, 0, 0, ${opacity})`,
                    strokeWidth: 2, // optional, default 3
                  }
                }
                paddingLeft="15"
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