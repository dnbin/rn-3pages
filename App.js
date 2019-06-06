// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow
//  */

// import React, {Component} from 'react';
// import {Platform, StyleSheet, Text, View} from 'react-native';

// import navigator from './navigator';

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
//   android:
//     'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });

// type Props = {};
// class App extends Component<Props> {
//   render() {
//     return (
//       <navigator />
//       // <View style={styles.container}>
//       //   <Text style={styles.welcome}>to React Native!</Text>
//       //   <Text style={styles.instructions}>To get started, edit App.js</Text>
//       //   <Text style={styles.instructions}>{instructions}</Text>
//       // </View>
//     );
//   }
// }

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //     backgroundColor: '#F5FCFF',
// //   },
// //   welcome: {
// //     fontSize: 20,
// //     textAlign: 'center',
// //     margin: 10,
// //   },
// //   instructions: {
// //     textAlign: 'center',
// //     color: '#333333',
// //     marginBottom: 5,
// //   },
// // });
// export default App = createAppContainer(MainNavigator);
import {createStackNavigator, createAppContainer} from 'react-navigation';
import LoginScreen from './components/loginScreen';
import SignupScreen from './components/signupScreen';
import MainBoard from './components/mainboard/index';

const MainNavigator = createStackNavigator({
  Login: {screen: LoginScreen},
  Signup: {screen: SignupScreen},
  Board: {screen: MainBoard},
});

const App = createAppContainer(MainNavigator);

export default App;