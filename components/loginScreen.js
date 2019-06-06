import React, {Component} from 'react';
import { StyleSheet } from 'react-native';
import {
    Text,
    Image,
    View,
    TouchableOpacity
} from 'react-native';
export default class LoginScreen extends Component {
    // constructor(props) {
    //     super(props);
    // }
    onPress = () => {
        alert()
    }
    render(){
        const {navigate} = this.props.navigation;
        return (
            <View style={{flex: 1, padding: 20}}>
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <Image source={require('../assets/imgs/top_marker.png')} />
                </View>
                <View style={{flex: 0.8, justifyContent: 'flex-end', alignItems: ''
            }}>
                    <View style={{}}>
                        <Text style={styles.bigTextStyle}>Welcome to</Text>
                        <Text style={styles.bigTextStyle}>the new</Text>
                        <Text style={styles.bigTextStyle}>Wallet Name</Text>
                    </View>
                    <View style={{marginTop: 20}}>
                        <Text style={styles.smallTextStyle}>New Level of Features</Text>
                        <Text style={styles.smallTextStyle}>with new app</Text>
                    </View>
                </View>
                <View style={{flex: 1, justifyContent: 'space-evenly', alignItems: 'center'}}>
                    <TouchableOpacity style={{width: '90%', backgroundColor: '#29272A', borderRadius: 8, padding: 20}}>
                        <Text style={styles.btnTextStyle}>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigate('Signup', {name: 'Jane'})} style={{width: '90%', backgroundColor: '#3581F0', borderRadius: 8, padding: 20}}>
                        <Text style={styles.btnTextStyle}>Become a client</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    bigTextStyle: {
        color: '#29272A',
        fontSize: 30
    },
    smallTextStyle: {
        color: '#BCBCBC',
        fontSize: 18
    },
    btnTextStyle: {
        color: 'white',
        fontSize: 24,
        textAlign: 'center'
    }
});