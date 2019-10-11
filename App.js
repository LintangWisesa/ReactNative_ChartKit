import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  StatusBar,
} from 'react-native';
import {
  Header,
  Colors,
} from 'react-native/Libraries/NewAppScreen';

import LineChart from './komponen/1LineChart'
import Bezier from './komponen/2BezierLineChart'
import BarChart from './komponen/3BarChart'
import StackBar from './komponen/4StackedBarChart'
import Pie from './komponen/5PieChart'

class App extends Component {
  render(){
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <Header />
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>
            
            <View style={styles.body}>
              
              {/* 1. LineChart */}
              <LineChart/>

              {/* 2. BezierLineChart */}
              <Bezier/>

              {/* 3. BarChart */}
              <BarChart/>

              {/* 4. StackedBarChart */}
              <StackBar/>

              {/* 5. PieChart */}
              <Pie/>

              <View style={{marginVertical:200}}></View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </>
    );
  };
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;