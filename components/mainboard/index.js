import React from 'react';
import { Text, View } from 'react-native';
import HomeScreen from './home';
import MerchantScreen from './merchants';
import TransactionScreen from './transaction';
import MoreScreen from './more';
import MoreIcon from 'react-native-vector-icons/Foundation';
import Font5Icon from 'react-native-vector-icons/FontAwesome5';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
const MainBoard = createBottomTabNavigator({
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarLabel: "Home",
        tabBarOptions: {
          labelStyle: {
            fontSize: 14,
            margin: 2,
            padding: 0,
          },
        }, 
        tabBarIcon: ({ tintColor }) => (
          <Icon name="home-outline" size={40} color={tintColor} />
        )
      },
    },
    Merchants: {
      screen: MerchantScreen,
      navigationOptions: {
        tabBarLabel: "Merchants",
        tabBarOptions: {
          labelStyle: {
            fontSize: 14,
            margin: 2,
            padding: 0,
          },
        }, 
        tabBarIcon: ({ tintColor }) => (
          <Icon
              name="home-currency-usd"
              size={40}
              color={tintColor} />
        )
      }
      
    },
    Transaction: {
      screen: TransactionScreen,
      navigationOptions: {
        tabBarLabel: "Transaction",
        tabBarOptions: {
          labelStyle: {
            fontSize: 14,
            margin: 2,
            padding: 0,
          },
        }, 
        tabBarIcon: ({ tintColor }) => (
          <Icon
              name="restore-clock"
              size={40}
              color={tintColor} />
        )
      }
    },
    More:  {
      screen: MoreScreen,
      navigationOptions: {
        tabBarLabel: "More",
        tabBarOptions: {
          labelStyle: {
            fontSize: 14,
            margin: 2,
            padding: 0,
          },
        }, 
        tabBarIcon: ({ tintColor }) => (
          <MoreIcon
              name="indent-more"
              size={40}
              color={tintColor} />
        )
      }
    }
  });
  
export default createAppContainer(MainBoard);