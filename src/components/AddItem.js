import { Text, Pressable, StyleSheet, TextInput, View } from "react-native";
import { useState } from 'react'

const AddItem = (props) => {

    const [ inputText, setInputText ] = useState('');

    const onChangeText = (text) => setInputText(text);

    const { onAddItem } = props;

    return (
        <View style={ styles.view }>
            <TextInput
                style={ styles.textInput }
                placeholder="Item de lista"
                onChangeText={ onChangeText }
                value={ inputText }
            ></TextInput>

            <Pressable 
                style={ [ styles.button, styles.buttonAdd ] }
                onPress={ () => {
                    onAddItem(inputText)
                    setInputText('');                    
                    } 
                } 
            >
                <Text style={styles.buttonText }>Agregar</Text>
            </Pressable>            
        </View>
    )
}

const styles = StyleSheet.create({
    view: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    textInput: {
        flex:10,
        borderBottomWidth: 1,
        borderBottomColor: 'black'
    },
    button: {
        borderRadius: 10,
        padding: 10,
        elevation: 2  
    },
    buttonAdd: {
        backgroundColor: "#000",
    },
    buttonText: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },   
})

export default AddItem;