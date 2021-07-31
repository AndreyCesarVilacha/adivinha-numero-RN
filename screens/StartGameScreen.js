import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const StartGameScreen = props =>{
    return(
        <View style={styles.screen}>
            <Text>A tela do jogo!</Text>
        </View>
    );
};

const styles =StyleSheet.create({
    screen:{
        flex:1,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'flex-start',
    }
});

export default StartGameScreen;