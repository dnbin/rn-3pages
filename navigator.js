import {createStackNavigator, createAppContainer} from 'react-navigation';
import LoginScreen from './components/loginScreen';
// import { SignupScreen } from './components/signupScreen';
// import { MainboardScreen } from './components/mainboardScreen';
const MainNavigator = createStackNavigator({
  Login: {screen: LoginScreen},
//   Profile: {screen: ProfileScreen},
});

const navigator = createAppContainer(MainNavigator);

export default navigator;