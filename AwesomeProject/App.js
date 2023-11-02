import {Button, FlatList, StyleSheet, Text, TextInput, View} from 'react-native';
import {useState} from "react";

export default function App() {
    const [enteredGoalText, setGoalText] = useState('');
    const [courseGoal, setCourseGoal] = useState([]);

    function goalInputHandler(inputText) {
        setGoalText(inputText)
    }

    function addGoalHandler() {
        setCourseGoal(currentCourseGoal => [...currentCourseGoal,
            {text: enteredGoalText, key: Math.random().toString()}])
    }

    return (<View style={styles.container}>
        <View style={styles.inputContainer}>
            <TextInput placeholder="Ur goal!!"
                       style={styles.textInput}
                       onChangeText={goalInputHandler}
            />
            <Button title="Add Goal now mdfk!!"
                    onPress={addGoalHandler}
            />
        </View>
        <View style={styles.goalsContainer}>
            <FlatList
                data={courseGoal}
                keyExtractor={(item) => {return item.key}}
                renderItem={item => {
                    return (<View style={styles.goalItem}>
                        <Text style={styles.goalText}>{item.item.text}</Text>
                    </View>)
                }}>
            </FlatList>
        </View>
    </View>);
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50,
        paddingHorizontal: 16
    },
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
    },
    goalsContainer: {
        flex: 5
    },
    goalItem: {
        margin: 8,
        padding: 8,
        borderRadius: 6,
        backgroundColor: '#5e0acc',
    },
    goalText: {
        color: '#cccccc'
    }
});
