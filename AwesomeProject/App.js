import {FlatList, StyleSheet, View} from 'react-native';
import {useState} from "react";
import GoalItem from "./Components/GoalItem";
import GoalInput from "./Components/GoalInput";

export default function App() {
    const [courseGoal, setCourseGoal] = useState([]);

    function addGoalHandler(enteredGoalText) {
        console.log("Textk : ", enteredGoalText)
        setCourseGoal((currentCourseGoal) => [
            ...currentCourseGoal,
            {text: enteredGoalText, key: Math.random().toString()}
        ]);
    }

    function deleteGoalHandler(id) {
        console.log("Delete ", id)
        setCourseGoal((currentCourseGoal) => {
            return currentCourseGoal.filter(goal => goal.key !== id)
        })
    }

    return (<View style={styles.container}>
        <GoalInput onAddGoal={addGoalHandler}/>
        <View style={styles.goalsContainer}>
            <FlatList
                data={courseGoal}
                keyExtractor={(item) => {
                    return item.key
                }}
                renderItem={(item) => {
                    return (<GoalItem
                        text={item.item.text}
                        id={item.item.key}
                        onDeleteItem={deleteGoalHandler}
                    />)
                }}>
            </FlatList>
        </View>
    </View>);
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 24,
        paddingHorizontal: 16
    },
    goalsContainer: {
        flex: 5
    }
});
