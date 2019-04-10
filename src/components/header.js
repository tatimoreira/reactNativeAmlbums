import React, { Component } from 'react';
import { Text, View } from 'react-native';

const Header = (props) => {
    const { textStyle, viewSTtyle } = styles;
    return (
        <View style={viewSTtyle}>
            <Text style={textStyle}>{props.headerText}</Text>
        </View>
    );
};

const styles = {
    viewSTtyle:{
        backgroundColor: "#F8F8F8",
        justifyContent: 'center',
        alignItems: 'center',
        height: 85,
        paddingTop: 30,
        shadowColor: '#000',
        shadowOffset: {widht:0, height:2 },
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative'
    },
    textStyle: {
        fontSize: 20
    }
};

export default Header;