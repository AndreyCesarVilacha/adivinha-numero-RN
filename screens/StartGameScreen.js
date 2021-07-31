import React from 'react';
import {View, StyleSheet, Text, TextInput, Button} from 'react-native';

import Card from '../components/Card';

const StartGameScreen = props =>{
    return(
        <View style={styles.screen}>
            <Text style={styles.title}>Comece um jogo novo!</Text>
            <Card style={styles.inputContainer}>
                <Text>Selecione um numero</Text>
                <TextInput />
                <View style={styles.buttonContainer}>
                    <Button title="Começar denovo" onPress={()=>{}}/>
                    <Button title="Confirmar"/>
                </View>
            </Card>
        </View>
    );
};

const styles =StyleSheet.create({
    screen:{
        flex:1,
        padding: 10,
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        marginVertical: 10,
    },
    inputContainer: {
        width: 400,
        maxWidth: '80%',
        alignItems: 'center',
        padding: 20,
        borderRadius: 10,
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
    },
});

export default StartGameScreen;