import React, {Component} from 'react';
import { StyleSheet } from 'react-native';
import {
    Text,
    Image,
    View,
    TextInput,
    TouchableOpacity
} from 'react-native';
export default class MoreScreen extends Component {
    constructor(props) {
        super(props);
    }
    render(){
        const {navigate} = this.props.navigation;
        return (
            <View style={{flex: 1, paddingLeft: '10%', paddingRight: '10%'}}>
            </View>
        );
    }
}
const styles = StyleSheet.create({

});