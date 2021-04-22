import React from 'react';
import {
    SafeAreaView,
    Text,
    View,
    Image,
    StyleSheet,
    TouchableOpacity,
    Dimensions
} from 'react-native';

import { Feather } from '@expo/vector-icons';

import waterImg from '../assets/watering.png';
import colors from '../styles/colors';
import fonts from '../styles/fonts'

export function Welcome() {

    return (
        <SafeAreaView style={sytles.container}>
            <View style={sytles.wrapper}>
                <Text style={sytles.title}>
                    Gerencie {'\n'}
                suas plantas de {'\n'}
                forma fácil
            </Text>

                <Image source={waterImg} style={sytles.image} resizeMode='contain' />

                <Text style={sytles.subtitle}>
                    Não esqueça mais de regar suas plantas. Nós cuidamos de lembrar você
                    sempre que precisar.
            </Text>

                <TouchableOpacity style={sytles.button}>

                    <Feather name='chevron-right' style={sytles.buttonIcon} />

                </TouchableOpacity>
            </View>

        </SafeAreaView>
    )
}

const sytles = StyleSheet.create({
    container: {
        flex: 1
    },
    wrapper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingHorizontal: 20
    },
    title: {
        fontSize: 28,
        textAlign: 'center',
        color: colors.heading,
        marginTop: 38,
        fontFamily: fonts.heading,
        lineHeight: 34
    },
    subtitle: {
        textAlign: 'center',
        fontSize: 18,
        paddingHorizontal: 20,
        color: colors.heading,
        fontFamily: fonts.text
    },
    button: {
        backgroundColor: colors.green,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16,
        marginBottom: 10,
        height: 56,
        width: 56
    },
    buttonIcon: {
        fontSize: 24,
        color: colors.white
    },
    image: {
        height: Dimensions.get('window').width * 0.7
    }
});