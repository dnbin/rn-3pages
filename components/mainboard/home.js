import React, {Component} from 'react';
import { StyleSheet } from 'react-native';
import Font5Icon from 'react-native-vector-icons/FontAwesome5';
import EvilIcon from 'react-native-vector-icons/EvilIcons';
import {
    Text,
    Image,
    View,
    TouchableOpacity
} from 'react-native';
export default class HomeScreen extends Component {
    constructor(props) {
        super(props);
    }
    render(){
        const {navigate} = this.props.navigation;
        return (
            <View style={{flex: 1}}>
                <View style={{flex: 2, flexDirection: 'row', backgroundColor: 'white'}}>
                    <View style={{flex: 2, justifyContent: 'center', alignItems: 'center'}}>
                        <Image style={styles.avatarStyle} source={require('../../assets/imgs/avatar1.jpg')} />
                    </View>
                    <View style={{flex: 3, justifyContent: 'center', alignItems: 'flex-start'}}>
                        <Text style={styles.nameStyle}>{this.props.navigation.state.params.username}</Text>
                        <Text style={styles.emailStyle}>{this.props.navigation.state.params.useremail}</Text>
                    </View>
                    <View style={{flex: 2, justifyContent: 'center', alignItems: 'center'}}>
                        <EvilIcon name="bell" size={50} color="#3581F0" />
                    </View>
                </View>
                <View style={[styles.shadowStyle, {flex: 2.5, flexDirection: 'row', backgroundColor: 'white'}]}>
                    <View style={styles.avatarViewStyle}>
                        <Font5Icon name="comment-dollar" size={60} color="#3581F0" />
                        <Text style={{fontSize: 24, color: '#3581F0'}}>PAY</Text>
                    </View>
                    <View style={styles.avatarViewStyle}>
                        <Image style={styles.avatarStyle} source={require('../../assets/imgs/avatar2.jpg')} />
                        <Text style={styles.avatarNameStyle}>Alice</Text>
                    </View>
                    <View style={styles.avatarViewStyle}>
                        <Image style={styles.avatarStyle} source={require('../../assets/imgs/avatar3.jpg')} />
                        <Text style={styles.avatarNameStyle}>Tom</Text>
                    </View>
                    <View style={styles.avatarViewStyle}>
                        <Image style={styles.avatarStyle} source={require('../../assets/imgs/avatar4.jpg')} />
                        <Text style={styles.avatarNameStyle}>Arpit</Text>
                    </View>
                </View>
                <View style={[styles.shadowStyle, {flex: 1.5, flexDirection: 'row', backgroundColor: 'white', margin: 10}]}>
                    <View style={{flex: 2, justifyContent: 'center', alignItems: 'center'}}>
                        <Font5Icon name="comment-dollar" size={40} color="black" />
                    </View>
                    <View style={{flex: 5, justifyContent: 'center', alignItems: 'flex-start'}}>
                        <Text style={{fontSize: 24, fontWeight: 'bold'}}>Point Balance</Text>
                        <Text style={{fontSize: 20, color: '#BCBCBC'}}>Refer And Earn</Text>
                    </View>
                    <View style={{flex: 3, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                        <Text style={{fontSize: 24}}>231<Text style={{fontSize: 14}}>100</Text></Text>
                        <EvilIcon name="chevron-right" size={50} color="black" />
                    </View>
                </View>
                <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center'}}>
                    <Text style={{fontSize: 28, fontWeight: 'bold'}}>Accounts</Text>
                    <Text style={{color: '#3581F0', fontSize: 20}}>Connect Bank</Text>
                </View>
                <View style={[styles.shadowStyle, {flex: 4, margin: 10}]}>
                    <View style={{flex: 1, flexDirection: 'row', backgroundColor: 'white', borderBottomWidth: 1, borderBottomColor: 'gray'}}>
                        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                            <Image style={styles.imgIconStyle} source={require('../../assets/imgs/bank.png')} />
                        </View>
                        <View style={{flex: 4, justifyContent: 'center', alignItems: 'space-around'}}>
                            <Text style={{fontSize: 24, fontWeight: 'bold'}}>Bank of Ehihad</Text>
                        </View>
                        <View style={{flex: 3, justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={{fontSize: 24, fontWeight: 'bold'}}>12,300<Text style={{fontSize: 14}}>100</Text></Text>
                        </View>
                    </View>
                    <View style={{flex: 1, flexDirection: 'row', backgroundColor: 'white', borderBottomWidth: 1, borderBottomColor: 'gray'}}>
                        <View style={{flex: 3 }}>
                            <Text style={{fontSize: 24, fontWeight: 'bold'}}>Current Account</Text>
                            <Text style={{fontSize: 20, color: '#BCBCBC'}}>12345678</Text>
                        </View>
                        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={{fontSize: 24}}>231<Text style={{fontSize: 14}}>100</Text></Text>
                            <EvilIcon name="chevron-right" size={50} color="black" />
                        </View>
                    </View>
                    <View style={{flex: 1, flexDirection: 'row', backgroundColor: 'white'}}>
                        <View style={{flex: 3}}>
                            <Text style={{fontSize: 24, fontWeight: 'bold'}}>Savings Account</Text>
                            <Text style={{fontSize: 20, color: '#BCBCBC'}}>32864238</Text>
                        </View>
                        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={{fontSize: 24}}>500<Text style={{fontSize: 14}}>100</Text></Text>
                            <EvilIcon name="chevron-right" size={50} color="black" />
                        </View>
                    </View>
                </View>
                <View style={{flex: 1.5, flexDirection: 'row', margin: 10}}>
                    <TouchableOpacity style={[styles.shadowStyle, {flex: 1, flexDirection: 'row', backgroundColor: 'white',marginRight: 5}]}>
                        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                            <Image style={styles.imgIconStyle} source={require('../../assets/imgs/wallet.png')} />
                        </View>
                        <View style={{flex: 2, justifyContent: 'center', alignItems: 'flex-start'}}>
                            <Text style={{fontSize: 20, fontWeight: 'bold'}}>Wallet</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.shadowStyle, {flex: 1, flexDirection: 'row', backgroundColor: 'white',marginLeft: 5}]}>
                        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                            <Image style={styles.imgIconStyle} source={require('../../assets/imgs/bill_payment.png')} />
                        </View>
                        <View style={{flex: 2, justifyContent: 'center', alignItems: 'flex-start'}}>
                            <Text style={{fontSize: 20, fontWeight: 'bold'}}>Payment</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{flex: 1.5, flexDirection: 'row', margin: 10}}>
                    <TouchableOpacity style={[styles.shadowStyle, {flex: 1, flexDirection: 'row', backgroundColor: 'white', marginRight: 5}]}>
                        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                            <Image style={styles.imgIconStyle} source={require('../../assets/imgs/recharge.png')} />
                        </View>
                        <View style={{flex: 2, justifyContent: 'center', alignItems: 'flex-start'}}>
                            <Text style={{fontSize: 20, fontWeight: 'bold'}}>Recharge</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.shadowStyle, {flex: 1, flexDirection: 'row', backgroundColor: 'white', marginLeft: 5}]}>
                        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                            <Image style={styles.imgIconStyle} source={require('../../assets/imgs/wallet.png')} />
                        </View>
                        <View style={{flex: 2, justifyContent: 'center', alignItems: 'flex-start'}}>
                            <Text style={{fontSize: 20, fontWeight: 'bold'}}>Wallet</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    avatarStyle: {
        width: 60,
        height: 60,
        borderRadius: 30
    },
    nameStyle: {
        color: '#29272A',
        fontSize: 30,
        fontWeight: 'bold'
    },
    emailStyle: {
        color: '#3581F0',
        fontSize: 20
    },
    avatarNameStyle: {
        color: '#BCBCBC', 
        fontSize: 24
    },
    avatarViewStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    shadowStyle: {
        shadowColor: '#000',
        shadowOffset: {width: 3, height:3},
        shadowOpacity: 0.3,
        shadowRadius: 2,
    },
    imgIconStyle: {
        width: 40,
        height: 40
    }
});
