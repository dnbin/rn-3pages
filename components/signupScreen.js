import React, {Component} from 'react';
import { StyleSheet } from 'react-native';
import {
    Text,
    Image,
    View,
    TextInput,
    TouchableOpacity
} from 'react-native';
export default class SignupScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            useremail: ''
        }
    }
    render(){
        const {navigate} = this.props.navigation;
        return (
            <View style={{flex: 1, paddingLeft: '10%', paddingRight: '10%'}}>
                <View style={{flex: 3, justifyContent: 'center', alignItems: 'center'}}>
                    <Image source={require('../assets/imgs/top_marker.png')} />
                </View>
                <View style={{flex: 1}}>
                    <Text style={styles.textStyle}>Name</Text>
                    <TextInput style={styles.txtInputStyle} onChangeText={(username) => this.setState({username})} />
                </View>
                <View style={{flex: 1}}>
                    <Text style={styles.textStyle}>Mobile</Text>
                    <TextInput style={styles.txtInputStyle} />
                </View>
                <View style={{flex: 1}}>
                    <Text style={styles.textStyle}>Email</Text>
                    <TextInput style={styles.txtInputStyle} onChangeText={(useremail) => this.setState({useremail})} />
                </View>
                <View style={{flex: 1}}>
                    <Text style={styles.textStyle}>Password</Text>
                    <TextInput secureTextEntry = {true} style={styles.txtInputStyle} />
                </View>
                <View style={{flex: 1}}>
                    <Text style={styles.textStyle}>Confirm password</Text>
                    <TextInput secureTextEntry = {true} style={styles.txtInputStyle} />
                </View>
                <View style={{flex: 2.5, justifyContent: 'center', alignItems: 'center'}}>
                    <TouchableOpacity onPress={() => navigate('Board', {username: this.state.username, useremail: this.state.useremail})} style={{width: '100%', backgroundColor: '#3581F0', borderRadius: 8, padding: 20}}>
                        <Text style={styles.btnTextStyle}>Become a client</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    btnTextStyle: {
        color: 'white',
        fontSize: 24,
        textAlign: 'center'
    },
    textStyle: {
        fontSize: 18,
        color: '#3581F0',
    },
    txtInputStyle: {
        height: 40,
        borderColor: 'white',
        borderBottomColor: '#3581F0',
        borderWidth: 2,
    }
});