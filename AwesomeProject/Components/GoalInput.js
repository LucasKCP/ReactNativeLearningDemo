import {Button, StyleSheet, TextInput, View} from "react-native";
import {useState} from "react";

export function GoalInput(props) {
    const [enteredGoalText, setGoalText] = useState('');

    function goalInputHandler(inputText) {
        setGoalText(inputText)
    }

    function addGoalHandler() {
        props.onAddGoal(enteredGoalText);
        setGoalText('');
    }

    return (
        <View style={styles.inputContainer}>
            <TextInput placeholder="Ur goal!!"
                       style={styles.textInput}
                       onChangeText={goalInputHandler}
                       value={enteredGoalText}
            />
            <Button title="Add Goal!!"
                    onPress={addGoalHandler}
            />
        </View>
    );
}

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 24,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc'
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#cccccc',
        width: '70%',
        marginRight: 8,
        padding: 8
    }
});