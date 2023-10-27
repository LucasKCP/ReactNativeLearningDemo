import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import {useState} from "react";

export default function App() {
    const [enteredGoalText, setGoalText] = useState('');
    function goalInputHandler(inputText) {
        console.log(inputText);
        setGoalText(inputText)
    }
    function addGoalHandler() {
        console.log(enteredGoalText)
    }

    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput placeholder="Ur goal!!"
                           style={styles.textInput}
                           onChangeText={goalInputHandler}
                />
                <Button title="Add Goal now mdfk!!"
                        onPress={addGoalHandler}
                />
            </View>
            <View>
                <Text>Ur Fking goal</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 50,
    },
    inputContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    textInput: {
        borderWidth: 1,
        borderColor: 'black',
        width: '80%',
        marginRight: 8,
        padding: 8
    },
    goalsContainer: {
        flex: 3
    }
});
