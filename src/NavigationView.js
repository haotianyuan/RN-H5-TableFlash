import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

const styles = {
    $hide: {display: 'none'},

    container: {
        height: 60,
        backgroundColor: '#000',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'conter',
    },
    button: {

    },
    buttonTitle:{
        color: '#fff',
        fontSize: 20,
    }
}

const NavigationView = ({ onBackPress, onForwardPress, canGoBack, canGoForward }) => (
    <View style={[styles.container, !canGoBack && !canGoForward && styles.$hide]}>
        {canGoBack && (
            <TouchableOpacity style={styles.button} onPress={onBackPress}>
                <Text style={styles.buttonTitle}>Back</Text>
            </TouchableOpacity>
        )}
        {canGoForward && (
            <TouchableOpacity style={styles.button} onPress={onForwardPress}>
                <Text style={styles.buttonTitle}>Forward</Text>
            </TouchableOpacity>
        )}
    </View>
);

export default NavigationView;