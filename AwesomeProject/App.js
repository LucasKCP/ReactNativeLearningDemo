import {Button, FlatList, StyleSheet, TextInput, View} from 'react-native';
import {useState} from "react";
import GoalItem from "./Components/GoalItem";
import GoalInput from "./Components/GoalInput";

export default function App() {
    const [courseGoal, setCourseGoal] = useState([]);

    function addGoalHandler(enteredGoalText) {
        setCourseGoal(currentCourseGoal => [...currentCourseGoal,
            {text: enteredGoalText, key: Math.random().toString()}])
    }

    return (<View style={styles.container}>
        <GoalInput onAddGoal={addGoalHandler} />
        <View style={styles.goalsContainer}>
            <FlatList
                data={courseGoal}
                keyExtractor={(item) => {
                    return item.key
                }}
                renderItem={item => {
                    return <GoalItem text={item.item.text}/>
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
    }
});
